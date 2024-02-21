var RLScore=function(e,t){var i="searchParams",s="append",u="getTime",o="querySelector",r="fetch",n={};const l=location.href.indexOf(".local")>0;function d(){const e="modal_lighthouse_details",n=`<div class="modal-header pb-2"><h3 class="modal-title" id="rl_lh_title"></h3><button type="button" class="close" data-dismiss="modal">&times;</button></div>`,s=`<div class="modal-body"><div class="row" id="rl_lh_body"><div class="col-12">Analyzing webpage performance ....</div></div></div>`,i=`<div id="${e}" class="modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">${n}${s}</div></div></div>`;t[o]("body").innerHTML+=i,$("#"+e).modal("show")}function a(e,n){t[o]("#rl_lh_title").innerHTML=e,t[o]("#rl_lh_body").innerHTML=n}async function h(t){if(l){await p();return}const n=new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");n[i][s]("url",t),await e[r](n).then(e=>e.json()).then(c)}let m=function(e){let t=["#c3e2fa","#7db6e3","#358acc","#025fa8"];return e>75?t[3]:e>50?t[2]:e>25?t[1]:e>1?t[0]:"none"};function f(e){if(!e.score)return;const t=Math.round(e.score*100);return`<div class="mt-2">${e.title} <span class="text-secondary float-right float-end">${t}%</span></div><div class="progress" style="height: 0.525rem;"><div class="progress-bar" role="progressbar" style="width: ${t}%; background-color:${m(t)}" aria-valuenow="${t}" aria-valuemin="0" aria-valuemax="100"></div></div>`}function c(e){const i="rl_lh_main_score";n=e;let s=`<p>URL: ${n.id}</p>`;const r=v();if(r)s+=`Lighthouse encountered an error while anayzing the page. Please try again later. ${r}`;else{const e=n.lighthouseResult;let t=e.categories.performance.score;s+=`<small>Analyzed using Lighthouse version ${e.lighthouseVersion}</small><div class="svg-center" id="${i}" data-score="${t}"></div>`,Object.keys(e.audits).forEach(t=>{let n=f(e.audits[t]);n&&(s+=n)})}a("Lighthouse result is ready",`<div class="col-12">${s}</div>`),r||_roundedProgressSingle("#"+i,150,100,"#0cce6b",t[o]("#"+i).getAttribute("data-score"))}async function p(){const e=e=>new Promise(t=>setTimeout(t,e));await e(5e3),c({id:"https://example.com",lighthouseResult:{audits:{"key-1":{title:"LCP",score:.71},"key-2":{title:"Cumulative layout shift",score:.49},"key-3":{title:"LCP",score:.9}},categories:{performance:{score:.4}}}})}async function g(t){try{const o=(new Date)[u](),n=new URL(t);n[i][s]("rl-warmup","1"),n[i][s]("rl-rand",o),n[i][s]("rl-only-after",o),await e[r](n)}catch(e){console.warn(e,t)}}function v(){if(n.error&&n.error.message)return n.error.message}async function b(e,t){t&&d(),a("Performance analyzer",'<div class="col-12">Warming up ....</div>'),await g(e),a("Performance analyzer",'<div class="col-12">Analyzing with lighthouse ....</div>'),await h(e)}return{getScore:b}}(window,document)