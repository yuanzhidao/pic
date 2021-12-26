"use strict";(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[931],{9072:function(e,t,s){var i=s(5893);s(7363);const n=new Map([["success","check"],["info","info"],["warning","exclamation-triangle"],["danger","times-circle"]]);t.Z=e=>{const{type:t}=e,s=n.get(t);return e.children?(0,i.jsxs)("div",Object.assign({className:`alert alert-${t}`},{children:[(0,i.jsx)("i",{className:`icon fas fa-${s}`},void 0),e.children]}),void 0):null}},7694:function(e,t,s){var i=s(5944),n=s(7363),a=s(7745),r=s.n(a),o=s(3601),c=s(88),l=s(6051);const u=Symbol();class d extends n.Component{constructor(e){super(e),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"execute",{enumerable:!0,configurable:!0,writable:!0,value:async()=>{const e=this.ref.current;return e&&this.state.invisible?new Promise((t=>{const s=(0,o.on)(u,(e=>{t(e),s()}));e.execute()})):this.state.value}}),Object.defineProperty(this,"reset",{enumerable:!0,configurable:!0,writable:!0,value:()=>{const e=this.ref.current;e?e.reset():this.setState({time:Date.now()})}}),Object.defineProperty(this,"handleValueChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.setState({value:e.target.value})}}),Object.defineProperty(this,"handleVerify",{enumerable:!0,configurable:!0,writable:!0,value:e=>{(0,o.j)(u,e),this.setState({value:e})}}),Object.defineProperty(this,"handleRefresh",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.setState({time:Date.now()})}}),this.state={value:"",time:Date.now(),sitekey:blessing.extra.recaptcha,invisible:blessing.extra.invisible},this.ref=n.createRef()}render(){return this.state.sitekey?(0,i.tZ)("div",Object.assign({className:"mb-2"},{children:(0,i.tZ)(r(),{ref:this.ref,sitekey:this.state.sitekey,size:this.state.invisible?"invisible":"normal",onVerify:this.handleVerify},void 0)}),void 0):(0,i.BX)("div",Object.assign({className:"d-flex"},{children:[(0,i.tZ)("div",Object.assign({className:"form-group mb-3 mr-2"},{children:(0,i.tZ)("input",{type:"text",className:"form-control",placeholder:(0,c.t)("auth.captcha"),required:!0,value:this.state.value,onChange:this.handleValueChange},void 0)}),void 0),(0,i.tZ)("img",{src:`${blessing.base_url}/auth/captcha?v=${this.state.time}`,alt:(0,c.t)("auth.captcha"),css:l.G,height:34,title:(0,c.t)("auth.change-captcha"),onClick:this.handleRefresh},void 0)]}),void 0)}}t.Z=d},2982:function(e,t,s){var i=s(5944),n=s(7363),a=s(8808),r=s.n(a),o=s(917),c=s(3601),l=s(6051);const u=o.iv`
  .dropdown-menu li {
    ${l.G}
  }
`,d=new Set(["qq.com","163.com","gmail.com","hotmail.com"]);t.Z=e=>{const[t,s]=(0,n.useState)([]);return(0,n.useEffect)((()=>{(0,c.j)("emailDomainsSuggestion",d)}),[]),(0,i.tZ)("div",Object.assign({css:u},{children:(0,i.tZ)(r(),{suggestions:t,onSuggestionsFetchRequested:({value:e})=>{const t=e.split("@");s([...d].map((e=>`${t[0]}@${e}`)))},onSuggestionsClearRequested:()=>{s([])},getSuggestionValue:e=>e,renderSuggestion:e=>e,shouldRenderSuggestions:e=>[...d].some((t=>e.endsWith(`@${t}`)))||e.length>0&&!e.includes("@"),inputProps:Object.assign({},e,{onChange:(t,s)=>{e.onChange(s.newValue)}}),renderInputComponent:e=>(0,i.BX)("div",Object.assign({className:"input-group"},{children:[(0,i.tZ)("input",Object.assign({className:"form-control"},e),void 0),(0,i.tZ)("div",Object.assign({className:"input-group-append"},{children:(0,i.tZ)("div",Object.assign({className:"input-group-text"},{children:(0,i.tZ)("i",{className:"fas fa-envelope"},void 0)}),void 0)}),void 0)]}),void 0),theme:{container:"mb-3",suggestion:"dropdown-item",suggestionsContainer:"dropdown",suggestionsList:"dropdown-menu "+(t.length?"show":""),suggestionHighlighted:"active"}},void 0)}),void 0)}},9018:function(e,t,s){s.d(t,{Z:function(){return a}});var i=s(7363),n=s(3601);function a(){(0,i.useEffect)((()=>{(0,n.j)("mounted")}),[])}},6051:function(e,t,s){s.d(t,{G:function(){return n},b:function(){return a}});var i=s(917);const n=i.iv`
  cursor: pointer;
`,a=i.iv`
  display: flex;
  justify-content: center;
  align-items: center;
`},3931:function(e,t,s){s.r(t);var i=s(5893),n=s(7363),a=s(1570),r=s(9018),o=s(88),c=s(6703),l=s(8848),u=s(9072),d=s(7694),h=s(2982);t.default=(0,a.w)((()=>{const[e,t]=(0,n.useState)(""),[s,a]=(0,n.useState)(!1),[g,v]=(0,n.useState)(""),[b,f]=(0,n.useState)(""),m=(0,n.useRef)(null);return(0,r.Z)(),(0,i.jsxs)("form",Object.assign({onSubmit:async t=>{t.preventDefault(),f(""),a(!0);const s=await m.current.execute(),{code:i,message:n}=await c.v_(l.Z.auth.forgot(),{email:e,captcha:s});0===i?v(n):(f(n),m.current.reset()),a(!1)}},{children:[(0,i.jsx)(h.Z,{type:"email",placeholder:(0,o.t)("auth.email"),required:!0,autoFocus:!0,value:e,onChange:t},void 0),(0,i.jsx)(d.Z,{ref:m},void 0),(0,i.jsx)(u.Z,Object.assign({type:"success"},{children:g}),void 0),(0,i.jsx)(u.Z,Object.assign({type:"warning"},{children:b}),void 0),(0,i.jsxs)("div",Object.assign({className:"d-flex justify-content-between align-items-center"},{children:[(0,i.jsx)("a",Object.assign({href:`${blessing.base_url}/auth/login`},{children:(0,o.t)("auth.forgot.login-link")}),void 0),(0,i.jsx)("button",Object.assign({className:"btn btn-primary",type:"submit",disabled:s},{children:s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fas fa-spinner fa-spin mr-1"},void 0),(0,o.t)("auth.sending")]},void 0):(0,o.t)("auth.send")}),void 0)]}),void 0)]}),void 0)}))}}]);