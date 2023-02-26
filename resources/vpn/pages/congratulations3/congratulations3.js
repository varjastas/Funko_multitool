(()=>{"use strict";var e,t={5209:(e,t,i)=>{var n=i(6194),o=i(7718);function r(){return o.dy`
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

  .List{
    text-align: right;
    font-size: 20px;
    padding: 250px 110px 0 0;
  }
  .List > .E + .E{
    padding-top: 20px;
  }

  .Puzzle_Icon{
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

  .Image{
    padding: 7px 0 0;
  }
  .Image img{
    display: block;
    margin-left: auto;
  }
  .Browsec_Icon{
    display:inline-block;
    vertical-align: -5px;
    background: url( '/images/icons/24x24/disabled.png' ) 50% 50% no-repeat;
    background-size: contain;
    width: 24px;
    height: 24px;
    border: 1px solid transparent;
    border-width: 0 3px;
  }
  </style>

  <div class="List">
    <div class="E">
      1. Click the <div class="Puzzle_Icon"></div> toolbar icon to get started.
    </div>
    <div class="E">
      2. Pin Browsec
      <div class="Image">
        <img src="/images/congratulations/pinned.png" width="384" height="241" alt="" />
      </div>
    </div>
    <div class="E">
      3. Click <div class="Browsec_Icon"></div> to open Browsec
    </div>
  </div>

  <div class="Arrow"></div>`}var a=i(5517),s=i(1031),c=i(7679);class l extends((0,c.$)(a.Z)(o.oi)){render(){return r.call(this)}static get properties(){return{mainLink:{type:String},premiumLink:{type:String}}}get mainLink(){return this.browsecLink(n.Z.base,(e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"logo_link",utm_campaign:"default_campaign"})))}get premiumLink(){return this.browsecLink(n.Z.premium,(e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"congratulations_page",utm_campaign:"default_campaign"})))}browsecLink(e,t=(e=>e)){return(0,s.Z)(e,(e=>Object.assign(t(e),{instd:a.Z.getStateSync().daysAfterInstall})))}}customElements.define("main-block",l);var d=i(5693);(async()=>{var e;await a.Z.initiate();const t=document.querySelector("div.Main > div.In");null==t||null===(e=t.append)||void 0===e||e.call(t,document.createElement("main-block"))})(),document.title=(0,d.Z)("you_just_installed_browsec")}},i={};function n(e){var o=i[e];if(void 0!==o)return o.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,i,o,r)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,o,r]=e[d],s=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](i[c])))?i.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,o,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=647,(()=>{var e={647:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var o,r,[a,s,c]=i,l=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(t&&t(i);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var o=n.O(void 0,[592],(()=>n(5209)));o=n.O(o)})();