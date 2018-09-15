/* global HTMLBodyElement, Text, Comment */

(function () {

  const TYPES = {
    ELEMENT: 'ELEMENT',
    BODY: 'BODY',
    TEXT: 'TEXT',
    COMMENT: 'COMMENT'
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

  function drawNodes (nodeData) {
    const [body] = nodeData;
    const canvas = document.createElement('canvas');
    canvas.style = 'position:absolute;top:0;left:0;z-index:1000000;';
    canvas.width = body.rect.width;
    canvas.height = body.rect.height;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    nodeData.forEach((node) => {
      if (node.type === TYPES.BODY) {
        ctx.globalAlpha = 1;
      } else {
        ctx.globalAlpha = 0.5;
      }

      ctx.fillStyle = node.fill;
      ctx.fillRect(node.rect.x, node.rect.y, node.rect.width, node.rect.height);
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
        fill
      } = parentData;

      function getElementStyles () {
        const style = getComputedStyle(node);

        const thisColor = style.getPropertyValue('color');
        const thisBackgroundColor = style.getPropertyValue('background-color');
        const thisBorderColor = style.getPropertyValue('border-color');
        const thisBorderWidth = style.getPropertyValue('border-width');

        color = typeof thisColor === 'undefined' ? color : thisColor;
        backgroundColor = typeof thisBackgroundColor === 'undefined' ? backgroundColor : thisBackgroundColor;
        borderColor = typeof thisBorderColor === 'undefined' ? borderColor : thisBorderColor;
        borderWidth = typeof thisBorderWidth === 'undefined' ? borderWidth : thisBorderWidth;
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
        default:
          try {
            rect = node.getBoundingClientRect();
          } catch (e) {
            console.error(e);
            console.info(node.__proto__);
          }
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
