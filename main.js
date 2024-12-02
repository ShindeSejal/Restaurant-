(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(122),t.b),l=i()(r()),p=s()(d);l.push([e.id,"*{\n    box-sizing: border-box;\n}\n\nbody{\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    background-image: url("+p+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n}\n\n/*Home page*/\n.nav{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 20px;\n}\n\n.nav ul{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 30px;\n    font-size: 1.2rem;\n    color: orangered;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.nav ul>li{\n    list-style-type: none;\n}\n\n.nav ul>li:hover{\n    cursor: pointer;\n    color: rgb(192, 53, 3);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n}\n\n.pageContent{\n    height: 90vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.motto, .image{\n    height: 100%;\n    width: calc(100vw/2);\n}\n\n.motto {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    padding: 30px;\n}\n\n.motto-text-container{\n    background-color: rgba(0,0,0, 0.7);\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.motto-text-container > .title{\n    color: orangered;\n    font-size: 3rem;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 900;\n    margin: 0;\n}\n\n.motto-text-container > .text{\n    color: white;\n    font-size: 1.3rem;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#start{\n    background-color: black;\n    border: 2px solid orangered;\n    color: orangered;\n    width: 200px;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 10px;\n    height: 50px;\n}\n\n#start:hover{\n    background-color: orangered;\n    color: black;\n    border: 2px solid black;\n    cursor: pointer;\n}\n\n.image{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.image img{\n    height: 70%;\n    width: 80%;\n    border: 2px solid orangered;\n    border-radius: 10px;\n}\n\n\n/*Menu page*/\n.menu-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n.menu-title{\n    color: orangered;\n    font-size: 3rem;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n}\n\n.food-card-container{\n    display: grid;\n    width: 70%;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n\n.food-card{\n    display: flex;\n    flex-direction: column;\n    border: 1px solid orangered;\n    background-color: rgba(0,0,0, 0.9);\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.food-card img{\n    width: 300px;\n    height: 200px;\n    border-radius: 10px;\n}\n\n.food-name{\n    text-align: center;\n    color: orangered;\n    font-size: 1.5rem;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.description{\n    color: white;\n    font-size: 1.3rem;\n}\n\n.price{\n    color: orange;\n    font-size: 1.3rem;\n}\n\n/*About us page*/\n.aboutus-container{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 70vh;\n    width: 70%;\n    border: 1px solid white;\n    margin: auto;\n    background-color: rgba(0,0,0, 0.8);\n    gap: 30px;\n    position: relative;\n    top: 100px;\n    border-radius: 10px;\n}\n\n.about-title{\n    font-size: 3rem;\n    color: orangered;\n    font-weight: bold;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.about-text{\n    color: white;\n    width: 50%;\n    font-size: 1.5rem;\n}\n.about-text::selection{\n    color: orangered;\n    background-color: white;\n}\n\n.acc{\n    color: orangered;\n    font-size: 1.3rem;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},122:(e,n,t)=>{e.exports=t.p+"images/ed8085ea50c626cc05df.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"images/1e5aa3c7c526b4bbc804.jpg",g=function(){const e=document.createElement("div");e.classList.add("pageContent");const n=document.createElement("div");n.classList.add("motto");const t=document.createElement("div");t.classList.add("motto-text-container");const o=document.createElement("p");o.classList.add("title"),o.textContent="Example restaurant";const r=document.createElement("p");r.classList.add("text"),r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis ullamcorper nulla, nec dapibus justo mollis in. Nunc porttitor, sem suscipit condimentum vehicula, velit eros semper lacus, non cursus sapien erat sed justo. Nulla ultrices magna id mauris sagittis bibendum.";const a=document.createElement("div");a.classList.add("button");const i=document.createElement("button");i.setAttribute("id","start"),i.textContent="Get Started",a.appendChild(i),t.appendChild(o),t.appendChild(r),t.appendChild(a),n.appendChild(t);const c=document.createElement("div");c.classList.add("image");const s=document.createElement("img");return s.src=h,c.appendChild(s),e.appendChild(n),e.appendChild(c),e},v=t.p+"images/1c5ec5fcb994f0a78586.jpg",b=t.p+"images/fc1950cabd3c5d2fb8b0.jpg",x=t.p+"images/e39647aed2fa2fd26ca5.jpg",y=t.p+"images/a992c4b448a0a6240bf8.jpg",C=t.p+"images/59205b057b425e3c5a2a.jpg",w=t.p+"images/34e2f92b9ed839f95eb5.jpg";function E(e,n,t){for(let i=0;i<1;i++){const i=document.createElement("div");n.appendChild(i),i.classList.add("menu-title"),i.textContent=e;var o=document.createElement("div");if(o.classList.add("food-card-container"),"Pizza"==e)var r=3,a=t.length;else r=0,a=t.length-3;for(let e=r;e<a;e++){const n=document.createElement("div");n.classList.add("food-card");const r=document.createElement("div");r.classList.add("picture");const a=document.createElement("img");a.src=t[e].img,r.appendChild(a);const i=document.createElement("div");i.classList.add("description");const c=document.createElement("div");c.classList.add("food-name"),c.textContent=t[e].foodname;const s=document.createElement("div");s.classList.add("description"),s.textContent=t[e].description,i.appendChild(c),i.appendChild(s);const d=document.createElement("div");d.classList.add("price"),d.textContent=t[e].price,n.appendChild(r),n.appendChild(i),n.appendChild(d),o.appendChild(n)}}return o}const z=document.querySelector("#content");z.appendChild(function(){const e=document.createElement("div");e.classList.add("nav");const n=document.createElement("ul"),t=document.createElement("li");t.textContent="Home";const o=document.createElement("li");o.textContent="Menu";const r=document.createElement("li");return r.textContent="Contact",n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n),e}()),z.appendChild(g()),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{"Home"===e.target.textContent&&(z.removeChild(z.lastChild),z.appendChild(g())),"Menu"===e.target.textContent&&(z.removeChild(z.lastChild),z.appendChild(function(){const e=function(){const e=[],n=[v,b,x,C,y,w],t=["Bacon Burger","Tasty Burger","Cheese Burger","Pepperoni Pizza","Pizza Mozarella","Pizza Tomato"],o=["Tasty burger with tasty bacon","Tasty and fresh burger","Tasty burger with cheese","Tasty pizza with pepperoni","Tasty pizza with mozarella","Tasty pizza with tomato"],r=["5$","10$","5$","20$","25$","20$"],a=(e,n,t,o)=>({img:e,foodname:n,description:t,price:o});for(let i=0;i<t.length;i++)e.push(a(n[i],t[i],o[i],r[i]));return e}(),n=document.createElement("div");return n.classList.add("menu-container"),n.appendChild(E("Burgers",n,e)),n.appendChild(E("Pizza",n,e)),n}())),"Contact"===e.target.textContent&&(z.removeChild(z.lastChild),z.appendChild(function(){const e=document.createElement("div");e.classList.add("aboutus-container");const n=document.createElement("div");n.textContent="About",n.classList.add("about-title");const t=document.createElement("div");t.classList.add("about-text"),t.textContent="This food is the best food! Lorem ipsum dolor sit amet, consectetur adipiscing elit.";const o=document.createElement("div");o.classList.add("acc");const r=document.createElement("p");r.textContent="E-mail: example@example.com";const a=document.createElement("p");return a.textContent="Phone: 23156478",o.appendChild(r),o.appendChild(a),e.appendChild(n),e.appendChild(t),e.appendChild(o),e}()))}))}))})()})();