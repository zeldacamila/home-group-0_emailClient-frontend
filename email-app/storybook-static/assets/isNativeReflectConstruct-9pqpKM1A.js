function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function f(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,c){return r.__proto__=c,r},i(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(t)}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(s=function(){return!!t})()}export{o as _,f as a,i as b,s as c,a as d};
