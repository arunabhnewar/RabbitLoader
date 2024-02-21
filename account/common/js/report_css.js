var RLCssData=function(){"use strict";let t=null;function o(e,t,n,s){let o={};n&&s?(o.APIKEY=n,o.APISECRET=s):n&&!s&&n.indexOf(".")&&(o.Authorization="Bearer "+n),fetch(`${t}api/v1/report/css?domain=${e}`,{headers:o}).then(function(e){return e.json()}).then(function(e){e&&e.data?i(e.data.meta,e.data.recent):i(!1,!1)})}function i(t){t.css_size_all||(t.css_size_all=0),t.css_size_p1||(t.css_size_p1=0);let i=s(t.canonical_url_count);if(i>0)var r=t.css_size_all/i,c=t.css_size_p1/i;if(t.css_size_all>0&&i>0){let o=t.css_size_all-t.css_size_p1,a=o/t.css_size_all;e("rl_total_pages",i.toLocaleString()),e("rl_original_size",n(r,1)),e("rl_p1_size",n(c,1)),e("rl_reductio_p",s(a*100)+"%")}else{let e=document.getElementById("rl_alert_no_css");e&&e.classList.remove("d-none")}i>0&&(e("rl_lt_or",a(r,150)),e("rl_lt_op",a(c,100)))}function s(e){return e=parseInt(e),!e||e==isNaN(e)?0:e}function e(e,t){let n=document.getElementById(e);n&&(n.innerHTML=t)}function n(e,t=2){if(!e||e===0||isNaN(e))return"0 KB";let n=1e3,o=t<0?0:t,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,s)).toFixed(o))+" "+i[s]}function a(e,t){if(!e||isNaN(e))return 0;let n=e*8/(1024*1024),s=n/1.6,o=s*1e3+t;return o.toFixed(1)+" ms"}function c(e){return!e||typeof e=="undefined"}function l(){let e=`<thead><tr><th>Canonical URL</th><th>Status</th><th>Original Size</th><th>Optimized Size</th><th>Improvement</th></tr></thead><tbody></tbody>`;return e}function r(e,o,i,a,r,d){t&&(t.destroy(),t=null),t=jQuery("#"+e).html(l()).DataTable({processing:!0,serverSide:!0,ajax:{type:"GET",url:a+"api/v1/report/css_urls",cache:!0,data:function(e){e.domain=o},dataSrc:function(e){return e.errorMsg?[]:(e.draw=e.data.draw,e.recordsFiltered=e.data.recordsFiltered,e.recordsTotal=e.data.recordsTotal,e.data.records)},beforeSend:function(e){r&&d?(e.setRequestHeader("APIKEY",r),e.setRequestHeader("APISECRET",d)):r&&!d&&r.indexOf(".")&&e.setRequestHeader("Authorization","Bearer "+r)},error:function(e){e&&[401,403].includes(e.status)?alert("Session expired, please login to continue."):e&&[400,404].includes(e.status)?alert("Invalid request."):e&&e.status==503?alert("Service temporary unavailable, please try in some time."):alert(e&&e.responseJSON&&e.responseJSON.message?e.responseJSON.message:"Network error, please try again.")}},columnDefs:[{orderable:!1,aTargets:[0,2,3,4]}],order:[[1,"asc"]],language:{emptyTable:"No canonical URL detected so far. For new site, it may take a few hours.",searchPlaceholder:"Type full words to filter..."},dom:'<"datatable-header"fBl><"datatable-scroll-wrap"tr><"datatable-footer"ip>',searchDelay:600,autoWidth:!1,columns:[{data:"url",render:function(e){let o=c(e)?"queued":decodeURI(e);return e&&i&&(o=`<a href="${i.replace("%%URL%%",encodeURIComponent(e))}">${o}</a>`),o}},{data:"refresh_required",render:function(e,t,n){let o=n.user_msg?n.user_msg:"Critical CSS generation is in progress for this page";return e||!n.hasOwnProperty("refresh_required")?'<span title="'+o+'">⌛</span>':'<span title="Critical CSS is generated for this page.">✔️</span>'}},{data:"css_size_all",render:function(e){return e?n(e):`<span title="Original size is not available yet">-</span>`}},{data:"css_size_p1",render:function(e){return e?n(e):`<span title="Optimized size is not available yet">-</span>`}},{data:"compression_p",render:function(e,t,n){if(n.css_size_all>0&&n.css_size_p1>0){let e=n.css_size_all?n.css_size_all-n.css_size_p1:0,t=e>0?e/n.css_size_all:0;return s(t*100)+"%"}return"-"}}]})}return{init:function(e,t,n,s,i,a){o(e,t,n,s),r(i,e,a,t,n,s)},initV2:function(e,t,n,s,i){o(e,t,n,""),r(s,e,i,t,n,"")}}}()