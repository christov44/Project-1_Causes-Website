/***************************************
* @license
* ForeSee Client Code: Feedback
* http://www.answers.com/page/businesssolutions
* Built October 30, 15 12:15:22
* Version: 0.7.2
***************************************/
("undefined"!=typeof _acsDefine?_acsDefine:define)(["require","_acs","feedbackconfig",_acsNormalizeUrl("feedback/fs.utils.js")],function(e,t,config,i){function s(e,t,s,n){if(o[e])return o[e].success.subscribe(t||function(){},!0,!0),void o[e].fail.subscribe(s||function(){},!0,!0);var r,a,c,d=!1;this.count=this.count?++this.count:1,r=this.count,a="load-css-"+r,c=document.createElement("link"),c.setAttribute("id",a),c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css");var h={link:c,url:e,didfail:!1,didsucceed:!1,success:new i.FSEvent,fail:new i.FSEvent};return h.success.subscribe(t,!0,!0),h.fail.subscribe(s,!0,!0),o[e]=h,"undefined"!=typeof c.addEventListener?"Android"==n.os.name&&n.os.version<4.4?setTimeout(function(){d=!0,h.didsucceed=!0,h.success.fire(c)},250):(c.addEventListener("load",function(){d=!0,h.didsucceed=!0,h.success.fire(c)},!1),c.addEventListener("error",function(){h.didfail=!0,h.fail.fire(c)},!1)):"undefined"!=typeof c.attachEvent&&c.attachEvent("onload",function(){var e,t,i=document.styleSheets.length;try{for(;i--;)if(t=document.styleSheets[i],t.id===a)return e=t.cssText,d=!0,h.didsucceed=!0,void h.success.fire(c)}catch(s){}d||(h.didfail=!0,h.fail.fire(c))}),document.getElementsByTagName("head")[0].appendChild(c),c.setAttribute("href",e),c}var n={remove:function(){this.parentNode&&this.parentNode.removeChild(this)},hasClass:function(e){return this.className.indexOf(e)>-1},addClass:function(e){this.hasClass(e)||(this.className+=" "+e)},removeClass:function(e){this.className=(this.className||"").replace(e,"")},$:function(e){return this.querySelectorAll(e)},css:function(e){for(var t in e)e.hasOwnProperty(t)&&(this.style[t]=e[t])}},r=function(e){if("string"==typeof e&&-1==e.indexOf("<"))return document.querySelectorAll(e);if("string"==typeof e){var t=document.createElement("div");t.innerHTML=e,e=t.firstChild}for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i]);return e},a=function(){var e=r('<img src="'+t.makeURI("/feedback/loader.gif")+'" class="acs-loader">');this.$el=e};a.prototype.center=function(e){var t=this.$el.parentNode.offsetWidth,i=(this.$el.parentNode.offsetHeight,this.$el.offsetWidth);this.$el.offsetHeight;this.$el.css({left:(t-i)/2+"px",top:e?(t-i)/2+"px":"auto"})},a.prototype.remove=function(){this.$el.parentNode.removeChild(this.$el)};var o={},c=function(e,s,n){this.cfg=e,this.cpps=n;var a,o=this,c="acsFeedbackResultsCounter";this.badgeClicked=new i.FSEvent,this.br=s,this.animationMove=4,e.counter?(this.isIcon=!1,this.counter=0,sessionStorage.getItem(c)&&(this.counter=Math.round(parseFloat(sessionStorage.getItem(c))),this.counter=isNaN(this.counter)?0:this.counter),a=r('<div><span class="_acsCounter"><span class="_acsCounterInner">'+this.counter.toLocaleString()+'</span></span><span class="_acsBadgeLabel">'+e.label+"</span></div>")):(this.isIcon=!0,a=r('<div style="display:block; overflow: hidden;"><img src="'+t.makeURI("feedback/templates/"+e.template+"/"+e.icon)+'" class="_acsBadgeImg"><span class="_acsBadgeLabel">'+e.label+"</span></div>")),this.$el=a,this.$el.addClass("_acs _acs"+e.fbtype+" _acs"+e.fblocation),i.Bind(this.$el,"feedback:click",function(){o._unhover(),o.badgeClicked.fire(e)}),this.cfg.fbanimate&&(i.Bind(this.$el,"feedback:mouseenter",function(){o._hover()}),i.Bind(this.$el,"feedback:mouseleave",function(){o._unhover()}))};c.prototype._hover=function(){this.cfg.fbanimate&&this.$el.addClass("_acsHover")},c.prototype._unhover=function(){this.cfg.fbanimate&&this.$el.removeClass("_acsHover")},c.prototype._positionVertical=function(e){this.$el.offsetHeight,this.$el.offsetWidth,this.$el.offsetTop,"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight},c.prototype.init=function(e){var t=this.$el.$("._acsBadgeLabel"),i=this,s=i.cfg;if(e=e||function(){},this.$el.css({visibility:"hidden"}),t&&t.length>0){if(e){if(i._unhover(),this.isIcon)w("templates/"+s.template+"/"+s.icon,function(t){return function(s,n){setTimeout(function(){i._unhover(),setTimeout(function(){t.addClass("_acsAnimate"),e()},100),i._unhover()},100)}}(this.$el));else{i._unhover();var n=this.$el;setTimeout(function(){i._unhover(),setTimeout(function(){n.addClass("_acsAnimate"),e()},250)},250)}"vertical"==this.cfg.fbdirection&&(this.cfg.fblocation.indexOf("right")>-1?this.$el.addClass("_acsVertical_right"):this.$el.addClass("_acsVertical_left"),this._positionVertical()),this.cfg.fbfixed&&this.$el.addClass("_acsFixed")}this.$el.css({visibility:"visible"})}},c.prototype.setCounter=function(e){this.numTween&&(this.numTween.stop(),this.counter=this.numTween.val);var t=this.$el.$("._acsCounterInner")[0];this.numTween=new d(this.counter,e,i.proxy(function(e){t.innerHTML=Math.round(e).toLocaleString()},this)),this.numTween.go(1e3),sessionStorage.setItem("acsFeedbackResultsCounter",e)},c.prototype.disableCounter=function(){var e=this.$el.$("._acsBadgeImg")[0],i=this.cfg;e||(this.$el.$("._acsCounterInner")[0].innerHTML="",r(this.$el.$("._acsCounterInner")[0]).css({background:"none"}),e=r('<img style="position: relative;top: -2px;height: 19px;" src="'+t.makeURI("/feedback/templates/"+i.template+"/"+i.icon)+'" class="_acsBadgeImg">'),this.$el.$("._acsCounterInner")[0].appendChild(e))},c.prototype.enableCounter=function(){var e=this.$el.$("._acsBadgeImg")[0];e&&(this.$el.$("._acsCounterInner")[0].innerHTML="0",r(this.$el.$("._acsCounterInner")[0]).css({background:"#F87473"}))},c.prototype.remove=function(){this.$el.parentNode.removeChild(this.$el)};var d=function(e,t,i){this.from=e,this.to=t,this.diff=this.to-this.from,this.callback=i||function(){}};d.prototype={_tween:function(e){return--e*e*e+1},go:function(e){this.stop(),this.tm=e,this.startTime=new Date,this.timer=setInterval(i.proxy(function(){var e=new Date,t=e-this.startTime,i=Math.min(t/this.tm,1),s=this._tween(i);i>=1&&(clearInterval(this.timer),this.timer=null),this.val=s*this.diff+this.from,this.callback(this.val)},this),20)},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}};var h=function(e,s,n){var a,o=e.mid||i.getParam("mid"),c=s.isIE&&s.browser.version<9;if(this.br=s,this.cpps=n,this.$content=r('<div class="acsMainContainerMobile'+(c?" ie8":"")+'"></div>'),e.preview)a=this.cfg=e;else for(var d=0;d<e.instances.length;d++)if(e.instances[d].mid==o){a=this.cfg=e.instances[d];break}if(a){document.title=this.cfg.label;var h=this.sv=new S(this.cfg,this.cpps,this.br),l=this,u=!1,f=!1;h._getSurveyData(function(e){u=!0,l.survey=e,f&&l.renderSurvey()});var p=new i.JSONP({success:i.proxy(function(e){l.template=e,f=!0,u&&l.renderSurvey()},this)});p.get(t.makeURI("/feedback/templates/"+this.cfg.template+"/surveycontents.html"));var v=new i.JSONP({success:i.proxy(function(e){l.eptemplate=e},this)});v.get(t.makeURI("/feedback/templates/"+this.cfg.template+"/epilogue.html"))}};h.prototype._showThankyou=function(){var e=v(this.eptemplate,this.survey);this.$content.innerHTML=e;for(var t=this.$content.$("h1"),s=0;s<t.length;s++)r(t[s]).addClass("acs-feedback__heading acs-feedback__heading--h1");var n=this.$content.$(".acs-close-button")[0];i.Bind(n,"feedback:click",function(){window.close()}),window.location.hash="acsSurveyComplete"},h.prototype.renderSurvey=function(){var e=this;this.survey.ansLogoSrc="undefined"!=typeof t?t.makeURI("/feedback/p_b_answers.png"):"p_b_answers.png";var i=v(this.template,this.survey);this.$content.innerHTML=i,window.document.body.appendChild(this.$content),this.sv.bind(this.$content),this.$content.css({opacity:1}),this.sv.SurveySubmitted.subscribe(function(){e._showThankyou()})};var l={};l.popups=[],l.getPopup=function(e){var t=l.popups;if(t.length>0){for(var i=0;i<t.length;i++)if(t[i].cfg.mid==e)return t[i];return!1}return!1},l.removePopup=function(e){var t=l.popups;l.popups=t.filter(function(t){return t.cfg.mid!==e?t:void 0})},l.initialize=function(e,t,i,s){var n=l.getPopup(e.mid);n&&!n.cfg.popup?n.show():(n=new _(e,t,i,s),l.popups.push(n),n.SurveySubmitted.subscribe(function(){l.SurveySubmitted.fire()}),n.NetworkError.subscribe(function(){l.removePopup(e.mid),l.NetworkError.fire()}))},l.SurveySubmitted=new i.FSEvent,l.NetworkError=new i.FSEvent;var u=function(e){this.br=e,this.mid=y("mid"),this.previewmode=y("previewmode").toLowerCase(),this.datauri=y("datauri"),this.template=y("template")||"default"};u.prototype.show=function(){s(t.makeURI("/feedback/templates/"+this.template+"/fs.feedback.css"),i.proxy(function(e,t){if(e)if(this.mid&&this.previewmode&&this.datauri)switch(this.previewmode){case"desktop":l.initialize({mid:this.mid,datauri:this.datauri,posturi:"",reporturi:"",popup:!1,autowhitelist:!0,preview:!0,template:this.template},this.br);break;case"tablet":new h({mid:this.mid,datauri:this.datauri,posturi:"",reporturi:"",popup:!1,autowhitelist:!0,preview:!0,template:this.template},this.br);break;case"phone":new h({mid:this.mid,datauri:this.datauri,posturi:"",reporturi:"",popup:!1,autowhitelist:!0,preview:!0,template:this.template},this.br)}else alert("You need mid, previewmode, and datauri.")},this),null,this.br)};var f={exposePublicAPI:function(e,t,s){var n={},r=e.FSR||{},a=r.CPPS;if(n.CPPS=a||t,a){var o=a.set;a.set=function(e,i){t.set(e,i),o&&o.call(a,e,i)}}n.launchACSFeedback=function(e){for(var i,n=!1,r=!1,a=config.instances,o=0;o<a.length;o++)a[o].mid==e&&(i=o,n=a[o]);if(n&&n.disabled)return"This feedback has been disabled.";for(var c=0;c<n.topics.length;c++)if(m(n.topics[c])){r=!0;break}return n?r?void l.initialize(n,s,t):"Error: Either this measure is disabled or there are no active topics":"Error: MID provided is not valid"},e.FSFB||(e.FSFB={}),i.ext(e.FSFB,n,!1)}},p=function(e,t,s,n){t=i.ext({pid:"qw0efhha4z",e:e},t||{}),t.code_version=config.code_version;var r=new i.ImageTransport;r.send({url:"https://www.dsply.com/index.php",success:s||function(){},failure:n||function(){},data:t})},v=function(e,t){var i;return(i=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"))(t||{})},m=function(e){function t(e){for(s=c,n=0;n<e.length;n++){for(a=e[n].replace(/^\s+|\s+$/g,"").replace(/[\*]{2,}/g,"*").toLowerCase(),i=[];a.indexOf("*")>-1;)a.indexOf("*")>0&&i.push(a.substr(0,a.indexOf("*"))),i.push("*"),a=a.substr(a.indexOf("*")+1);for(a.length>0&&i.push(a),o=0===i.length?!1:!0,r=0;r<i.length;r++)if(a=i[r],"*"==a){if(i.length>r+1){if(r++,-1==s.indexOf(i[r])){o=!1;break}s=s.substr(s.indexOf(i[r])+i[r].length)}if(r==i.length-1&&"*"!==i[r]&&s!=i[r]&&s!=i[r]+"/"&&i[r]!=s+"/"&&s.length>0&&"/"!=s){o=!1;break}}else{if(s.substr(0,a.length)!=a&&s!=a+"/"&&a!=s+"/"){o=!1;break}if(s=s.substr(a.length),r==i.length-1&&s.length>0&&"/"!=s){o=!1;break}}if(o)return!0}return!1}var i,s,n,r,a,o,c=window._acsURL||window.location.toString().toLowerCase();return!e.whitelistActive||t(e.whitelistData)},g=function(e,n,r,a){this.cfg=e,this.cpps=r,this.emtemplate=a,this.br=n,this.enabled=!0;var o=this;o.surveyTriggered=new i.FSEvent,s(t.makeURI("/feedback/templates/"+(e.template||"default")+"/fs.feedback.css"),function(t,s){if(t){var r=function(){o.badge=new c(e,n,o.cpps),document.body.appendChild(o.badge.$el),o.badge.init(),o.badge.badgeClicked.subscribe(function(){p("feedback_clicked",{mid:e.mid}),o.surveyTriggered.fire({emtemplate:o.emtemplate})})};e.delay&&e.delay>0?setTimeout(i.proxy(r,this),e.delay):r()}},null,this.br)};g.prototype.disable=function(){this.enabled=!1,this.badge.$el.parentNode.removeChild(this.badge.$el)};var b=function(e,t){this.br=e,this.cfg=t};b.prototype.platformOK=function(){var e=this.cfg,t=this.br;return e.browser_cutoff[t.browser.name]&&t.browser.actualVersion<e.browser_cutoff[t.browser.name]?!1:e.platform_cutoff[t.os.name]&&t.os.version<e.platform_cutoff[t.os.name]?!1:!0};var w=function(e,i){var s=function(){};i=i||s;var n=new Image;n.onload=function(){i(n.width,n.height)},n.onerror=function(){},e.indexOf("//")>-1?n.src=e:n.src=t.makeURI("/feedback/"+e),n.width&&(n.onload=n.onerror=s,i(n.width,n.height))},y=function(e){var t=window.location.hash.toString();if(t&&t.length>0)for(var i=t.split("&"),s=0;s<i.length;s++){var n=i[s].split("="),r=n[0].toLowerCase().trim();if(r==e.toLowerCase()){if(n.length>1)return decodeURIComponent(n[1]);break}}};config=i.ext({browser_cutoff:{IE:8,IEMobile:8,Safari:4,Firefox:11,Chrome:20,Opera:1e3},platform_cutoff:{Android:4,Winphone:7.4,iPod:7,iPhone:7,iPad:7}},config),t.domReady(function(){var e=!!y("previewmode"),s=config.instances,n=-1,r=new i.FSEvent;if(s||e){var a=new i.Browser;a.browserReady.subscribe(function(){if(e){var o=new u(a);return void o.show()}if("IE"==a.browser.name&&a.browser.version<9)for(var c=0;c<s.length;c++)"vertical"==s[c].fbdirection&&(s[c].fbdirection="horizontal");var d=new b(a,config),h=new i.CPPS(null,"feedback");if(h.set("code_version",config.code_version),h.set("env",t.isProduction?"prd":"stg"),f.exposePublicAPI(window,h,a),d.platformOK()){for(var p=function(e){return function(t){l.initialize(e,a,h,t.emtemplate)}},v=!1,w=0;w<s.length;w++){var y=s[w],_=!1;n=w;for(var k=0;k<y.topics.length;k++)if(m(y.topics[k])){_=!0;break}if((_||0===y.topics.length)&&!y.disabled)switch(y.fbtype.toLowerCase()){case"badge":y.template||(y.template="default"),r.subscribe(function(e){return function(t){e.trigger=new g(e,a,h,t),e.trigger.surveyTriggered.subscribe(p(e))}}(y),!0,!0),v=!0}}if(v){var $=new i.JSONP({success:i.proxy(function(e){r.fire(e)},this)});$.get(t.makeURI("/feedback/templates/"+(s[n].template||"default")+"/serviceunavailable.html"))}l.SurveySubmitted.subscribe(function(){for(var e=0;e<s.length;e++){var t=s[e];t.trigger&&t.trigger.disable()}})}},!0,!0)}});var _=function(e,t,s,n){this.cfg=e,this.br=t,this.cpps=s,this.em=n,this.init(),this.SurveySubmitted=new i.FSEvent,this.NetworkError=new i.FSEvent};_.prototype.init=function(){var e=this,t=i.GetSize(window);!this.br.isMobile&&!this.cfg.popup&&t.w>500?i.isDefined(this.chrome)?this.chrome.show():(this.survey=new S(this.cfg,this.cpps,this.br),this.chrome=new $(this.survey,this.br,this.cfg,this.em),this.chrome.SurveySubmitted.subscribe(function(){e.SurveySubmitted.fire()}),this.survey.networkError.subscribe(function(){e.NetworkError.fire()})):(this.chrome=new k(new S(this.cfg,this.cpps,this.br),this.cfg),this.chrome.SurveySubmitted.subscribe(function(){e.SurveySubmitted.fire()}),this.chrome.show())},_.prototype.show=function(){this.chrome.show()};var k=function(e,t){this.height=600,this.width=400,this.survey=e,this.cfg=t,this.cpps=e.cpps,this.SurveySubmitted=new i.FSEvent};k.prototype.show=function(){if(!this.winRef){var e=JSON.stringify(this.cpps.all()),i=t.makeURI("/feedback/fs.feedbacksurvey.html?mid="+encodeURIComponent(this.survey.cfg.mid)+"&t="+encodeURIComponent(this.cfg.template||"default")+"&acsUrl="+encodeURIComponent(window.location.href)+"&cpps="+encodeURIComponent(e)+"&ns="+encodeURIComponent(this.cpps.site_id())),s=this;this.winRef=window.open(i,"_system"),this._checker=setInterval(function(){try{var e=s.winRef.location+"";e.indexOf("acsSurveyComplete")>-1&&(clearInterval(s._checker),s.SurveySubmitted.fire())}catch(t){clearInterval(s._checker),s.SurveySubmitted.fire()}},500)}};var $=function(e,s,n,a){this.sv=e,this.cfg=e.cfg,this.instcfg=n,this.browser=s,this.em=a,this.noserv=a,this.IE8=s.isIE&&s.browser.version<9,this.add();var o=this,c=!1,d=!1;this.SurveySubmitted=new i.FSEvent,e._getSurveyData(function(e){c=!0,o.survey=e,d&&o.renderSurvey()}),e.SurveySubmitStarted.subscribe(function(){o.$content.removeClass("acsVisible"),o._showWait()}),e.networkError.subscribe(function(){o._removeWait(),p("server_error",{mid:e.cfg.mid}),o.$content.innerHTML=v(o.noserv,o.survey);for(var t=o.$content.$("h1"),s=0;s<t.length;s++)r(t[s]).addClass("acs-feedback__heading acs-feedback__heading--h1");o.positionModal();var n=o.$content.$(".acs-close-button")[0];i.Bind(n,"feedback:click",function(){o.remove()}),o.$content.addClass("acsVisible")}),e.SurveySubmitted.subscribe(function(){p("feedback_submitted",{mid:e.cfg.mid}),o.$content.addClass("acsVisible"),o._showThankyou(),o.SurveySubmitted.fire(),o._removeWait()}),o._getModalTemplate(function(e){o.template=e,d=!0,c&&o.renderSurvey()});var h=new i.JSONP({success:i.proxy(function(e){o.eptemplate=e},this)});h.get(t.makeURI("/feedback/templates/"+(this.instcfg.template||"default")+"/epilogue.html"))};$.prototype._showThankyou=function(){var e=this,t=v(this.eptemplate,this.survey);this.$content.innerHTML=t;for(var s=this.$content.$("h1"),n=0;n<s.length;n++)r(s[n]).addClass("acs-feedback__heading acs-feedback__heading--h1");this.positionModal();var a=this.$content.$(".acs-close-button")[0];i.Bind(a,"feedback:click",function(){e.remove()})},$.prototype._showWait=function(){this._removeWait(),this._wait=new a,this.$el.appendChild(this._wait.$el),this._wait.center();var e=i.GetScroll(window),t=i.GetSize(window);this._wait.$el.css({top:e.y+(t.h-this._wait.$el.offsetHeight)/2+"px"})},$.prototype._removeWait=function(){this._wait&&(this._wait.remove(),this._wait=null)},$.prototype._getModalTemplate=function(e){var s=this,n=new i.JSONP({success:i.proxy(function(t){s.template=t,e&&e(t)},this)});n.get(t.makeURI("/feedback/templates/"+(this.instcfg.template||"default")+"/surveycontents.html"))},$.prototype.remove=function(){this.$el.remove()},$.prototype.add=function(e){e=e||window;var s=e.document.body,n=e.document.documentElement,a=Math.max(s.scrollHeight,s.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight);this.$el=r('<div class="acsModalContainer"></div>'),this.$el.css({height:a});var o=(this.$el,this.sv.cfg),c=this,d=r('<div class="acsModalBackFace"></div>'),h=r('<div class="acsModalChrome"></div>');if(this.browser.isIE&&8==this.browser.browser.version&&d.addClass("acsIE8"),!this.cfg.preview){i.Bind(d,"feedback:click",i.proxy(function(e){(this.survey||this.sv.networkError.didFire)&&(p("feedback_abandoned",{mid:o.mid}),this.survey?this.hide():this.remove())},this));var l=function(e){27==e.keyCode&&(p("feedback_abandoned",{mid:o.mid}),c.hide()),i.Unbind(document.body,"feedback:keyup",l)};i.Bind(document.body,"feedback:keyup",l),i.Bind(h,"feedback:click",function(e){var t=e.target;t&&t==h&&(p("feedback_abandoned",{mid:o.mid}),c.hide())})}var u=this.head=r('<div class="acsModalContent"></div>'),f=r('<div class="acsModalHead"></div>'),v=r('<img src="'+t.makeURI("/feedback/templates/"+(this.instcfg.template||"default")+"/closeBtn"+(this.IE8?"IE8":"")+".png")+'" class="acsModalCloseButton">');this.$head=f,f.appendChild(v),u.appendChild(f),this.$content=r('<div class="acsModalInnerContent"></div>'),u.appendChild(this.$content),h.appendChild(u),this.$el.appendChild(d),this.$el.appendChild(h),e.document.body.appendChild(this.$el),this.cfg.preview||i.Bind(v,"feedback:click",function(e){p("feedback_abandoned",{mid:o.mid}),c.hide()}),setTimeout(function(){d.addClass("_acsActive")},20),this._showWait()},$.prototype.renderSurvey=function(){p("survey_shown",{mid:this.sv.cfg.mid}),this._removeWait(),this.$head.addClass("acsVisible"),this.survey.ansLogoSrc=t.makeURI("/feedback/p_b_answers.png");var e=v(this.template,this.survey);this.$content.innerHTML=e,this.sv.bind(this.$content),this.positionModal(),this.$content.addClass("acsVisible"),this.sv.SurveyUIUpdated.fire()},$.prototype.positionModal=function(){var e=i.GetScroll(window),t=i.GetSize(window),s=this.$content.offsetHeight;this.head.css({marginTop:Math.max(0,e.y+(t.h-s-50)/2)+"px"})},$.prototype.hide=function(){this.$el.css({display:"none"})},$.prototype.show=function(){this.$el.css({display:"block"})};var S=function(e,t,s){this.cfg=e,this.data=null,this.cpps=t,this.browser=s,this.validationPassed=!1,this.SurveyUIUpdated=new i.FSEvent,this.SurveySubmitStarted=new i.FSEvent,this.SurveySubmitted=new i.FSEvent,this.networkError=new i.FSEvent,this.fc=new i.FrameController("acsfeedback","feedback")};S.prototype._transpileJSONDef=function(e){function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];e[s]&&(e[s]=e[s].replace(l,"<").replace(u,">"))}}var i,s,n,r,a={meta:e.survey.content.meta.info,ext:e.survey.content.meta["ext-info"],notopic:[],topics:[]},o=e.survey.content.main,c=o.cq,d=o.ca,h=o.ncq,l=/&lt;/gi,u=/&gt;/gi,f={};if(h&&"string"!=typeof h||(h={qstn:[]}),h.qstn&&"undefined"==typeof h.qstn.length&&(h.qstn=[h.qstn]),!this.cfg.autowhitelist&&this.cfg.topics.length>0)for(var p=0;p<this.cfg.topics.length;p++){var v=this.cfg.topics[p];m(v)&&(f[v.answerId]=!0)}for(t(a.meta,["epiloguetext","prologuetext"]),i=0;i<c.qstn.length;i++)for(n=c.qstn[i],t(n,["txt","lbl"]),a.notopic.push(n),n.answers=[],s=0;s<d.ans.length;s++)r=d.ans[s],r.qid==n.id&&(a.topics.push(r),n.answers.push(r));for(i=0;i<h.qstn.length;i++)for(n=h.qstn[i],t(n,["txt","lbl"]),n.answers=[],s=0;s<d.ans.length;s++)r=d.ans[s],r.qid==n.id&&n.answers.push(r);if(!this.cfg.autowhitelist&&this.cfg.topics.length>0){for(s=0;s<a.topics.length;s++)f[a.topics[s].id]||a.topics.splice(s--,1);for(s=0;s<a.notopic.length;s++)if("2"==a.notopic[s].qt)for(i=0;i<a.notopic[s].answers.length;i++)f[a.notopic[s].answers[i].id]||a.notopic[s].answers.splice(i--,1)}for(i=0;i<a.topics.length;i++){var g=a.topics[i];if(g.questions=[],h.qstn)for(s=0;s<h.qstn.length;s++)h.qstn[s].aid==g.id&&(t(h.qstn[s],["txt","lbl"]),g.questions.push(h.qstn[s]))}var b=[];for(i=0;i<a.notopic.length;i++)"2"==a.notopic[i].qt&&(b=a.notopic[i].answers);return a.vistopics=b,a},S.prototype._getSurveyData=function(e){var t=this;this.fc.ready.subscribe(function(){var s={mid:t.cfg.mid,cachebust:(new Date).getTime()};t.cfg.version&&(s.version=t.cfg.version),t._surveyReqTimer=setTimeout(i.proxy(function(){this.networkError.fire()},t),5e3),t.fc.ajax("GET",t.cfg.datauri,s,function(i,s){if(!t.networkError.didFire)if(i){clearTimeout(t._surveyReqTimer),t.data=t._transpileJSONDef(JSON.parse(s));var n=t.data.meta,r=!!n.logo2graphic,a=!!n.logo1graphic,o=!1,c=!1,d=function(){e&&e(t.data)};r||a?(r&&w(n.logo2graphic,function(e,t){o=!0,(!a||a&&c)&&d()}),a&&w(n.logo1graphic,function(e,t){c=!0,(!r||r&&o)&&d()})):d()}else t.networkError.fire()})},!0,!0)},S.prototype._postSurveyData=function(e){var t=this;return this.cfg.preview?void setTimeout(function(){e&&e()},100):void this.fc.ajax("POST",this.cfg.posturi,this._serialize(),function(i,s){i?e&&e():(sessionStorage.setItem("acsFeedbackSubmitted","true"),e&&e(),t.networkError.fire())},!0,"application/json")},S.prototype._bindStars=function(e){e=r(e);for(var t=e.$("fieldset.star-rating"),s=this,n=function(e){return function(){for(var t=0;t<e.length;t++)r(e[t]).removeClass("_acsHover")}},a=function(e,t){return function(e){for(var i=!1,s=e.srcElement||e.explicitOriginalTarget,n=0;n<t.length;n++)i?r(t[n]).removeClass("_acsHover"):i||r(t[n]).addClass("_acsHover"),t[n]==s&&(i=!0)}},o=function(e,t,i){return function(n){i&&(s.validationPassed=!0);for(var a=!1,o=function(){e.removeClass("_acsRatingSet")},c=n.srcElement||n.originalTarget,d=0;d<t.length;d++)a?r(t[d]).removeClass("star-rating__star--fill"):a||r(t[d]).addClass("star-rating__star--fill"),t[d]==c&&(a=!0,c.checked=!0),e.addClass("_acsRatingSet"),setTimeout(o,250)}},c=0;c<t.length;c++){var d=r(t[c]),h=d.$("label"),l=d.$("input");i.Bind(d,"feedback:mouseleave",n(h));for(var u=0;u<h.length;u++)i.Bind(h[u],"feedback:mouseenter",a(d,h));for(var f=0;f<l.length;f++)i.Bind(l[f],"feedback:click",o(d,l,0===c))}},S.prototype._bindCBs=function(e){e=r(e);for(var t=e.$(".acs-feedback__cbox"),s=function(e){return function(t){for(var i=e.$("label"),s=0;s<i.length;s++){var n=r(i[s]),a=n.$("input[type=checkbox]")[0];a.checked?n.addClass("acsChecked"):n.removeClass("acsChecked")}}},n=0;n<t.length;n++)for(var a=r(t[n]),o=a.$("input[type=checkbox]"),c=0;c<o.length;c++)i.Bind(o[c],"feedback:change",s(a))},S.prototype._bindRadios=function(e){e=r(e);for(var t=e.$(".acs-feedback__radio"),s=function(e){return function(t){for(var i=e.$("label"),s=0;s<i.length;s++){var n=r(i[s]),a=n.$("input[type=radio]")[0];a.checked?n.addClass("acsChecked"):n.removeClass("acsChecked")}}},n=0;n<t.length;n++)for(var a=r(t[n]),o=a.$("input[type=radio]"),c=0;c<o.length;c++)i.Bind(o[c],"feedback:change",s(a))},S.prototype._bindSelects=function(e){e=r(e);for(var t=e.$(".acs-feedback__select"),s=this,n=function(e,t){return function(i){var s=r(t).$("option")[t.selectedIndex];e.innerHTML=s.innerHTML}},a=function(){s._updateSelects(e)},o=0;o<t.length;o++){var c=r(t[o]),d=c.$("select")[0],h=c.$("div.acs-feedback__select-button")[0];r(d).css({height:c.offsetHeight+"px"}),i.Bind(d,"feedback:change",n(h,d))}this.SurveyUIUpdated.subscribe(function(){setTimeout(a,100)})},S.prototype._updateSelects=function(e){e=r(e);for(var t=e.$(".acs-feedback__select"),i=0;i<t.length;i++){var s=r(t[i]),n=s.$("select")[0];s.$("div.acs-feedback__select-button")[0];s.offsetHeight>0&&r(n).css({height:(s.offsetHeight||38)+"px"})}},S.prototype._bindTextAreas=function(e){e=r(e);for(var t=e.$(".acs-feedback__textarea"),s=function(e){var t=e.target||e.srcElement,i=parseInt(t.getAttribute("acsmaxlength"),10),s=t.value.replace(/\s+/g," ").length,n=i-s,a=r(t.parentNode),o=a.$(".acs-feedback__textarea--count")[0];return o.innerHTML=Math.max(0,n),0>n?(t.value=t.value.substr(0,t.value.length+n),!1):void 0},n=function(e){var t=e.target||e.srcElement,i=parseInt(t.getAttribute("acsmaxlength"),10),s=t.value.replace(/\s+/g," ").length,n=i-s-1,r=e.keyCode;return 0>n&&8!=r&&16!=r&&!(r>=37&&41>=r)?(e.preventDefault(),!1):void 0},a=0;a<t.length;a++){var o=r(t[a]),c=o.$("textarea")[0];o.$(".acs-feedback__textarea--count")[0];/^[0-9]+$/.test(c.getAttribute("acsmaxlength"))&&(i.Bind(c,"feedback:keydown",n),i.Bind(c,"feedback:keyup",s),i.Bind(c,"feedback:blur",s))}},S.prototype._serialize=function(){var e={mid:this.cfg.mid,url:window.location.toString().indexOf("&acsUrl")>-1?i.getParam("acsUrl"):window.location.toString(),responses:[]},t=e.responses,s=this.$el.$(".acs-visible__topic .acs-feedback__block, .acs-feedback__block.acs-persistent__block"),n=function(e){var t={electron:/(4026|417500|4405|4508|4844|4913|4917)[0-9]{11,12}/g,maestro:/(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)[0-9]{12}/g,dankort:/(5019)[0-9]{12}/g,instaPayment:/(637|638|639)[0-9]{13}/g,visa:/4[0-9]{12}(?:[0-9]{3})?/g,mastercard:/5[1-5][0-9]{14}/g,amex:/3[47][0-9]{13}/g,diners:/3(?:0[0-5]|[68][0-9])[0-9]{11}/g,discover:/6(?:011|5[0-9]{2}|22[19]|4[56789][0-9]{1})[0-9]{12}/g,jcb:/(?:2131|1800|35\d{3})\d{11}/g},i=e;for(var s in t)if(t[s].test(e)){var n=e.match(t[s]),r=new Array(n[0].length+1).join("X");i=i.replace(t[s],r)}return i};if(1==this.data.vistopics.length)for(var a=0;a<this.data.notopic.length;a++){var o=this.data.notopic[a];if("2"==o.qt){t.push({questionId:o.id,answerId:o.answers[0].id});break}}for(var c=0;c<s.length;c++){var d=s[c].getAttribute("questionid"),h=s[c].getAttribute("data-question-type");if(d)if("5"==h)for(var l=r(s[c]),u=l.$("input"),f=0;f<u.length;f++){var p=u[f].getAttribute("questionid");u[f].checked&&t.push({questionId:d,answerId:p})}else{var v={questionId:d},m=r(s[c]),g=m.$("input"),b=m.$("textarea"),w=m.$("select");if(g.length>0){var y=g[0].getAttribute("type");if("radio"==y){for(var _=0;_<g.length;_++)if(g[_].checked){v.answerId=g[_].value;var k=g[_].getAttribute("label");k&&(v.answerText=decodeURIComponent(k))}}else"hidden"==y?v.answerId=g[0].value:v.answerText=g[0].value}else if(b.length>0){var $=b[0].value.replace(/\s+/g," ");if($.length>13){var S=/(\d)[\s\-\.\\\/]+(?=\d)/g,C=n($.replace(S,"$1"));$=C}$.length>=1e3&&($=$.substr(0,999)),v.answerText=$}else if(w.length>0&&w[0].selectedIndex>0&&(v.answerId=w[0].value,!v.answerId||0===v.answerId.length))continue;t.push(v)}}var I=this.cpps.all();for(var x in I)t.push({questionId:x,answerText:I[x]});return this.cfg.version&&(e.version=this.cfg.version),e=JSON.stringify(e)},S.prototype._validationStatus=function(e){var t=r(this.$el.$(".acs-validation-block")[0]);e?t.css({display:"block"}):t.css({display:"none"})},S.prototype.bind=function(e){function t(t){for(var i=e.$(".acs-feedback__topic"),n=0;n<i.length;n++)r(i[n]).removeClass("acs-visible__topic");try{r(document.getElementById("topk_"+t)).addClass("acs-visible__topic"),s._topic=t}catch(a){}s.SurveyUIUpdated.fire()}var s=this;s.submitted=!1,s._bindSelects(e),s._bindStars(e),s._bindTextAreas(e),s._bindCBs(e),s._bindRadios(e),e=r(e),s.$el=e;for(var n=e.$(".acs-headingzone h1"),a=0;a<n.length;a++)r(n[a]).addClass("acs-feedback__heading acs-feedback__heading--h1");i.Bind(e.$(".acs-submit-feedback__button")[0],"click",function(e){return s._validationStatus(!s.validationPassed),s.validationPassed&&!s.submitted&&(s.SurveySubmitStarted.fire(),s.submitted=!0,s._postSurveyData(function(){s.SurveySubmitted.fire()})),e&&e.preventDefault&&e.preventDefault(),!1});var o=e.$(".acs-topic__selector")[0];i.Bind(o,"feedback:change",function(e){return function(i){t(e.value)}}(o)),1==this.data.vistopics.length&&(r(document.getElementById("topk_"+this.data.vistopics[0].id)).addClass("acs-visible__topic"),this._updateSelects(e))}});