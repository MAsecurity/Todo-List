(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(537),o=t.n(i),a=t(645),r=t.n(a)()(o());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]),r.push([n.id,'*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Roboto, \'sans-serif\';\n}\n.material-symbols-outlined{\n  color: #f5f3ff;\n}\n.sidebar-projects .material-symbols-outlined:hover{\n  color: rgb(74, 240, 74)\n}\n\n#content{\n  display: grid;\n  min-height: 100vh;\n  grid-template-columns: 2fr 5fr;\n  grid-template-rows: 1fr 7fr;\n}\n.navbar{\n  grid-column: 2;\n  grid-row-start: 1;\n  background-color: #ddd6fe;\n  box-shadow: 0px 2px 3px #9ca3af;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  padding: 0px 30px;\n}\n\n.nav-content-right{\n  width: 30%;\n  display: flex;\n  justify-content: end;\n}\n.nav-content-left{\n  min-width: 70%;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n.nav-content-right div{\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.searchbar {\n  padding: 10px 8px;\n  border: 2px solid #7c3aed;\n  border-right: none;\n  border-radius: 3px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  font-size: 18px;\n  outline: none;\n  width: 80%;\n}\n.searchbar:focus{\n  border: 2px solid #4995ec;\n  border-right: none;\n}\n\n.nav-content-left button {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 5%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border: 2px solid #7c3aed;\n  background-color: #7c3aed;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0px 2px 3px #9ca3af;\n}\n.nav-content-left button:hover {\n  opacity: 0.8;\n}\n.nav-content-left button:active{\n  opacity: 0.5;\n  box-shadow: none;\n}\n\n.sidebar{\n  grid-column-start: 1;\n  grid-row: 1 / -1;\n  background-color:#7c3aed;\n  padding: 20px 20px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 4fr;\n  gap: 10%;\n}\n.sidebar-title-container{\n  display: flex;\n}\n\n.sidebar-title-container,.sidebar-inbox, .sidebar-today, .sidebar-upcomming,.sidebar-overdue,.sidebar-projects{\n  color: white;\n  font-weight: bold;\n  gap: 5px;\n}\n.sidebar-title-container span{\n  font-size: 3rem;\n}\n.sidebar-inbox span, .sidebar-today span, .sidebar-upcomming span , .sidebar-projects span,.sidebar-overdue span{\n  font-size: 2rem;\n}\n.sidebar-fields{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar-inbox, .sidebar-today, .sidebar-upcomming, .sidebar-overdue{\n  align-items: center;\n}\n.sidebar-inbox, .sidebar-today, .sidebar-upcomming,.sidebar-projects,.sidebar-overdue{\n  display: grid;\n  grid-template-columns: 1fr 1fr 5fr;\n  gap: 10px;\n  cursor: pointer;\n}\n.sidebar-inbox:hover, .sidebar-today:hover,.sidebar-upcomming:hover,.sidebar-overdue:hover,.sidebar-projects:hover{\n  opacity: 0.8;\n}\n.sidebar-inbox-status,.sidebar-today-status,.sidebar-upcomming-status, .sidebar-projects-status,.sidebar-overdue-status{\n  opacity: 0.6;\n  justify-self: end;\n}\n.main{\n  grid-column-start: 2;\n  grid-row-start: 2;\n  background-color:#f5f3ff ;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 5fr;\n}\n.main .create-task{\n  grid-row-start: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  align-items: center;\n  border-bottom: 2px solid #7c3aed;\n  gap: 10px;\n}\n.main .create-task span{\n  font-size: 30px;\n}\n.main .create-task .material-symbols-outlined{\n  color: #7c3aed;\n  grid-column-start: 2;\n  cursor: pointer;\n}\n.main .create-task .material-symbols-outlined:hover{\n  color: green;\n}\n\n.main .create-task .create-task-title{\n  color: black !important;\n  font-weight: bold;\n  grid-column-start: 1;\n}\n.main-changing-content{\n  grid-row-start: 2;\n}\n.dialog-container{\n  position: relative;\n}\n#dialog {\n  width: 550px;\n  height: 550px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f5f3ff;\n  border: 4px solid #7c3aed;\n  outline: none;\n  border-radius: 5px;\n  margin-top: 6%;\n}\n\n#dialog form {\n  padding: 10px 10px 30px 10px;\n  font-size: 16px;\n\n}\n\n.div-for-label{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n}\ninput[type="text"], input[type="date"], textarea{\n  width: 100%;\n  height: 50px;\n  padding: 12px 20px;\n  margin: 8px 0px;\n  border-radius: 3px;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  color: black;\n  border: 2px solid #7c3aed;\n}\ntextarea{\n  height: 87px;\n}\ninput[type="text"]:focus, input[type="date"]:focus, textarea:focus{\n  border: 2px solid #4995ec;\n}\ninput[type="text"]:invalid, input[type="date"]:invalid, textarea:invalid{\n  border: 2px solid red;\n}\n.required-status{\n  width: 50px;\n  height: 30px;\n  font-size: 10px !important;\n  background-color: #7c3aed;\n  border-radius: 3px;\n  color: #f5f3ff;\n  font-weight: bold;\n  justify-self: end;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfieldset {\n  padding: 10px 20px;\n  width: 100%;\n}\ninput[type="radio"]{\n  accent-color: #7c3aed;\n}\n.buttonsflex {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 15px;\n}\n.buttonsflex button{\n  width: 120px;\n  height: 40px;\n  border-radius: 3px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.cancelbtn{\n  background-color: black;\n  color: #f5f3ff;\n  border: none;\n  transition: 0.15s;\n\n}\n.cancelbtn:hover {\n  color: black;\n  background-color:  #f5f3ff;\n  border: 2px solid black;\n  opacity: 0.8;\n}\n\n.submitbtn {\n  color: #f5f3ff;\n  background-color:#7c3aed;\n  border: none;\n  transition: 0.15s;\n}\n.submitbtn:hover {\n  color: #7c3aed;\n  background-color: #f5f3ff;\n  border: 2px solid #7c3aed;\n  opacity: 0.8;\n}\n\n.cancelbtn:active,.submitbtn:active {\n  opacity: 0.5;\n}\n\n\n.main-container-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 70%;\n  min-width: 70%;\n}\n\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;AACnC;AACA;EACE,cAAc;AAChB;AACA;EACE;AACF;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,2BAA2B;AAC7B;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,+BAA+B;EAC/B,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,OAAO;EACP,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,aAAa;EACb,UAAU;AACZ;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,4BAA4B;EAC5B,+BAA+B;EAC/B,yBAAyB;EACzB,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,wBAAwB;EACxB,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,+BAA+B;EAC/B,QAAQ;AACV;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;AAC7B;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;EAChC,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;;AAEjB;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,cAAc;EACd,YAAY;EACZ,iBAAiB;;AAEnB;AACA;EACE,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,wBAAwB;EACxB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB",sourcesContent:['@import url(\'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\');\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Roboto, \'sans-serif\';\n}\n.material-symbols-outlined{\n  color: #f5f3ff;\n}\n.sidebar-projects .material-symbols-outlined:hover{\n  color: rgb(74, 240, 74)\n}\n\n#content{\n  display: grid;\n  min-height: 100vh;\n  grid-template-columns: 2fr 5fr;\n  grid-template-rows: 1fr 7fr;\n}\n.navbar{\n  grid-column: 2;\n  grid-row-start: 1;\n  background-color: #ddd6fe;\n  box-shadow: 0px 2px 3px #9ca3af;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  padding: 0px 30px;\n}\n\n.nav-content-right{\n  width: 30%;\n  display: flex;\n  justify-content: end;\n}\n.nav-content-left{\n  min-width: 70%;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n.nav-content-right div{\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.searchbar {\n  padding: 10px 8px;\n  border: 2px solid #7c3aed;\n  border-right: none;\n  border-radius: 3px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  font-size: 18px;\n  outline: none;\n  width: 80%;\n}\n.searchbar:focus{\n  border: 2px solid #4995ec;\n  border-right: none;\n}\n\n.nav-content-left button {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 5%;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border: 2px solid #7c3aed;\n  background-color: #7c3aed;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0px 2px 3px #9ca3af;\n}\n.nav-content-left button:hover {\n  opacity: 0.8;\n}\n.nav-content-left button:active{\n  opacity: 0.5;\n  box-shadow: none;\n}\n\n.sidebar{\n  grid-column-start: 1;\n  grid-row: 1 / -1;\n  background-color:#7c3aed;\n  padding: 20px 20px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 4fr;\n  gap: 10%;\n}\n.sidebar-title-container{\n  display: flex;\n}\n\n.sidebar-title-container,.sidebar-inbox, .sidebar-today, .sidebar-upcomming,.sidebar-overdue,.sidebar-projects{\n  color: white;\n  font-weight: bold;\n  gap: 5px;\n}\n.sidebar-title-container span{\n  font-size: 3rem;\n}\n.sidebar-inbox span, .sidebar-today span, .sidebar-upcomming span , .sidebar-projects span,.sidebar-overdue span{\n  font-size: 2rem;\n}\n.sidebar-fields{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar-inbox, .sidebar-today, .sidebar-upcomming, .sidebar-overdue{\n  align-items: center;\n}\n.sidebar-inbox, .sidebar-today, .sidebar-upcomming,.sidebar-projects,.sidebar-overdue{\n  display: grid;\n  grid-template-columns: 1fr 1fr 5fr;\n  gap: 10px;\n  cursor: pointer;\n}\n.sidebar-inbox:hover, .sidebar-today:hover,.sidebar-upcomming:hover,.sidebar-overdue:hover,.sidebar-projects:hover{\n  opacity: 0.8;\n}\n.sidebar-inbox-status,.sidebar-today-status,.sidebar-upcomming-status, .sidebar-projects-status,.sidebar-overdue-status{\n  opacity: 0.6;\n  justify-self: end;\n}\n.main{\n  grid-column-start: 2;\n  grid-row-start: 2;\n  background-color:#f5f3ff ;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 5fr;\n}\n.main .create-task{\n  grid-row-start: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  align-items: center;\n  border-bottom: 2px solid #7c3aed;\n  gap: 10px;\n}\n.main .create-task span{\n  font-size: 30px;\n}\n.main .create-task .material-symbols-outlined{\n  color: #7c3aed;\n  grid-column-start: 2;\n  cursor: pointer;\n}\n.main .create-task .material-symbols-outlined:hover{\n  color: green;\n}\n\n.main .create-task .create-task-title{\n  color: black !important;\n  font-weight: bold;\n  grid-column-start: 1;\n}\n.main-changing-content{\n  grid-row-start: 2;\n}\n.dialog-container{\n  position: relative;\n}\n#dialog {\n  width: 550px;\n  height: 550px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f5f3ff;\n  border: 4px solid #7c3aed;\n  outline: none;\n  border-radius: 5px;\n  margin-top: 6%;\n}\n\n#dialog form {\n  padding: 10px 10px 30px 10px;\n  font-size: 16px;\n\n}\n\n.div-for-label{\n  display: grid;\n  grid-template-columns: repeat(2,1fr);\n}\ninput[type="text"], input[type="date"], textarea{\n  width: 100%;\n  height: 50px;\n  padding: 12px 20px;\n  margin: 8px 0px;\n  border-radius: 3px;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  color: black;\n  border: 2px solid #7c3aed;\n}\ntextarea{\n  height: 87px;\n}\ninput[type="text"]:focus, input[type="date"]:focus, textarea:focus{\n  border: 2px solid #4995ec;\n}\ninput[type="text"]:invalid, input[type="date"]:invalid, textarea:invalid{\n  border: 2px solid red;\n}\n.required-status{\n  width: 50px;\n  height: 30px;\n  font-size: 10px !important;\n  background-color: #7c3aed;\n  border-radius: 3px;\n  color: #f5f3ff;\n  font-weight: bold;\n  justify-self: end;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfieldset {\n  padding: 10px 20px;\n  width: 100%;\n}\ninput[type="radio"]{\n  accent-color: #7c3aed;\n}\n.buttonsflex {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 15px;\n}\n.buttonsflex button{\n  width: 120px;\n  height: 40px;\n  border-radius: 3px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.cancelbtn{\n  background-color: black;\n  color: #f5f3ff;\n  border: none;\n  transition: 0.15s;\n\n}\n.cancelbtn:hover {\n  color: black;\n  background-color:  #f5f3ff;\n  border: 2px solid black;\n  opacity: 0.8;\n}\n\n.submitbtn {\n  color: #f5f3ff;\n  background-color:#7c3aed;\n  border: none;\n  transition: 0.15s;\n}\n.submitbtn:hover {\n  color: #7c3aed;\n  background-color: #f5f3ff;\n  border: 2px solid #7c3aed;\n  opacity: 0.8;\n}\n\n.cancelbtn:active,.submitbtn:active {\n  opacity: 0.5;\n}\n\n\n.main-container-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 70%;\n  min-width: 70%;\n}\n\n'],sourceRoot:""}]);const d=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var c=0;c<n.length;c++){var A=[].concat(n[c]);i&&r[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),e.push(A))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},r=[],d=0;d<n.length;d++){var s=n[d],c=i.base?s[0]+i.base:s[0],A=a[c]||0,l="".concat(c," ").concat(A);a[c]=A+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,i);i.byIndex=d,e.splice(d,0,{identifier:l,updater:m,references:1})}r.push(l)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var d=t(a[r]);e[d].references--}for(var s=i(n,o),c=0;c<a.length;c++){var A=t(a[c]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!n;)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),o=t.n(i),a=t(569),r=t.n(a),d=t(565),s=t.n(d),c=t(216),A=t.n(c),l=t(589),p=t.n(l),u=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=A(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;class C{constructor(n,e,t,i,o,a){this.title=n,this.description=e,this.dueDate=t,this.priority=i,this.status=o,this.project=a}getTitle(){return this.title}getDescription(){return this.description}getDueDate(){return this.dueDate}getPriority(){return this.priority}getStatus(){return this.status}getProject(){return this.project}setTitle(n){this.title=n}setDescription(n){this.description=n}setDueDate(n){this.dueDate=n}setPriority(n){this.priority=n}setStatus(n){this.status=n}setProject(n){this.project=n}printObj(){return"Title: "+this.title+" Description: "+this.description+" Due Date: "+this.dueDate+" Priority: "+this.priority+" Status: "+this.status+" Project: "+this.project}}let b=[];function f(){!function(){const n=document.querySelector(".main-changing-content");for(;n.firstElementChild;)n.firstElementChild.remove()}();const n=document.querySelector(".main-changing-content"),e=document.createElement("div");e.classList.add("dialog-container");const t=document.createElement("dialog");t.setAttribute("id","dialog");const i=document.createElement("div");i.textContent="Todo List",i.style.cssText="font-weight:bold; font-size:30px; text-decoration:underline; text-align:center;";const o=document.createElement("form"),a=document.createElement("div"),r=document.createElement("div");r.classList.add("div-for-label");const d=document.createElement("label");d.setAttribute("for","title"),d.textContent="Title:",d.style.cssText="font-weight: bold; ";const s=document.createElement("span");s.textContent="Required",s.classList.add("required-status");const c=document.createElement("input");Object.assign(c,{type:"text",id:"title",required:"required"});const A=document.createElement("div"),l=document.createElement("div");l.classList.add("div-for-label");const p=document.createElement("label");p.setAttribute("for","description"),p.textContent="Description:",p.style.cssText="font-weight: bold;";const u=document.createElement("textarea");Object.assign(u,{id:"description",required:"required"});const m=document.createElement("span");m.textContent="Required",m.classList.add("required-status");const f=document.createElement("div"),E=document.createElement("div");E.classList.add("div-for-label");const h=document.createElement("label");h.setAttribute("for","date"),h.textContent="Due Date:",h.style.cssText="font-weight: bold;";const g=document.createElement("input");Object.assign(g,{type:"date",id:"date",required:"required"});const B=document.createElement("span");B.textContent="Required",B.classList.add("required-status");const x=document.createElement("fieldset"),y=document.createElement("legend");y.textContent="Priority:";const v=document.createElement("div"),w=document.createElement("input");Object.assign(w,{type:"radio",name:"radio",value:"low",id:"low",checked:"checked"});const k=document.createElement("label");k.textContent="Low",k.setAttribute("for","low");const j=document.createElement("div"),L=document.createElement("input");Object.assign(L,{type:"radio",name:"radio",value:"medium",id:"medium"});const S=document.createElement("label");S.textContent="Medium",S.setAttribute("for","medium");const Y=document.createElement("div"),z=document.createElement("input");Object.assign(z,{type:"radio",name:"radio",value:"high",id:"high"});const T=document.createElement("label");T.textContent="High",T.setAttribute("for","high");const q=document.createElement("div");q.classList.add("buttonsflex");const D=document.createElement("button");Object.assign(D,{id:"cancel"}),D.classList.add("cancelbtn"),D.textContent="Cancel";const O=document.createElement("button");Object.assign(O,{id:"submit"}),O.classList.add("submitbtn"),O.textContent="Create",n.appendChild(e),e.appendChild(t),t.appendChild(i),t.appendChild(o),o.appendChild(a),a.appendChild(r),r.appendChild(d),r.appendChild(s),a.appendChild(c),o.appendChild(A),A.appendChild(l),l.appendChild(p),l.appendChild(m),A.appendChild(u),o.appendChild(f),f.appendChild(E),E.appendChild(h),E.appendChild(B),f.appendChild(g),o.appendChild(x),x.appendChild(y),x.appendChild(v),v.appendChild(w),v.appendChild(k),x.appendChild(j),j.appendChild(L),j.appendChild(S),x.appendChild(Y),Y.appendChild(z),Y.appendChild(T),o.appendChild(q),q.appendChild(D),q.appendChild(O),document.querySelector("#dialog").showModal(),document.querySelector("#cancel").addEventListener("click",(()=>{event.preventDefault(),dialog.close()})),function(){const n=document.querySelector(".submitbtn"),e=document.querySelector("#title"),t=document.querySelector("#description"),i=document.querySelector("#date"),o=document.querySelector("#low"),a=document.querySelector("#medium"),r=document.querySelector("#high");let d;n.addEventListener("click",(()=>{if(event.preventDefault(),""!==e.value&&""!==t.value&&""!==i.value){dialog.close(),o.checked?d=o.value:a.checked?d=a.value:r.checked&&(d=r.value);let n=new C(e.value,t.value,i.value,d,"Not in progress","default");b.push(n),b.forEach((n=>{console.log(n.printObj())}))}}))}()}const E=t.p+"c20753d788eb64cddadc.svg";!function(){const n=document.createElement("link");Object.assign(n,{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"});const e=document.createElement("div");e.setAttribute("id","content");const t=document.createElement("div");t.classList.add("navbar");const i=document.createElement("div");i.classList.add("nav-content-left");const o=document.createElement("input");o.classList.add("searchbar"),o.setAttribute("placeholder","Search...");const a=document.createElement("span");a.classList.add("material-symbols-outlined"),a.textContent="search";const r=document.createElement("button"),d=document.createElement("div");d.classList.add("nav-content-right");const s=document.createElement("div");s.textContent="Todo List";const c=document.createElement("div");c.classList.add("sidebar");const A=document.createElement("div");A.classList.add("sidebar-title-container");const l=document.createElement("span");l.textContent="Todo List Dashboard";const p=document.createElement("span");p.classList.add("material-symbols-outlined"),p.textContent="dashboard";const u=document.createElement("div");u.classList.add("sidebar-fields");const m=document.createElement("div");m.classList.add("sidebar-inbox");const C=document.createElement("span");C.textContent="Inbox";const b=document.createElement("span");b.textContent="inbox",b.classList.add("material-symbols-outlined");const f=document.createElement("span");f.classList.add("sidebar-inbox-status"),f.textContent="0";const h=document.createElement("div");h.classList.add("sidebar-today");const g=document.createElement("span");g.textContent="Today";const B=document.createElement("span");B.classList.add("material-symbols-outlined"),B.textContent="today";const x=document.createElement("span");x.classList.add("sidebar-today-status"),x.textContent="0";const y=document.createElement("div");y.classList.add("sidebar-upcomming");const v=document.createElement("span");v.textContent="Upcomming";const w=document.createElement("span");w.textContent="calendar_month",w.classList.add("material-symbols-outlined");const k=document.createElement("span");k.textContent="0",k.classList.add("sidebar-upcomming-status");const j=document.createElement("div");j.classList.add("sidebar-projects");const L=document.createElement("span");L.textContent="Projects";const S=document.createElement("span");S.classList.add("material-symbols-outlined"),S.textContent="expand_circle_right";const Y=document.createElement("span");Y.textContent="0",Y.classList.add("sidebar-projects-status");const z=document.createElement("div");z.classList.add("sidebar-overdue");const T=document.createElement("span");T.textContent="Overdue";const q=document.createElement("span");q.classList.add("material-symbols-outlined"),q.textContent="warning";const D=document.createElement("span");D.textContent="0",D.classList.add("sidebar-overdue-status");const O=document.createElement("div");O.classList.add("main");const Z=document.createElement("div");Z.classList.add("create-task");const P=document.createElement("span");P.classList.add("create-task-title"),P.textContent="Create a task here...";const R=document.createElement("span");Object.assign(R,{id:"createTodo"}),R.classList.add("material-symbols-outlined"),R.textContent="add_circle";const M=document.createElement("div");M.classList.add("main-changing-content");const U=document.createElement("div");U.classList.add("main-container-img");const I=document.createElement("img");I.style.cssText="width:50%; height:50%",I.src=E,document.head.appendChild(n),document.body.appendChild(e),e.appendChild(t),t.appendChild(i),i.appendChild(o),i.appendChild(r),r.appendChild(a),t.appendChild(d),d.appendChild(s),e.appendChild(c),c.appendChild(A),A.appendChild(p),A.appendChild(l),c.appendChild(u),u.appendChild(m),m.appendChild(b),m.appendChild(C),m.appendChild(f),u.appendChild(h),h.appendChild(B),h.appendChild(g),h.appendChild(x),u.appendChild(y),y.appendChild(w),y.appendChild(v),y.appendChild(k),u.appendChild(z),z.appendChild(q),z.appendChild(T),z.appendChild(D),c.appendChild(j),j.appendChild(S),j.appendChild(L),j.appendChild(Y),e.appendChild(O),O.appendChild(Z),Z.appendChild(P),Z.appendChild(R),O.appendChild(M),M.appendChild(U),U.appendChild(I)}(),document.querySelector("#createTodo").addEventListener("click",(()=>{f()})),document.querySelector(".sidebar-projects .material-symbols-outlined")})()})();
//# sourceMappingURL=main.js.map