!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("apxor")):"function"==typeof define&&define.amd?define(["apxor"],e):(t=t||self)["apxor-qe"]=e(t.Apxor)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d=window.ApxorLogger,f=function(t){return void 0!==t&&!function(t){return null===t}(t)},v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function h(t,e){return Array.from(e).map((function(e,n){return String.fromCharCode(e^function(t,e){return t.charCodeAt(Math.floor(e%t.length))}(t,n))})).join("")}var p=function(t,e){return h(t,e=function(t){var e,n,r,i,o,a,s=0,u=[];if(!t)return t;t+="";do{e=(a=v.indexOf(t.charAt(s++))<<18|v.indexOf(t.charAt(s++))<<12|(i=v.indexOf(t.charAt(s++)))<<6|(o=v.indexOf(t.charAt(s++))))>>16&255,n=a>>8&255,r=255&a,u.push(e),64!==i&&(u.push(n),64!==o&&u.push(r))}while(s<t.length);return u}(e))},g=function(t){switch(t){case"app_event":return"AE";case"client_event":return"CE";case"activity_time":case"activity_event":return"AE"}return"Unknown"},m=function(t){return t.toUpperCase()},_=function(t,e,n){switch(n){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;case"NEQ":return t!==e;case"R":return x(e).test(t);default:return!1}},x=function(t){var e=t.replace(/.*\/([gimuy]*)$/,"$1");e===t&&(e="");var n=e?t.replace(new RegExp("^/(.*?)/"+e+"$"),"$1"):t;return new RegExp(n,e)},y=function(){var t=new Date;return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()},b=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t||!e||!n)return!1;var i=n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),o=e.replace(new RegExp(i,"g"),"(.+)"),a=r?"^".concat(o):"".concat(o,"$"),s=new RegExp(a);return s.test(t)};function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=j(t,e);if(o){var a=function(){if(A(o)){return function(t){return T(t)}(o)}return d.info("Invalid target element. Width and height are 0 for element: ".concat(t,". Can't show tooltip")),!1};return a()}return n?(d.info("Not found yet. Rechecking the DOM."),S(i,r,t,e)):(d.info("Element with selector:".concat(t," not found.")),!1)}function S(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=setInterval((function(){var e=j(n,r);if(e){clearInterval(i);!function(){if(A()){T()}else d.info("Invalid target element. Width and height are 0 for element: ".concat(n,". Can't show tooltip"))}()}else(t-=1)<=0&&(clearInterval(i),console.warn("Element with selector:".concat(n," not found.")))}),e)}var j=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.getElementById(t);if(!r)try{r=document.querySelector(t)}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}(r||(r=E(t)),!r&&n.length>0)&&(r=null===(e=document.getElementById(n))||void 0===e||null===(e=e.contentWindow)||void 0===e||null===(e=e.document)||void 0===e?void 0:e.querySelector(t));return r},E=function(t){var e=t.indexOf("svg");-1!==e&&(t=t.substring(0,e)+"svg:svg");try{return document.xtfi(t,document,(function(t){return"svg"===t?"http://www.w3.org/2000/svg":null}),XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}return null};function A(t){try{var e=t.getBoundingClientRect();if(0===e.width||0===e.height)return!1}catch(t){return!1}return!0}function T(t){var e,n,r,i;return!!(n=(e=t).offsetHeight,r=e.offsetWidth,(i=e.getBoundingClientRect()).left>=-r&&i.top>=-n&&i.right<=(window.innerWidth||document.documentElement.clientWidth)+r&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n)}var P=function(t){var e='\n        <style> \n          .apx-container{\n            padding:10px;\n          }\n        </style>\n        <div id="apx-innerElement" class="apx-container">\n              <div id="close-button" style="cursor: pointer;position:absolute;top:9px;right:9px;"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>\n                </svg>\n              </div>\n              <div style="font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;\n              color: #FFFFFF; display: flex; gap: 12px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />\n</svg><div style = "align-self: center;padding-right:20px;">'.concat(t,"</div></div>\n        </div>\n      "),n=document.createElement("div");n.style="\n        z-index:99999999;\n        background:#16202f;\n        position:fixed;\n        top:1%;\n        right:1%;\n        border-radius: 12px;\n      ",n.innerHTML=e,n.id="apx-container",document.body.appendChild(n)},L=window.ApxorLogger,I=a((function e(){var n=this;i(this,e),s(this,"tGHB","ALL"),s(this,"qLdJ",[]),s(this,"SRmP",[]),s(this,"userAttributesValidated",!0),s(this,"sessionAttributeValidated",!0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(n.tGHB=t.audience.audience_type,n.qLdJ=t.audience.attributes.user,n.SRmP=t.audience.attributes.session,!Array.isArray(n.qLdJ)||!Array.isArray(n.SRmP))return L.error("No attributes"),!1}catch(t){return L.error(t),!1}return!0})),s(this,"validate",(function(e,r){var i=!0;"FTU"===n.tGHB&&(i=t.getController().getSessionInfo().is_first_session);var o=n.QjTp(e,n.qLdJ),a=n.QjTp(r,n.SRmP);return o||(n.userAttributesValidated=!1),a||(n.sessionAttributeValidated=!1),i&&o&&a})),s(this,"QjTp",(function(t,e){var n=e.length,r=!0;try{for(var i,o=function(){var n=e[a];if(void 0===t[n.name]||!1===r)return{v:!1};var i=n.operator,o=n.type,s=n.value.map((function(t){if("s"===o)return t;if("l"===o)return parseInt(t);if("f"===o)return parseFloat(t);if("b"===o)switch(t){case"true":return!0;case"false":return!1;default:return t}})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return"s"===o?t="".concat(t):"l"===o?t=parseInt(t):"f"===o?t=parseFloat(t):"b"===o&&(t=!!t),_(t,e,i)}))}));r=r&&u},a=0;a<n;a++)if(i=o())return i.v}catch(t){L.error(t),r=!1}return r}))})),C=window.ApxorLogger,M=a((function e(){var n=this;i(this,e),s(this,"xcWS",0),s(this,"oPDT",0),s(this,"PDIP","SESSION"),s(this,"jVTL",0),s(this,"DSOg",0),s(this,"cOnN",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.Froc=t._id,n.bGfj=t.meta,n.xcWS=t.frequency.count,-1===n.xcWS&&(n.xcWS=1e3),n.cOnN=n.xcWS,n.oPDT=t.frequency.time_interval,n.PDIP=t.frequency.validity,n.DSOg=t.frequency.ses_lmt,n._dayCount=t.frequency.day_lmt;var e=it.getInstance().getQeState();if(!f(e)||!f(e[t._id]))return!0;if("SESSION"===n.PDIP){if(n.xcWS=parseInt(n.xcWS)-parseInt(e[t._id].SESSION),n.xcWS<=0)return n.mUxj("Session limit reached"),console.warn("Max count limit reached for session:"+t._id),!1}else{if("OVERALL"!==n.PDIP)return C.info("Invalid config."),!1;if(n.xcWS=parseInt(n.xcWS)-parseInt(e[t._id].OVERALL),n.xcWS<=0)return n.mUxj("Overall limit reached"),console.warn("Max count limit reached for overall:"+t._id),!1}}catch(t){return C.error(t),!1}return!0})),s(this,"ZklH",(function(){n.xcWS=n.xcWS-1})),s(this,"getFrequencyCount",(function(){return n.xcWS})),s(this,"IjaB",(function(){"SESSION"===n.PDIP&&(n.xcWS=n.cOnN,C.info("Campaign Limit reset"))})),s(this,"QWVN",(function(t){try{if(n.xcWS<=0)return"OVERALL"===n.PDIP?n.mUxj("Overall limit reached"):"SESSION"===n.PDIP&&n.mUxj("Session limit reached"),!1;var e=it.getInstance().getQeState();if(!f(e)||!f(e[t]))return!0;if(0!==n.DSOg)if(parseInt(n.DSOg)-parseInt(e[t].SESSION)<=0)return n.mUxj("Session limit reached"),!1;if(0!==n._dayCount){var r,i=y();if(parseInt(n._dayCount)-parseInt((null===(r=e[t])||void 0===r?void 0:r.DATES[i])||0)<=0)return n.mUxj("Day limit reached"),!1}}catch(t){n.mUxj("Error validating the frequency: ".concat(t)),C.error("Error validating the frequency:"+t)}return!0})),s(this,"mUxj",(function(e){var r;null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===n.bGfj.type?"survey":"campaign",apx_nudge_id:n.Froc,apx_nudge_name:n.bGfj.name,apx_variant_code:n.bGfj.isExperiment||n.bGfj.only_context?null===(r=n.bGfj.attr)||void 0===r?void 0:r.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:e})}))})),F=a((function t(){var e=this;i(this,t),s(this,"CRxs",""),s(this,"tGHB",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r;e.CRxs=t.meta.name,e.tGHB=t.meta.type,e._only_context=t.meta.only_context,e._attr=(null===(n=t.meta)||void 0===n?void 0:n.attr)||{},e._isExperiment=null===(r=t.meta)||void 0===r?void 0:r.isExperiment}catch(t){return window.ApxorLogger.error(t),!1}return!0}))})),G=window.ApxorLogger,O=a((function t(){var e=this;i(this,t),s(this,"GnKd",-1),s(this,"JSuJ",-1),s(this,"vZQV",-1),s(this,"cvTA",-1),s(this,"QNxT",!1),s(this,"_nudge_expired",!1),s(this,"_not_yet_active",!1),s(this,"_not_in_specified_time",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(isNaN(Date.parse(t.validity.start_date))||isNaN(Date.parse(t.validity.end_date)))return G.error("Not valid dates"),!1;if(e.GnKd=Date.parse(t.validity.start_date),e.JSuJ=Date.parse(t.validity.end_date),f(t.at_specific_time)&&(e.QNxT=t.at_specific_time,e.QNxT&&f(t.time_limits))){var n=(new Date).toISOString().split("T")[0];if(e.vZQV=Date.parse(n+"T"+t.time_limits.start_time+":00.000Z"),e.cvTA=Date.parse(n+"T"+t.time_limits.end_time+":00.000Z"),isNaN(e.vZQV)||isNaN(e.cvTA))return G.error("Not valid times"),!1}}catch(t){return G.error(t),!1}return!0})),s(this,"validate",(function(){var t=Date.now();return t>e.GnKd&&t<e.JSuJ?(!e.QNxT||t>=e.vZQV&&t<=e.cvTA||(e._not_in_specified_time=!0),!e.QNxT||t>=e.vZQV&&t<=e.cvTA):(t<e.GnKd?e._not_yet_active=!0:t>e.JSuJ&&(e._nudge_expired=!0),!1)}))})),D=a((function t(){var e=this;i(this,t),s(this,"CRxs",""),s(this,"TGsL",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.CRxs=t.name,e.TGsL=t.additional_info}catch(t){return!1}return!0}))})),R=a((function t(){var e=this;i(this,t),s(this,"vSJe",0),s(this,"RfXe",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.vSJe=Number(t.lower),e.RfXe=Number(t.upper),isNaN(e.vSJe)||isNaN(e.RfXe))return!1}catch(t){return!1}return!0}))})),q=a((function t(){var e=this;i(this,t),s(this,"FvLs",0),s(this,"SCMJ",""),s(this,"xqxh",""),s(this,"UMmW",new D),s(this,"LPMP",new R),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.SCMJ=t.event_type,e.xqxh=t.activity,e.UMmW.parse(t.details)&&e.LPMP.parse(t.time_bounds)}catch(t){return!1}}))})),N=window.ApxorLogger,U=a((function t(){var e=this;i(this,t),s(this,"FvLs",0),s(this,"qsWU",-1),s(this,"xcWS",0),s(this,"jZIq",""),s(this,"xqxh",""),s(this,"SCMJ",""),s(this,"LPMP",new R),s(this,"UMmW",new D),s(this,"oBEY",new q),s(this,"SEbK","AND"),s(this,"babd",!1),s(this,"tGHB",void 0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.qsWU=t.sequence,e.xcWS=t.count_config.count,e.jZIq=t.count_config.operator,e.xqxh=t.activity,e.SCMJ=t.event_type,e.SEbK=t.combine_operator,e.tGHB=t.type,e.UMmW.parse(t.details)&&e.oBEY.parse(t.trigger)&&e.LPMP.parse(t.time_bounds)}catch(t){return N.error(t),!1}}))})),H=window.ApxorLogger,W=a((function t(){var e=this;i(this,t),s(this,"xcWS",0),s(this,"jZIq",""),s(this,"SCMJ",""),s(this,"LPMP",new R),s(this,"UMmW",new D),s(this,"SEbK","AND"),s(this,"parse",(function(t){try{return e.xcWS=t.count_config.count,e.jZIq=t.count_config.operator,e.SCMJ=t.event_type,e.SEbK=t.combine_operator,e.UMmW.parse(t.details)&&e.LPMP.parse(t.time_bounds)}catch(t){return H.error(t),!1}}))})),B=window.ApxorLogger,k=function(){function e(){var n=this;i(this,e),s(this,"hrBB",0),s(this,"Froc",""),s(this,"PpjH",new U),s(this,"JDns",new W),s(this,"Rlwv",!1),s(this,"qNVO",!1),s(this,"flfh",0),s(this,"SEbK","AND"),s(this,"mdIS","OR"),s(this,"htAz",-1),s(this,"rNZH",[]),s(this,"QaJS",{}),s(this,"dlAZ",!1),s(this,"initialize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(n.Froc=r,n.flfh=i,n.rNZH=a,"termination"===s&&""!==s){n.JDns.parse(e);return n.mdIS=n.JDns.SEbK,n.Pycx(),!0}var u=n.PpjH.parse(e);if(u){if(n.SEbK=n.PpjH.SEbK,n.PpjH.babd){var l=n.PpjH.UMmW.CRxs;"APX_PAGE_OPENED"===l&&(l=n.PpjH.UMmW.TGsL.navigation_id,l=f(l)?l:n.PpjH.UMmW.CRxs),n.htAz=t.getController().getEventCount(l);var c=n.PpjH.xcWS,d=n.PpjH.jZIq;if(n.qNVO=n.fXak(n.htAz-1,c,d,!1),n.Rlwv=n.qNVO,n.qNVO&&"APX_PAGE_OPENED"===n.PpjH.UMmW.CRxs)return!0}return o&&0!==i||n.Izhy(),!0}return!1})),s(this,"Izhy",(function(){var t,e=n.PpjH,r=e.oBEY,i=it.getInstance();"app_start"===r.SCMJ?(n.Rlwv=!0,i.registerForEvent(g(e.SCMJ)+"___"+e.UMmW.CRxs,n.bpTD)):i.registerForEvent(g(e.SCMJ)+"___"+r.UMmW.CRxs,n.bpTD),null!==(t=window.ApxorRTM)&&void 0!==t&&t.badgesLists.includes(n.Froc)&&i.registerForEvent(g(e.SCMJ)+"___"+"apxor-badge-container-".concat("-".concat(n.Froc).replaceAll(" ","").replace(/[^\w\s]/gi,"")),n.bpTD)})),s(this,"Pycx",(function(){var t=n.JDns,e=it.getInstance();n.Rlwv=!0,e.registerForEvent(g(t.SCMJ)+"___"+t.UMmW.CRxs,n.jjXn)})),s(this,"kMau",(function(t,e,r,i){var o,a=(Date.now()-n.QaJS[e])/1e3;(null===(o=n.PpjH)||void 0===o||null===(o=o.UMmW)||void 0===o||null===(o=o.TGsL)||void 0===o?void 0:o.time)/1e3>a&&n._displayCampaign(r)})),s(this,"TGvr",(function(t,e,r,i){var o,a;n.dlAZ=!0;var s=Date.now(),u=null===(o=n.PpjH)||void 0===o||null===(o=o.oBEY)||void 0===o?void 0:o.UMmW.CRxs,l=(s-n.QaJS[u])/1e3,c=null===(a=n.PpjH)||void 0===a||null===(a=a.UMmW)||void 0===a||null===(a=a.TGsL)||void 0===a?void 0:a.time;(c/=1e3)>l&&n._displayCampaign(r)})),s(this,"bpTD",(function(e,r,i,o){var a,s,u=it.getInstance();if(n.Rlwv){if(null!==(a=window.ApxorRTM)&&void 0!==a&&a.isBadgePresent&&null!==(s=window.ApxorRTM)&&void 0!==s&&s.badgesLists.includes(n.Froc)&&t.getController().isBadgeTriggerSatisfied(n.Froc))return n.qNVO=!0,n.PpjH.FvLs=i,void u.validate(n.Froc,n.flfh);g(n.PpjH.SCMJ)===e&&n.xOex(i-n.PpjH.oBEY.FvLs,n.PpjH.LPMP)&&n.PpjH.UMmW.CRxs===r&&n.Xaxr(n.PpjH.UMmW.TGsL,o)&&(n.hrBB+=1,n.qNVO=n.fXak(n.hrBB,n.PpjH.xcWS,n.PpjH.jZIq),n.qNVO&&(n.PpjH.FvLs=i,u.validate(n.Froc,n.flfh)))}else if(n.Rlwv=n.QgNZ(e,r,i,o),n.Rlwv){var l=n.PpjH,c=l.oBEY;if(c.FvLs=i,"activity_time"===(null==l?void 0:l.SCMJ)){var d,f,v,h=null==l||null===(d=l.UMmW)||void 0===d||null===(d=d.TGsL)||void 0===d?void 0:d.time;(null==l||null===(f=l.UMmW)||void 0===f||null===(f=f.TGsL)||void 0===f?void 0:f.nkpi.length)>0&&(setTimeout((function(){n.dlAZ||(n.qNVO=!0,n.qNVO&&(n.hrBB+=1,n.qNVO=n.fXak(n.hrBB,n.PpjH.xcWS,n.PpjH.jZIq),n.qNVO&&(n.PpjH.FvLs=i,u.validate(n.Froc,n.flfh)))),l.UMmW.TGsL.nkpi.map((function(t){u.unregisterFromEvent(m(l.UMmW.TGsL.et)+"___"+t,n)}))}),h),l.UMmW.TGsL.nkpi.map((function(t){u.registerForEvent(m(l.UMmW.TGsL.et)+"___"+t,n.TGvr)}))),(null==l||null===(v=l.UMmW)||void 0===v||null===(v=v.TGsL)||void 0===v?void 0:v.kpi.length)>0&&(setTimeout((function(){l.UMmW.TGsL.kpi.map((function(t){u.unregisterFromEvent(m(l.UMmW.TGsL.et)+"___"+t,n)}))}),h),l.UMmW.TGsL.kpi.map((function(t){t===l.oBEY.UMmW.CRxs?(u.unregisterFromEvent(g(c.SCMJ)+"___"+c.UMmW.CRxs,n),u.registerForEvent(m(l.UMmW.TGsL.et)+"___"+t,n.kMau)):u.registerForEvent(m(l.UMmW.TGsL.et)+"___"+t,n.TGvr)})))}else u.unregisterFromEvent(g(c.SCMJ)+"___"+c.UMmW.CRxs,n),u.registerForEvent(g(l.SCMJ)+"___"+l.UMmW.CRxs,n);n.QaJS[r]=Date.now()}})),s(this,"jjXn",(function(t,e,r,i){var o=it.getInstance();g(n.JDns.SCMJ)===t&&n.xOex(r,n.JDns.LPMP)&&n.JDns.UMmW.CRxs===e&&n.Xaxr(n.JDns.UMmW.TGsL,i)&&(n.hrBB+=1,n.qNVO=n.fXak(n.hrBB,n.JDns.xcWS,n.JDns.jZIq),n.qNVO&&(n.JDns.FvLs=r,o.validateForTermination(n.Froc,n.flfh)))})),s(this,"QgNZ",(function(t,e,r,i){var o=n.PpjH.oBEY;return g(o.SCMJ)===t&&o.UMmW.CRxs===e&&n.xOex(r,o.LPMP)&&n.Xaxr(o.UMmW.TGsL,i)})),s(this,"xOex",(function(t,e){var n=Math.ceil(t);return n>e.vSJe&&n<e.RfXe})),s(this,"fXak",(function(t,e,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];switch(i&&n.PpjH.babd&&(t+=n.htAz),r){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;default:return!1}})),s(this,"Xaxr",(function(t,e){var n=!0;try{var i,o=function(){if(!1===n)return{v:!1};if("object"===r(t[a])){var i,o=t[a].op,s=t[a].t;if("s"===s)i=t[a].val;else if("l"===s||"f"===s)i=parseFloat(t[a].val);else if("b"===s)switch(t[a].val){case"true":i=!0;break;case"false":i=!1;break;default:i=t[a].val}var u=(Array.isArray(e[a])?e[a]:[e[a]]).some((function(t){return"s"===s?t="".concat(t):"l"===s?t=parseInt(t):"f"===s?t=parseFloat(t):"b"===s&&(t=!!t),_(t,i,o)}));n=n&&u}else n=n&&_(e[a],t[a],"EQ")};for(var a in t)if(i=o())return i.v}catch(t){B.error(t),n=!1}return n}))}return a(e,[{key:"_displayCampaign",value:function(t){var e=it.getInstance();this.qNVO=!0,this.qNVO&&(this.hrBB+=1,this.qNVO=this.fXak(this.hrBB,this.PpjH.xcWS,this.PpjH.jZIq),this.qNVO&&(this.PpjH.FvLs=t,e.validate(this.Froc,this.flfh)))}}]),e}(),V=window.ApxorLogger,Q=a((function e(){var n=this;i(this,e),s(this,"xevi",[]),s(this,"_ret_day",{}),s(this,"mfCq",{}),s(this,"mIrF",!1),s(this,"rFyv",!1),s(this,"retainedDaysValidated",!0),s(this,"retainedSessionValidated",!0),s(this,"eventDoneInLT",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.xevi=t.overall_cfg.events,n._ret_day=t.overall_cfg.ret_day,n.mfCq=t.overall_cfg.session,n.mIrF=t.overall_cfg.toggleRetDay,n.rFyv=t.overall_cfg.toggleSession}catch(t){return V.error(t),!1}return!0})),s(this,"validate",(function(){var e=parseInt(t.getController().getFromStorage("apx_retained_days")),r=parseInt(t.getController().getFromStorage("apx_retained_session"));if(n.mIrF&&!isNaN(e)&&!(e>=n._ret_day.from&&e<=n._ret_day.to))return n.retainedDaysValidated=!1,!1;if(n.rFyv&&!isNaN(r)&&!(r>=n.mfCq.from&&r<=n.mfCq.to))return n.retainedSessionValidated=!1,!1;try{for(var i=t.getController().getFromStorage("_apx_lt_count"),o=t.getSiteId(),a=JSON.parse((new TextDecoder).decode(function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return e}(p(o,i)))),s=0;s<n.xevi.length;s++){if(a[n.xevi[s].name.replace("'","").replace("’","")])return n.eventDoneInLT=!0,!1}}catch(t){V.error("Failed to validate the lt count:"+t)}return!0}))})),J=window.ApxorLogger,Z=a((function t(){var e=this;i(this,t),s(this,"qLdJ",[]),s(this,"SRmP",[]),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.qLdJ=t.attributes.user,e.SRmP=t.attributes.session,!Array.isArray(e.qLdJ)||!Array.isArray(e.SRmP))return J.error("No attributes"),!1}catch(t){return J.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.QjTp(t,e.qLdJ)&&e.QjTp(n,e.SRmP)})),s(this,"QjTp",(function(t,e){var n=e.length,r=!0;try{for(var i,o=function(){var n=e[a];if(!t[n.name]||!1===r)return{v:!1};var i=n.operator,o=n.type,s=n.value.map((function(t){return"s"===o?t:"l"===o?parseInt(t):"f"===o?parseFloat(t):void 0})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return _(t,e,i)}))}));r=r&&u},a=0;a<n;a++)if(i=o())return i.v}catch(t){J.error(t),r=!1}return r}))})),X=a((function e(){var n=this;i(this,e),s(this,"UudK",t.getController()),s(this,"type",""),s(this,"_duration_seconds",0),s(this,"uKex",1),s(this,"parse",(function(t){try{var e,r,i;if(n.tGHB=null===(e=t.terminate_info.time_based)||void 0===e?void 0:e.type,n._duration_seconds=null===(r=t.terminate_info)||void 0===r?void 0:r.time_based.duration_seconds,n.uKex=null===(i=t.terminate_info.time_based)||void 0===i?void 0:i.days,n.hzhT(t._id))return n.UudK.persistTerminationInfoLocally(t._id),!1}catch(t){return!1}return!0})),s(this,"hzhT",(function(t){var e,r=JSON.parse(n.UudK.getFromStorage("apx_termination_ID"));if(!r[t]||null===(e=r[t])||void 0===e||!e.startDate)return!1;var i,o=new Date(r[t].startDate),a=new Date((i=new Date).getMonth()+"/"+i.getDate()+"/"+i.getFullYear()),s=parseInt((a-o)/864e5,10),u=function(){var t=new Date;return{hours:t.getHours(),mins:t.getMinutes()}}(),l=r[t].vZQV;return s===n.uKex&&u.hours>=l.hours||s>n.uKex||r[t].goalAcheived}))})),z=a((function t(){var e=this;i(this,t),s(this,"enable_goal_events",!1),s(this,"attributes",{}),s(this,"aMAU",new Z),s(this,"ZIkI",new X),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r,i;if(e.enable_time_based=null==t||null===(n=t.terminate_info)||void 0===n?void 0:n.enable_time_based,e.enable_time_based&&!e.ZIkI.parse(t))return!1;if(e.enable_goal_events=null==t||null===(r=t.terminate_info)||void 0===r?void 0:r.enable_goal_events,e.enable_attributes=null==t||null===(i=t.terminate_info)||void 0===i?void 0:i.enable_attributes,e.enable_attributes&&!e.aMAU.parse(t.terminate_info))return!1}catch(t){return window.ApxorLogger.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.aMAU.validate(t,n)}))})),Y=a((function t(){var e=this;i(this,t),s(this,"cMFa",""),s(this,"OuoQ",""),s(this,"zgtX",""),s(this,"sPhp",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.cMFa=null==t?void 0:t.screen_binding,!e.cMFa||(e.OuoQ=null==t?void 0:t.binding.url,e.zgtX=null==t?void 0:t.binding.var,e.sPhp=null==t?void 0:t.binding.operator,!0)}catch(t){return window.ApxorLogger.error(t),!1}})),s(this,"validate",(function(){var t=e.OuoQ,n=e.zgtX,r=e.sPhp,i=window.location.href;return!e.cMFa||("EQ"===r?t.includes(n)?!!b(i,t,n,!1):i===t:"SW"===r?t.includes(n)?!!b(i,t,n,!0):!!i.startsWith(t):void 0)}))})),K=window.ApxorLogger,$=a((function e(){var r=this;i(this,e),s(this,"HnMd",[]),s(this,"ULip",[]),s(this,"Froc",""),s(this,"bGfj",new F),s(this,"ZweY",new I),s(this,"PDIP",new O),s(this,"Xtsk",new M),s(this,"mYfH",new Q),s(this,"XPHV",new z),s(this,"qhZS",new Y),s(this,"IXTI",!1),s(this,"RQgh",[]),s(this,"_variant_code",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e;if(!f(t._id))return K.error("No Id"),!1;if(!f(t.enabled)||!t.enabled)return K.error("Not enabled"),!1;if(!(r.bGfj.parse(t)&&r.PDIP.parse(t)&&r.Xtsk.parse(t)&&r.ZweY.parse(t)&&r.mYfH.parse(t)&&r.XPHV.parse(t)&&r.qhZS.parse(t)))return!1;if(r._variant_code=r.bGfj._isExperiment||r.bGfj._only_context?null===(e=r.bGfj._attr)||void 0===e?void 0:e.apx_variant_code:"TG",!f(t.conditions)||!Array.isArray(t.conditions))return K.error("No valid conditions",t.conditions),!1;r.Froc=t._id,r.IXTI=!!f(t.sequence_enabled)&&t.sequence_enabled,r.IXTI&&t.conditions.sort((function(t,e){return t.sequence<e.sequence}));var n=t.conditions,i=n.length,o=null==t?void 0:t.no_context_enabled;0===i&&o&&setTimeout((function(){r.mGQt()}),10);for(var a=function(){r.RQgh=[];var t=n[s];if("didn't"===t.type){var e,i={trigger_key:t.trigger.details.name,no_kpi_array:null==t||null===(e=t.details)||void 0===e||null===(e=e.additional_info)||void 0===e?void 0:e.nkpi,condition_id:null==t?void 0:t._id,time_bounds:t.time_bounds.upper};r.RQgh=[].concat(u(r.RQgh),[i])}var o=new k;if(o.initialize(t,r.Froc,s,r.IXTI,r.RQgh)){r.HnMd.push(o);var a=(null==t?void 0:t.timeout)/(null==t?void 0:t.findinterval),l=(null==t?void 0:t.frameid)||"",c=null==t?void 0:t.url;window.location.href===c&&"view_visibility"===t.event_type&&!0===w(t.view_id,l,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,a)&&r.mGQt(!0),window.addEventListener("navigate",(function(e){var n=null==t?void 0:t.url;window.location.href===n&&"view_visibility"===t.event_type&&!0===w(t.view_id,l,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,a)&&r.mGQt(!0)}))}},s=0;s<i;s++)a();if(r.XPHV.enable_goal_events)for(var l=t.terminate_info.goal_events.events,c=l.length,d=0;d<c;d++){var v=new k;v.initialize(l[d],r.Froc,d,!0,[],"termination")&&r.ULip.push(v)}return r.HnMd.length>0}catch(t){return K.error(t),!1}})),s(this,"xtfi",(function(t){if(!(t<0))if(r.IXTI){var e=r.HnMd[t];if(f(e)&&e.qNVO){var n=r.HnMd[t-1];if(f(n)&&!n.qNVO)return;var i=r.HnMd[t+1];f(i)?i.Izhy():r.mGQt()}}else r.mGQt()})),s(this,"QHBG",(function(t){t<0||r.dhGj()})),s(this,"mGQt",(function(){var e,i,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=t.getController().getUserAttributes(),s=t.getController().getSessionAttributes();if(null!==(e=window.ApxorRTM)&&void 0!==e&&e.isBadgePresent&&null!==(i=window.ApxorRTM)&&void 0!==i&&i.badgesLists.includes(r.Froc)&&t.getController().isBadgeTriggerSatisfied(r.Froc)||null==t||t.logEvent("apx_trigger_satisfied",{apx_nudge_type:"SURVEY"===r.bGfj.tGHB?"survey":"campaign",apx_nudge_id:r.Froc,apx_nudge_name:r.bGfj.CRxs,apx_variant_code:r.bGfj._isExperiment||r.bGfj._only_context?r.bGfj._attr.apx_variant_code:"TG"}),!(r.PDIP.validate()&&r.ZweY.validate(a,s)&&r.mYfH.validate()&&r.qhZS.validate()))return r.mYfH.retainedDaysValidated?r.mYfH.retainedSessionValidated?r.mYfH.eventDoneInLT?void r.mUxj("Event done in life time"):r.ZweY.userAttributesValidated?r.ZweY.sessionAttributeValidated?r.PDIP._not_in_specified_time?void r.mUxj("Time limits check failed"):r.PDIP._not_yet_active?void r.mUxj("not in the scheduled time"):r.PDIP._nudge_expired?void r.mUxj("nudge expired"):void 0:void r.mUxj("Session property filter not met"):void r.mUxj("User property filter not met"):void r.mUxj("User session criteria not met"):void r.mUxj("Retained day criteria not met");var u=r.HnMd.length,l=u<1,c="";0===u&&(l=!0);for(var d=0;d<u;d++){var f=r.HnMd[d],v=f.qNVO;if(""===c.trim())l=v;else switch(c){case"AND":l=l&&v;break;case"OR":l=l||v}c=f.SEbK}if(!0===o&&(l=!0),l){if(console.debug("onCondition satisfied"),!r.Xtsk.QWVN(r.Froc)){if(console.warn("Maximum limit reached",r.Froc),t.getController().isTestDevice()){P("Maximum limit reached for campaign name ".concat(r.bGfj.CRxs));var h=document.getElementById("close-button"),p=function(){var t=document.getElementById("apx-container");null==t||t.remove()};null==h||h.addEventListener("click",p),window.setTimeout(p,2e4)}return}console.log("Dispatching event",r.bGfj.tGHB),t.logEvent("apx_context_evaluated",n(n({apx_nudge_type:"SURVEY"===r.bGfj.tGHB?"survey":"campaign",apx_nudge_id:r.Froc,apx_nudge_name:r.bGfj.CRxs,apx_variant_code:r.bGfj._isExperiment||r.bGfj._only_context?r.bGfj._attr.apx_variant_code:"TG"},r.bGfj._attr),{},{message_name:r.bGfj.CRxs,id:r.Froc})),t.getController().dispatchEvent(r.bGfj.tGHB,{name:r.bGfj.tGHB,additional_info:{uuid:r.Froc,name:r.bGfj.CRxs}})}})),s(this,"dhGj",(function(){for(var e=r.ULip.length,i=e<1,o="",a=0;a<e;a++){var s=r.ULip[a],u=s.qNVO;if(""===o.trim())i=u;else switch(o){case"AND":i=i&&u;break;case"OR":i=i||u}o=s.mdIS}i&&(console.log("Dispatching event",r.bGfj.tGHB),t.getController().persistTerminationInfoLocally(r.Froc),!0===r.bGfj._only_context&&t.logEvent("apx_context_evaluated",n(n({},r.bGfj._attr),{},{message_name:r.bGfj.CRxs,id:r.Froc})),t.getController().dispatchEvent(r.bGfj.tGHB,{name:r.bGfj.tGHB,additional_info:{uuid:r.Froc,name:r.bGfj.CRxs}}))})),s(this,"validateForTerminationAttributes",(function(){var e=t.getController().getUserAttributes(),n=t.getController().getSessionAttributes();return r.XPHV.validate(e,n)})),s(this,"ZklH",(function(){r.Xtsk.ZklH()})),s(this,"getFrequencyCount",(function(){return r.Xtsk.getFrequencyCount()})),s(this,"Wfxf",(function(){return r.Xtsk.IjaB()})),s(this,"mUxj",(function(e){var n;null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.bGfj.tGHB?"survey":"campaign",apx_nudge_id:r.Froc,apx_nudge_name:r.bGfj.CRxs,apx_variant_code:r.bGfj._isExperiment||r.bGfj._only_context?null===(n=r.bGfj._attr)||void 0===n?void 0:n.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:e})}))})),tt=a((function t(){var e=this;i(this,t),s(this,"qwox",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{configs:[]};if(f(t)&&f(t.configs)){var n=t.configs;if(!Array.isArray(n))return;n.sort((function(t,e){var n,r;return(null!==(n=t.prio)&&void 0!==n?n:-1)-(null!==(r=e.prio)&&void 0!==r?r:-1)}));for(var r=0;r<n.length;r++){var i=n[r],o=i._id,a=new $;a.parse(i)?e.qwox[o]=a:console.warn("Failed to parse cfg",o)}}})),s(this,"validate",(function(t,n){e.qwox[t]&&e.qwox[t].xtfi(n)})),s(this,"getVariantCode",(function(t){return e.qwox[t]?e.qwox[t]._variant_code:""})),s(this,"validateForTermination",(function(t,n){e.qwox[t]&&e.qwox[t].QHBG(n)})),s(this,"validateForTerminationAttributes",(function(t){return!!e.qwox[t]&&e.qwox[t].validateForTerminationAttributes()})),s(this,"ZklH",(function(t){e.qwox[t].ZklH()})),s(this,"getFrequencyCount",(function(t){var n=e.qwox[t];if(null!=n)return n.getFrequencyCount()})),s(this,"resetFrequencyCounts",(function(){var t=e.qwox;for(var n in t)t[n].Wfxf()})),s(this,"rhsF",(function(t){try{if(e.qwox){var n=e.qwox[t];if(n&&n.bGfj)return n.bGfj}}catch(t){console.log("Error in getting the campaign meta ".concat(t))}return{}}))})),et=window.ApxorLogger,nt=a((function e(){var n=this;i(this,e),s(this,"BjTl",{}),s(this,"MmME",[]),s(this,"Wtkt",!1),s(this,"initialize",(function(){var e=t.getController();e.registerForEvent("APP_EVENT",(function(t){return n.SZEw(t,"AE")})),e.registerForEvent("CLIENT_EVENT",(function(t){return n.SZEw(t,"CE")}))})),s(this,"jrQk",(function(){for(var t in n.MmME)n.rkkO(t.event,t.key,t.type);n.Wtkt=!0})),s(this,"tkkH",(function(t,e){var r;"function"==typeof e&&((r=n.BjTl[t]?n.BjTl[t]:[]).push(e),n.BjTl[t]=r,et.debug("Listeners list: ",n.BjTl))})),s(this,"unregisterFromEvent",(function(t,e){if(n.BjTl[t]){for(var r=n.BjTl[t],i=[],o=0;o<r.length;o++){var a=r[o];a!==e&&i.push(a)}n.BjTl[t]=i}})),s(this,"SZEw",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AE",r=e+"___"+t.name;n.rkkO(t,r,e)})),s(this,"rkkO",(function(e,r,i){if(n.Wtkt){if(et.debug("Notifying listeners for event: "+e+", "+r,n.BjTl),n.BjTl[r])for(var o=n.BjTl[r],a=t.getController().getSDKRunningTimeInSec(),s=0;s<o.length;s++){(0,o[s])(i,e.name,a,e.additional_info)}}else n.MmME.push({event:e,key:r,type:i})}))})),rt=window.ApxorLogger,it=function(){function e(){var n=this;return i(this,e),s(this,"PYlf",!1),s(this,"etAw",null),s(this,"lltI",y()),s(this,"zUeD",new nt),s(this,"IIvN",t.getSiteId()),s(this,"bpiR",{}),s(this,"getQeState",(function(){try{var e=t.getController().getFromStorage("qe_state");return e?JSON.parse(p(n.IIvN,e)):(n.bpiR={},n.setQeState())}catch(t){return n.bpiR={},n.setQeState()}})),s(this,"setQeState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{t.getController().persistToStorage("qe_state",n.bpiR,!0)}catch(r){""===e?n.bpiR={}:n.bpiR[e]={SESSION:0,OVERALL:0,DATES:{}},t.getController().persistToStorage("qe_state",n.bpiR,!0)}return n.bpiR})),s(this,"initialize",(function(){n.PYlf||(n.PYlf=!0,n.etAw=new tt,n.zUeD.initialize(),n.bpiR=n.getQeState(),rt.info("QE Initialized.."))})),s(this,"parse",(function(t){n.dKBr()?(n.etAw.parse(t),n.zUeD.jrQk()):rt.warn("Must call init first. Unable to proceed")})),s(this,"validate",(function(t,e){n.dKBr()&&n.etAw.validate(t,e)})),s(this,"getVariantCode",(function(t){return n.etAw.getVariantCode(t)})),s(this,"validateForTermination",(function(t,e){n.dKBr()&&n.etAw.validateForTermination(t,e)})),s(this,"validateForTerminationAttributes",(function(t,e){return n.etAw.validateForTerminationAttributes(t,e)})),s(this,"updateCount",(function(t){try{f(n.bpiR[t])||n.createObjConfig(t),n.incrementFrequencies(t),n.setQeState(t),n.etAw.ZklH(t)}catch(t){console.log("Could not update the count config:".concat(t))}})),s(this,"resetFrequencyCounts",(function(){n.etAw.resetFrequencyCounts()})),s(this,"getFrequencyCount",(function(t){return n.etAw.getFrequencyCount(t)})),s(this,"registerForEvent",(function(t,e){n.zUeD.tkkH(t,e)})),s(this,"unregisterFromEvent",(function(t,e){n.zUeD.unregisterFromEvent(t,e)})),s(this,"notifyEventListener",(function(t){n.zUeD.SZEw(t)})),s(this,"fetch",(function(e,n,r,i){t.getController().fetchConfiguration(e,n,r,i)})),s(this,"dKBr",(function(){return n.PYlf})),s(this,"getCampaignMetaFromQueryEngine",(function(t){return n.etAw.rhsF(t)})),s(this,"kMma",(function(){return n.lltI})),e.instance||(e.instance=this),e.instance}return a(e,[{key:"createObjConfig",value:function(t){try{this.bpiR=this.getQeState(),f(this.bpiR[t])||(this.bpiR[t]={SESSION:0,OVERALL:0,DATES:{}},this.lltI&&(this.bpiR[t].DATES[this.lltI]=0),this.setQeState(t))}catch(t){rt.error("Can not create the frequency count object:"+t)}}},{key:"incrementFrequencies",value:function(t){this.bpiR=this.getQeState();var e=this.bpiR[t];e.SESSION=e.SESSION+1,e.OVERALL=e.OVERALL+1;var n=y();n===this.lltI&&e.DATES&&e.DATES[n]||(this.lltI=n,e.DATES={},e.DATES[this.lltI]=0),e.DATES[this.lltI]=e.DATES[this.lltI]+1}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s(it,"instance",void 0),window.ceVersion=170;try{void 0===exports&&null===exports||(exports.default=it,module.exports=exports.default)}catch(t){}return it}));
