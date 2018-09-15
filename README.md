# Mondrianify

**Create images from web pages in a Mondrian-like style**

## About

Inspired by the work of [Piet Mondrian](https://en.wikipedia.org/wiki/Piet_Mondrian), mondrianify allows you to create a Mondrian-like image from a webpage, straight from a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet).

Create a new bookmark using the following as the url (triple click to select all):

```
javascript:%22use%20strict%22%3B(function()%7Bfunction%20a(a)%7Bif(%22string%22!%3Dtypeof%20a%7C%7C!i.test(a))return%7Br%3A0%2Cg%3A0%2Cb%3A0%2Ca%3A0%7D%3Bconst%20b%3Di.exec(a)%3Breturn%7Br%3AparseFloat(b%5B1%5D)%2Cg%3AparseFloat(b%5B2%5D)%2Cb%3AparseFloat(b%5B3%5D)%2Ca%3Atypeof%20b%5B3%5D%3D%3D%3Dvoid%200%3F1%3AparseFloat(b%5B3%5D)%7D%7Dfunction%20b(b)%7Breturn%200%3D%3D%3Da(b).a%7Dfunction%20c(a)%7Bconst%20b%3Da%255%3Breturn%20a-b%2B5*h(b%2F5)%7Dfunction%20d(a)%7Bconst%20b%3Ddocument.createElement(%22canvas%22)%3Bb.width%3D100%2Cb.height%3D100*a.height%2Fa.width%3Bconst%20d%3Db.getContext(%222d%22)%3Bd.drawImage(a%2C0%2C0%2Cb.width%2Cb.height)%3Bconst%20e%3D%7B%7D%3Bfor(let%20f%3D0%3Bf%3Cb.width%3Bf%2B%3D1)for(let%20i%3D0%3Bi%3Cb.height%3Bi%2B%3D1)%7Bconst%20j%3Dd.getImageData(f%2Ci%2C1%2C1).data%2Ck%3Dc(j%5B0%5D)%2Cl%3Dc(j%5B1%5D)%2Cg%3Dc(j%5B2%5D)%2Cb%3Dh(10*(j%5B3%5D%2F255))%2F10%2Ca%3D%60rgba(%24%7Bk%7D%2C%24%7Bl%7D%2C%24%7Bg%7D%2C%24%7Bb%7D)%60%3Ba%20in%20e%3F%2B%2Be%5Ba%5D%3Ae%5Ba%5D%3D1%7Dreturn%20e%7Dfunction%20e(a)%7Bconst%20b%3Dd(a)%2Cc%3DObject.keys(b)%3Bif(!c.length)throw%20new%20Error(%22No%20valid%20colors%22)%3Blet%20e%3Breturn%20c.forEach(a%3D%3E%7B(%22undefined%22%3D%3Dtypeof%20e%7C%7Cb%5Ba%5D%3Eb%5Be%5D)%26%26(e%3Da)%7D)%2Ce%7Dfunction%20f(a)%7Bconst%5Bb%5D%3Da%2Cc%3Ddocument.createElement(%22canvas%22)%3Bc.style%3D%22position%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bz-index%3A1000000%3B%22%2Cc.width%3Db.rect.width%2Cc.height%3Db.rect.height%2Cdocument.body.appendChild(c)%3Bconst%20d%3Dc.getContext(%222d%22)%3Ba.forEach(a%3D%3E%7Ba.visible%26%26(d.globalAlpha%3Da.type%3D%3D%3Dg.BODY%3F1%3A.5*a.opacity%2Cd.fillStyle%3Da.fill%2Cd.fillRect(a.rect.x%2Ca.rect.y%2Ca.rect.width%2Ca.rect.height))%7D)%7Dvar%20h%3DMath.round%3Bconst%20g%3D%7BELEMENT%3A%22ELEMENT%22%2CBODY%3A%22BODY%22%2CTEXT%3A%22TEXT%22%2CCOMMENT%3A%22COMMENT%22%2CIMAGE%3A%22IMAGE%22%7D%2Ci%3D%2Frgba%3F%5C((%5Cd%2B)%2C%5Cs*(%5Cd%2B)%2C%5Cs*(%5Cd%2B)(%3F%3A%2C%5Cs*((%3F%3A%5Cd*%5C.)%3F%5Cd%2B))%3F%5C)%2F%3Bwindow.scrollTo(0%2C0)%2Cfunction()%7Bfunction%20a(d%2Cf%3D%7B%7D)%7Bfunction%20h()%7Bconst%20a%3DgetComputedStyle(d)%2Cb%3Da.getPropertyValue(%22color%22)%2Cc%3Da.getPropertyValue(%22background-color%22)%2Ce%3Da.getPropertyValue(%22border-color%22)%2Cf%3Da.getPropertyValue(%22border-width%22)%2Cg%3Da.getPropertyValue(%22opacity%22)%2Ch%3Da.getPropertyValue(%22visibility%22)%2Ci%3Da.getPropertyValue(%22display%22)%2Cs%3Da.getPropertyValue(%22overflow%22)%2Cu%3D0%3Ct%26%26%22none%22!%3D%3Dp%26%26(0%3Cj.width%26%260%3Cj.height%7C%7C%22hidden%22!%3D%3Dq)%3Bk%3D%22undefined%22%3D%3Dtypeof%20b%3Fk%3Ab%2Cl%3D%22undefined%22%3D%3Dtypeof%20c%3Fl%3Ac%2Cm%3D%22undefined%22%3D%3Dtypeof%20e%3Fm%3Ae%2Cn%3D%22undefined%22%3D%3Dtypeof%20f%3Fn%3Af%2Ct%3D%22undefined%22%3D%3Dtypeof%20g%3Ft%3AparseFloat(g)%2Co%3D%22undefined%22%3D%3Dtypeof%20h%3F%22visible%22%3Ah%2Cp%3D%22undefined%22%3D%3Dtypeof%20i%3Fp%3Ai%2Cq%3D%22undefined%22%3D%3Dtypeof%20s%3F%22auto%22%3As%2Cr%3Du%26%260%3Ct%26%26%22none%22!%3D%3Dp%26%260%3Cj.width%26%260%3Cj.height%26%26%22hidden%22!%3D%3Do%7Dlet%20i%3Dg.ELEMENT%2C%7Brect%3Aj%2Ccolor%3Ak%2CbackgroundColor%3Al%2CborderColor%3Am%2CborderWidth%3An%2Copacity%3At%3D1%2Cvisibility%3Ao%2Cdisplay%3Ap%2Coverflow%3Aq%2Cvisible%3Ar%2Cfill%3As%7D%3Df%3Bswitch(d.constructor)%7Bcase%20HTMLBodyElement.prototype.constructor%3Aj%3D%7Bx%3A0%2Cy%3A0%2Ctop%3A0%2Cbottom%3Adocument.documentElement.scrollHeight%2Cleft%3A0%2Cright%3Adocument.documentElement.scrollWidth%2Cwidth%3Adocument.documentElement.scrollWidth%2Cheight%3Adocument.documentElement.scrollHeight%7D%2Ch()%2Cb(l)%26%26(l%3D%22rgb(255%2C%20255%2C%20255)%22)%2Ci%3Dg.BODY%2Cs%3Dl%3Bbreak%3Bcase%20Text.prototype.constructor%3Aconst%20a%3Ddocument.createRange()%3Ba.selectNodeContents(d)%2Cj%3Da.getBoundingClientRect()%2Ci%3Dg.TEXT%2Cs%3Dk%3Bbreak%3Bcase%20Comment.prototype.constructor%3Aj%3D%7Bx%3A0%2Cy%3A0%2Ctop%3A0%2Cleft%3A0%2Cright%3A0%2Cbottom%3A0%2Cwidth%3A0%2Cheight%3A0%7D%2Ci%3Dg.COMMENT%3Bbreak%3Bcase%20HTMLImageElement.prototype.constructor%3Aj%3Dd.getBoundingClientRect()%2Ch()%3Btry%7Bs%3De(d)%7Dcatch(a)%7Bconsole.log(%60Count%20not%20get%20prominent%20color%20for%20image%3A%20%24%7Bd.src%7D%60)%2Cconsole.error(a)%2Cs%3Dl%7Di%3Dg.IMAGE%3Bbreak%3Bdefault%3Aj%3Dd.getBoundingClientRect()%2Ch()%2Cs%3Dl%3B%7Dconst%20u%3D%7Btype%3Ai%2Cnode%3Ad%2Crect%3Aj%2Ccolor%3Ak%2CbackgroundColor%3Al%2CborderColor%3Am%2CborderWidth%3An%2Copacity%3At%2Cvisibility%3Ao%2Cdisplay%3Ap%2Coverflow%3Aq%2Cvisible%3Ar%2Cfill%3As%7D%3Bc.push(u)%2Cd.type!%3D%3Dg.TEXT%26%26d.childNodes.forEach(b%3D%3E%7Ba(b%2Cu)%7D)%7Dconst%20c%3D%5B%5D%3Ba(document.body)%2Cf(c)%2Cconsole.log(%22Mondrianify%20nodes%22%2Cc)%7D()%7D)()%3B%0A
```

Go to any website, and click on the bookmarklet!

Once you've got your mondrianified image you can simply right click on it and save it as an image, if you wish.

## Browser support

Currently only supports the latest few versions of Chrome, but may work in other browsers.
