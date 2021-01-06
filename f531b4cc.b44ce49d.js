(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),s=n(6),r=(n(0),n(73)),o={title:"Instance Settings"},i={unversionedId:"instance-settings",id:"instance-settings",isDocsHomePage:!1,title:"Instance Settings",description:"Running on a Headless Browser",source:"@site/../docs/instance-settings.md",slug:"/instance-settings",permalink:"/instance-settings",editUrl:"https://github.com/timgrossmann/InstaPy/edit/master/website/../docs/instance-settings.md",version:"current",sidebar:"docs",previous:{title:"Third Party Features",permalink:"/third-party-features"},next:{title:"Relationship Tools",permalink:"/relationship-tools"}},c=[{value:"Running on a Headless Browser",id:"running-on-a-headless-browser",children:[]},{value:"Bypass Suspicious Login Attempt",id:"bypass-suspicious-login-attempt",children:[]},{value:"Two Factor Authentication",id:"two-factor-authentication",children:[]},{value:"Use a proxy",id:"use-a-proxy",children:[]},{value:"Running internet connection checks",id:"running-internet-connection-checks",children:[]},{value:"Running in threads",id:"running-in-threads",children:[]},{value:"Choose the browser version",id:"choose-the-browser-version",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"running-on-a-headless-browser"},"Running on a Headless Browser"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"headless_browser")," parameter to run the bot via the CLI. Works great if running the scripts locally, or to deploy on a server. No GUI, less CPU intensive. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://g.recordit.co/BhEgXANLhJ.gif"}),"Example")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," Some users discourage the use of this feature as Instagram could ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://antoinevastel.com/bot%20detection/2017/08/05/detect-chrome-headless.html"}),"detect")," this headless mode!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"session = InstaPy(username='test', password='test', headless_browser=True)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"(Alternative)"),"\nIf the web driver you're using doesn't support headless mode (or the headless mode becomes very detectable), you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"nogui")," parameter which displays the window out of view. Keep in mind, this parameter lacks support and ease of use, only supporting Linux based operating systems (or those that have Xvfb, Xephyr and Xvnc display software)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"session = InstaPy(username='test', password='test', nogui=True)\n")),Object(r.b)("h3",{id:"bypass-suspicious-login-attempt"},"Bypass Suspicious Login Attempt"),Object(r.b)("p",null,"InstaPy detects automatically if the Security Code Challenge\nis active, if yes, it will ask you for the Security Code on\nthe terminal."),Object(r.b)("p",null,"The Security Code is send to your Email or SMS by Instagram, Email is the defaul option, but you can choose SMS also with:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bypass_security_challenge_using='sms'")," or ",Object(r.b)("inlineCode",{parentName:"p"},"bypass_security_challenge_using='email'")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"InstaPy(username=insta_username,\n        password=insta_password,\n        bypass_security_challenge_using='sms')\n")),Object(r.b)("h3",{id:"two-factor-authentication"},"Two Factor Authentication"),Object(r.b)("p",null,"InstaPy detects automatically if the account is protected with the Two Factor Authentication, if yes InstaPy user need to provide the Security codes in the session constructor; at least one code is required."),Object(r.b)("p",null,"Security codes can be found in: ",Object(r.b)("inlineCode",{parentName:"p"},"Settings")," -> ",Object(r.b)("inlineCode",{parentName:"p"},"Security")," -> ",Object(r.b)("inlineCode",{parentName:"p"},"Two-Factor-Authentication")," -> ",Object(r.b)("inlineCode",{parentName:"p"},"Backup Codes")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'InstaPy(username=insta_username,\n        password=insta_password,\n        security_codes=["01234567", "76543210", "01237654"],)\n')),Object(r.b)("ins",{class:"adsbygoogle","data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4875789012193531","data-ad-slot":"9530237054"}),Object(r.b)("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"),Object(r.b)("h3",{id:"use-a-proxy"},"Use a proxy"),Object(r.b)("p",null,"You can use InstaPy behind a proxy by specifying server address, port and/or proxy authentication credentials. It works with and without ",Object(r.b)("inlineCode",{parentName:"p"},"headless_browser")," option."),Object(r.b)("p",null,"Simple proxy setup example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"session = InstaPy(username=insta_username,\n                  password=insta_password,\n                  proxy_address='8.8.8.8',\n                  proxy_port=8080)\n")),Object(r.b)("p",null,"Proxy setup with authentication example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"session = InstaPy(username=insta_username,\n                  password=insta_password,\n                  proxy_username='',\n                  proxy_password='',\n                  proxy_address='8.8.8.8',\n                  proxy_port=4444)\n")),Object(r.b)("h3",{id:"running-internet-connection-checks"},"Running internet connection checks"),Object(r.b)("p",null,"InstaPy can perform a few checks online, including you connection and the availability of Instagram servers. These checks sometimes fail because Instapy uses third party services to perform these checks. If this should be the case. you can override these checks with this variable: ",Object(r.b)("inlineCode",{parentName:"p"},"want_check_browser"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"want_check_browser")," default is False, you can set it to True at session start. Recommend to do this if you want to add additional checks for the connection to the web and Instagram."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"session = InstaPy(username=insta_username,\n                  password=insta_password,\n                  want_check_browser=True)\n")),Object(r.b)("h3",{id:"running-in-threads"},"Running in threads"),Object(r.b)("p",null,"If you're running InstaPy in threads and get exception ",Object(r.b)("inlineCode",{parentName:"p"},"ValueError: signal only works in main thread")," , you have to properly close the session.\nThere is two ways to do it:"),Object(r.b)("p",null,"Closing session in smart_run context:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'session = InstaPy()\nwith smart_run(session, threaded=True):\n    """ Activity flow """\n    # some activity here ...\n')),Object(r.b)("p",null,"Closing session with ",Object(r.b)("inlineCode",{parentName:"p"},"end()")," method"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"session = InstaPy()\nsession.login()\n# some activity here ...\nsession.end(threaded_session=True)\n")),Object(r.b)("h3",{id:"choose-the-browser-version"},"Choose the browser version"),Object(r.b)("p",null,"If you have more than one Firefox version on your system or if you are using a portable version you can instruct InstaPy to use that version using the ",Object(r.b)("inlineCode",{parentName:"p"},"browser_executable_path")," argument in the class initializer."),Object(r.b)("p",null,"Specifying the Firefox executable path can also help you if you are getting the following error message:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"selenium.common.exceptions.SessionNotCreatedException: Message: Unable to find a matching set of capabilities")),Object(r.b)("p",null,"Example on a Windows machine (with the right path also works on Linux and macOS)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'session = InstaPy(username=insta_username,\n                  password=insta_password,\n                  browser_executable_path=r"D:\\Program Files\\Mozilla Firefox\\firefox.exe")\n')),Object(r.b)("ins",{class:"adsbygoogle","data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4875789012193531","data-ad-slot":"9530237054"}),Object(r.b)("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"))}p.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?s.a.createElement(h,i(i({ref:t},l),{},{components:n})):s.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);