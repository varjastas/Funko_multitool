(()=>{"use strict";var e,t={3006:(e,t,n)=>{var r=n(6194),o=n(7718);function i(){return o.dy`
  <style>
  :host{
    display: block;
  }

  a,
  a:hover,
  a:focus{
    outline: none!important;
    text-decoration: none;
  }

  a{
    color: #1c304e;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #1c304e;
    text-decoration: underline;
  }

  p{
    padding: 0;
    margin: 0 0 20px;
  }

  .Text{
    padding: 250px 110px 0 0;
    text-align: right;
    font-size: 20px;
  }
  .Text_Icon{
    display: inline-block;
    vertical-align: 0;
    width: 20px;
    height: 20px;
    background: url( '/images/congratulations/extensions_icon_2.svg' ) 0 0 no-repeat;
    background-size: contain;
    border: 1px solid transparent;
    border-width: 0 2px;
  }

  @keyframes arrow{
    0%{
      top:65px
    }
    10%{
      top:65px;
    }
    25%{
      top:15px;
    }
    40%{
      top:65px
    }
    100%{
      top:65px
    }
  }

  .Arrow{
    background: url( '/images/congratulations/arrow.svg' ) 0 0 no-repeat;
    background-size: contain;
    width: 40px;
    height: calc( 1.4 * 40px );
    position: absolute;
    top: 65px;
    right: 55px;
    animation: arrow 5s ease-in-out infinite;
  }
  </style>

  <div class="Text">Click the <div class="Text_Icon"></div> toolbar icon to get started.</div>
  <div class="Arrow"></div>`}var a=n(5517),s=n(1031),c=n(7679);class l extends((0,c.$)(a.Z)(o.oi)){render(){return i.call(this)}static get properties(){return{mainLink:{type:String},premiumLink:{type:String}}}get mainLink(){return this.browsecLink(r.Z.base,(e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"logo_link",utm_campaign:"default_campaign"})))}get premiumLink(){return this.browsecLink(r.Z.premium,(e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"congratulations_page",utm_campaign:"default_campaign"})))}browsecLink(e,t=(e=>e)){return(0,s.Z)(e,(e=>Object.assign(t(e),{instd:a.Z.getStateSync().daysAfterInstall})))}}customElements.define("main-block",l);var u=n(5693);(async()=>{var e;await a.Z.initiate();const t=document.querySelector("div.Main > div.In");null==t||null===(e=t.append)||void 0===e||e.call(t,document.createElement("main-block"))})(),document.title=(0,u.Z)("you_just_installed_browsec")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=659,(()=>{var e={659:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[592],(()=>r(3006)));o=r.O(o)})();