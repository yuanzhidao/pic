"use strict";(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[613,997,846],{1997:function(e,t,n){n.r(t),n.d(t,{PICTURES_COUNT:function(){return f}});var a=n(5944),i=n(7363),s=n(917),r=n(786),o=n(9308),c=n(88),l=n(6051),d=n(550),u=n(70);const p=[n(553),n(8348),n(2214),n(5034),n(9486),n(9483),n(8862)],f=p.length,A={handles:{walk:{},run:{},rotate:{}},control:{},firstRun:!0},g=r.Z.i`
  display: inline;
  padding: 0.5em 0.5em;
  &:hover {
    color: #555;
    cursor: pointer;
  }
`,b=s.iv`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`,m=s.iv`
  ${d.tS(d.Uo.lg)} {
    min-height: 500px;
  }

  canvas {
    cursor: move;
  }
`;t.default=e=>{const{initPositionZ:t=70}=e,n=(0,i.useRef)(null),s=(0,i.useRef)(null),r=(0,i.useRef)(A),[d,v]=(0,i.useState)(!1),[w,k]=(0,i.useState)(!1),[h,C]=(0,i.useState)(0),[Z,x]=(0,i.useState)((()=>document.body.classList.contains("dark-mode")?"#6c757d":"#fff")),[B,O]=(0,i.useState)(-1),U=(()=>{const{skin:t,cape:n}=e;return t&&n?`${(0,c.t)("general.skin")} & ${(0,c.t)("general.cape")}`:t?(0,c.t)("general.skin"):n?(0,c.t)("general.cape"):""})();(0,i.useEffect)((()=>{const a=s.current,i=new o.m8({domElement:a,width:a.clientWidth,height:a.clientHeight,skinUrl:e.skin||u,capeUrl:e.cape||"",detectModel:!1});i.camera.position.z=t,i.playerObject.skin.slim=e.isAlex;const c=new o.MS;if(r.current.handles={walk:c.add(o.Mo),run:c.add(o.Lr),rotate:c.add(o.eJ)},r.current.handles.run.paused=!0,i.animation=c,r.current.control=o.z$(i),!r.current.firstRun){const{handles:e}=r.current;e.walk.paused=!0,e.run.paused=!0,e.rotate.paused=!0,i.camera.position.z=70}return n.current=i,()=>{i.dispose(),r.current.firstRun=!1}}),[h]),(0,i.useEffect)((()=>()=>{r.current.firstRun=!0}),[]),(0,i.useEffect)((()=>{n.current.skinUrl=e.skin||u}),[e.skin]),(0,i.useEffect)((()=>{const t=n.current;e.cape?t.capeUrl=e.cape:t.playerObject.cape.visible=!1}),[e.cape]),(0,i.useEffect)((()=>{n.current.playerObject.skin.slim=e.isAlex}),[e.isAlex]);const y=Z.startsWith("#")?{backgroundColor:Z}:{backgroundImage:Z};return(0,a.BX)("div",Object.assign({className:"card"},{children:[(0,a.tZ)("div",Object.assign({className:"card-header"},{children:(0,a.BX)("div",Object.assign({className:"d-flex justify-content-between"},{children:[(0,a.BX)("h3",Object.assign({className:"card-title"},{children:[(0,a.tZ)("span",{children:(0,c.t)("general.texturePreview")},void 0),e.showIndicator&&(0,a.tZ)("span",Object.assign({className:"badge bg-olive ml-1"},{children:U}),void 0)]}),void 0),(0,a.BX)("div",{children:[(0,a.tZ)(g,{className:"fas fa-"+(w?"walking":"running"),"data-toggle":"tooltip","data-placement":"bottom",title:`${(0,c.t)("general.walk")} / ${(0,c.t)("general.run")}`,onClick:()=>{k((e=>!e));const{handles:e}=r.current;e.run.paused=!e.run.paused,e.walk.paused=!1}},void 0),(0,a.tZ)(g,{className:"fas fa-redo-alt","data-toggle":"tooltip","data-placement":"bottom",title:(0,c.t)("general.rotation"),onClick:()=>{const{handles:e}=r.current;e.rotate.paused=!e.rotate.paused}},void 0),(0,a.tZ)(g,{className:"fas fa-"+(d?"play":"pause"),"data-toggle":"tooltip","data-placement":"bottom",title:(0,c.t)("general.pause"),onClick:()=>{v((e=>!e)),n.current.animationPaused=!n.current.animationPaused}},void 0),(0,a.tZ)(g,{className:"fas fa-stop","data-toggle":"tooltip","data-placement":"bottom",title:(0,c.t)("general.reset"),onClick:()=>{C((e=>e+1))}},void 0)]},void 0)]}),void 0)}),void 0),(0,a.tZ)("div",Object.assign({className:"card-body",css:b,style:y},{children:(0,a.tZ)("div",{ref:s,css:m},void 0)}),void 0),(0,a.BX)("div",Object.assign({className:"card-footer"},{children:[(0,a.BX)("div",Object.assign({className:"mt-2 mb-3 d-flex"},{children:[(0,a.tZ)("div",{className:"btn-color bg-white rounded-pill mr-2 elevation-2",title:(0,c.t)("colors.white"),onClick:()=>x("#fff")},void 0),(0,a.tZ)("div",{className:"btn-color bg-black rounded-pill mr-2 elevation-2",title:(0,c.t)("colors.black"),onClick:()=>x("#000")},void 0),(0,a.tZ)("div",{className:"btn-color bg-gray rounded-pill mr-2 elevation-2",title:(0,c.t)("colors.gray"),onClick:()=>x("#6c757d")},void 0),(0,a.tZ)("div",Object.assign({className:"btn-color bg-green rounded-pill mr-2 elevation-2",css:l.b,title:(0,c.t)("colors.prev"),onClick:()=>{let e=B;B<=0?e=f-1:e-=1,O(e),x(`url('${p[e]}')`)}},{children:(0,a.tZ)("i",{className:"fas fa-arrow-left"},void 0)}),void 0),(0,a.tZ)("div",Object.assign({className:"btn-color bg-green rounded-pill mr-2 elevation-2",css:l.b,title:(0,c.t)("colors.next"),onClick:()=>{let e=B;B>=f-1?e=0:e+=1,O(e),x(`url('${p[e]}')`)}},{children:(0,a.tZ)("i",{className:"fas fa-arrow-right"},void 0)}),void 0)]}),void 0),e.children]}),void 0)]}),void 0)}},550:function(e,t,n){var a;function i(e){return`@media (max-width: ${e}px)`}function s(e,t){return`@media (min-width: ${e}px) and (max-width: ${t}px)`}function r(e){return`@media (min-width: ${e}px)`}n.d(t,{Uo:function(){return a},Qj:function(){return i},vX:function(){return s},tS:function(){return r}}),function(e){e[e.xs=0]="xs",e[e.sm=576]="sm",e[e.md=768]="md",e[e.lg=992]="lg",e[e.xl=1200]="xl"}(a||(a={}))},6051:function(e,t,n){n.d(t,{G:function(){return i},b:function(){return s}});var a=n(917);const i=a.iv`
  cursor: pointer;
`,s=a.iv`
  display: flex;
  justify-content: center;
  align-items: center;
`},553:function(e,t,n){e.exports=n.p+"864a68e8a8adc85a8f5c.webp"},8348:function(e,t,n){e.exports=n.p+"7c013d148e38c3c93778.webp"},2214:function(e,t,n){e.exports=n.p+"2bcf685251dfe81e4b78.webp"},5034:function(e,t,n){e.exports=n.p+"0a40452f370b1aa92bf0.webp"},9486:function(e,t,n){e.exports=n.p+"73fd567289fe5a9c1b6c.webp"},9483:function(e,t,n){e.exports=n.p+"5f0b07bf1518ad8e86ed.webp"},8862:function(e,t,n){e.exports=n.p+"b8e05e3c8cdcf432089f.webp"},70:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFDUlEQVR42u2a20sUURzH97G0LKMotPuWbVpslj1olJXdjCgyisowsSjzgrB0gSKyC5UF1ZNQWEEQSBQ9dHsIe+zJ/+nXfM/sb/rN4ZwZ96LOrnPgyxzP/M7Z+X7OZc96JpEISfWrFhK0YcU8knlozeJKunE4HahEqSc2nF6zSEkCgGCyb+82enyqybtCZQWAzdfVVFgBJJNJn1BWFgC49/VpwGVlD0CaxQiA5HSYEwBM5sMAdKTqygcAG9+8coHKY/XXAZhUNgDYuBSPjJL/GkzVVhAEU5tqK5XZ7cnFtHWtq/TahdSw2l0HUisr1UKIWJQBAMehDuqiDdzndsP2EZECAG1ZXaWMwOCODdXqysLf++uXUGv9MhUHIByDOijjdiSAoH3ErANQD73C7TXXuGOsFj1d4YH4OTJAEy8y9Hd0mCaeZ5z8dfp88zw1bVyiYhCLOg1ZeAqC0ybaDttHRGME1DhDeVWV26u17lRAPr2+mj7dvULfHw2q65fhQRrLXKDfIxkau3ZMCTGIRR3URR5toU38HbaPiMwUcKfBAkoun09PzrbQ2KWD1JJaqswjdeweoR93rirzyCMBCmIQizqoizZkm2H7iOgAcHrMHbbV9KijkUYv7qOn55sdc4fo250e+vUg4329/Xk6QB/6DtOws+dHDGJRB3XRBve+XARt+4hIrAF4UAzbnrY0ve07QW8uHfB+0LzqanMM7qVb+3f69LJrD90/1axiEIs6qIs21BTIToewfcSsA+Bfb2x67OoR1aPPzu2i60fSNHRwCw221Suz0O3jO+jh6V1KyCMGse9721XdN5ePutdsewxS30cwuMjtC860T5JUKpXyKbSByUn7psi5l+juDlZYGh9324GcPKbkycaN3jUSAGxb46IAYPNZzW0AzgiQ5tVnzLUpUDCAbakMQXXrOtX1UMtHn+Q9/X5L4wgl7t37r85OSrx+TYl379SCia9KXjxRpiTjIZTBFOvrV1f8ty2eY/T7XJ81FQAwmA8ASH1ob68r5PnBsxA88/xAMh6SpqW4HRnLBrkOA9Xv5wPAZjAUgOkB+SHxgBgR0qSMh0zmZRsmwDJm1gFg2PMDIC8/nAHIMls8x8GgzOsG5WiaqREgYzDvpTwjLDy8NM15LpexDEA3LepjU8Z64my+8PtDCmUyRr+fFwA2J0eAFYA0AxgSgMmYBMZTwFQnO9RNAEaHOj2DXF5UADmvAToA2ftyxZYA5BqgmZZApDkdAK4mAKo8GzPlr8G8AehzMAyA/i1girUA0HtYB2CaIkUBEHQ/cBHSvwF0AKZFS5M0ZwMQtEaEAmhtbSUoDADH9ff3++QZ4o0I957e+zYAMt6wHkhzpjkuAcgpwNcpA7AZDLsvpwiuOkBvxygA6Bsvb0HlaeKIF2EbADZpGiGzBsA0gnwQHGOhW2snRpbpPexbAB2Z1oicAMQpTnGKU5ziFKc4xSlOcYpTnOIUpzgVmgo+XC324WfJAdDO/+ceADkCpuMFiFKbApEHkOv7BfzfXt+5gpT8V7rpfYJcDz+jAsB233r6yyBsJ0mlBCDofuBJkel4vOwBFPv8fyYAFPJ+wbSf/88UANNRVy4Awo6+Ig2gkCmgA5DHWjoA+X7AlM//owLANkX0w0359od++pvX8fdMAcj3/QJ9iJsAFPQCxHSnQt8vMJ3v2wCYpkhkAOR7vG7q4aCXoMoSgG8hFAuc/grMdAD4B/kHl9da7Ne9AAAAAElFTkSuQmCC"}}]);