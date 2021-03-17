(()=>{var e={2775:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),o=n(7703),s=n(3727),i=n(5977),c=n(381),u=n.n(c),l=n(2077),d=n.n(l);const f=function(e){var t=e.id,n=e.description,a=e.amount,o=e.createdAt;return r.createElement("div",null,r.createElement(s.rU,{to:"/edit/".concat(t)},r.createElement("h3",null,n)),r.createElement("p",null,d()(a/100).format("$0,0.00"),"-",u()(o).format("MMMM Do, YYYY")))},m=function(e,t){var n=t.text,r=t.sortBy,a=t.startDate,o=t.endDate;return e.filter((function(e){var t=u()(e.createdAt),r=!a||a.isSameOrBefore(t,"day"),s=!o||o.isSameOrAfter(t,"day"),i=e.description.toLowerCase().includes(n.toLowerCase());return r&&s&&i})).sort((function(e,t){return"date"===r?e.createdAt<t.createdAt?1:-1:"amount"===r?e.amount<t.amount?1:-1:void 0}))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const j=(0,o.$j)((function(e){return{expenses:m(e.expenses,e.filters)}}))((function(e){return r.createElement("div",null,r.createElement("h1",null,"Expense list"),e.expenses.map((function(e){return r.createElement(f,p({key:e.id},e))})))}));var b=n(6141);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=(0,o.$j)((function(e){return{filters:e.filters}}),(function(e){return{setTextFilter:function(t){return e(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t))},sortByDate:function(){return e({type:"SORT_BY_DATE"})},sortByAmount:function(){return e({type:"SORT_BY_AMOUNT"})},setStartDate:function(t){return e(function(e){return{type:"SET_START_DATE",startDate:e}}(t))},setEndDate:function(t){return e(function(e){return{type:"SET_END_DATE",endDate:e}}(t))}}}))((function(e){var t,n,a=(t=(0,r.useState)({calendarFocused:null}),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],s=a[1];return r.createElement("div",null,r.createElement("input",{type:"text",value:e.filters.text,onChange:function(t){e.setTextFilter(t.target.value)}}),r.createElement("select",{value:e.filters.sortBy,onChange:function(t){"date"===t.target.value?e.sortByDate():"amount"===t.target.value&&e.sortByAmount()}},r.createElement("option",{value:"date"},"Date"),r.createElement("option",{value:"amount"},"Amount")),r.createElement(b.DateRangePicker,{startDateId:"MyDatePicker",endDateId:"yeah",startDate:e.filters.startDate,endDate:e.filters.endDate,onDatesChange:function(t){var n=t.startDate,r=t.endDate;e.setStartDate(n),e.setEndDate(r)},focusedInput:o.calendarFocused,onFocusChange:function(e){s({calendarFocused:e})},showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1}}))})),v=function(){return r.createElement("div",null,r.createElement(h,null),r.createElement(j,null))};function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(6063);const A=function(e){var t=E((0,r.useState)({descriptions:e.expense?e.expense.description:""}),2),n=t[0],a=t[1],o=E((0,r.useState)({note:e.expense?e.expense.note:""}),2),s=o[0],i=o[1],c=E((0,r.useState)({amount:e.expense?(e.expense.amount/100).toString():""}),2),l=c[0],d=c[1],f=E((0,r.useState)({createdAt:e.expense?u()(e.expense.createdAt):u()()}),2),m=f[0],p=f[1],j=E((0,r.useState)({calendarFocused:!1}),2),y=j[0],h=j[1],v=E((0,r.useState)({error:""}),2),g=v[0],A=v[1];return r.createElement("div",null,r.createElement("h3",null,g.error&&r.createElement("p",null,g.error)),r.createElement("form",{onSubmit:function(t){t.preventDefault(),n.descriptions&&l.amount?(A({error:""}),e.onSubmit({description:n.descriptions,amount:100*parseFloat(l.amount,10),createdAt:m.createdAt.valueOf(),note:s.note})):A({error:"Please provide description and amount."})}},r.createElement("input",{type:"text",placeholder:"Description",autoFocus:!0,value:n.descriptions,onChange:function(e){var t=e.target.value;a({descriptions:t})}}),r.createElement("input",{type:"text",placeholder:"Amount",value:l.amount,onChange:function(e){var t=e.target.value;t.match&&(t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||d({amount:t}))}}),r.createElement(b.SingleDatePicker,{date:m.createdAt,onDateChange:function(e){e&&p({createdAt:e})},focused:y.calendarFocused,onFocusChange:function(e){var t=e.focused;h({calendarFocused:t})},numberOfMonths:1,isOutsideRange:function(){return!1}}),r.createElement("textarea",{type:"text",value:s.note,placeholder:"Add note for your expense",onChange:function(e){var t=e.target.value;i({note:t})}}),r.createElement("button",null,"Add Exspense")))};var O=n(4586),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,r=e.note,a=void 0===r?"":r,o=e.amount,s=void 0===o?0:o,i=e.createdAt,c=void 0===i?0:i;return{type:"ADD_EXPENSE",expense:{id:(0,O.Z)(),description:n,note:a,amount:s,createdAt:c}}};const S=(0,o.$j)(void 0,(function(e){return{addExpense:function(t){return e(x(t))}}}))((function(e){return r.createElement("div",null,r.createElement("h1",null,"Add Expense"),r.createElement(A,{expense:e.expense,onSubmit:function(t){e.addExpense(t),e.history.push("/")}}))})),D=(0,o.$j)((function(e,t){return{expense:e.expenses.find((function(e){return e.id===t.match.params.id}))}}),(function(e,t){return{editExpense:function(t,n){return e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(t,n))},removeExpense:function(t){return e(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}(t))}}}))((function(e){return r.createElement("div",null,r.createElement(A,{expense:e.expense,onSubmit:function(t){e.editExpense(e.expense.id,t),e.history.push("/")}}),r.createElement("button",{onClick:function(){e.removeExpense({id:e.expense.id}),e.history.push("/")}},"Remove"))})),k=function(){return r.createElement("div",null,"help")},w=function(){return r.createElement("div",null,"404 - ",r.createElement(s.rU,{to:"/"},"go home"))},C=function(){return r.createElement("header",null,r.createElement("h1",null,"Track"),r.createElement(s.OL,{to:"/",activeClassName:"is-active",exact:!0},"Dashboard"),r.createElement(s.OL,{to:"/create",activeClassName:"is-active"},"Create"),r.createElement(s.OL,{to:"/help",activeClassName:"is-active"},"Help"))},T=function(){return r.createElement(s.VK,null,r.createElement("div",null,r.createElement(C,null),r.createElement(i.rs,null,r.createElement(i.AW,{path:"/",component:v,exact:!0}),r.createElement(i.AW,{path:"/create",component:S}),r.createElement(i.AW,{path:"/edit/:id",component:D}),r.createElement(i.AW,{path:"/help",component:k}),r.createElement(i.AW,{component:w}))))};var z=n(4890);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=[];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U={text:"",sortBy:"date",startDate:u()().startOf("month"),endDate:u()().endOf("month")};n(3797);var Y=n(3379),G=n.n(Y),L=n(8384);G()(L.Z,{insert:"head",singleton:!1}),L.Z.locals,n(3382);var X=(0,z.MT)((0,z.UY)({expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat($(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==t.id}));case"EDIT_EXPENSE":return e.map((function(e){return e.id===t.id?P(P({},e),t.updates):e}));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return R(R({},e),{},{text:t.text});case"SORT_BY_AMOUNT":return R(R({},e),{},{sortBy:"amount"});case"SORT_BY_DATE":return R(R({},e),{},{sortBy:"date"});case"SET_START_DATE":return R(R({},e),{},{startDate:t.startDate});case"SET_END_DATE":return R(R({},e),{},{endDate:t.endDate});default:return e}}})),W=X.getState();m(W.expenses,W.filters),X.dispatch(x({description:"water bill",amount:99})),X.dispatch(x({description:"gas bill",createdAt:1e3})),X.dispatch(x({description:"Rent",amount:3e3}));var K=r.createElement(o.zt,{store:X},r.createElement(T,null));a.render(K,document.getElementById("root"))},8384:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(4015),a=n.n(r),o=n(3645),s=n.n(o)()(a());s.push([e.id,"*{color:lime}html{font-size:62.5%}body{background:#000;font-family:Helvetica, Arial, sans-serif;font-size:1.6rem}button{cursor:pointer}button:disabled{cursor:default}.is-active{font-weight:bold}\n","",{version:3,sources:["webpack://./src/styles/base/_base.scss","webpack://./src/styles/base/_settings.scss"],names:[],mappings:"AACA,EACI,UAFc,CAIjB,KAEG,eAAgB,CACnB,KAEG,eCPS,CDQT,wCAAyC,CACzC,gBCJW,CDKd,OAGG,cAAe,CAClB,gBAGG,cACJ,CAAC,WAGG,gBAAiB",sourcesContent:["$brand-color: lime;\n* {\n    color: $brand-color;\n    // background-color: black;\n}\nhtml {\n    font-size: 62.5%;\n}\nbody {\n    background: $black;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: $m-size;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton:disabled {\n    cursor: default\n}\n\n.is-active {\n    font-weight: bold;\n}","$off-black: #20222b;\n$off-white: #a5afd7;\n$black: black;\n$lime: lime;\n$gray: gray;\n// Spacing\n$s-size: 1.2rem;\n$m-size: 1.6rem;\n$l-size: 3.2rem;\n$xl-size: 4.8rem;\n$desktop-breakpoint: 45rem;\n// m-size"],sourceRoot:""}]);const i=s},6700:(e,t,n)=>{var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=6700},6631:()=>{}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={143:0},t=[[2775,168]],r=e=>{},a=(a,o)=>{for(var s,i,[c,u,l,d]=o,f=0,m=[];f<c.length;f++)i=c[f],n.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(s in u)n.o(u,s)&&(n.m[s]=u[s]);for(l&&l(n),a&&a(o);m.length;)m.shift()();return d&&t.push.apply(t,d),r()},o=self.webpackChunkexpense_tracker=self.webpackChunkexpense_tracker||[];function s(){for(var r,a=0;a<t.length;a++){for(var o=t[a],s=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(s=!1)}s&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var i=n.x;n.x=()=>(n.x=i||(e=>{}),(r=s)())})(),n.x()})();
//# sourceMappingURL=app.bundle.js.map