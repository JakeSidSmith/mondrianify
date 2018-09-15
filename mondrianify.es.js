/* global HTMLBodyElement, Text, Comment, HTMLImageElement */

(function () {

  const TYPES = {
    ELEMENT: 'ELEMENT',
    BODY: 'BODY',
    TEXT: 'TEXT',
    COMMENT: 'COMMENT',
    IMAGE: 'IMAGE'
  };

  const MATCHES_RGBA = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*((?:\d*\.)?\d+))?\)/;

  function extractRGBA (color) {
    if (typeof color !== 'string' || !MATCHES_RGBA.test(color)) {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      };
    }

    const result = MATCHES_RGBA.exec(color);

    return {
      r: parseFloat(result[1]),
      g: parseFloat(result[2]),
      b: parseFloat(result[3]),
      a: typeof result[3] === undefined ? 1 : parseFloat(result[3])
    };
  }

  function isTransparent (color) {
    return extractRGBA(color).a === 0;
  }

  function roundColorPart (value) {
    const mod = value % 5;
    return value - mod + Math.round(mod / 5) * 5;
  }

  function getColorCounts (img) {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100 * img.height / img.width;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const colorCounts = {};

    for (let x = 0; x < canvas.width; x += 1) {
      for (let y = 0; y < canvas.height; y += 1) {
        const data = ctx.getImageData(x, y, 1, 1).data;

        const r = roundColorPart(data[0]);
        const g = roundColorPart(data[1]);
        const b = roundColorPart(data[2]);
        const a = Math.round(data[3] / 255 * 10) / 10;

        const rounded = `rgba(${r},${g},${b},${a})`;

        if (rounded in colorCounts) {
          colorCounts[rounded] = colorCounts[rounded] + 1;
        } else {
          colorCounts[rounded] = 1;
        }
      }
    }

    return colorCounts;
  }

  function getProminentColor (img) {
    const colorCounts = getColorCounts(img);
    const colors = Object.keys(colorCounts);

    if (!colors.length) {
      throw new Error('No valid colors');
    }

    let prominentColor;

    colors.forEach((color) => {
      if (typeof prominentColor === 'undefined' || colorCounts[color] > colorCounts[prominentColor]) {
        prominentColor = color;
      }
    });

    return prominentColor;
  }

  function drawNodes (nodeData) {
    const [body] = nodeData;
    const canvas = document.createElement('canvas');
    canvas.style = 'position:absolute;top:0;left:0;z-index:1000000;';
    canvas.width = body.rect.width;
    canvas.height = body.rect.height;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    nodeData.forEach((node) => {
      if (node.visible) {
        if (node.type === TYPES.BODY) {
          ctx.globalAlpha = 1;
        } else {
          ctx.globalAlpha = 0.5 * node.opacity;
        }

        ctx.fillStyle = node.fill;
        ctx.fillRect(node.rect.x, node.rect.y, node.rect.width, node.rect.height);
      }
    });
  }

  function collectNodeData () {
    const nodeData = [];

    function collectData (node, parentData = {}) {
      let type = TYPES.ELEMENT;
      let {
        rect,
        color,
        backgroundColor,
        borderColor,
        borderWidth,
        opacity = 1,
        visibility,
        display,
        overflow,
        visible,
        fill
      } = parentData;

      function getElementStyles () {
        const style = getComputedStyle(node);

        const thisColor = style.getPropertyValue('color');
        const thisBackgroundColor = style.getPropertyValue('background-color');
        const thisBorderColor = style.getPropertyValue('border-color');
        const thisBorderWidth = style.getPropertyValue('border-width');
        const thisOpacity = style.getPropertyValue('opacity');
        const thisVisibility = style.getPropertyValue('visibility');
        const thisDisplay = style.getPropertyValue('display');
        const thisOverflow = style.getPropertyValue('overflow');

        const possiblyVisible = opacity > 0 &&
          display !== 'none' &&
          (
            (rect.width > 0 && rect.height > 0) ||
            overflow !== 'hidden'
          );

        color = typeof thisColor === 'undefined' ? color : thisColor;
        backgroundColor = typeof thisBackgroundColor === 'undefined' ? backgroundColor : thisBackgroundColor;
        borderColor = typeof thisBorderColor === 'undefined' ? borderColor : thisBorderColor;
        borderWidth = typeof thisBorderWidth === 'undefined' ? borderWidth : thisBorderWidth;
        opacity = typeof thisOpacity === 'undefined' ? opacity : parseFloat(thisOpacity);
        visibility = typeof thisVisibility === 'undefined' ? 'visible' : thisVisibility;
        display = typeof thisDisplay === 'undefined' ? display : thisDisplay;
        overflow = typeof thisOverflow === 'undefined' ? 'auto' : thisOverflow;

        visible = possiblyVisible &&
          opacity > 0 &&
          display !== 'none' &&
          rect.width > 0 &&
          rect.height > 0 &&
          visibility !== 'hidden';
      }

      switch (node.constructor) {
        case HTMLBodyElement.prototype.constructor:
          rect = {
            x: 0,
            y: 0,
            top: 0,
            bottom: document.documentElement.scrollHeight,
            left: 0,
            right: document.documentElement.scrollWidth,
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
          };
          getElementStyles();

          if (isTransparent(backgroundColor)) {
            backgroundColor = 'rgb(255, 255, 255)';
          }

          type = TYPES.BODY;
          fill = backgroundColor;
          break;
        case Text.prototype.constructor:
          const range = document.createRange();
          range.selectNodeContents(node);
          rect = range.getBoundingClientRect();
          type = TYPES.TEXT;
          fill = color;
          break;
        case Comment.prototype.constructor:
          rect = {
            x: 0,
            y: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
          };
          type = TYPES.COMMENT;
          break;
        case HTMLImageElement.prototype.constructor:
          rect = node.getBoundingClientRect();
          getElementStyles();

          try {
            fill = getProminentColor(node);
          } catch (error) {
            console.log(`Count not get prominent color for image: ${node.src}`);
            console.error(error);
            fill = backgroundColor;
          }

          type = TYPES.IMAGE;
          break;
        default:
          rect = node.getBoundingClientRect();
          getElementStyles();
          fill = backgroundColor;
          break;
      }

      const newNodeData = {
        type,
        node,
        rect,
        color,
        backgroundColor,
        borderColor,
        borderWidth,
        opacity,
        visibility,
        display,
        overflow,
        visible,
        fill
      };

      nodeData.push(newNodeData);

      if (node.type !== TYPES.TEXT) {
        node.childNodes.forEach((child) => {
          collectData(child, newNodeData);
        });
      }
    }

    collectData(document.body);
    drawNodes(nodeData);
    console.log('Mondrianify nodes', nodeData);
  }

  window.scrollTo(0, 0);

  collectNodeData();

})();
