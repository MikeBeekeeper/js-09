function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");function l(e,o){const t=Math.random()>.3;return console.log(t),new Promise(((n,r)=>{setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();let t=Number(o.target.delay.value);const n=Number(o.target.step.value),r=Number(o.target.amount.value);console.log(t,n,r);for(let o=0;o<r;o+=1)l(o+1,t).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.warning(`❌ Rejected promise ${o} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.1fe50aa9.js.map