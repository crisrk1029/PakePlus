import{_ as i,v as t}from"./index-aeca932e.js";var e=["xxl","xl","lg","md","sm","xs"],n={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},r=new Map,s=-1,a={};const c={matchHandlers:{},dispatch:function(i){return a=i,r.forEach((function(i){return i(a)})),r.size>=1},subscribe:function(i){return r.size||this.register(),s+=1,r.set(s,i),i(a),s},unsubscribe:function(i){r.delete(i),r.size||this.unregister()},unregister:function(){var i=this;Object.keys(n).forEach((function(t){var e=n[t],r=i.matchHandlers[e];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),r.clear()},register:function(){var e=this;Object.keys(n).forEach((function(r){var s=n[r],c=function(n){var s=n.matches;e.dispatch(i(i({},a),t({},r,s)))},d=window.matchMedia(s);d.addListener(c),e.matchHandlers[s]={mql:d,listener:c},c(d)}))}};export{c as R,e as r};
