var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,u=!1;function l(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function a(t,e){u?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const c=l(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[c]+1;const i=c+1;n[i]=t,r=Math.max(i,r)}const c=[],i=[];let u=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(c.push(e[t-1]);u>=t;u--)i.push(e[u]);u--}for(;u>=0;u--)i.push(e[u]);c.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<c.length&&i[e].claim_order>=c[n].claim_order;)n++;const o=n<c.length?c[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function s(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function h(){return f(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t){i=t}function g(t){(function(){if(!i)throw new Error("Function called outside component initialization");return i})().$$.on_mount.push(t)}const $=[],b=[],x=[],y=[],v=Promise.resolve();let w=!1;function k(t){x.push(t)}let E=!1;const N=new Set;function F(){if(!E){E=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];_(e),S(e.$$)}for(_(null),$.length=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];N.has(e)||(N.add(e),e())}x.length=0}while($.length);for(;y.length;)y.pop()();w=!1,E=!1,N.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const j=new Set;function A(t,e){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,v.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(c,l,a,d,f,h,p=[-1]){const m=i;_(c);const g=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:l.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let $=!1;if(g.ctx=a?a(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),$&&A(c,t)),e})):[],g.update(),$=!0,o(g.before_update),g.fragment=!!d&&d(g.ctx),l.target){if(l.hydrate){u=!0;const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();l.intro&&((b=c.$$.fragment)&&b.i&&(j.delete(b),b.i(x))),function(t,n,c,i){const{fragment:u,on_mount:l,on_destroy:a,after_update:s}=t.$$;u&&u.m(n,c),i||k((()=>{const n=l.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(k)}(c,l.target,l.anchor,l.customElement),u=!1,F()}var b,x;_(m)}function C(e){let n,o,r,c,i,l,_,g,$,b,x,y,v,w="Brutto: "+e[0]+"€",k="Netto: "+e[1]+"€",E=e[2]+" Stunden gearbeitet.";return{c(){n=d("main"),o=d("h1"),o.textContent="💵💵💵",r=h(),c=d("h1"),c.textContent="So viel hat Leo im Juli 2021 schon verdient:",i=h(),l=d("h2"),_=f(w),g=h(),$=d("h2"),b=f(k),x=h(),y=d("h2"),v=f(E),p(o,"class","svelte-1tky8bj"),p(c,"class","svelte-1tky8bj"),p(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){u&&!n?a(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}(t,n,e),a(n,o),a(n,r),a(n,c),a(n,i),a(n,l),a(l,_),a(n,g),a(n,$),a($,b),a(n,x),a(n,y),a(y,v)},p(t,[e]){1&e&&w!==(w="Brutto: "+t[0]+"€")&&m(_,w),2&e&&k!==(k="Netto: "+t[1]+"€")&&m(b,k),4&e&&E!==(E=t[2]+" Stunden gearbeitet.")&&m(v,E)},i:t,o:t,d(t){t&&s(n)}}}function I(t,e,n){let o=Date.now();const r=new Date(2021,6,5,7,30);function c(){return 8.5*((o-r)/1e3/60/60/24*(5/7))*60*60}function i(){return c()*(39.5/8.5/60/60)}var u=i().toFixed(4),l=(.8*i()).toFixed(4),a=(c()/60/60).toFixed(4);return g((()=>{const t=setInterval((()=>{o=Date.now(),n(0,u=i().toFixed(4)),n(1,l=(.8*i()).toFixed(4)),n(2,a=(c()/60/60).toFixed(4))}),1e3);return()=>{clearInterval(t)}})),[u,l,a]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,I,C,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
