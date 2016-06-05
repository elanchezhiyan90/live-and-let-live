webshims.register("mediaelement-yt",function(e,t,i,n,a){"use strict";var r=t.mediaelement,o=e.Deferred();i.onYouTubePlayerAPIReady=function(){o.resolve()},i.YT&&YT.Player&&i.onYouTubePlayerAPIReady();var s={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},l=Object.keys(s),u={currentTime:0,volume:1,muted:!1};Object.keys(u);var c=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_metadata:!1,_callMeta:!1,currentTime:0,_buffered:0,_ppFlag:a},s,u),d=function(t,i){i=e.Event(i),i.preventDefault(),e.event.trigger(i,a,t)},p=function(){var e=["_buffered","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta"],t=e.length;return function(i){if(i){var n=t,a=i.networkState;for(i.readyState=0;--n;)delete i[e[n]];i.buffered.length=0,clearInterval(i._timeInterval),a&&d(i._elem,"emptied")}}}(),m=function(){var t={},i=function(i){var a,r,o;return t[i.currentSrc]?a=t[i.currentSrc]:i.videoHeight&&i.videoWidth?(t[i.currentSrc]={width:i.videoWidth,height:i.videoHeight},a=t[i.currentSrc]):(r=e.attr(i._elem,"poster"))&&(a=t[r],a||(o=n.createElement("img"),o.onload=function(){t[r]={width:this.width,height:this.height},t[r].height&&t[r].width?f(i):delete t[r]},o.src=r,o.complete&&o.onload())),a||{width:300,height:"video"==i._elemNodeName?150:50}};return function(t){var n,a,r=t.elemDimensions;return("auto"==r.width||"auto"==r.height)&&(r=e.extend({},t.elemDimensions),n=i(t),a=n.width/n.height,"auto"==r.width&&"auto"==r.height?r=n:"auto"==r.width?(t.shadowElem.css({height:r.height}),r.width=t.shadowElem.height()*a):(t.shadowElem.css({width:r.width}),r.height=t.shadowElem.width()/a)),r}}(),f=function(t){var n,a=t._elem,r=t.shadowElem;"third"==t.isActive&&(t&&t._ytAPI&&t._ytAPI.getPlaybackQuality&&(i.ytapi=t._ytAPI),t.elemDimensions={width:a.style.width||e.attr(a,"width")||e(a).width(),height:a.style.height||e.attr(a,"height")||e(a).height()},n=m(t),n.minWidth=a.style.minWidth,n.minHeight=a.style.minHeight,r.css(n))},h=function(e){try{e.nodeName}catch(i){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},v=function(i){var n;return i=i.split("?"),-1!=i[0].indexOf("youtube.com/watch")&&i[1]?(i=i[1].split("&"),e.each(i,function(e,t){return t=t.split("="),"v"==t[0]?(i=t[1],n=!0,!1):a})):-1!=i[0].indexOf("youtube.com/v/")&&(i=i[0].split("/"),e.each(i,function(e,t){return n?(i=t,!1):("v"==t&&(n=!0),a)})),n||t.warn("no youtube id found: "+i),i},g=function(t){t&&(t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play()}catch(i){}},1)},y=e.noop;(function(){var i={play:1,playing:1},a=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],r=a.map(function(e){return e+".webshimspolyfill"}).join(" "),o=function(n){var a=t.data(n.target,"mediaelement");if(a){var r=n.originalEvent&&n.originalEvent.type===n.type;r==("third"==a.activating)&&(n.stopImmediatePropagation(),i[n.type]&&a.isActive!=a.activating&&e(n.target).pause())}};y=function(i){e(i).off(r).on(r,o),a.forEach(function(e){t.moveToFirstEvent(i,e)})},y(n)})(),e(n).on("emptied",function(e){var t=h(e.target);g(t)}),r.setActive=function(i,n,a){if(a||(a=t.data(i,"mediaelement")),a&&a.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var r=t.data(i,"shadowData");a.activating=n,e(i).pause(),a.isActive=n,"third"==n?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(i).addClass("yt-api-active nonnative-api-active").hide().getShadowElement().show()):(clearInterval(a._timeInterval),e(i).removeClass("yt-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(i).trigger("mediaelementapichange")}};var b=function(t,i){i._ppFlag=!0,"playing"==t&&(b("play",i),3>i.readyState&&(i.readyState=3,d(i._elem,"canplay")),e(i._elem).trigger("playing")),"play"==t&&i.paused?(i.paused=!1,d(i._elem,"play")):"pause"!=t||i.paused||(i.paused=!0,d(i._elem,"pause"))},w={small:{height:240,width:320},medium:{height:360,width:640},large:{height:480,width:853},hd720:{height:720,width:1280},hd1080:{height:1080,width:1920}},T=function(t,i,n,a){o.done(function(){var r=function(){var i,a;n._metadata&&n._ytAPI.getVideoLoadedFraction&&(a=n._ytAPI.getVideoLoadedFraction(),i=a*n.duration,n._buffered!==i&&(n._buffered=i,n.buffered.length=1,e(t).trigger("progress")),a>.99&&(n.networkState=1),4>n.readyState&&n.currentTime&&(n._buffered-n.currentTime>9||a>.9)&&(n.readyState=4,d(n._elem,"canplaythrough")))},o=function(){if(n._ytAPI&&n._ytAPI.getCurrentTime){var i=n._ytAPI.getCurrentTime();n.currentTime!=i&&(n.currentTime=i,e(t).trigger("timeupdate")),r()}},s=function(){if("third"==n.isActive&&n._ytAPI&&n._ytAPI.getVolume){var i,a=n._ytAPI.getVolume()/100,s=n._ytAPI.isMuted();a!=n.volume&&(n.volume=a,i=!0),s!=n.muted&&(n.muted=s,i=!0),o(),r(),i&&e(t).trigger("volumechange")}},l=function(){clearInterval(n._timeInterval),n._timeInterval=setInterval(function(){var i=n._ytAPI.getCurrentTime();n.currentTime!=i&&(n.currentTime=i,e(t).trigger("timeupdate"))},350)};n._ytAPI=new YT.Player(i,{height:"100%",width:"100%",allowfullscreen:"allowfullscreen",webkitallowfullscreen:"allowfullscreen",playerVars:{allowfullscreen:!0,fs:1,rel:0,showinfo:0,autohide:1,controls:e.prop(t,"controls")?1:0},videoId:a,events:{onReady:function(){g(n),setTimeout(s,9),setInterval(s,5e3)},onStateChange:function(i){if(i.target.getDuration){var a;if(!n._metadata){var r=i.target.getDuration(),o=i.target.getPlaybackQuality();r&&(n._metadata=!0,n.duration=r,1>n.readyState&&(n.readyState=1),1>n.networkState&&(n.networkState=2),a=!0,w[o]||(o="large"),n.videoHeight=w[o].height,n.videoWidth=w[o].width)}a&&e(t).trigger("durationchange").trigger("loadedmetadata"),setTimeout(s,9),1==i.data?(b("playing",n),l()):2==i.data?(clearInterval(n._timeInterval),b("pause",n)):3==i.data?(n.readyState>2&&(n.readyState=2),n.networkState=2,e(t).trigger("waiting")):0===i.data&&(n.readyState>4&&(n.readyState=4),n.networkState=1,clearInterval(n._timeInterval),e(t).trigger("ended"))}}}}),e(t).on("updateytdata",s)})};if("matchMedia"in i){var x=!1;try{x=i.matchMedia("only all").matches}catch(N){}x&&(r.sortMedia=function(e,t){return e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches,e==t?0:e?-1:1})}r.createSWF=function(i,n,s){s||(s=t.data(i,"mediaelement"));var l="yt-"+t.getID(i),u=v(n.src),d=e.prop(i,"controls");if(s)return r.setActive(i,"third",s),p(s),s.currentSrc=n.srcProp,d!=s._hasControls?(s.shadowElem.html('<div id="'+l+'">'),T(i,l,s,u)):o.done(function(){s._ytAPI.cueVideoByUrl&&s._ytAPI.cueVideoByUrl(u)}),s._hasControls=d,a;var m=e('<div class="polyfill-video polyfill-mediaelement" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({position:"relative",overflow:"hidden"}),h=function(){f(s)};s=t.data(i,"mediaelement",t.objectCreate(c,{shadowElem:{value:m},_elem:{value:i},_hasControls:{value:d},currentSrc:{value:n.srcProp},buffered:{value:{start:function(e){return e>=s.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=s.buffered.length?(t.error("buffered index size error"),a):s._buffered},length:0}}})),f(s),t.addShadowDom(i,m),r.setActive(i,"third",s),y(i),m.insertBefore(i),T(i,l,s,u),e(i).on("updatemediaelementdimensions loadedmetadata emptied",h).onWSOff("updateshadowdom",h)},function(){var i,n=function(t){clearTimeout(t.updateDataTimer),t.updateDataTimer=setTimeout(function(){e(t._elem).triggerHandler("updateytdata")},9)},r={},o=function(e){r[e]={get:function(){var t=h(this);return t?t[e]:i[e].prop._supget.apply(this)},writeable:!1}},s=function(e,t){o(e),delete r[e].writeable,r[e].set=t};l.forEach(o),s("currentTime",function(e){var t=h(this);return t?(e*=1,!isNaN(e)&&t._ytAPI&&t._ytAPI.seekTo&&(t._ytAPI.seekTo(e),n(t)),a):i.currentTime.prop._supset.apply(this,arguments)}),s("muted",function(e){var t=h(this);return t?(t._ytAPI&&t._ytAPI.mute&&(t._ytAPI[e?"mute":"unMute"](),n(t)),a):i.muted.prop._supset.apply(this,arguments)}),s("volume",function(e){var r=h(this);return r?(e*=100,!isNaN(e)&&r._ytAPI&&r._ytAPI.setVolume&&((0>e||e>100)&&t.error("volume greater or less than allowed "+e/100),r._ytAPI.setVolume(e),n(r)),a):i.volume.prop._supset.apply(this,arguments)}),e.each(["play","pause"],function(e,t){var n=t+"Video";r[t]={value:function(){var e=h(this);return e?(e._ytAPI&&e._ytAPI[n]&&(e._ytAPI[n](),b(t,e)),a):i[t].prop._supvalue.apply(this,arguments)}}}),i=t.defineNodeNameProperties("video",r,"prop"),t.onNodeNamesPropertyModify("video","controls",function(t,i){var n=h(this);e(this)[i?"addClass":"removeClass"]("webshims-controls"),n&&n._ytAPI&&!n.readyState&&e(this).mediaLoad()})}()});