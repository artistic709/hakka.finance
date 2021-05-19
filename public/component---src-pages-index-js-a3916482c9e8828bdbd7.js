(self.webpackChunkhakka=self.webpackChunkhakka||[]).push([[678],{989:function(t,e){var n="undefined"!=typeof self?self:this,i=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var n="URLSearchParams"in t,i="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in t,r="ArrayBuffer"in t;if(r)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function u(t){this.map={},t instanceof u?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function x(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function h(t){var e=new FileReader,n=m(e);return e.readAsArrayBuffer(t),n}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():r&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r&&(ArrayBuffer.prototype.isPrototypeOf(t)||d(t))?this._bodyArrayBuffer=f(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=x(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?x(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,n,i=x(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=m(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),i=0;i<e.length;i++)n[i]=String.fromCharCode(e[i]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(k)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=c(t),e=l(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},u.prototype.delete=function(t){delete this.map[c(t)]},u.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},u.prototype.set=function(t,e){this.map[c(t)]=l(e)},u.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},u.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),p(t)},u.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},u.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),p(t)},i&&(u.prototype[Symbol.iterator]=u.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(t,e){var n,i,o=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(n=e.method||this.method||"GET",i=n.toUpperCase(),b.indexOf(i)>-1?i:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function k(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),i=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(i),decodeURIComponent(o))}})),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},g.call(y.prototype),g.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var C=[301,302,303,307,308];w.redirect=function(t,e){if(-1===C.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(_){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function Z(t,n){return new Promise((function(i,a){var r=new y(t,n);if(r.signal&&r.signal.aborted)return a(new e.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function d(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),i=n.shift().trim();if(i){var o=n.join(":").trim();e.append(i,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;i(new w(o,n))},s.onerror=function(){a(new TypeError("Network request failed"))},s.ontimeout=function(){a(new TypeError("Network request failed"))},s.onabort=function(){a(new e.DOMException("Aborted","AbortError"))},s.open(r.method,r.url,!0),"include"===r.credentials?s.withCredentials=!0:"omit"===r.credentials&&(s.withCredentials=!1),"responseType"in s&&o&&(s.responseType="blob"),r.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),r.signal&&(r.signal.addEventListener("abort",d),s.onreadystatechange=function(){4===s.readyState&&r.signal.removeEventListener("abort",d)}),s.send(void 0===r._bodyInit?null:r._bodyInit)}))}Z.polyfill=!0,t.fetch||(t.fetch=Z,t.Headers=u,t.Request=y,t.Response=w),e.Headers=u,e.Request=y,e.Response=w,e.fetch=Z,Object.defineProperty(e,"__esModule",{value:!0})}({})}(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var o=i;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},9744:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var i=n(7294),o=n(416),a=(n(9764),n(9226)),r=n(2265),s=n(256),d={homescreenContainer:{paddingLeft:"12.8%",paddingRight:"14.4%","@media screen and (max-width: 576px)":{paddingLeft:"16px",paddingRight:"16px"}},homescreenSubTitle:{color:"#2da287",fontSize:[1,1,2,3],fontWeight:"600",cursor:"pointer",paddingTop:"12px"},spanLink:{textDecoration:"underline",paddingLeft:"3px",fontSize:[1,1,2,3]},homeHeading:{fontSize:[6,7,8,8],color:"#0b555a",width:"100%",fontWeight:"300",paddingTop:"36px",paddingBottom:["36px","64px","64px","64px"]},homeDescription:{fontSize:[2,2,3,4],color:"black",maxWidth:"1200px"},homeCardTop:{paddingBottom:["100px","160px","160px","160px"]},homeTotalValue:{padding:"0 0 0 12.8%",paddingBottom:["100px","176px","176px","176px"],"@media screen and (max-width: 576px)":{paddingLeft:"16px"}},whatHakka:{paddingBottom:["48px","80px","80px","80px"]},tokenMetrics:{paddingBottom:["100px","160px","160px","160px"]},utilityHakka:{paddingBottom:["100px","160px","160px","160px"]},partners:{paddingBottom:["100px","160px","160px","160px"],width:"85%",maxWidth:"680px"},partnersHead:{fontSize:[5,6,7,7],color:"#253e47",fontWeight:"normal",paddingBottom:["48px","36px","36px","36px"],"@media screen and (max-width: 576px)":{display:"flex",justifyContent:"center"}},img_partners_responsive:{"@media screen and (max-width: 1280px)":{justifyContent:"center"}},imgPartner_wrapper:{alignItems:"center",paddingTop:"32px",paddingRight:"20px","@media screen and (max-width: 576px)":{paddingTop:"20px",paddingRight:"0"},".biggerIcon":{"@media screen and (max-width: 576px)":{height:"64px"}}},imgPartner:{"@media screen and (max-width: 576px)":{height:"48px"}},imgPartnerBiggerIcon:{"@media screen and (max-width: 576px)":{height:"64px"}},blur_img_blue_section:{position:"relative"},blur_img_blue:{borderRadius:"50%",width:"28vw",height:"28vw",filter:"blur(40px)",backgroundColor:"rgba(181, 232, 248, 0.3)",position:"absolute",top:"-300px",left:"-40%",zIndex:"-1","@media screen and (max-width: 768px)":{display:"none"}},blur_img_green_section:{position:"relative"},blur_img_green:{position:"absolute",top:"-200px",right:"-19.8%",zIndex:"-1","@media screen and (max-width: 768px)":{display:"none"}},blur_img_green_section_mobile:{position:"relative"},blur_img_green_mobile:{display:"none","@media screen and (max-width: 768px)":{width:"60vw",display:"block",position:"absolute",top:"-20px",right:"-4.5%",zIndex:"-1"}},blur_img_blue_section_mobile:{position:"relative"},blur_img_blue_mobile:{display:"none","@media screen and (max-width: 768px)":{display:"block",borderRadius:"50%",width:"40vw",height:"35vh",filter:"blur(20px)",backgroundColor:"rgba(181, 232, 248, 0.3)",position:"absolute",top:"-160px",left:"-15%",zIndex:"-1"}}},c={card_responsive:{display:"grid",gridGap:3,gridTemplateColumns:"1fr 1fr",maxWidth:"1200px","@media screen and (max-width: 1180px)":{gridTemplateColumns:"1fr"}},cardFirstContainer:{padding:"20px",border:"1px solid #6ad7a8",borderRadius:"8px",height:"100%",maxHeight:"250px",minHeight:"200px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundImage:"linear-gradient(to right, #6ad7c1, #8cebb9)",cursor:"pointer",boxShadow:"0 8px 16px -8px rgba(123, 135, 148, 0.25)",transition:"all 0.25s ease-out ","& .sub-content":{opacity:".5",transition:"all 0.25s ease-out"},":hover":{"& .sub-content":{opacity:1},":active":{transform:"scale(.98)"},borderColor:"#3ebd93"}},cardContainer:{maxHeight:"250px",minHeight:"200px",padding:"20px",border:"1px solid #ebf0f2",height:"100%",borderRadius:"8px",backgroundColor:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer",transition:"all 0.25s ease-out ",boxShadow:"0 8px 16px -8px rgba(123, 135, 148, 0.25)",":last-child":{marginRight:0},"& .sub-content":{filter:"grayscale(100%)",transition:"all 0.25s ease-out","& .text":{color:"rgba(37, 62, 71, 0.5)"}},":hover":{transition:"all 0.25s ease-out ",borderColor:"#3ebd93","& .sub-content":{opacity:1,filter:"grayscale(0)","& .text":{color:"#2da287"}}},":active":{transform:"scale(.98)"},":visited":{border:"none",borderColor:"none"}},cardImg:{},cardFirstImg:{padding:"10px",borderRadius:"8px",backgroundImage:"linear-gradient(45deg, #d9fbe3, #ffffff 100%)"},cardHeading:{color:"#253e47",fontWeight:"bold",fontFamily:"system-ui",fontSize:[3,3,4,5]},cardFirstHeading:{width:"55%",color:"#253e47",fontWeight:"bold",fontFamily:"system-ui",fontSize:[3,3,4,5]},subText:{fontSize:[1,1,2,3],fontWeight:"600",color:"#253e47"},forwardImg:{cursor:"pointer"},subTextGreen:{color:"text_grey",fontWeight:"600",fontSize:[1,1,2,3]},anchor:{border:"none",textDecoration:"none"}};var l=function(t){var e=[{imageTop:"",title:"Learn More <br/> About HAKKA",subContent:"View wiki",click:function(){window.open("https://hakka-finance.gitbook.io/hakka-wiki","_blank").focus()},imageBot:"iconLinkNormal"},{imageTop:"iconToken",title:"What’s <br/> HAKKA Token",subContent:"Check it out",click:function(){},imageBot:"iconScrollDown"}];return(0,a.tZ)(r.xu,null,(0,a.tZ)(r.xu,{sx:c.card_responsive},(0,a.tZ)(r.xu,{onClick:function(){location.href="products"}},(0,a.tZ)(r.Zb,{sx:c.cardFirstContainer},(0,a.tZ)(r.kC,{justifyContent:"flex-end"},(0,a.tZ)("img",{sx:c.cardFirstImg,src:s.Z.iconLight,alt:""})),(0,a.tZ)(r.xu,{sx:c.cardFirstHeading,mt:"22px",mb:"3"},"Roam Around ",(0,a.tZ)("br",null)," Hakka Ecosystem"),(0,a.tZ)(r.kC,{sx:c.subContent,pt:"0",className:"sub-content",justifyContent:"space-between",alignItems:"center"},(0,a.tZ)("span",{sx:c.subText,className:"text"},"Check out unique HAKKA products"),(0,a.tZ)("img",{sx:c.forwardImg,src:s.Z.iconForward,alt:""})))),(0,a.tZ)(r.xu,{sx:{display:"grid",gridGap:3,gridTemplateColumns:"1fr 1fr"}},e.map((function(t,e){return(0,a.tZ)("a",{sx:c.anchor,href:"Check it out"===t.subContent&&"#whatHakka"},(0,a.tZ)(r.xu,{key:t.title,flexDirection:"column",justifyContent:"space-between",sx:c.cardContainer,onClick:function(){t.click()}},(0,a.tZ)(r.kC,{justifyContent:"flex-end"},(0,a.tZ)("img",{sx:c.cardImg,src:s.Z[t.imageTop],alt:""})),(0,a.tZ)(r.xu,null,(0,a.tZ)(r.xu,{sx:c.cardHeading,mt:"3",mb:"3",dangerouslySetInnerHTML:{__html:t.title}}),(0,a.tZ)(r.kC,{sx:c.subContent,className:"sub-content",pt:"0",justifyContent:"space-between",alignItems:"center",onClick:function(){t.click()}},(0,a.tZ)("div",{className:"text",sx:c.subTextGreen},t.subContent),(0,a.tZ)("img",{sx:c.forwardImg,src:s.Z[t.imageBot],alt:""})))))})))))},p={totalValueContainer:{paddingLeft:"20px",position:"relative"},totalValueHeadNum:{},totalValueHead:{fontSize:[3,3,4,5],color:"#253e47",fontWeight:"bold","@media screen and (max-width: 768px)":{whiteSpace:"nowrap"}},totalValueMoney:{fontSize:[6,6,7,7],color:"#3ebd93",fontWeight:"600","@media screen and (max-width: 768px)":{whiteSpace:"nowrap"}},totalValueSubText:{fontSize:[1,1,2,3],color:"text_grey",fontWeight:"600"},listProducts:{"@media screen and (max-width: 950px)":{flexDirection:"column",display:"block",justifyContent:"flex-start"}},totalValueImg:{position:"absolute",right:"0px",top:"-90px",zIndex:"-1",width:"25vw",backgroundImage:"radial-gradient(circle at 0 100%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 62%)","@media screen and (max-width: 768px)":{width:"200px",height:"151px",top:"-80px"}}},u={product:{cursor:"pointer",padding:"16px 20px",borderRadius:"8px",transition:"all 0.25s ease-out",":hover":{backgroundColor:"#f7fbfc","& *":{color:"#253e47"}},"@media screen and (max-width: 576px)":{":first-child":{}}},imageProduct:{width:"40px"},productHeading:{fontSize:[3,3,4,5],fontWeight:"bold",color:"#52666d",whiteSpace:"nowrap"}};var x=function(t){var e=t.item,n=t.i,i=t.link;return(0,a.tZ)(r.kC,{onClick:function(){window.open(i,"_blank").focus()},alignItems:"center",key:n,sx:u.product,mt:"2"},(0,a.tZ)("img",{sx:u.imageProduct,src:s.Z[e.image],alt:""}),(0,a.tZ)(r.xu,{sx:u.productHeading,ml:"3"},e.title))},m=n(989),h=n.n(m);var f=function(){var t=[{title:"3F Mutual",image:"iconMutual",link:"https://3fmutual.com/"},{title:"Harvester",image:"iconHarvester",link:"https://harvesters.hakka.finance/pools"},{title:"Hakka Intelligence",image:"iconIntelligence",link:"https://intelligence.hakka.finance/"}],e=(0,i.useState)(0),n=e[0],o=e[1];return h()("https://tvl.hakka.finance/").then((function(t){return t.text()})).then((function(t){var e=parseInt(t).toLocaleString();o("$"+e)})),(0,a.tZ)(r.kC,{justifyContent:"space-between",alignItems:"center",sx:p.totalValueContainer},(0,a.tZ)(r.xu,null,(0,a.tZ)(r.xu,{sx:p.totalValueHeadNum},(0,a.tZ)(r.xu,{sx:p.totalValueHead},"TOTAL VALUE LOCKED"),(0,a.tZ)(r.kC,{sx:p.totalValueMoney,alignItems:"baseline",mt:"12px"},(0,a.tZ)(r.xu,{id:"supply"},n),(0,a.tZ)(r.xu,{ml:"8px",fontSize:[1,5,5,5]},"USD"))),(0,a.tZ)(r.xu,null,(0,a.tZ)(r.xu,{sx:p.totalValueSubText,mt:"4"},"Our Flagship Products"),(0,a.tZ)(r.kC,{sx:p.listProducts,ml:"-20px"},t.map((function(t,e){return(0,a.tZ)(x,{key:t.title,item:t,i:e,link:t.link})}))))),(0,a.tZ)(r.xu,null,(0,a.tZ)("img",{sx:p.totalValueImg,src:s.Z.imageAlienGrey,alt:""})))},g={coinContainer:{padding:"8px 16px",borderRadius:"8px",backgroundColor:"#f7fbfc",border:"1px solid transparent",cursor:"pointer",transition:"all 0.25s ease-out",display:"flex",justifyContent:"center","@media screen and (max-width: 576px)":{width:"100%",justifyContent:"center"},":hover":{border:"1px solid #dae1e3"}},coinHakka:{padding:"8px 16px",borderRadius:"8px",backgroundColor:"#f7fbfc",cursor:"pointer",transition:"all 0.25s ease-out",border:"1px solid transparent",":hover":{border:"1px solid #dae1e3"}},coinImg:{width:"24px"},coinName:{fontSize:[1,1,2,3],color:"#253e47",fontWeight:"600"},custom_link:{textDecoration:"none","@media screen and (max-width: 576px)":{width:"100%"}}};var b=function(t){var e=t.item;return t.i,t.whatHakka,(0,a.tZ)(r.rU,{sx:g.custom_link,href:e.link,target:"_blank"},(0,a.tZ)(r.kC,{key:e.coinName,sx:g.coinContainer,mr:"3",mb:"12px",alignItems:"center"},(0,a.tZ)("img",{sx:g.coinImg,src:s.Z[e.imageCoin],alt:""}),(0,a.tZ)(r.xu,{ml:"2"},(0,a.tZ)("span",{sx:g.coinName},e.coinName))))},y={whatHakkaHeading:{fontSize:[5,6,7,7],color:"#253e47",fontWeight:"normal"},whatHakkaText:{fontSize:[2,2,3,4],color:"#253e47",maxWidth:"1200px"},listCoinHakka:{"@media screen and (max-width: 576px)":{flexDirection:"column"}}};var k=function(t){return(0,a.tZ)(i.Fragment,null,(0,a.tZ)(r.xu,{id:"whatHakka",sx:y.whatHakkaHeading},"What is HAKKA Token"),(0,a.tZ)(r.xu,{sx:y.whatHakkaText,mt:"4"},(0,a.tZ)("p",null," HAKKA is the protocol token that empowers the community governance of Hakka Finance.")),(0,a.tZ)(r.kC,{sx:y.listCoinHakka,mt:"20px",alignItems:"center"},t.renderCoin()))},w={tokenMetrics:{paddingBottom:["48px","160px","160px","160px"],width:"100%","@media screen and (max-width: 960px)":{flexDirection:"column",paddingLeft:"0px"}},chainContent_active:{maxWidth:"325px",cursor:"pointer",paddingBottom:["28px","32px","32px","32px"],"@media screen and (max-width: 576px)":{flexDirection:"column",padding:"16px",alignItems:"center",borderTop:"1px solid #2da287","& .chain-left-content":{flexDirection:"column"},"& .chain-text":{paddingLeft:"0px",paddingTop:"12px"},"& .icon-right":{opacity:"0",transition:"all 0.25s ease-out"}}},chainContent:{maxWidth:"325px",cursor:"pointer",paddingBottom:["28px","32px","32px","32px"],"@media screen and (max-width: 576px)":{flexDirection:"column",padding:"16px",alignItems:"center",borderTop:"1px solid #ebf0f2","& .chain-left-content":{flexDirection:"column"},"& .chain-text":{paddingLeft:"0px",paddingTop:"12px"},"& .icon-right":{opacity:"0",transition:"all 0.25s ease-out"}}},imgChain:{width:"40px",height:"40px",padding:"8px",borderRadius:"8px","@media screen and (max-width: 576px)":{}},imgChain_gray:{width:"40px",height:"40px",padding:"8px",borderRadius:"8px",transition:"all 0.25s ease-out",opacity:".5","@media screen and (max-width: 576px)":{}},width_big:{width:"500px"},chainName_active:{fontSize:[1,3,4,5],color:"#253e47",fontWeight:600,paddingLeft:"12px"},chainName:{fontSize:[1,3,4,5],color:"text_grey",fontWeight:600,paddingLeft:"12px"},iconRight:{display:"flex",alignItems:"center","@media screen and (max-width: 576px)":{display:"none"}},tokenMetrics_responsive:{display:"grid",gridGap:"0px",gridTemplateColumns:"1fr 1fr",maxWidth:"1200px","@media screen and (max-width: 960px)":{gridTemplateColumns:"1fr"}},tokenMetricsChain:{padding:"16px 12px",paddingLeft:0,fontSize:[3,3,4,5],flex:"0.8","@media screen and (max-width: 576px)":{padding:"0px",width:"100%",display:"flex",justifyContent:"space-between"}},tokenMetricsInfoChain:{borderTop:"1px solid #2da287",paddingTop:"28px",flex:"1","@media screen and (max-width: 576px)":{marginLeft:0,borderTop:"unset"}},tokenMetricsInfoContainer:{marginBottom:"20px"},tokenMetricsSubHead:{fontSize:[2,2,3,4],color:"#253e47",fontWeight:"bold",fontFamily:"system-ui"},iconScan:{width:"24px",verticalAlign:"middle"},tokenMetricsInfo:{fontSize:[1,1,2,3],fontWeight:600,color:"#253e47"},tokenMetricsInfoAddress:{cursor:"pointer","& .icon-scan":{opacity:".5"},":hover":{"& .icon-scan":{opacity:"1",transition:"all 0.25s ease-out"}}},info:{fontWeight:"normal"},info_link:{color:"black",fontWeight:"normal",wordBreak:"break-all"},tokenMetricsChainList:{fontSize:[1,1,2,3],fontWeight:600,color:"#253e47",paddingBottom:[1,3,3,3]},token_metric_responsive:{"@media screen and (max-width: 1180px)":{flexDirection:"column","& .left-bot-token":{width:"50%","@media screen and (max-width: 576px)":{paddingRight:"12px"}},"& .right-bot-token":{width:"50%"}}}},C=function(t){var e=t.tokenMetrics;return(0,a.tZ)(r.xu,{sx:w.tokenMetricsInfoChain,ml:"2"},(0,a.tZ)(r.xu,{sx:w.tokenMetricsSubHead},"Token Metrics"),(0,a.tZ)(r.xu,{sx:w.tokenMetricsInfoContainer,mt:"20px"},(0,a.tZ)(r.xu,{sx:w.tokenMetricsInfo},"NAME: ",(0,a.tZ)("span",{sx:w.info},e.name)),(0,a.tZ)(r.xu,{sx:w.tokenMetricsInfo,mt:"2"},"TYPE: ",(0,a.tZ)("span",{sx:w.info},e.type)),(0,a.tZ)(r.xu,{sx:w.tokenMetricsInfo,mt:"2"},"CONTRACT ADDRESS: ",(0,a.tZ)("br",null)," ",(0,a.tZ)(r.kC,{sx:w.tokenMetricsInfoAddress,alignItems:"center"},(0,a.tZ)(r.rU,{variant:"nav",href:e.addressLink,target:"_blank",sx:w.info_link},e.address,(0,a.tZ)("img",{sx:w.iconScan,className:"icon-scan",src:e.addressIcon,alt:""}))))),(0,a.tZ)(r.xu,{sx:w.tokenMetricsChainList,mt:"20px"},"Get HAKKA Token on ",e.shortName,":"),"eth"===e.id?(0,a.tZ)(r.kC,{sx:w.token_metric_responsive,mt:"2"},(0,a.tZ)(r.xu,null,(0,a.tZ)(b,{whatHakka:!0,item:{imageCoin:"iconInch",coinName:"1inch",link:"https://1inch.exchange/#/HAKKA/ETH?network=1"}})),(0,a.tZ)(r.kC,null,(0,a.tZ)(r.xu,{className:"left-bot-token"},(0,a.tZ)(b,{whatHakka:!0,item:{imageCoin:"iconUniswap",coinName:"Uniswap",link:"https://app.uniswap.org/#/swap?outputCurrency=0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd"}})),(0,a.tZ)(r.xu,{className:"right-bot-token"},(0,a.tZ)(b,{whatHakka:!0,item:{imageCoin:"iconBalancer",coinName:"Balancer",link:"https://app.balancer.fi/#/trade/ether/0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd"}})))):(0,a.tZ)(r.kC,{sx:w.token_metric_responsive,mt:"2"},(0,a.tZ)(r.xu,null,(0,a.tZ)(b,{whatHakka:!0,item:{imageCoin:"iconPancakeSwap",coinName:"PancakeSwap",link:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC"}}))))};var Z=function(t){var e=[{id:"eth",imgChain:"iconEthereum",chainName:"Ethereum Mainnet",imgBg:"#f2f2f2"},{id:"bsc",imgChain:"iconBinanceGold",chainName:"Binance Smart Chain",imgBg:"#fcf7de"}],n=[{id:"eth",shortName:"Ethereum",name:"Hakka Finance (HAKKA)",type:"ERC-20",address:"0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",addressLink:"https://etherscan.io/token/0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",addressIcon:s.Z.iconEtherscan},{id:"bsc",shortName:"BSC",name:" Hakka Finance on xDai on BSC (HAKKA)",type:"BEP-20",address:"0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",addressLink:"https://bscscan.com/token/0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",addressIcon:s.Z.iconBSCScan}],o=(0,i.useState)("eth"),d=o[0],c=o[1],l=(0,i.useState)(n[0]),p=l[0],u=l[1];return(0,a.tZ)(i.Fragment,null,(0,a.tZ)(r.xu,{sx:w.tokenMetrics_responsive},(0,a.tZ)(r.xu,{sx:w.tokenMetricsChain},e.map((function(t,e){return(0,a.tZ)(r.kC,{sx:d===t.id?w.chainContent_active:w.chainContent,className:"border-top-active",alignItems:"center",justifyContent:"space-between",key:t.id,onClick:(i=t.id,function(){c(i);var t=n.find((function(t){return t.id===i}));u(t)})},(0,a.tZ)(r.kC,{className:"chain-left-content",alignItems:"center"},(0,a.tZ)(r.xu,{sx:{backgroundColor:t.imgBg,width:"40px",height:"40px",borderRadius:"8px"}},(0,a.tZ)("img",{sx:d===t.id?w.imgChain:w.imgChain_gray,src:s.Z[t.imgChain],alt:""})),(0,a.tZ)(r.xu,{sx:d===t.id?w.chainName_active:w.chainName,className:"chain-text"},t.chainName)),(0,a.tZ)(r.xu,{className:"icon-right",ml:"3"},(0,a.tZ)("img",{sx:w.iconRight,src:d===t.id?s.Z.iconRight:s.Z.iconRightGrey,alt:""})," "));var i}))),(0,a.tZ)(C,{tokenMetrics:p})))},_={utilityHead:{fontSize:[5,6,7,7],color:"#253e47",fontWeight:"normal"},utilityTextLink:{maxWidth:"1200px",alignItems:"center","@media screen and (max-width: 576px)":{flexDirection:"column",justifyContent:"flex-start"}},utilityText:{fontSize:[2,2,3,4],color:"#253e47"},utilityLink:{fontSize:[1,1,2,3],fontWeight:"600",color:"#2da287",cursor:"pointer",marginRight:"5px","@media screen and (max-width: 576px)":{},":hover":{"*":{color:"#3ebd93"},img:{opacity:"0.7"}}},imgForward:{width:"24px"},utilityInfoContainer:{width:"40%",maxWidth:"360px",flex:"1","@media screen and (max-width: 576px)":{width:"100%"},":last-child":{marginLeft:"7.7%","@media screen and (max-width: 576px)":{paddingTop:"20px",marginLeft:"0"}}},utilityImgInfo:{width:"48px"},utilityTitle:{fontSize:[3,3,4,5],color:"#253e47",fontWeight:"700",fontFamily:"system-ui"},detailsInfo:{maxWidth:"1200px","@media screen and (max-width: 576px)":{flexDirection:"column"}}};var v=function(){var t=[{image:"iconParliament",title:"Voting Power",text:"The mintage amount of sHAKKA determines Voting Power. It's immutable and non-transferrable."},{image:"iconMoneyBox",title:"Beneficiary Right",text:"sHAKKA is tradable in secondary market & beneficial in reward contracts."}];return(0,a.tZ)(i.Fragment,null,(0,a.tZ)(r.xu,{sx:_.utilityHead,mb:"20px"},"Utility of HAKKA"),(0,a.tZ)(r.kC,{justifyContent:"space-between",sx:_.utilityTextLink},(0,a.tZ)(r.kC,{sx:_.utilityText},(0,a.tZ)("p",null,"Stake HAKKA to get sHAKKA and bestowed below rights.")),(0,a.tZ)("a",{sx:{textDecoration:"none"},target:"_blank",href:"https://staking.hakka.finance/",rel:"noreferrer"},(0,a.tZ)(r.kC,{sx:_.utilityLink,alignItems:"center"},(0,a.tZ)(r.xu,null,"Stake Portal"),(0,a.tZ)(r.kC,{ml:"1",mt:"1px"},(0,a.tZ)("img",{sx:_.imgForward,src:s.Z.iconForwardGreen,alt:""}))))),(0,a.tZ)(r.kC,{sx:_.detailsInfo,mt:"4"},t.map((function(t,e){return(0,a.tZ)(r.kC,{sx:_.utilityInfoContainer,flexDirection:"column",key:e},(0,a.tZ)("img",{sx:_.utilityImgInfo,src:s.Z[t.image],alt:""}),(0,a.tZ)(r.xu,{sx:_.utilityTitle,mt:"20px",mb:"4px"},t.title),(0,a.tZ)("p",{sx:_.utilityText,dangerouslySetInnerHTML:{__html:t.text}}))}))))};var T=function(t){var e=[{imageCoin:"iconCoingecko",coinName:"Coingecko",link:"https://www.coingecko.com/en/coins/hakka-finance"},{imageCoin:"iconCoinmarketcap",coinName:"CoinMarketCap",link:"https://coinmarketcap.com/en/currencies/hakka-finance/"}],n=[{img:"imageChainlink"},{img:"image1inch"},{img:"imageSynthetix"},{img:"imageCompound"},{img:"imageMaker"},{img:"imageKyberNetwork"},{img:"imageImtoken"},{img:"imageTrustWallet"},{img:"imageDelta"}];return(0,a.tZ)(i.Fragment,null,(0,a.tZ)(r.xu,null,(0,a.tZ)(r.xu,{sx:d.homescreenContainer},(0,a.tZ)(r.kC,{alignItems:"center",sx:d.homescreenSubTitle,onClick:function(){window.open("https://pelith.teamdoor.io/","_blank").focus()}},(0,a.tZ)("img",{src:s.Z.iconFlower,alt:""}),(0,a.tZ)("span",null,"Hakka Finance is ",(0,a.tZ)("span",{sx:{textDecoration:"underline"}},"hiring"),". Come join us!")),(0,a.tZ)(r.xu,{sx:d.homeHeading},"The Most Diversified Decentralized ",(0,a.tZ)("br",null)," Finance Ecosystem"),(0,a.tZ)(r.xu,{sx:d.homeDescription},(0,a.tZ)("p",null,"Hakka Finance is a set of decentralized derivatives & original financial instruments, forming an all-inclusive ecosystem of tools that allow users to pursue financial sovereignty.")),(0,a.tZ)(r.xu,{sx:d.homeCardTop,mt:"4"},(0,a.tZ)(l,null))),(0,a.tZ)(r.xu,{sx:d.homeTotalValue},(0,a.tZ)(f,null)),(0,a.tZ)(r.xu,{sx:d.homescreenContainer},(0,a.tZ)(r.xu,{sx:d.whatHakka},(0,a.tZ)(k,{renderCoin:function(){return e.map((function(t,e){return(0,a.tZ)(b,{key:t.coinName,item:t,i:e})}))}})),(0,a.tZ)(r.xu,{sx:d.tokenMetrics},(0,a.tZ)(Z,null)),(0,a.tZ)(r.xu,{sx:d.blur_img_blue_section},(0,a.tZ)(r.xu,{sx:d.blur_img_blue})),(0,a.tZ)(r.xu,{sx:d.blur_img_green_section_mobile},(0,a.tZ)("img",{sx:d.blur_img_green_mobile,src:s.Z.blurBall,alt:""})),(0,a.tZ)(r.xu,{sx:d.utilityHakka},(0,a.tZ)(v,null)),(0,a.tZ)(r.xu,{sx:d.partners},(0,a.tZ)(r.xu,{sx:d.partnersHead},"Partners & Integrators"),(0,a.tZ)(r.kC,{sx:d.img_partners_responsive,flexWrap:"wrap"},n.map((function(t){return(0,a.tZ)(r.kC,{sx:d.imgPartner_wrapper,key:t.img},"imageDelta"===t.img?(0,a.tZ)("img",{sx:d.imgPartnerBiggerIcon,src:s.Z[t.img],alt:""}):(0,a.tZ)("img",{sx:d.imgPartner,src:s.Z[t.img],alt:""}))})))),(0,a.tZ)(r.xu,{sx:d.blur_img_green_section},(0,a.tZ)("img",{sx:d.blur_img_green,src:s.Z.blurBall,alt:""})),(0,a.tZ)(r.xu,{sx:d.blur_img_blue_section_mobile},(0,a.tZ)(r.xu,{sx:d.blur_img_blue_mobile})))))},A=(n(4547),n(1790),function(){return i.createElement(o.Z,null,i.createElement(T,null))})}}]);
//# sourceMappingURL=component---src-pages-index-js-a3916482c9e8828bdbd7.js.map