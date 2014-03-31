/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("uibase/align",function(c,g){function b(){}function h(d,a){var e=c.require("node/node"),k=a.charAt(0),o=a.charAt(1),i,f,j;if(d){d=e.one(d);i=d.offset();e=d[0].offsetWidth;f=d[0].offsetHeight}else{i={left:g.scrollLeft(),top:g.scrollTop()};e=g.viewportWidth();f=g.viewportHeight()}j=i.left;i=i.top;if(k==="c")i+=f/2;else if(k==="b")i+=f;if(o==="c")j+=e/2;else if(o==="r")j+=e;return{left:j,top:i}}c.mix(b,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});b.ATTRS={align:{}};
b.prototype={_uiSetAlign:function(d){c.isPlainObject(d)&&this.align(d.node,d.points,d.offset)},align:function(d,a,e){var k,o=(this.get("view")||this).get("el");e=e||[0,0];k=o.offset();d=h(d,a[0]);a=h(o,a[1]);a=[a.left-d.left,a.top-d.top];k=[k.left-a[0]+ +e[0],k.top-a[1]+ +e[1]];this.set("x",k[0]);this.set("y",k[1])},center:function(d){this.set("align",{node:d,points:[b.CC,b.CC],offset:[0,0]})}};return b},{requires:["dom"]});
KISSY.add("uibase/base",function(c,g){function b(i){g.apply(this,arguments);for(var f=this.constructor;f;){if(i&&i[a]&&f.HTML_PARSER)if(i[a]=e.one(i[a])){var j=i[a],l=f.HTML_PARSER,m=void 0,n=void 0;for(m in l)if(l.hasOwnProperty(m)){n=l[m];if(c.isFunction(n))this.__set(m,n.call(this,j));else if(c.isString(n))this.__set(m,j.one(n));else c.isArray(n)&&n[0]&&this.__set(m,j.all(n[0]))}}f=f.superclass&&f.superclass.constructor}h(this,"initializer","constructor");i&&i.autoRender&&this.render()}function h(i,
f,j){for(var l=i.constructor,m=[],n,p,s,r;l;){r=[];if(s=l.__ks_exts)for(var q=0;q<s.length;q++)if(n=s[q]){if(j!="constructor")n=n.prototype.hasOwnProperty(j)?n.prototype[j]:null;n&&r.push(n)}if(l.prototype.hasOwnProperty(f)&&(p=l.prototype[f]))r.push(p);r.length&&m.push.apply(m,r.reverse());l=l.superclass&&l.superclass.constructor}for(q=m.length-1;q>=0;q--)m[q]&&m[q].call(i)}function d(i,f){if(!f)return i;for(var j in f)if(c.isObject(f[j])&&c.isObject(i[j]))d(i[j],f[j]);else j in i||(i[j]=f[j])}var a=
"srcNode",e=c.require("node/node"),k=c.require("base/attribute").__capitalFirst,o=function(){};b.HTML_PARSER={};b.ATTRS={render:{valueFn:function(){return document.body},setter:function(i){if(c.isString(i))return e.one(i)}},rendered:{value:false}};c.extend(b,g,{render:function(){if(!this.get("rendered")){this._renderUI();this.fire("renderUI");h(this,"renderUI","__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");h(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();
this.fire("syncUI");h(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_renderUI:o,renderUI:o,_bindUI:function(){var i=this,f=i.__attrs,j,l;for(j in f)if(f.hasOwnProperty(j)){l="_uiSet"+k(j);i[l]&&function(m,n){i.on("after"+k(m)+"Change",function(p){i[n](p.newVal,p)})}(j,l)}},bindUI:o,_syncUI:function(){var i=this.__getDefAttrs(),f;for(f in i)if(i.hasOwnProperty(f)){var j="_uiSet"+k(f);this[j]&&this.get(f)!==undefined&&this[j](this.get(f))}},syncUI:o,destroy:function(){for(var i=
this.constructor,f,j,l;i;){(j=i.prototype.destructor)&&j.apply(this);if(f=i.__ks_exts)for(l=f.length-1;l>=0;l--)(j=f[l]&&f[l].prototype.__destructor)&&j.apply(this);i=i.superclass&&i.superclass.constructor}this.fire("destroy");this.detach()}});b.create=function(i,f,j,l){function m(){b.apply(this,arguments)}if(c.isArray(i)){l=j;j=f;f=i;i=b}i=i||b;if(c.isObject(f)){l=j;j=f;f=[]}c.extend(m,i,j,l);if(f){m.__ks_exts=f;c.each(f,function(n){if(n){c.each(["ATTRS","HTML_PARSER"],function(p){if(n[p]){m[p]=
m[p]||{};d(m[p],n[p])}});c.augment(m,n,false)}})}return m};return b},{requires:["base","dom","node"]});KISSY.add("uibase/box",function(){function c(){}c.ATTRS={html:{view:true},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elOrder:{},el:{getter:function(){return this.get("view")&&this.get("view").get("el")}}};c.prototype={};return c});
KISSY.add("uibase/boxrender",function(c,g){function b(){}function h(d,a,e,k,o,i){a=a||{};if(e)a.width=e;if(k)a.height=k;e="";for(var f in a)if(a.hasOwnProperty(f))e+=f+":"+a[f]+";";a="";for(var j in i)if(i.hasOwnProperty(j))a+=" "+j+"='"+i[j]+"' ";return"<"+o+(e?" style='"+e+"' ":"")+a+(d?" class='"+d+"' ":"")+">"}c.mix(b,{APPEND:1,INSERT:0});b.ATTRS={el:{setter:function(d){var a=c.require("node/node");if(c.isString(d))return a.one(d)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},
elAttrs:{},elOrder:{value:1},html:{}};b.construct=h;b.HTML_PARSER={el:function(d){return d}};b.prototype={__renderUI:function(){var d=this.get("render"),a=this.get("el");d=new g(d);if(!a){a=new g(h(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.get("elOrder")?d.append(a):d.prepend(a);this.set("el",a)}},_uiSetElAttrs:function(d){this.get("el").attr(d)},_uiSetElCls:function(d){this.get("el").addClass(d)},_uiSetElStyle:function(d){this.get("el").css(d)},
_uiSetWidth:function(d){this.get("el").width(d)},_uiSetHeight:function(d){this.get("el").height(d)},_uiSetHtml:function(d){this.get("el").html(d)},__destructor:function(){var d=this.get("el");if(d){d.detach();d.remove()}}};return b},{requires:["node"]});KISSY.add("uibase/close",function(){function c(){}c.ATTRS={closable:{value:true,view:true}};c.prototype={__bindUI:function(){var g=this,b=g.get("view").get("closeBtn");b&&b.on("click",function(h){g.hide();h.halt()})}};return c});
KISSY.add("uibase/closerender",function(c){function g(){}g.ATTRS={closable:{value:true},closeBtn:{}};g.HTML_PARSER={closeBtn:function(b){return b.one("."+this.get("prefixCls")+"ext-close")}};g.prototype={_uiSetClosable:function(b){var h=this.get("closeBtn");if(h)b?h.css("display",""):h.css("display","none")},__renderUI:function(){var b=c.require("node/node"),h=this.get("closeBtn"),d=this.get("contentEl");if(!h&&d){h=(new b("<a href='#' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>X</span></a>")).appendTo(d);this.set("closeBtn",h)}},__destructor:function(){var b=this.get("closeBtn");b&&b.detach()}};return g});
KISSY.add("uibase/constrain",function(c,g){function b(){}function h(a){var e;if(!a)return e;var k=this.get("view").get("el");if(a!==true){a=d.one(a);e=a.offset();c.mix(e,{maxLeft:e.left+a[0].offsetWidth-k[0].offsetWidth,maxTop:e.top+a[0].offsetHeight-k[0].offsetHeight})}else{a=document.documentElement.clientWidth;e={left:g.scrollLeft(),top:g.scrollTop()};c.mix(e,{maxLeft:e.left+a-k[0].offsetWidth,maxTop:e.top+g.viewportHeight()-k[0].offsetHeight})}return e}var d=c.require("node/node");b.ATTRS={constrain:{value:false}};
b.prototype={__renderUI:function(){var a=this,e=a.__getDefAttrs(),k=e.x;e=e.y;var o=k.setter,i=e.setter;k.setter=function(f){var j=o&&o(f);if(j===undefined)j=f;if(!a.get("constrain"))return j;f=h.call(a,a.get("constrain"));return Math.min(Math.max(j,f.left),f.maxLeft)};e.setter=function(f){var j=i&&i(f);if(j===undefined)j=f;if(!a.get("constrain"))return j;f=h.call(a,a.get("constrain"));return Math.min(Math.max(j,f.top),f.maxTop)};a.addAttr("x",k);a.addAttr("y",e)}};return b},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function c(){}c.ATTRS={content:{view:true},contentEl:{getter:function(){return this.get("view")&&this.get("view").get("contentEl")}},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};c.prototype={};return c});
KISSY.add("uibase/contentboxrender",function(c,g,b){function h(){}h.ATTRS={contentEl:{},contentElAttrs:{},contentElStyle:{},contentTagName:{value:"div"},content:{}};h.HTML_PARSER={contentEl:function(a){return a.one("."+this.get("prefixCls")+"contentbox")}};var d=b.construct;h.prototype={__renderUI:function(){var a=this.get("contentEl"),e=this.get("el");if(!a){var k=c.makeArray(e[0].childNodes);a=(new g(d(this.get("prefixCls")+"contentbox",this.get("contentElStyle"),undefined,undefined,this.get("contentTagName"),
this.get("contentElAttrs")))).appendTo(e);for(e=0;e<k.length;e++)a.append(k[e]);this.set("contentEl",a)}},_uiSetContentElAttrs:function(a){a&&this.get("contentEl").attr(a)},_uiSetContentElStyle:function(a){a&&this.get("contentEl").css(a)},_uiSetContent:function(a){if(c.isString(a))this.get("contentEl").html(a);else if(a!==undefined){this.get("contentEl").html("");this.get("contentEl").append(a)}}};return h},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(c){function g(){}g.ATTRS={handlers:{value:[]},draggable:{value:true}};g.prototype={_uiSetHandlers:function(b){b&&b.length>0&&this.__drag&&this.__drag.set("handlers",b)},__bindUI:function(){var b=c.require("dd/draggable"),h=this.get("view").get("el");if(this.get("draggable")&&b)this.__drag=new b({node:h,handlers:this.get("handlers")})},_uiSetDraggable:function(b){var h=this.__drag;if(h)if(b){h.detach("drag");h.on("drag",this._dragExtAction,this)}else h.detach("drag")},
_dragExtAction:function(b){this.set("xy",[b.left,b.top])},__destructor:function(){var b=this.__drag;b&&b.destroy()}};return g});KISSY.add("uibase/loading",function(){function c(){}c.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return c});
KISSY.add("uibase/loadingrender",function(c,g){function b(){}b.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new g("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var h=this._loadingExtEl;h&&h.hide()}};return b},{requires:["node"]});
KISSY.add("uibase/mask",function(){function c(){}c.ATTRS={mask:{value:false}};c.prototype={_uiSetMask:function(g){if(g){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return c},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(c){function g(){}var b,h=0;g.prototype={_maskExtShow:function(){if(!b){var d=c.require("ua"),a=c.require("node/node"),e=c.require("dom");b=(new a("<div class='"+this.get("prefixCls")+"ext-mask'>")).prependTo(document.body);b.css({position:"absolute",left:0,top:0,width:d.ie==6?e.docWidth():"100%",height:e.docHeight()});d.ie==6&&b.append("<iframe style='width:100%;height:expression(this.parentNode.offsetHeight);filter:alpha(opacity=0);z-index:-1;'>")}b.css({"z-index":this.get("zIndex")-
1});h++;b.css("display","")},_maskExtHide:function(){h--;if(h<=0)h=0;h||b&&b.css("display","none")}};return g},{requires:["ua"]});
KISSY.add("uibase/position",function(c,g,b){function h(){}var d=document;h.ATTRS={x:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("x")}},y:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("y")}},xy:{setter:function(a){var e=c.makeArray(a);if(e.length){e[0]&&this.set("x",e[0]);e[1]&&this.set("y",e[1])}return a},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true},visible:{}};h.prototype={_uiSetVisible:function(a){this.get("view").set("visible",
a);this[a?"_bindKey":"_unbindKey"]();this.fire(a?"show":"hide")},_bindKey:function(){b.on(d,"keydown",this._esc,this)},_unbindKey:function(){b.remove(d,"keydown",this._esc,this)},_esc:function(a){a.keyCode===27&&this.hide()},move:function(a,e){if(c.isArray(a)){e=a[1];a=a[0]}this.set("xy",[a,e])},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)}};return h},{requires:["dom","event"]});
KISSY.add("uibase/positionrender",function(){function c(){}c.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999},visible:{}};c.prototype={__renderUI:function(){var g=this.get("el");g.addClass(this.get("prefixCls")+"ext-position");g.css({display:"",left:-9999,top:-9999,bottom:"",right:""})},_uiSetZIndex:function(g){this.get("el").css("z-index",g)},_uiSetX:function(g){this.get("el").offset({left:g})},
_uiSetY:function(g){this.get("el").offset({top:g})},_uiSetVisible:function(g){this.get("el").css("visibility",g?"visible":"hidden")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)}};return c});
KISSY.add("uibase/resize",function(c){function g(){}g.ATTRS={resize:{value:{}}};g.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(b){var h=c.require("resizable");if(h){this.resizer&&this.resizer.destroy();b.node=this.get("view").get("el");b.autoRender=true;if(b.handlers)this.resizer=new h(b)}}};return g});
KISSY.add("uibase/shimrender",function(c){function g(){}g.ATTRS={shim:{value:true}};g.prototype={_uiSetShim:function(b){var h=c.require("node/node"),d=this.get("el");if(b&&!this.__shimEl){this.__shimEl=new h("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'>");d.prepend(this.__shimEl)}else if(!b&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};
return g});KISSY.add("uibase/stdmod",function(){function c(){}c.ATTRS={header:{getter:function(){return this.get("view")&&this.get("view").get("header")}},body:{getter:function(){return this.get("view")&&this.get("view").get("body")}},footer:{getter:function(){return this.get("view")&&this.get("view").get("footer")}},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};c.prototype={};return c});
KISSY.add("uibase/stdmodrender",function(c,g){function b(){}function h(a,e){var k=a.get("contentEl"),o=a.get(e);if(!o){o=(new g("<div class='"+a.get("prefixCls")+d+e+"'>")).appendTo(k);a.set(e,o)}}var d="stdmod-";b.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};b.HTML_PARSER={header:function(a){return a.one("."+this.get("prefixCls")+d+"header")},body:function(a){return a.one("."+this.get("prefixCls")+d+"body")},footer:function(a){return a.one("."+
this.get("prefixCls")+d+"footer")}};b.prototype={_setStdModContent:function(a,e){if(c.isString(e))this.get(a).html(e);else{this.get(a).html("");this.get(a).append(e)}},_uiSetBodyStyle:function(a){this.get("body").css(a)},_uiSetHeaderStyle:function(a){this.get("header").css(a)},_uiSetFooterStyle:function(a){this.get("footer").css(a)},_uiSetBodyContent:function(a){this._setStdModContent("body",a)},_uiSetHeaderContent:function(a){this._setStdModContent("header",a)},_uiSetFooterContent:function(a){this._setStdModContent("footer",
a)},__renderUI:function(){h(this,"header");h(this,"body");h(this,"footer")}};return b},{requires:["node"]});
KISSY.add("uibase",function(c,g,b,h,d,a,e,k,o,i,f,j,l,m,n,p,s,r,q,t,u){a.Render=e;j.Render=l;m.Render=n;p.Render=s;t.Render=u;h.Render=d;o.Render=i;c.mix(g,{Align:b,Box:h,Close:a,Contrain:k,Contentbox:o,Drag:f,Loading:j,Mask:m,Position:p,Shim:{Render:r},Resize:q,StdMod:t});return c.UIBase=g},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
