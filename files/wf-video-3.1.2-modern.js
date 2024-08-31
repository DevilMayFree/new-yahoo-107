!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-video",[],t):"object"==typeof exports?exports["wafer-video"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-video"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){var i={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a]);return i}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var i=this._state,a=i.elementInstances;(i.playlistMap.get(e)||[]).forEach(function(e){var i=a.get(e)||{},n=i.instance;n&&(n.config.id===t?n.playlistItemActive=!0:n.playlistItemActive=!1)})}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),f=function e(t,i,a){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,a)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(a)},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},y=window.wafer,p=y.constants,m=y.utils,h=y.WaferBaseClass,_=p.ATTR_PREFIX,g=m.bindEvent,w=m.clearTimeout,C=m.each,b=m.findAncestor,E=m.isNodeName,P=m.removeCookie,k=m.setTimeout,O=m.unbindEvent,A=["handleFullscreenClick","handleMuteClick","handleNativeVideoEnd","handleVideoClick","handleVideoMouseEnter","handleVideoMouseLeave"],I=[],V=/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/,S=function(e){var t=e.mediaItems,i=e.pageSpaceId,a=e.region,n=e.site,r=e.lang,s=e.pluginConfigs,l=void 0===s?{}:s,d=e.rapidConfig,u=e.videoRecommendations,c=(e.forceDisableFirstAd,e.mediaItem,e.playlist),f=void 0===c?{}:c,y=e.ui,p=void 0===y?{}:y,m=o(e,["mediaItems","pageSpaceId","region","site","lang","pluginConfigs","rapidConfig","videoRecommendations","forceDisableFirstAd","mediaItem","playlist","ui"]),h=f.id,_=t||f.mediaItems,g=_&&_.map(function(e){var t=e.metadata,i=void 0===t?{}:t,a=o(e,["metadata"]);return v({},a,i)})||null,w=void 0;if(l){var C=l["source-metadata-plugin"]||{},b=C["media/sapi"];b&&(w={customParams:b.qs})}var E=p.docking,P=o(p,["docking"]),k=null;if(E){var O=E.enableOnScrollDown,A=E.enableOnScrollUp,I=E.position,S=void 0===I?{}:I,T=o(E,["enableOnScrollDown","enableOnScrollUp","position"]);k=v({},T,S,{enable:O||A})}var L=v({pageSpaceId:Number(i),site:n||"frontpage",region:a||"US",lang:r||"en-US",rapid:d},m);Object.keys(P).length&&(L.ui=P),k&&(L.ui=L.ui||{},L.ui.dock=k);var Y=f.videoRecommendations||u;return void 0!==Y&&(L.recommendation="string"==typeof Y?"true"===Y:Y),w&&(L.sapi=w),h&&(V.test(h)?L.playlistId=h:L.playlistAlias=h),g&&(L.items=g),L},T=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.errorClass,o=i.selector,s=i.successClass;a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:r,selector:o,successClass:s},{STATE_ATTRS:I})),d=e.getAttribute(_+"src"),u=e.getAttribute(_+"darkmode-src"),c=e.getAttribute(_+"type")||"default",f=e.getAttribute(_+"trigger")||"viewport",y=e.getAttribute(_+"playlist-trigger")||"click",p=e.getAttribute(_+"boundary"),m=e.getAttribute(_+"autoplay"),h=e.getAttribute(_+"video-handle"),g=e.getAttribute(_+"pause-when-out-of-viewport"),w=e.getAttribute(_+"manage-on-interaction"),C=e.getAttribute(_+"loop-count"),E=e.getAttribute(_+"id"),P=e.getAttribute(_+"target"),k=e.getAttribute(_+"viewability"),O=e.getAttribute(_+"pause-viewability"),V=e.getAttribute(_+"ad-view-continuous"),S=P&&(p&&b(e,p)||document.body).querySelector(P),T=e.getAttribute(_+"load-class")||"";return T=T&&T.split(" "),l._util=v({},l._util,{autoplay:null===m||void 0===m?0:Number(m),boundary:p,darkModeSrc:u,elem:e,errorClass:r,id:E,loopCount:C,manageOnInteraction:null===w||void 0===w?0:Number(w),muteElem:e.getElementsByClassName("wafer-video-mute")[0],pauseViewability:O&&parseInt(O,10),pauseWhenOutOfViewport:null===g||void 0===g?1:Number(g),player:null,playlistTrigger:y,selector:o,src:d,successClass:s,targetElem:S,trigger:f,type:c,videoHandle:null===h||void 0===h?1:Number(h),videoLoadClassName:T,adViewContinuous:null===V||void 0===V?0:Number(V)}),l._state=v({},l._state,{adPlaying:!1,adViewed:!1,created:!1,mounted:!1,playing:!1,playingAsPlaylist:!1,renderInProgress:!1,retryCount:0,viewability:k&&parseInt(k,10)||50,status:status}),C&&(l._state.loopCount=null===C||void 0===C?0:Number(C),l._state.loopCount&&--l._state.loopCount),A.forEach(function(e){l[e]=l[e].bind(l)}),"mouseenter"===y&&(l.addEventListeners(),l._state.mouseTimeout=null),"yvideoPlaylist"===c&&l.playlistDidMount(S,E),l}return r(t,e),c(t,[{key:"play",value:function(){var e=this._util.player;e&&(e.isPlaying()||e.play(),this._state.playing=!0)}},{key:"pause",value:function(){var e=this._util.player;if(e){var t=this._util.adViewContinuous,i=this._state.adViewed,a=t&&i;e.isPlaying()&&!a&&e.pause(),this._state.playing=!1}}},{key:"isDocked",value:function(){var e=this._util.player;return!!e&&(e.isDocked&&e.isDocked())}},{key:"unDock",value:function(){var e=this._util.player;e&&(e.pause(),e.undockVideoPlayer&&e.undockVideoPlayer())}},{key:"isPlaying",value:function(){var e=this._util.player;return e&&e.isPlaying()}},{key:"getFullscreen",value:function(){return!1}},{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.config,i=void 0===t?{}:t,a=this._util,n=a.type,r=a.playlistTrigger;switch(n){case"yvideo":this._createYVideo(i);break;case"yvideoPlaylist":var o=this._util,s=o.elem,l=o.targetElem;this.addToPlaylistForVideo(l,s),s.classList.add("has-video-"+r,"has-wafer-click");break;default:this._createDefault()}}},{key:"stateDidUpdate",value:function(){}},{key:"destroy",value:function(){var e=this._util,i=e.player,a=e.playlistTrigger,n=e.type;i&&(i.__destroyed=!0),"mouseenter"===a&&this.removeEventListeners(),"yvideo"===n&&this.removeInstanceFromUuidCollection(),f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"_createDefault",value:function(){var e=this;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||!this._state.created){var t=window.wafer.base.colorSchema,i=this._util,a=i.elem,n=i.darkmodeSrc,r=i.src;if(this._state.created=!0,r){var o=("dark"===t?n:r)||r;a.src=o,this._itemLoaded()}else{var s=this._util.errorClass;E(a,"video")?(C(a.getElementsByTagName("source"),function(i){var a=i.getAttribute("data-wf-src"),n=i.getAttribute("data-wf-darkmode-src");if(a){e._util.darkModeSrc=n;var r=("dark"===t?n:a)||a;i.setAttribute("src",r)}}),a.load(),this._itemLoaded(),this._addNativeVideoEvents()):a.classList.add(s)}}}},{key:"_createYVideo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.force,n=void 0!==a&&a,r=this._util.player;if(n||!r){var s=this._util,l=s.elem,d=s.targetElem,u=void 0;try{u=JSON.parse(l.getAttribute(_+"video-config"))}catch(e){}if(!u)return!1;var c=v({},t.rapidConfig,u.rapidConfig),f=this._util,y=f.autoplay,p=void 0!==y&&y,m=f.videoLoadClassName;u=v({},t,u,{rapidConfig:c});var h=d||document.createElement("div");d||l.classList.add("wafer-video-default");var g=u,w=(g.height,g.width,o(g,["height","width"])),C={};h.classList.add("wafer-yvideo"),m&&h.classList.add.apply(h.classList,m),u.forceDisableFirstAd&&P("yvapF");var b=v({startscreen:{showTitle:!0,showDesc:!0,showProvider:!1,showButton:!0},showControls:!0,fullscreenBtn:!0,replayonlyendscreen:!1,showTitleOnHover:!0,settingscreen:!1,enableFollowButtons:!0,enableSharedMediaStore:!1,energySaverMode:!1,enableLazy:!1,maintain16x9ratio:!0,renderOnServer:!1,videoOnly:!1,useAppDocking:!1,suppressPanelTitle:!1,mediaItem:null,videoManagerOptOut:!1,hidePlaylist:!1,hidePlaylistWhenSmall:!1,loop:!1,startTime:0,fullscreen:!1,mute:!0,ccOnMute:!0,stopBufferingOnPause:!1,preload:!1,watchHistoryEnabled:!1,html5:!0,iframeRender:!1,rapidConfig:{pageParams:C}},w,{autoplay:!!p});b=S(b);try{if(this._util.player)try{this._util.player.destroy()}catch(e){}if(this._util.player=new window.YAHOO.VideoPlatform.VideoPlayer(b),!d){var E=l.getElementsByClassName("wafer-yvideo")[0];E&&E.parentNode.removeChild(E),l.appendChild(h)}this._addCustomEndScreen(),this._util.player.__render=function(){e._util.player.render(h),e.addInstanceToUuidCollection(),h.classList.add("wafer-video-rendered"),e._itemLoaded(l)}}catch(e){}}}},{key:"_addCustomEndScreen",value:function(){var e=this._util,t=e.boundary,i=e.elem,a=i.getAttribute(_+"end-scrn-class"),n=a&&t&&b(i,t),r=n&&n.getElementsByClassName(a)[0];this._util.endScreenEl=r}},{key:"_addNativeVideoEvents",value:function(){var e=this._util.elem;this._state.loopCount&&(e.loop=!1,g(e,"ended",this.handleNativeVideoEnd))}},{key:"_itemLoaded",value:function(){var e=this._util,t=e.elem,i=e.targetElem,a=this._util,n=a.selector,r=a.successClass;!i&&t.classList.remove(n.replace(".","")),t.classList.add(r),t.removeAttribute(_+"src")}},{key:"handleVideoClick",value:function(e){if("yvideoPlaylist"===this._util.type){var t=this._util,i=t.elem,a=t.id,n=t.targetElem;this.handlePlaylistClick(n,i,a)}}},{key:"handleMuteClick",value:function(e){e.preventDefault(),"yvideo"===this._util.type&&(this.mute=!this.mute)}},{key:"handleFullscreenClick",value:function(e){if(e.preventDefault(),"yvideo"===this._util.type){var t=this._util.player;t&&t.setFullscreen(!t.getFullscreen())}}},{key:"handleVideoMouseEnter",value:function(){var e=this;"yvideoPlaylist"===this._util.type&&(w(this._state.mouseTimeout,this),this._state.mouseTimeout=k(function(){var t=e._util,i=t.elem,a=t.id,n=t.targetElem;!e._state.playingAsPlaylist&&e.handlePlaylistClick(n,i,a)},300,this))}},{key:"handleColorSchemaChange",value:function(){if(this._util.darkModeSrc&&"default"===this._util.type){var e=this._util.loopCount;e&&(this._state.loopCount=Number(e)),this._createDefault(!0)}}},{key:"handleVideoMouseLeave",value:function(e){"yvideoPlaylist"===this._util.type&&w(this._state.mouseTimeout,this)}},{key:"handleNativeVideoEnd",value:function(e){var t=this._util.elem,i=this._state.loopCount;if(t.setAttribute("data-wf-current-loop-count",this._state.loopCount--),i<=0)return void O(t,"ended",this.handleNativeVideoEnd);t.currentTime=0,t.play()}},{key:"mounted",set:function(e){this._state.mounted=e},get:function(){return this._state.mounted}},{key:"renderInProgress",set:function(e){this._state.renderInProgress=e},get:function(){return this._state.renderInProgress}},{key:"playing",set:function(e){this._state.playing=e}},{key:"playlistItemActive",set:function(e){var t=this._util.elem;if(e)return t.classList.add("wafer-playlist-active"),void(this._state.playingAsPlaylist=!0);this._state.playingAsPlaylist=!1,t.classList.remove("wafer-playlist-active")}},{key:"playlistItemComplete",set:function(e){var t=this._util.elem;e&&t.classList.add("wafer-video-watched")}},{key:"pausedByUser",set:function(e){this._state.pausedByUser=e}},{key:"mute",set:function(e){var t=this._util.muteElem,i=this.mute;if(t&&(i?t.classList.remove("video-is-unmute"):t.classList.add("video-is-unmute")),e!==i){var a=this._util.player;a&&a.setMute(e)}},get:function(){var e=this._util.player;return!!e&&e.getMute()}},{key:"config",get:function(){var e=this._util,t=e.adViewContinuous,i=e.endScreenEl,a=e.id,n=e.manageOnInteraction,r=e.pauseWhenOutOfViewport,o=e.player,s=e.trigger,l=e.type,d=e.videoHandle,u=this._state;return{adViewContinuous:t,endScreenEl:i,id:a,manageOnInteraction:n,pausedByUser:u.pausedByUser,pauseWhenOutOfViewport:r,player:o,playingAsPlaylist:u.playingAsPlaylist,trigger:s,type:l,videoHandle:d}}},{key:"viewability",get:function(){return this._state.viewability}},{key:"pauseViewability",get:function(){var e=this._util.pauseViewability;return void 0!==e&&null!==e?e:this._state.viewability}},{key:"adViewed",set:function(e){this._state.adViewed=e}},{key:"adPlaying",get:function(){return this._state.adPlaying},set:function(e){this._state.adPlaying=e}}]),t}(h);T.events={click:[["has-video-click","handleVideoClick"],["wafer-video-mute","handleMuteClick"],["wafer-video-fullscreen","handleFullscreenClick"]],mouseenter:[["_self","handleVideoMouseEnter"]],mouseleave:[["_self","handleVideoMouseLeave"]]};var L=T,Y=function(){function e(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),R=window.wafer.features,N=R.performanceMarkSupported,D=R.isSlowBrowser,M=!1,x=function(e){if(!M&&N){var t=window,i=t.rapidInstance;i&&i.beaconPerformanceData&&D.then(function(t){if(!t){var a=window,n=a.performance,r={},o=n.now();"AD"===e?r.vp_adplayback_start=o:r.vp_contentplayback_start=o,r.vp_playback_start=o;var s=n.getEntriesByName("vp_ready");if(s&&s.length){var l=Y(s,1),d=l[0];r.vp_ready=Math.round(d.startTime+d.duration)}M=!0,i.beaconPerformanceData({perf_usertime:{utm:r}})}})}},j=function(e){if(N){var t=window,i=t.rapidInstance,a=t.videoPlayerResourceMetricsFired;if(i&&i.beaconPerformanceData&&!a){var n=window,r=n.performance,o={};if(e){var s=r.getEntriesByName(e);if(s&&s.length){var l=Y(s,1),d=l[0];o.vp_fetch_duration=d.duration,o.vp_fetch_end_time=d.responseEnd,o.vp_fetch_start=d.startTime}}window.videoPlayerResourceMetricsFired=!0,window.rapidInstance.beaconPerformanceData({perf_usertime:{utm:o}})}}},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},H=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),U=window.wafer.features,F=U.performanceMarkSupported,W=window.wafer.utils,K=W.clearTimeout,q=W.debounce,G=W.elementInView,X=W.findAncestor,J=W.getConfigFromJSONScriptNode,z=W.loadCSSSync,Q=W.loadScriptAsync,Z=W.setTimeout,$=window.wafer.base,ee=window.wafer.controllers.WaferBaseController,te={AD_START:"video:adplaybackstart",PLAYLIST_POSITION_CHANGE:"video:playlistpositionchange",PLAYBACK_PAUSE:"video:playbackpause",PLAYBACK_START:"video:playbackstart",PLAYBACK_COMPLETE:"video:playbackcomplete"},ie={AD_START:"AD",PLAYBACK_START:"CONTENT"},ae=Object.keys(te),ne=".wafer-video-default.wafer-video:not(.StretchedBox),.wafer-video-default.wafer-video-complete:not(.StretchedBox){position:relative;width:100%;height:100%}.wafer-video-default .wafer-yvideo{position:absolute;top:0;bottom:0;left:0;right:0}",re=void 0,oe=function(e,t){var i=e.getVideoElement,a=e.getRootElement,n=i&&i.call(e)||a&&a.call(e);return n?X(n,"wafer-yvideo"):t};window.__waferYahooVideoUuidCollection=function(){var e=new Map;return{add:function(t){var i=t._util.id;i&&(e.has(i)||e.set(i,[]),e.get(i).push(t))},getElemAndPlayer:function(t){return(e.get(t)||[]).map(function(e){var t=e._util;return{elem:t.elem,player:t.player}})},remove:function(t){var i=t._util.id;if(i){var a=e.get(i);if(a.length){var n=a.indexOf(t);n>-1&&e.get(i).splice(n,1)}}}}}();var se=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.errorClass,a=void 0===i?"wafer-video-error":i,n=e.root,r=void 0===n?document:n,o=e.selector,d=e.successClass,c=void 0===d?"wafer-video-complete":d,f=e.validateDelay,v=void 0===f?25:f;s(this,t);var y=J(document.getElementById("wafer-video-config")),p=y.config;if(p&&window.YAHOO&&window.YAHOO.subscriptions&&window.YAHOO.subscriptions.videoPlayer){var m=window.YAHOO.subscriptions.videoPlayer;p.pluginConfigs=p.pluginConfigs||{},p.pluginConfigs["source-metadata-plugin"]=p.pluginConfigs["source-metadata-plugin"]||{},p.pluginConfigs["source-metadata-plugin"]["media/sapi"]=p.pluginConfigs["source-metadata-plugin"]["media/sapi"]||{},p.pluginConfigs["source-metadata-plugin"]["media/sapi"].qs=p.pluginConfigs["source-metadata-plugin"]["media/sapi"].qs||{};for(var h in m)m.hasOwnProperty(h)&&(p.pluginConfigs["source-metadata-plugin"]["media/sapi"].qs[h]=m[h])}L.prototype.playlistDidMount=function(e,t){var i=_._state.elementInstances,a=i.get(e).instance,n=a.config.player;if(n){n.getItems().find(function(e){return e.id===t})||n.addPlaylistItem({id:t})}},L.prototype.handlePlaylistClick=function(e,t,i){var a=_._state,n=a.elementInstances,r=a.playlistMap,o=n.get(e).instance,s=o.config.player,l=s.getItems(),d=l.findIndex(function(e){return e.id===i}),c=void 0;-1===d?s.addPlaylistItem({id:i}).then(function(e){c=s.setPlaylistPosition(e)}):c=s.setPlaylistPosition(d),c&&c.then(function(){Z(function(){o.play()},100),r.get(e).length>1&&u.call(_,t,i,s)})},L.prototype.addToPlaylistForVideo=function(e,t){var i=_._state.playlistMap;i.has(e)||i.set(e,[]),i.get(e).push(t)},L.prototype.addInstanceToUuidCollection=function(){window.__waferYahooVideoUuidCollection.add(this)},L.prototype.removeInstanceFromUuidCollection=function(){window.__waferYahooVideoUuidCollection.remove(this)};var _=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:r,selector:o,props:{errorClass:a,selector:o,successClass:c},WaferClass:L}));return _._validateWithDebounce=q(function(){_.validate()},v,_),_._util=B({},_._util,{videoConfig:y}),_._state=B({},_._state,{activeElem:null,currentVideoCreationIndex:0,dockedElem:null,hasYahooVideoPlayer:!1,loudElem:null,paused:!1,playerReadyTimeoutMap:new Map,playlistMap:new Map,yvideosList:[]}),z({text:ne}),_.sync(),_}return d(t,e),H(t,[{key:"_handleVideoReady",value:function(e,t){var i=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.config.player;if(K(this._state.playerReadyTimeoutMap.get(t),this),n.__destroyed)return void n.destroy();if(!n.__ready){var r=this._util.videoConfig,o=e.config.videoHandle,s=r||{},l=s.autoplay,d=oe(n,t),u=!1;if(d){if(n._viewportOffset=this._getVideoOffset(d,e.viewability),a<=3){if(!n._viewportOffset)return void Z(function(){n.__destroyed||i._handleVideoReady(e,t,++a)},50*a);F&&performance.mark("vp_ready"),u=G(d,n._viewportOffset,$.viewport)}!this._state.activeElem&&!1!==l&&o&&u&&!this._state.paused&&(e.play(),this._state.activeElem=t)}n.__isSlick=t.firstChild.classList.contains("yvideo-slick"),n.__ready=!0,this._state.currentVideoCreationIndex++,e.renderInProgress=!1,e.mounted=!0,this._createNextYvideo(),$.emitWaferEvent("video:ready",{elem:t,meta:{videoCreatedRetryCount:e._state.retryCount,instance:n,isInViewport:u}})}}},{key:"_startPlayerReadyTimer",value:function(e){var t=this;this._state.playerReadyTimeoutMap.set(e,Z(function(){t._state.currentVideoCreationIndex++,t._createNextYvideo()},5e3,this))}},{key:"_createNextYvideo",value:function(){var e=this._state.yvideosList[this._state.currentVideoCreationIndex];if(e){var t=this._state.elementInstances.get(e),i=t.instance;if(!i.renderInProgress){i.renderInProgress=!0;var a=i.config.player;if(!a||a.__ready)return this._state.currentVideoCreationIndex++,void this._createNextYvideo();this._startPlayerReadyTimer(e),a.__init&&a.__init(e,this,i),this._handleYVideoEvents(e,i),a.__render()}}}},{key:"_handleYVideoEvents",value:function(e,t){var i=this,a=t.config,n=a.adViewContinuous,r=a.endScreenEl,o=a.manageOnInteraction,s=a.player,l=window.YAHOO.VideoPlatform.API_Events||window.OATH&&window.OATH.VideoPlatform.Events;ae.forEach(function(i){s.on(l[i],function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=ie[i];n&&x(n),$.emitWaferEvent(te[i],{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s,videoData:a}})})}),s.on(l.PLAYBACK_RESUME,function(){s.__destroyed||(t.config&&!t.config.pausedByUser&&(i._state.activeElem=e),t.playing=!0,$.emitWaferEvent("video:resumed",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s}}))}),s.on(l.UI_INTERACT,function(a){var n=a.srcElement||a.element;if("startScreen"!==n||"click"!==t.config.trigger){if(!o){var r=!1,l=t.isPlaying(),d=i._state,u=d.elementInstances,c=d.dockedElem,f=c&&u.get(c).instance;if("video-click"!==n||l?"ctrl-pause-btn"===n&&(r=!0):r=!0,t.pausedByUser=r,l){var v=i._state.activeElem,y=v&&u.get(v).instance;v&&v!==e&&y.pause(),i._state.activeElem=e,c&&c!==e&&f.isDocked()&&(f.unDock(),i._state.dockedElem=null)}else i._state.activeElem===e&&(i._state.activeElem=null,t.playing=!1)}$.emitWaferEvent("video:interacted",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s}})}}),s.on(l.MUTE_CHANGE,function(a){$.emitWaferEvent("video:mutechange",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s}}),i._updateMuteControlForElem(e,a)}),s.on(l.PLAYER_READY,function(){s&&i._handleVideoReady(t,e)}),s.on(ae.DOCK_CHANGE,function(a){if(!s.__destroyed){var n=document.body,r=oe(s,e);if(r&&(s._viewportOffset=i._getVideoOffset(r,t.viewability)),a){i._state.dockedElem=e;var o=i._state.activeElem;if(o&&o!==e){i._state.elementInstances.get(o).instance.pause()}i._state.activeElem=e,t.config.pausedByUser||t.isPlaying()||i._state.paused||t.play(),n.classList.add("wafer-video-docked")}else i._state.dockedElem=null,n.classList.remove("wafer-video-docked");$.emitWaferEvent("video:dockChange",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s,isDocked:a,isInViewport:a}})}}),s.on(l.PLAYLIST_POSITION_CHANGE,function(t){u.call(i,e,t.id,s)}),s.on(l.PLAYBACK_COMPLETE,function(t){var a=i._state,n=a.elementInstances,r=a.playlistMap,o=r.get(e)||[];o&&o.some(function(e){var i=n.get(e)||{},a=i.instance;if(a&&a.config.id===t.id)return a.playlistItemComplete=!0,!0})}),s.on(l.PLAYER_ERROR,function(a){if(e===i._state.activeElem&&(i._state.activeElem=!1),K(i._state.playerReadyTimeoutMap.get(e),i),t._state.retryCount<2){var n=i._util.videoConfig||{},r=n.config;return i._state.currentVideoCreationIndex--,t.renderInProgress=!1,t._createYVideo(r,{force:!0}),t._state.retryCount++,void i._createNextYvideo()}i._state.currentVideoCreationIndex++,i._createNextYvideo(),s.__destroyed||(s.__isSlick=e.firstChild.classList.contains("yvideo-slick"),$.emitWaferEvent("video:playerError",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,data:a,instance:s}}))});if(r&&s.on(l.PLAYLIST_COMPLETE||l.PLAYLIST_END,function(){var t=oe(s,e),i=t.getElementsByClassName("vp-state-end-screen")[0];i&&i.insertAdjacentElement("afterend",r)}),s.on(l.AD_START,function(i){t.adPlaying=!0,$.emitWaferEvent("video:adStarted",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s,adData:i}})}),s.on(l.AD_END,function(i){t.adPlaying=!1,$.emitWaferEvent("video:adEnded",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:s,adData:i}})}),n)var d=s.addEventListener(l.PLAYBACK_PROGRESS,function(e,i){t.adPlaying&&i>=2&&(t.adViewed=!0,s.removeEventListener(l.PLAYBACK_PROGRESS,d))})}},{key:"_getVideoOffset",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=e||{},a=i.clientHeight,n=i.clientWidth,r=-parseInt(n,10),o=-parseInt(a*t/100,10);return r||o?{offsetX:r,offsetY:o}:null}},{key:"_updateMuteControlForElem",value:function(e,t){var i=this._state,a=i.elementInstances,n=i.loudElem,r=a.get(e);if(r){var o=r.instance;o&&(o.mute=t),n!==e&&(this._state.loudElem=e)}}},{key:"_loadVideoJS",value:function(e){var t=this;return new Promise(function(i,a){Q({src:e},function(n){if(n)return void a(new Error("could not load js, src="+e));j(e),window.YAHOO||(window.YAHOO={}),window.YAHOO.VideoPlatform=window.YAHOO.VideoPlatform||window.OATH.VideoPlatform,t._state.hasYahooVideoPlayer=!0,i()},"YAHOO.VideoPlatform")})}},{key:"handleScroll",value:function(){this._validateWithDebounce()}},{key:"handleResize",value:function(){this._validateWithDebounce()}},{key:"handleColorSchemaChange",value:function(){if(this._state&&this._state.mounted){var e=this._state.elementInstances,t=!0,i=!1,a=void 0;try{for(var n,r=e.values()[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){n.value.instance.handleColorSchemaChange()}}catch(e){i=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(i)throw a}}}}},{key:"loadDependencies",value:function(){var e=this,t=this._util.videoConfig,i=this._state,a=i.elementInstances,n=i.hasYahooVideoPlayer;return new Promise(function(i,r){if(n)return i();var o=!1,s=!0,l=!1,d=void 0;try{for(var u,c=a.values()[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){if("yvideo"===u.value.instance.config.type){o=!0;break}}}catch(e){l=!0,d=e}finally{try{!s&&c.return&&c.return()}finally{if(l)throw d}}if(o){var f=window.OATH||window.YAHOO;if(f&&f.VideoPlatform)return window.YAHOO.VideoPlatform=window.YAHOO.VideoPlatform||window.OATH.VideoPlatform,void i();var v=t.playerScript||"https://s.yimg.com/rx/ev/prod/evplayer.js";if(re)return re;re=e._loadVideoJS(v).then(function(){i()}).catch(function(e){r(e)})}else i()})}},{key:"pauseAll",value:function(){var e=this._state.elementInstances,t=!0,i=!1,a=void 0;try{for(var n,r=e.values()[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){n.value.instance.pause()}}catch(e){i=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(i)throw a}}this._state.activeElem=null}},{key:"pause",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pageVisibility",t=this._state.elementInstances;this._state.paused=!0,this._state.pauseSrc=this._state.pauseSrc||e;var i=!0,a=!1,n=void 0;try{for(var r,o=t.values()[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var s=r.value,l=s.instance;("pageVisibility"!==e||l.mute)&&l.pause()}}catch(e){a=!0,n=e}finally{try{!i&&o.return&&o.return()}finally{if(a)throw n}}}},{key:"resume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pageVisibility";if(this._state.pauseSrc===e){var t=this._state.activeElem;if(this._state.pauseSrc=null,this._state.paused=!1,t){var i=this._state.elementInstances,a=i.get(t).instance;a&&a.play()}else this.sync()}}},{key:"trigger",value:function(e){var t=this._state.elementInstances,i=t.get(e);if(i){var a=i.instance;if("yvideoPlaylist"===a.config.type){var n=a._util,r=n.elem,o=n.id,s=n.targetElem;a.handlePlaylistClick(s,r,o)}}}},{key:"didSync",value:function(){var e=this._state,t=e.elementInstances,i=e.mounted;0===t.size||i||(this._state.mounted=!0)}},{key:"willValidate",value:function(e){var t=this,i=this._state,a=i.activeElem,n=i.elementInstances,r=i.dockedElem,o=this._util.videoConfig||{},s=o.config,l=o.viewportOffset,d=void 0===l?{}:l,u=!1;if(r)u=!0;else if(a){var c=n.get(a),f=c.instance,v=f.config,y=v.pauseWhenOutOfViewport,p=v.player;p&&(y?(f.getFullscreen()||G(a,{offsetX:0,offsetY:-parseInt(a.clientHeight*f.pauseViewability/100,10)},$.viewport))&&(u=!0):u=!0)}this.loadDependencies().then(function(){var i=!1;e.forEach(function(e){var a=n.get(e),r=a.instance;if(!r.mounted){var o=r.config.type;"yvideo"===o||"yvideoPlaylist"===o?(r.create({config:s}),"yvideo"===o&&(r._addedToYvideoList||(t._state.yvideosList.push(e),r._addedToYvideoList=!0,i=!0))):r.mounted=!0}}),i&&t._createNextYvideo()}).then(function(){if(!u){if(!1!==(t._util.videoConfig||{}).autoplay){a&&(n.get(a).instance.pause(),t._state.activeElem=null);var i=d.offsetX,r=void 0===i?0:i,o=d.offsetY,l=void 0===o?0:o,c=$.viewport;c.top=l,c.left=r,e.some(function(e){var i=n.get(e),a=i.instance,r=a.config.type,o=a._util.videoHandle;if("yvideoPlaylist"!==r&&o&&a.mounted&&G(e,{offsetX:0,offsetY:-parseInt(e.clientHeight*a.viewability/100,10)},c))if("default"===r)a.create({config:s});else{var l=a.config,d=l.pausedByUser,u=l.player;if(u&&!d)return t._state.activeElem=e,t._state.paused||Z(function(){a.play()}),!0}return!1})}}}).catch(function(e){var t=e.message,i=e.stack;$.emitError({name:"WaferVideo",elem:null,meta:{message:t},stack:i})})}}]),t}(ee),le=se;t.default=new le({selector:".wafer-video"})}})});