# Mondrianify

**Create images from web pages in a Mondrian-like style**

## About

Inspired by the work of [Piet Mondrian](https://en.wikipedia.org/wiki/Piet_Mondrian), mondrianify allows you to create a Mondrian-like image from a webpage, straight from a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet).

Create a new bookmark using the following as the url (triple click to select all):

```
javascript:%22use%20strict%22%3B(function()%7Bfunction%20a(a)%7Bif(%22string%22!%3Dtypeof%20a%7C%7C!e.test(a))return%7Br%3A0%2Cg%3A0%2Cb%3A0%2Ca%3A0%7D%3Bconst%20b%3De.exec(a)%3Breturn%7Br%3AparseFloat(b%5B1%5D)%2Cg%3AparseFloat(b%5B2%5D)%2Cb%3AparseFloat(b%5B3%5D)%2Ca%3Atypeof%20b%5B3%5D%3D%3D%3Dvoid%200%3F1%3AparseFloat(b%5B3%5D)%7D%7Dfunction%20b(b)%7Breturn%200%3D%3D%3Da(b).a%7Dfunction%20c(a)%7Bconst%5Bb%5D%3Da%2Cc%3Ddocument.createElement(%22canvas%22)%3Bc.style%3D%22position%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bz-index%3A1000000%3B%22%2Cc.width%3Db.rect.width%2Cc.height%3Db.rect.height%2Cdocument.body.appendChild(c)%3Bconst%20e%3Dc.getContext(%222d%22)%3Ba.forEach(a%3D%3E%7Ba.visible%26%26(e.globalAlpha%3Da.type%3D%3D%3Dd.BODY%3F1%3A.5*a.opacity%2Ce.fillStyle%3Da.fill%2Ce.fillRect(a.rect.x%2Ca.rect.y%2Ca.rect.width%2Ca.rect.height))%7D)%7Dconst%20d%3D%7BELEMENT%3A%22ELEMENT%22%2CBODY%3A%22BODY%22%2CTEXT%3A%22TEXT%22%2CCOMMENT%3A%22COMMENT%22%7D%2Ce%3D%2Frgba%3F%5C((%5Cd%2B)%2C%5Cs*(%5Cd%2B)%2C%5Cs*(%5Cd%2B)(%3F%3A%2C%5Cs*((%3F%3A%5Cd*%5C.)%3F%5Cd%2B))%3F%5C)%2F%3Bwindow.scrollTo(0%2C0)%2Cfunction()%7Bfunction%20a(c%2Cf%3D%7B%7D)%7Bfunction%20g()%7Bconst%20a%3DgetComputedStyle(c)%2Cb%3Da.getPropertyValue(%22color%22)%2Cd%3Da.getPropertyValue(%22background-color%22)%2Ce%3Da.getPropertyValue(%22border-color%22)%2Cf%3Da.getPropertyValue(%22border-width%22)%2Cg%3Da.getPropertyValue(%22opacity%22)%2Ch%3Da.getPropertyValue(%22visibility%22)%2Ci%3Da.getPropertyValue(%22display%22)%3Bj%3D%22undefined%22%3D%3Dtypeof%20b%3Fj%3Ab%2Ck%3D%22undefined%22%3D%3Dtypeof%20d%3Fk%3Ad%2Cl%3D%22undefined%22%3D%3Dtypeof%20e%3Fl%3Ae%2Cm%3D%22undefined%22%3D%3Dtypeof%20f%3Fm%3Af%2Cr%3D%22undefined%22%3D%3Dtypeof%20g%3Fr%3AparseFloat(g)%2Cn%3D%22undefined%22%3D%3Dtypeof%20h%3Fn%3Ah%2Co%3D%22undefined%22%3D%3Dtypeof%20i%3Fo%3Ai%7Dlet%20h%3Dd.ELEMENT%2C%7Brect%3Ai%2Ccolor%3Aj%2CbackgroundColor%3Ak%2CborderColor%3Al%2CborderWidth%3Am%2Copacity%3Ar%3D1%2Cvisibility%3An%2Cdisplay%3Ao%2Cvisible%3Ap%2Cfill%3Aq%7D%3Df%3Bswitch(c.constructor)%7Bcase%20HTMLBodyElement.prototype.constructor%3Ai%3D%7Bx%3A0%2Cy%3A0%2Ctop%3A0%2Cbottom%3Adocument.documentElement.scrollHeight%2Cleft%3A0%2Cright%3Adocument.documentElement.scrollWidth%2Cwidth%3Adocument.documentElement.scrollWidth%2Cheight%3Adocument.documentElement.scrollHeight%7D%2Cg()%2Cb(k)%26%26(k%3D%22rgb(255%2C%20255%2C%20255)%22)%2Ch%3Dd.BODY%2Cq%3Dk%3Bbreak%3Bcase%20Text.prototype.constructor%3Aconst%20a%3Ddocument.createRange()%3Ba.selectNodeContents(c)%2Ci%3Da.getBoundingClientRect()%2Ch%3Dd.TEXT%2Cq%3Dj%3Bbreak%3Bcase%20Comment.prototype.constructor%3Ai%3D%7Bx%3A0%2Cy%3A0%2Ctop%3A0%2Cleft%3A0%2Cright%3A0%2Cbottom%3A0%2Cwidth%3A0%2Cheight%3A0%7D%2Ch%3Dd.COMMENT%3Bbreak%3Bdefault%3Atry%7Bi%3Dc.getBoundingClientRect()%7Dcatch(a)%7Bconsole.error(a)%2Cconsole.info(c.__proto__)%7Dg()%2Cq%3Dk%3B%7Dconst%20s%3D%7Btype%3Ah%2Cnode%3Ac%2Crect%3Ai%2Ccolor%3Aj%2CbackgroundColor%3Ak%2CborderColor%3Al%2CborderWidth%3Am%2Copacity%3Ar%2Cvisibility%3An%2Cdisplay%3Ao%2Cvisible%3A!1!%3D%3Dp%26%260%3Cr%26%26%22hidden%22!%3D%3Dn%26%26%22none%22!%3D%3Do%26%260%3Ci.width%26%260%3Ci.height%2Cfill%3Aq%7D%3Be.push(s)%2Cc.type!%3D%3Dd.TEXT%26%26c.childNodes.forEach(b%3D%3E%7Ba(b%2Cs)%7D)%7Dconst%20e%3D%5B%5D%3Ba(document.body)%2Cc(e)%2Cconsole.log(%22Mondrianify%20nodes%22%2Ce)%7D()%7D)()%3B%0A
```

Go to any website, and click on the bookmarklet!

Once you've got your mondrianified image you can simply right click on it and save it as an image, if you wish.

## Browser support

Currently only supports the latest few versions of Chrome, but may work in other browsers.
