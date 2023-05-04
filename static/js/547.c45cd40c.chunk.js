"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[547],{1547:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(7762),u=t(5861),a=t(4942),o=t(1413),i=t(9439),c=t(4687),s=t.n(c),l=t(2791),f="ContactsForm_form__1Y65-",m="ContactsForm_btn__qImoL",v=t(1686),p=t(9434),d=t(5036),h=t(4554),b=t(7723),y=t(9195),x=t(4695),_=t(6727),g=t(3329),k=_.Ry().shape({name:_.Z_().matches(/^[A-Za-z]+$/,"Name should not contain numbers").required(),number:_.Rx("Number should not contains letters").required()});var C=function(){var e,n,t,c,_=(0,l.useState)({name:"",number:""}),C=(0,i.Z)(_,2),N=C[0],j=C[1],w=(0,y.cI)({mode:"onBlur",resolver:(0,x.X)(k)}),Z=w.register,L=w.handleSubmit,A=w.formState.errors,F=(0,p.I0)(),q=(0,p.v9)((function(e){return e.contacts.contacts.items}));(0,l.useEffect)((function(){F((0,d.yF)())}),[F]);var E=function(e){var n=e.target,t=n.name,r=n.value;j((0,o.Z)((0,o.Z)({},N),{},(0,a.Z)({},t,r)))},S=function(){var e=(0,u.Z)(s().mark((function e(n){var t,u,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k.isValid(N);case 3:if(!e.sent){e.next=27;break}t=(0,r.Z)(q),e.prev=6,t.s();case 8:if((u=t.n()).done){e.next=14;break}if(a=u.value,N.name.toLocaleLowerCase()!==a.name.toLocaleLowerCase()){e.next=12;break}return e.abrupt("return",v.Notify.failure("".concat(N.name," is already in contacts.")));case 12:e.next=8;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t.e(e.t0);case 19:return e.prev=19,t.f(),e.finish(19);case 22:F((0,d.uK)(N)),z(),v.Notify.success("\u0421ontact added successfully"),e.next=28;break;case 27:return e.abrupt("return",v.Notify.failure("Please enter correct data"));case 28:case"end":return e.stop()}}),e,null,[[6,16,19,22]])})));return function(n){return e.apply(this,arguments)}}(),z=function(){j({name:"",number:""})},I=!(null===A||void 0===A||null===(e=A.name)||void 0===e||!e.message)&&"Name should not contain numbers",O=!(null===A||void 0===A||null===(n=A.number)||void 0===n||!n.message)&&"Number should not contains letters";return(0,g.jsxs)(h.Z,{component:"form",sx:{"& > :not(style)":{m:1}},noValidate:!0,autoComplete:"off",onSubmit:function(e){return L(S(e))},className:f,children:[(0,g.jsx)(b.Z,(0,o.Z)((0,o.Z)({id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",required:!0},Z("name")),{},{value:N.name,onChange:E,error:!(null===A||void 0===A||null===(t=A.name)||void 0===t||!t.message),helperText:I})),(0,g.jsx)(b.Z,(0,o.Z)((0,o.Z)({id:"outlined-basic",label:"Phone",variant:"outlined",type:"tel",name:"number",required:!0},Z("number")),{},{value:N.number,onChange:E,error:!(null===A||void 0===A||null===(c=A.number)||void 0===c||!c.message),helperText:O})),(0,g.jsx)("button",{type:"submit",className:m,children:"Add Contact"})]})},N="ContactList_btn__6Piat",j="ContactList_name__UCkFW",w="ContactList_list__csErn",Z="NOT_FOUND";var L=function(e,n){return e===n};function A(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,u=void 0===r?L:r,a=t.maxSize,o=void 0===a?1:a,i=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(u),s=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:Z},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return Z}return{get:r,put:function(n,u){r(n)===Z&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function l(){var n=s.get(arguments);if(n===Z){if(n=e.apply(null,arguments),i){var t=s.getEntries(),r=t.find((function(e){return i(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function F(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var a,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?t:l,m=Array.isArray(f)?f:[f],v=F(r),p=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(m)),d=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return a=p.apply(null,e)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:p,dependencies:v,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),d};return u}var E=q(A),S=E([function(e){return e.contacts.contacts.items},function(e){return e.contacts.filter}],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),z=function(){var e=(0,p.I0)(),n=(0,p.v9)(S);return(0,g.jsx)("ul",{className:w,children:n.map((function(n){var t=n.id,r=n.name,u=n.number;return(0,g.jsxs)("li",{className:j,children:[r,": ",u,(0,g.jsx)("button",{className:N,onClick:function(){e((0,d.GK)(t))},children:"Delete"})]},t)}))})},I="Filter_input__N7T3z",O=t(9652),R=function(){var e=(0,p.I0)();return(0,g.jsx)(h.Z,{component:"div",children:(0,g.jsx)(b.Z,{label:"Find contact by name",variant:"outlined",className:I,onChange:function(n){return e((0,O.W1)(n.target.value))},fullWidth:!0})})},T="Contacts_container__TJkHA";function D(){return(0,g.jsxs)("div",{className:T,children:[(0,g.jsx)(C,{}),(0,g.jsx)(R,{}),(0,g.jsx)(z,{})]})}}}]);
//# sourceMappingURL=547.c45cd40c.chunk.js.map