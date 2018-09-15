"use strict";(function(){function a(a){if("string"!=typeof a||!i.test(a))return{r:0,g:0,b:0,a:0};const b=i.exec(a);return{r:parseFloat(b[1]),g:parseFloat(b[2]),b:parseFloat(b[3]),a:typeof b[3]===void 0?1:parseFloat(b[3])}}function b(b){return 0===a(b).a}function c(a){const b=a%5;return a-b+5*h(b/5)}function d(a){const b=document.createElement("canvas");b.width=100,b.height=100*a.height/a.width;const d=b.getContext("2d");d.drawImage(a,0,0,b.width,b.height);const e={};for(let f=0;f<b.width;f+=1)for(let a=0;a<b.height;a+=1){const i=d.getImageData(f,a,1,1).data;if(0<i[3]){const d=c(i[0]),f=c(i[1]),g=c(i[2]),b=h(10*(i[3]/255))/10,a=`rgba(${d},${f},${g},${b})`;a in e?++e[a]:e[a]=1}}return e}function e(a){const b=d(a),c=Object.keys(b);if(!c.length)throw new Error("No valid colors");let e;return c.forEach(a=>{("undefined"==typeof e||b[a]>b[e])&&(e=a)}),e}function f(a){const[b]=a,c=document.createElement("canvas");c.style="position:absolute;top:0;left:0;z-index:1000000;",c.width=b.rect.width,c.height=b.rect.height,document.body.appendChild(c);const d=c.getContext("2d");a.forEach(a=>{a.visible&&(d.globalAlpha=a.type===g.BODY?1:.5*a.opacity,d.fillStyle=a.fill,d.fillRect(a.rect.x,a.rect.y,a.rect.width,a.rect.height))})}var h=Math.round;const g={ELEMENT:"ELEMENT",BODY:"BODY",TEXT:"TEXT",COMMENT:"COMMENT",IMAGE:"IMAGE"},i=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*((?:\d*\.)?\d+))?\)/;window.scrollTo(0,0),function(){function a(d,f={}){function h(){const a=getComputedStyle(d),b=a.getPropertyValue("color"),c=a.getPropertyValue("background-color"),e=a.getPropertyValue("border-color"),f=a.getPropertyValue("border-width"),g=a.getPropertyValue("opacity"),h=a.getPropertyValue("visibility"),i=a.getPropertyValue("display"),s=a.getPropertyValue("overflow"),u=0<t&&"none"!==p&&(0<j.width&&0<j.height||"hidden"!==q);k="undefined"==typeof b?k:b,l="undefined"==typeof c?l:c,m="undefined"==typeof e?m:e,n="undefined"==typeof f?n:f,t="undefined"==typeof g?t:parseFloat(g),o="undefined"==typeof h?"visible":h,p="undefined"==typeof i?p:i,q="undefined"==typeof s?"auto":s,r=u&&0<t&&"none"!==p&&0<j.width&&0<j.height&&"hidden"!==o}let i=g.ELEMENT,{rect:j,color:k,backgroundColor:l,borderColor:m,borderWidth:n,opacity:t=1,visibility:o,display:p,overflow:q,visible:r,fill:s}=f;switch(d.constructor){case HTMLBodyElement.prototype.constructor:j={x:0,y:0,top:0,bottom:document.documentElement.scrollHeight,left:0,right:document.documentElement.scrollWidth,width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight},h(),b(l)&&(l="rgb(255, 255, 255)"),i=g.BODY,s=l;break;case Text.prototype.constructor:const a=document.createRange();a.selectNodeContents(d),j=a.getBoundingClientRect(),i=g.TEXT,s=k;break;case Comment.prototype.constructor:j={x:0,y:0,top:0,left:0,right:0,bottom:0,width:0,height:0},i=g.COMMENT;break;case HTMLImageElement.prototype.constructor:j=d.getBoundingClientRect(),h();try{s=e(d)}catch(a){console.log(`Count not get prominent color for image: ${d.src}`),console.error(a),s=l}i=g.IMAGE;break;default:j=d.getBoundingClientRect(),h(),s=l;}const u={type:i,node:d,rect:j,color:k,backgroundColor:l,borderColor:m,borderWidth:n,opacity:t,visibility:o,display:p,overflow:q,visible:r,fill:s};c.push(u),d.type!==g.TEXT&&d.childNodes.forEach(b=>{a(b,u)})}const c=[];a(document.body),f(c),console.log("Mondrianify nodes",c)}()})();
