"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[24956],{74978:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){if(e.score===t.score){var n=(e.comparator||"").toLocaleLowerCase(),r=(t.comparator||"").toLocaleLowerCase();if(n<r)return-1;if(n>r)return 1}return t.score-e.score}},648530:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n,r;if(e.score!==t.score)return t.score-e.score;var i=u(e.channel),a=u(t.channel);if(i!==a)return i-a;var l=(null!==(n=e.comparator)&&void 0!==n?n:"").toLocaleLowerCase(),o=(null!==(r=t.comparator)&&void 0!==r?r:"").toLocaleLowerCase();if(l<o)return-1;if(l>o)return 1;return 0};var r,i=(r=n(644263))&&r.__esModule?r:{default:r},a=n(770348);function u(e){if(null==e.parent_id)return e.type===a.ChannelTypes.GUILD_CATEGORY?1e3*(e.position+1):e.position
;var t,n,r=1e3*((null!==(t=null===(n=i.default.getChannel(e.parent_id))||void 0===n?void 0:n.position)&&void 0!==t?t:0)+1);return e.isVocal()?r+e.position+500:r+e.position}},872243:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.isSendableSticker=t.getStickerSendability=t.StickerSendability=void 0;var r,i=o(n(656016)),a=o(n(838583)),u=n(851757),l=n(770348);function o(e){return e&&e.__esModule?e:{default:e}}t.StickerSendability=r;!function(e){e[e.SENDABLE=0]="SENDABLE";e[e.SENDABLE_WITH_PREMIUM=1]="SENDABLE_WITH_PREMIUM";e[e.NONSENDABLE=2]="NONSENDABLE";e[e.SENDABLE_WITH_BOOSTED_GUILD=3]="SENDABLE_WITH_BOOSTED_GUILD"}(r||(t.StickerSendability=r={}));var c=function(e,t,n){if(null==t)return r.NONSENDABLE;var o=a.default.isPremium(t,l.PremiumTypes.TIER_2);return(0,u.isStandardSticker)(e)?o?r.SENDABLE:r.SENDABLE_WITH_PREMIUM:(0,
u.isGuildSticker)(e)&&null!=n?e.available?null!=n.guild_id&&""!==n.guild_id&&n.guild_id===e.guild_id?r.SENDABLE:null==n.guild_id||i.default.can(l.Permissions.USE_EXTERNAL_STICKERS,t,n)?o?r.SENDABLE:r.SENDABLE_WITH_PREMIUM:r.NONSENDABLE:r.SENDABLE_WITH_BOOSTED_GUILD:r.NONSENDABLE};t.getStickerSendability=c;t.isSendableSticker=function(e,t,n){return c(e,t,n)===r.SENDABLE}},371732:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.STICKER_PACK_NEW_TIMESTAMP_THRESHOLD=void 0;var r,i=d(n(496486)),a=d(n(536211)),u=d(n(636602)),l=d(n(71319)),o=d(n(960441)),c=d(n(82572)),s=n(770348),f=n(840433);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function v(){v=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return v.apply(this,arguments)}var E={pendingUsages:[]},h=1e3*s.Durations.DAY;t.STICKER_PACK_NEW_TIMESTAMP_THRESHOLD=h;var A=new l.default((function(){return 100}),(function(e){var t=0;e<=3?t=100:e<=15?t=70:e<=30?t=50:e<=45?t=30:e<=80&&(t=10);return t}),(function(e){return c.default.getStickerById(e)}),(function(){}),20),L=function(){A.compute()};function g(){var e,t=null===(e=o.default.frecencyWithoutFetchingLatest.stickerFrecency)||void 0===e?void 0:e.stickers;if(null==t)return!1;A.overwriteHistory(i.default.mapValues(t,(function(e){return v({},e,{recentUses:e.recentUses.map(Number)})})),E.pendingUsages)}var _=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;y(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.initialize=function(e){this.waitFor(c.default);null!=e&&(E=e)
;this.syncWith([c.default],L);this.syncWith([o.default],g)};n.getState=function(){return E};n.hasPendingUsage=function(){return E.pendingUsages.length>0};!function(e,t,n){t&&p(e.prototype,t);n&&p(e,n);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"stickerFrecencyWithoutFetchingLatest",get:function(){return A}}]);return t}(a.default.PersistedStore);_.persistKey="StickersPersistedStoreV2";var S=new _(u.default,((r={})[s.ActionTypes.STICKER_TRACK_USAGE]=function(e){var t=e.stickerIds;null==t||t.forEach((function(e){A.track(e);E.pendingUsages.push({key:e,timestamp:Date.now()})}));A.compute()},r[s.ActionTypes.USER_SETTINGS_PROTO_UPDATE]=function(e){var t=e.settings.type,n=e.wasSaved;if(t!==f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS||!n)return!1;E.pendingUsages=[]},r));t.default=S},191013:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0
;var r,i,a=M(n(824390)),u=M(n(496486)),l=M(n(730381)),o=M(n(536211)),c=M(n(636602)),s=M(n(703124)),f=M(n(504762)),d=M(n(288356)),p=M(n(191839)),y=M(n(834162)),v=M(n(663303)),E=M(n(871778)),h=M(n(194198)),A=M(n(37679)),L=M(n(432310)),g=M(n(693399)),_=n(862728),S=n(71246),b=n(811076),m=n(864489),T=M(n(922629)),N=n(539331),C=n(440815),I=n(770348);function M(e){return e&&e.__esModule?e:{default:e}}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function w(e,t){w=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return w(e,t)}function P(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=(0,l.default)().subtract(1,"week"),R=[],k="",G=!1;function j(e,t){return e.application.name.localeCompare(t.application.name,E.default.locale,{sensitivity:"base"})}function B(e,t){return null!=e&&((0,l.default)(e.createdAt).isAfter(D)&&0===t)}var K=((r={})[I.GameTableListKeys.NAME]=j,r[I.GameTableListKeys.PLATFORM]=function(e,t,n){var r=e.libraryApplication.getDistributor(),i=t.libraryApplication.getDistributor();return r===i?(n===I.TableSortDirections.DESCENDING?-1:1)*j(e,t):null==r?1:null==i?-1:r.localeCompare(i)},
r[I.GameTableListKeys.LAST_PLAYED]=function(e,t){return e.isNew&&!t.isNew?-1:!e.isNew&&t.isNew?1:e.lastPlayed===t.lastPlayed?0:e.lastPlayed>t.lastPlayed?-1:1},r[I.GameTableListKeys.ACTIONS]=null,r),q=(0,_.cachedFunction)((function(e){return e.filter((function(e){return null!=e.libraryApplication&&e.shouldShowInLibrary}))})),F=(0,_.cachedFunction)((function(e){return e.filter((function(e){return null!=e.libraryApplication&&L.default.isLaunchable(e.libraryApplication.id,e.libraryApplication.branchId)}))})),H=(0,_.cachedFunction)((function(e,t){return e.filter((function(e){return(0,a.default)(t.toLowerCase(),e.application.name.toLowerCase())}))})),V=(0,_.cachedFunction)((function(e,t,n,r){var i=K[t];if(null==i)return e;var a=P(e).sort(i);return n===I.TableSortDirections.DESCENDING?a.reverse():a})),x=(0,_.cachedFunction)((function(e){return e.filter((function(e){return null!=e.libraryApplication&&e.libraryApplication.isHidden()}))}));function W(e,t){
var n=h.default.getCurrentUserStatisticsForApplication(e.id);if(null!=n)return new Date(n.last_played_at).getTime();var r=t[e.id];return null!=r?r:0}function Y(){var e=new Set(y.default.getRunningVerifiedApplicationIds()),t={},n=new Set,r=y.default.getGamesSeen(!1,!1).map((function(e){var n=d.default.getGameBySettingGame(e);if(null!=n){t[n.id]=1e3*e.lastFocused;return n.id}return null})),i=Object.values(p.default.getAllLibraryApplications()).map((function(r){return function(e,t,n,r,i){if(!i&&t.has(e.id))return null;var a=d.default.getGame(e.id);if(null==a)return null;var u=W(a,n);t.add(e.id);return(0,b.isUserEntitledToLibraryApplication)(e)||L.default.isInstalled(e.id,e.branchId)?{key:e.id+"-"+e.branchId,application:a,libraryApplication:e,lastPlayed:u,supportsCloudSync:null!=e&&L.default.supportsCloudSync(e.id,e.branchId),isNew:B(e,u),isLaunching:s.default.launchingGames.has(e.id),isRunning:r.has(e.id),isLaunchable:(0,
N.isLaunchable)(p.default,s.default,L.default,f.default,e.id,e.branchId),isUpdatingFlags:p.default.isUpdatingFlags(e.id,e.branchId),shouldShowInLibrary:(0,b.shouldShowGameInLibrary)(a,e,v.default),defaultAction:(0,C.getDefaultLibraryApplicationAction)(e,L.default,g.default)}:null}(r,n,t,e,!0)})).filter(S.isNotNullish),a=r.map((function(r){return function(e,t,n,r){var i=null!=e?d.default.getGame(e):null;if(null==i||null==e||t.has(e))return null;var a=W(i,n);t.add(e);return{key:e,application:i,lastPlayed:a,supportsCloudSync:!1,isNew:!1,isLaunching:s.default.launchingGames.has(e),isRunning:r.has(e),isLaunchable:(0,N.isLaunchable)(p.default,s.default,L.default,f.default,e,null),isUpdatingFlags:!1,shouldShowInLibrary:!1,libraryApplication:null,defaultAction:null}}(r,n,t,e)})).filter(S.isNotNullish),l=[].concat(P(a),P(i)).sort((function(e,t){return e.lastPlayed===t.lastPlayed?0:e.lastPlayed>t.lastPlayed?-1:1}));G=null!=d.default.lastFetched&&p.default.fetched
;if(u.default.isEqual(l,R))return!1;R=l;m.isPlatformEmbedded&&T.default.setSystemTrayApplications(F(R).map((function(e){return e.application})).slice(0,5));return!0}var X=new(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;w(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.initialize=function(){this.syncWith([d.default,s.default,y.default,L.default,g.default,p.default,h.default,v.default,f.default],Y,200);this.syncWith([A.default,E.default],(function(){return!0}))};!function(e,t,n){t&&O(e.prototype,t);n&&O(e,n);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"applicationFilterQuery",get:function(){return k}},{key:"applicationViewItems",get:function(){return R}},{key:"launchableApplicationViewItems",get:function(){return F(R)}},{key:"libraryApplicationViewItems",get:function(){return q(R)}},{key:"filteredLibraryApplicationViewItems",get:function(){return H(this.libraryApplicationViewItems,k)}},{
key:"sortedFilteredLibraryApplicationViewItems",get:function(){return V(this.filteredLibraryApplicationViewItems,A.default.sortKey,A.default.sortDirection,E.default.locale)}},{key:"hiddenLibraryApplicationViewItems",get:function(){return x(R)}},{key:"hasFetchedApplications",get:function(){return G}}]);return t}(o.default.Store))(c.default,((i={})[I.ActionTypes.LIBRARY_APPLICATION_FILTER_UPDATE]=function(e){var t=e.query;k=t},i));t.default=X},440815:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.getDefaultLibraryApplicationAction=function(e,t,n){var a=t.getState(e.id,e.branchId),u=n.getQueuePosition(e.id,e.branchId),l=n.paused;if(null!=a){if(null==u||-1===u)switch(a.type){case i.LocalDispatchApplicationStates.INSTALLING:return i.LibraryApplicationActions.INSTALL;case i.LocalDispatchApplicationStates.UPDATING:case i.LocalDispatchApplicationStates.UPDATE_REQUIRED:return i.LibraryApplicationActions.UPDATE}switch(a.type){case i.LocalDispatchApplicationStates.INSTALLING:
case i.LocalDispatchApplicationStates.UPDATING:case i.LocalDispatchApplicationStates.UPDATE_REQUIRED:case i.LocalDispatchApplicationStates.REPAIRING:return u>0?i.LibraryApplicationActions.MOVE_UP:l?i.LibraryApplicationActions.RESUME:i.LibraryApplicationActions.PAUSE;case i.LocalDispatchApplicationStates.UP_TO_DATE:return i.LibraryApplicationActions.PLAY;case i.LocalDispatchApplicationStates.UNINSTALLING:return null}}if(null!=u&&u>0)return i.LibraryApplicationActions.MOVE_UP;if((0,r.isSupportedPlatform)())return i.LibraryApplicationActions.INSTALL;return null};var r=n(539331),i=n(770348)},37679:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,i=c(n(496486)),a=c(n(536211)),u=c(n(972247)),l=c(n(636602)),o=n(770348);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function f(e,t){
f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var d,p="GameLibraryViewStore",y=o.TableSortDirections.ASCENDING,v=o.GameTableListKeys.LAST_PLAYED,E=!1,h=i.default.debounce((function(){E=!1;A.emitChange()}),200);var A=new(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.initialize=function(){var e,t=null!==(e=u.default.get(p))&&void 0!==e?e:{};if(null!=t.sortDirection&&null!=t.sortKey){y=t.sortDirection;v=t.sortKey}};!function(e,t,n){t&&s(e.prototype,t);n&&s(e,n);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"sortDirection",get:function(){return y}},{key:"sortKey",get:function(){return v}},{key:"activeRowKey",get:function(){return d}},{key:"isNavigatingByKeyboard",get:function(){return E}}]);return t}(a.default.Store))(l.default,((r={})[o.ActionTypes.LIBRARY_TABLE_SORT_UPDATE]=function(e){var t=e.direction,n=e.key;y=t;v=n
;u.default.set(p,{sortDirection:y,sortKey:v})},r[o.ActionTypes.LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE]=function(e){var t=e.key;if(e.isKeyboardEvent){E=!0;h()}d=t},r)),L=A;t.default=L},424956:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.WHITESPACE_REGEX=t.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS=void 0;var r=j(n(824390)),i=j(n(496486)),a=j(n(74978)),u=n(678928),l=j(n(648530)),o=j(n(791548)),c=n(872243),s=j(n(371732)),f=j(n(82572)),d=n(783494),p=j(n(19566)),y=n(828593),v=n(567186),E=j(n(759027)),h=j(n(644263)),A=j(n(433385)),L=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=G(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}r.default=e;n&&n.set(e,r);return r
}(n(517286)),g=j(n(876874)),_=j(n(30098)),S=j(n(201292)),b=j(n(689389)),m=j(n(788739)),T=j(n(290629)),N=j(n(211136)),C=j(n(790597)),I=j(n(728429)),M=j(n(399561)),O=j(n(417501)),w=n(71246),P=j(n(895201)),U=j(n(656016)),D=j(n(827513)),R=n(8916),k=n(770348);function G(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(G=function(e){return e?n:t})(e)}function j(e){return e&&e.__esModule?e:{default:e}}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0){a.push(r.value);if(t&&a.length===t)break}}catch(e){l=!0;i=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw i}}return a}(e,t)||H(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(){K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return K.apply(this,arguments)}function q(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||H(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=H(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,
value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=new o.default("AutocompleteUtils"),W=function(){return!0},Y=/(\t|\s)/;t.WHITESPACE_REGEX=Y;var X,Q=[],z=(X=n(675240).Z).MENTION_EVERYONE,J=X.MENTION_HERE,Z=X.LAUNCHABLE_APPLICATIONS,$=[L.GUILD_SELECTABLE_CHANNELS_KEY,L.GUILD_VOCAL_CHANNELS_KEY,k.ChannelTypes.GUILD_CATEGORY];t.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS=$;function ee(e,t,n,i,a){void 0===a&&(a=!0);try{if(t.test(e))return 10}catch(e){x.error(e)}try{if(n.test(e))return 5
}catch(e){x.error(e)}return a&&(0,r.default)(i,e)?1:0}function te(e){return null!=(null==e?void 0:e.joinedAt)&&!e.isPending}function ne(e,t,n,i){for(var u=I.default.getUsers(),l=C.default.getGuildId(),o=e.toLocaleLowerCase(),c=o.length,s=[],f=[],d=t.length,p=0,y=0;p<d;){var v=t[p],h=void 0,A=void 0;if(v instanceof E.default){A=v;h=g.default.getNick(l,A.id)}else{h=v.nick;A=u[v.userId]}if(null==i||i(A)){var L=A,_=L.usernameNormalized,S=L.username,b=null!=h&&""!==h?h.toLocaleLowerCase():null;if(_.substring(0,c)===o||null!=b&&(0,R.stripDiacritics)(b.substring(0,c))===o||S.substring(0,c)===o||null!=b&&b.substring(0,c)===o)s.push({comparator:null!=b?b:_,score:10,nick:h,user:A});else if(y<50&&((0,r.default)(o,_)||null!=b&&(0,r.default)(o,b))){f.push({comparator:null!=b?b:_,score:1,nick:h,user:A});y+=1}}p+=1}s.sort(a.default);if(s.length<n){f.sort(a.default);s=s.concat(f.slice(0,Math.max(0,n-s.length)))}s.length>n&&(s.length=n);return s}function re(e){switch(e){
case d.StickerMetadataTypes.STICKER_NAME:return 11;case d.StickerMetadataTypes.CORRELATED_EMOJI:return 6;case d.StickerMetadataTypes.TAG:return 1;case d.StickerMetadataTypes.GUILD_NAME:case d.StickerMetadataTypes.PACK_NAME:return 8;default:return 1}}function ie(e,t,n){for(var r,i=0,a=null,u=F(t);!(r=u()).done;){var l=r.value,o=ee(e,l.exactQuery,l.containQuery,l.queryLower,n);if(o>i){i=o;a=l}}null!=a&&(a.isFullMatch?t.length=0:t.splice(t.indexOf(a),1));return i}function ae(e,t){var n=h.default.getChannel(e);return null==e||null==n?[]:(0,i.default)(S.default.getMessages(e).toArray()).reverse().map((function(e){return e.author})).reject((function(e){return e.isNonUserBot()})).uniqBy((function(e){return e.id})).filter((function(e){var t=n.getGuildId();return null==t||te(g.default.getMember(t,e.id))})).map((function(e){var t=n.getGuildId(),r=null!=t&&g.default.getMember(t,e.id)||{};return{nick:r.nick||null,score:0,comparator:r.nick||e.username,user:e}})).take(t).value()}var ue={
queryFriends:function(e,t,n,r){void 0===t&&(t=10);void 0===n&&(n=!0);return ne(e,T.default.getFriendIDs().map((function(e){return I.default.getUser(e)})).filter(w.isNotNullish),t,r)},queryDMUsers:function(e,t,n,r){void 0===t&&(t=10);void 0===n&&(n=!0);return ne(e,h.default.getDMUserIds().map((function(e){return I.default.getUser(e)})).filter(w.isNotNullish),t,r)},queryChannelUsers:function(e,t,n,r){void 0===n&&(n=10);void 0===r&&(r=!0);var i=h.default.getChannel(e);if(null==i)return[];var a,u=i.isThread()?h.default.getChannel(i.parent_id):null,l=null!=u?u:i;if(null==l)return[];if(l.isPrivate()){a=l.recipients.map((function(e){var t;return{userId:e,nick:null!==(t=T.default.getNickname(e))&&void 0!==t?t:null}}));var o=I.default.getCurrentUser();null!=o&&a.push({userId:o.id,nick:null})}else if(0===t.length){var c=ae(i.id,n);if(null!=c&&c.length>0)return c;a=g.default.getMembers(l.guild_id).filter(te)}else{a=g.default.getMembers(l.guild_id).filter(te)
;r&&P.default.requestMembers(l.guild_id,t,n)}return ne(t,a,n,(function(e){return l.isPrivate()||U.default.can(k.Permissions.VIEW_CHANNEL,e,l)}))},queryGuildUsers:function(e,t,n,r,i){void 0===n&&(n=10);void 0===r&&(r=!0);if(null==_.default.getGuild(e))return[];if(0===t.length)return ae(N.default.getChannelId(e),n);var a=g.default.getMembers(e).filter(te);r&&t.length>0&&P.default.requestMembers(e,t,n);return ne(t,a,n,i)},queryUsers:function(e,t,n,r,a){void 0===t&&(t=10);void 0===n&&(n=!0);void 0===r&&(r=!0);r&&e.length>0&&P.default.requestMembers(null,e,t);return ne(e,(0,i.default)(I.default.getUsers()).values().value(),t,a)},queryChannels:function(e,t,n,r,l,o,c){void 0===n&&(n=10);void 0===r&&(r=!0);void 0===l&&(l=W);void 0===o&&(o=L.GUILD_SELECTABLE_CHANNELS_KEY);void 0===c&&(c=!1);var s=function(e,t){void 0===t&&(t=!1);var n=e.split(" ").filter((function(e){return""!==e||t})).map((function(e){var t=e.toLocaleLowerCase();return{queryLower:t,
exactQuery:new RegExp("^"+D.default.escape(t),"i"),containQuery:new RegExp(D.default.escape(t),"i"),isFullMatch:!1}}));if(e.includes(" ")){var r=e.toLocaleLowerCase();n.unshift({queryLower:r,exactQuery:new RegExp("^"+D.default.escape(r),"i"),containQuery:new RegExp(D.default.escape(r),"i"),isFullMatch:!0})}return n}(e,c);return(null!=t?(0,i.default)(L.default.getChannels(t)[o]).map((function(e){return e.channel})).concat(p.default.computeAllActiveJoinedThreads(t)):(0,i.default)(h.default.getMutableGuildAndPrivateChannels()).values().concat(p.default.computeAllActiveJoinedThreads())).map((function(e){var t,n;if(o!==e.type&&(o!==L.GUILD_SELECTABLE_CHANNELS_KEY||!(0,v.isGuildSelectableChannelType)(e.type))&&(o!==L.GUILD_VOCAL_CHANNELS_KEY||!(0,v.isGuildVocalChannelType)(e.type))||(0,v.isGuildSelectableChannelType)(e.type)&&!b.default.can(k.Permissions.VIEW_CHANNEL,e)||e.isVocal()&&!b.default.can(e.accessPermissions,e)||!l(e))return null;var i=q(s),a=ie(e.name.toLocaleLowerCase(),i,r)
;if(0===a)return null;[null===(t=_.default.getGuild(e.guild_id))||void 0===t?void 0:t.toString().toLocaleLowerCase(),null===(n=h.default.getChannel(e.parent_id))||void 0===n?void 0:n.name.toLocaleLowerCase(),e.name.toLocaleLowerCase()].forEach((function(e){if(null==e||""===e)return null;var t=ie(e,i,!1);0!==t&&(a+=.5*t)}));1===i.length&&i[0].isFullMatch&&(i.length=0);return a>0&&0===i.length?{channel:e,score:a,comparator:(0,u.computeChannelName)(e,I.default,T.default)}:null})).filter(w.isNotNullish).sortBy((function(e){return e.channel.name})).sort(a.default).take(n).value()},queryGuilds:function(e,t,n,r){void 0===t&&(t=10);void 0===n&&(n=!0);void 0===r&&(r=W);var u=""===e?"":e.toLocaleLowerCase(),l=new RegExp("^"+D.default.escape(u),"i"),o=new RegExp(D.default.escape(u),"i");return(0,i.default)(_.default.getGuilds()).values().map((function(e){if(r(e)){var t=ee(e.name.toLocaleLowerCase(),l,o,u,n);if(t>0)return{guild:e,score:t,comparator:e.toString()}}return null
})).filter(w.isNotNullish).sortBy((function(e){return e.guild.name})).sort(a.default).take(t).value()},queryGroupDMs:function(e,t,n,r){void 0===t&&(t=10);void 0===n&&(n=!0);void 0===r&&(r=W);var l=e.toLocaleLowerCase(),o=new RegExp("^"+D.default.escape(l),"i"),c=new RegExp(D.default.escape(l),"i"),s=O.default.getPrivateChannelIds(),f=h.default.getMutablePrivateChannels();return(0,i.default)(s).map((function(e){return f[e]})).map((function(e){if(!e.isMultiUserDM()||!r(e))return null;var t=ee((0,u.computeChannelName)(e,I.default,T.default).toLocaleLowerCase(),o,c,l,n);return t>0?{channel:e,score:t,comparator:(0,u.computeChannelName)(e,I.default,T.default)}:null})).filter(w.isNotNullish).sort(a.default).value()},queryApplications:function(e,t,n,r){void 0===t&&(t=10);void 0===n&&(n=!0);void 0===r&&(r=W);var u=e.toLocaleLowerCase(),l=new RegExp("^"+D.default.escape(u),"i"),o=new RegExp(D.default.escape(u),"i"),c=Z();return(0,i.default)(c).map((function(e){var t=e.application;if(r(t)){
var i=t.name.toLocaleLowerCase(),a=ee(i,l,o,u,n);if(a>0)return{application:t,score:a,comparator:i}}return null})).filter(w.isNotNullish).sort(a.default).take(t).value()},querySKUs:function(e,t,n,r){void 0===t&&(t=10);void 0===n&&(n=!0);void 0===r&&(r=W);var u=e.toLocaleLowerCase(),l=new RegExp("^"+D.default.escape(u),"i"),o=new RegExp(D.default.escape(u),"i"),c=M.default.getSKUs();return(0,i.default)(c).values().map((function(e){if(e.type===k.SKUTypes.DURABLE_PRIMARY&&r(e)){var t=e.name.toLocaleLowerCase(),i=ee(t,l,o,u,n);if(i>0)return{sku:e,score:i,comparator:t}}return null})).filter(w.isNotNullish).sort(a.default).take(t).value()},getRecentlyTalked:ae,queryMentionResults:function(e,t,n,a,u,l,o,c){void 0===n&&(n=!1);void 0===a&&(a=!0);void 0===u&&(u=!0);void 0===l&&(l=!0);void 0===o&&(o=!1);void 0===c&&(c=!1);var s=u?(o&&null!=t.guild_id?this.queryGuildUsers(t.guild_id,e):this.queryChannelUsers(t.id,e)).map((function(e){return K({},e,{status:m.default.getStatus(e.user.id)})
})):[],f=s.length,d=e.toLowerCase(),p=[];if(f<k.MAX_AUTOCOMPLETE_RESULTS&&l){var y=t.getGuildId(),v=_.default.getGuild(y);if(null!=v){(0,i.default)(v.roles).filter((function(e){var t=e.mentionable,i=e.name,a=e.id;return(t||n||c)&&(0,r.default)(d,i.toLowerCase())&&a!==y})).take(k.MAX_AUTOCOMPLETE_RESULTS-f).forEach((function(e){p.push(e)}));f+=p.length}}var E=[];if(!t.isPrivate()&&n&&l){if(f<k.MAX_AUTOCOMPLETE_RESULTS&&(0,r.default)(d,z().test)){E.push(z());f+=1}a&&f<k.MAX_AUTOCOMPLETE_RESULTS&&(0,r.default)(d,J().test)&&E.push(J())}return{users:s,globals:E,roles:p}},queryGuildMentionResults:function(e,t,n,a,u,l){void 0===n&&(n=!1);void 0===a&&(a=!0);void 0===u&&(u=!0);void 0===l&&(l=!1);var o=a?this.queryGuildUsers(t,e).map((function(e){return K({},e,{status:m.default.getStatus(e.user.id)})})):[],c=o.length,s=e.toLowerCase(),f=[];if(c<k.MAX_AUTOCOMPLETE_RESULTS&&u){var d=_.default.getGuild(t);if(null!=d){(0,i.default)(d.roles).filter((function(e){var i=e.mentionable,a=e.name,u=e.id
;return(i||n||l)&&(0,r.default)(s,a.toLowerCase())&&u!==t})).take(k.MAX_AUTOCOMPLETE_RESULTS-c).forEach((function(e){f.push(e)}));c+=f.length}}var p=[];if(n&&u){if(c<k.MAX_AUTOCOMPLETE_RESULTS&&(0,r.default)(s,z().test)){p.push(z());c+=1}c<k.MAX_AUTOCOMPLETE_RESULTS&&(0,r.default)(s,J().test)&&p.push(J())}return{users:o,globals:p,roles:f}},queryChoice:function(e,t,n,r){void 0===n&&(n=10);void 0===r&&(r=!0);var a=e.toLocaleLowerCase(),u=new RegExp("^"+D.default.escape(a),"i"),l=new RegExp(D.default.escape(a),"i"),o=(0,i.default)(t).map((function(e){var t=ee(e.displayName.toLocaleLowerCase(),u,l,a,r);return t>0?{choice:e,score:t}:null})).filter(w.isNotNullish).sortBy((function(e){return-1*e.score}));null!==n&&(o=o.take(n));return o.value()},queryChannelResults:function(e,t,n,r){void 0===n&&(n=L.GUILD_SELECTABLE_CHANNELS_KEY);return{channels:this.queryChannels(e,t.getGuildId(),void 0,void 0,(function(e){return null==r||r.includes(e.type)}),n,!0).map((function(e){return e.channel}))}},
queryApplicationCommandChannelResults:function(e,t,n){for(var r,i=[],a=F($);!(r=a()).done;){var u=r.value;i=i.concat(this.queryChannels(e,t.guild_id,k.MAX_AUTOCOMPLETE_RESULTS,!0,(function(e){return null==n||n.includes(e.type)}),u,!0))}i=i.filter((function(e){return"null"!==e.channel.id})).sort(l.default);i.length>k.MAX_AUTOCOMPLETE_RESULTS&&(i=i.slice(0,k.MAX_AUTOCOMPLETE_RESULTS));return{channels:i.map((function(e){return e.channel}))}},queryChoiceResults:function(e,t){return{choices:this.queryChoice(e,t,null).map((function(e){return e.choice}))}},queryEmojiResults:function(e,t,n,r){y.FrecencyUserSettingsActionCreators.loadIfNecessary();return{emojis:A.default.searchWithoutFetchingLatest(t,e,k.MAX_AUTOCOMPLETE_RESULTS,n,r)}},queryStickers:function(e,t,n){void 0===t&&(t=!0);var r=B(void 0===n?[null,W]:n,2),a=r[0],u=r[1],l=f.default.stickerMetadata,o=I.default.getCurrentUser(),p=new Set,v=[];y.FrecencyUserSettingsActionCreators.loadIfNecessary();for(var E,h=function(){
var e=E.value.toLocaleLowerCase();""!==e&&l.forEach((function(n,r){var i=0,l=null,y=f.default.getStickerById(r);if(null!=y&&u(y,(0,c.getStickerSendability)(y,o,a))){for(var E,h=F(n);!(E=h()).done;){var A=E.value,L=A.type,g=A.value,_=re(L),S=0;if(t){var b=(0,R.stripDiacritics)(e),m=new RegExp("^"+D.default.escape(b),"i"),T=new RegExp(""+D.default.escape(b),"i");g===e?S=10*_:m.test(g)?S=7*_:L!==d.StickerMetadataTypes.GUILD_NAME&&L!==d.StickerMetadataTypes.PACK_NAME&&L!==d.StickerMetadataTypes.STICKER_NAME||!T.test(g)||(S=5*_)}else if(g===e){S=10*_;l=g}if(S>i){i=S;l=g}}var N=s.default.stickerFrecencyWithoutFetchingLatest.getScore(r);null!=N&&(i*=N/100);if(i>0&&null!=l&&!p.has(y.id)){p.add(y.id);v.push({sticker:y,comparator:l,score:i})}}}))},A=F(e);!(E=A()).done;)h();0===(v=(0,i.default)(v).sortBy((function(e){return-1*e.score})).value()).length&&(v=Q);return{stickers:v}},matchSentinel:function(e,t,n){return!Y.test(t)&&e===n}};t.default=ue},895201:(e,t,n)=>{
Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=l(n(496486)),i=l(n(5387)),a=l(n(415275)),u=l(n(30098));function l(e){return e&&e.__esModule?e:{default:e}}var o,c=new i.default({maxAge:6e4});var s={requestMembers:function(e,t,n){void 0===n&&(n=10);var i=(null!=e?e:"")+":"+t;if(null==c.get(i)){c.set(i,!0);!function(e,t,n){null!=o&&clearTimeout(o);o=setTimeout((function(){var i=[],l=function(e){i.push(e.id)};if(null==e)r.default.forEach(u.default.getGuilds(),l);else{var o=u.default.getGuild(e);null!=o&&l(o)}i.length>0&&a.default.requestMembers(i,t.toLocaleLowerCase(),n)}),200)}(e,t,n)}}};t.default=s},675240:(e,t,n)=>{({value:!0});t.Z=void 0;var r=a(n(191013)),i=a(n(247001));function a(e){return e&&e.__esModule?e:{default:e}}var u={MENTION_EVERYONE:function(){return{test:"everyone",text:"@everyone",description:i.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION}},MENTION_HERE:function(){return{test:"here",text:"@here",
description:i.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION}},LAUNCHABLE_APPLICATIONS:function(){return r.default.launchableApplicationViewItems}};t.Z=u}}]);
//# sourceMappingURL=09f96247c09c62176bfd.js.map