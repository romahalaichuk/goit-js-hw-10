var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register;var l=o("9dxg1");document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".cat-info"),o=document.querySelector(".cat-image"),r=document.querySelector(".cat-name"),d=document.querySelector(".cat-description"),a=document.querySelector(".cat-temperament"),c=document.querySelector(".error");e.style.display="none",t.style.display="block",(0,l.fetchBreeds)().then(n=>{n.data.forEach(t=>{let n=document.createElement("option");n.value=t.id,n.text=t.name,e.add(n)}),t.style.display="none",e.style.display="block"}).catch(e=>{console.error(e),t.style.display="none",c.style.display="block"}),e.addEventListener("change",()=>{let s=e.value;t.style.display="block",n.style.display="none",c.style.display="none",(0,l.fetchCatByBreed)(s).then(e=>{let l=e.data[0];o.src=l.url,r.textContent=l.breeds[0].name,d.textContent=l.breeds[0].description,a.textContent=`Temperament: ${l.breeds[0].temperament}`,t.style.display="none",n.style.display="block"}).catch(e=>{console.error(e),t.style.display="none",c.style.display="block"})})});
//# sourceMappingURL=index.d01c4137.js.map