(function(){var l=!!document.addEventListener;function m(a,b){l?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function t(a){document.body?a():l?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"interactive"!=document.readyState&&"complete"!=document.readyState||a()})};function x(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=n;z(a)&&null!==a.a.parentNode&&b(a.g)}var n=a;m(a.b,c);m(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,E=null,F=null,G=null;function J(){if(null===F){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}F=""!==a.style.font}return F}function K(a,b){return[a.style,a.weight,J()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,n=a||"BESbswy",r=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){var e;null===G&&(G=!!document.fonts);if(e=G)null===E&&(E=/OS X.*Version\/10\..*Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),e=!E;if(e){e=new Promise(function(a,b){function f(){(new Date).getTime()-H>=D?b():document.fonts.load(K(c,'"'+c.family+'"'),n).then(function(c){1<=c.length?a():setTimeout(f,25)},function(){b()})}f()});var L=new Promise(function(a,
c){r=setTimeout(c,D)});Promise.race([L,e]).then(function(){clearTimeout(r);a(c)},function(){b(c)})}else t(function(){function e(){var b;if(b=-1!=g&&-1!=h||-1!=g&&-1!=k||-1!=h&&-1!=k)(b=g!=h&&g!=k&&h!=k)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(g==u&&h==u&&k==u||g==v&&h==v&&k==v||g==w&&h==w&&k==w)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),
a(c))}function I(){if((new Date).getTime()-H>=D)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)g=f.a.offsetWidth,h=p.a.offsetWidth,k=q.a.offsetWidth,e();r=setTimeout(I,50)}}var f=new x(n),p=new x(n),q=new x(n),g=-1,h=-1,k=-1,u=-1,v=-1,w=-1,d=document.createElement("div");d.dir="ltr";y(f,K(c,"sans-serif"));y(p,K(c,"serif"));y(q,K(c,"monospace"));d.appendChild(f.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);u=f.a.offsetWidth;
v=p.a.offsetWidth;w=q.a.offsetWidth;I();A(f,function(a){g=a;e()});y(f,K(c,'"'+c.family+'",sans-serif'));A(p,function(a){h=a;e()});y(p,K(c,'"'+c.family+'",serif'));A(q,function(a){k=a;e()});y(q,K(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());