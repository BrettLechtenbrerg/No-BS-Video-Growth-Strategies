(()=>{var a={};a.id=487,a.ids=[487],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},308:(a,b,c)=>{"use strict";c.d(b,{S:()=>h,kU:()=>f,pb:()=>g});var d=c(641),e=c(5559);function f(a,b){return d.NextResponse.json({success:!0,data:a,message:b})}function g(a,b=400){return d.NextResponse.json({success:!1,error:a},{status:b})}async function h(a,b){try{let c=await a.json(),d=b.parse(c);return{success:!0,data:d}}catch(a){if(a instanceof e.G)return{success:!1,error:`Validation failed: ${a.errors.map(a=>a.message).join(", ")}`};return{success:!1,error:"Invalid request body"}}}},846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5559:(a,b,c)=>{"use strict";c.d(b,{G:()=>f,eq:()=>e});var d=c(8196);let e=d.ZS.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class f extends Error{get errors(){return this.issues}constructor(a){super(),this.issues=[],this.addIssue=a=>{this.issues=[...this.issues,a]},this.addIssues=(a=[])=>{this.issues=[...this.issues,...a]};let b=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,b):this.__proto__=b,this.name="ZodError",this.issues=a}format(a){let b=a||function(a){return a.message},c={_errors:[]},d=a=>{for(let e of a.issues)if("invalid_union"===e.code)e.unionErrors.map(d);else if("invalid_return_type"===e.code)d(e.returnTypeError);else if("invalid_arguments"===e.code)d(e.argumentsError);else if(0===e.path.length)c._errors.push(b(e));else{let a=c,d=0;for(;d<e.path.length;){let c=e.path[d];d===e.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(b(e))):a[c]=a[c]||{_errors:[]},a=a[c],d++}}};return d(this),c}static assert(a){if(!(a instanceof f))throw Error(`Not a ZodError: ${a}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,d.ZS.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(a=a=>a.message){let b={},c=[];for(let d of this.issues)if(d.path.length>0){let c=d.path[0];b[c]=b[c]||[],b[c].push(a(d))}else c.push(a(d));return{formErrors:c,fieldErrors:b}}get formErrors(){return this.flatten()}}f.create=a=>new f(a)},6439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},6487:()=>{},7975:(a,b,c)=>{"use strict";c.d(b,{z:()=>e});let d=require("@prisma/client"),e=globalThis.prisma??new d.PrismaClient},8120:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>D,patchFetch:()=>C,routeModule:()=>y,serverHooks:()=>B,workAsyncStorage:()=>z,workUnitAsyncStorage:()=>A});var d={};c.r(d),c.d(d,{GET:()=>w,POST:()=>x});var e=c(5736),f=c(9117),g=c(4044),h=c(9326),i=c(2324),j=c(261),k=c(4290),l=c(5328),m=c(8928),n=c(6595),o=c(3421),p=c(7679),q=c(1681),r=c(3446),s=c(6439),t=c(1356),u=c(7975),v=c(308);async function w(a){try{let[a,b,c,d,e,f]=await Promise.all([u.z.analyticsEvent.count(),u.z.analyticsSession.count(),u.z.analyticsEvent.count({where:{event:"page_view"}}),u.z.analyticsEvent.count({where:{event:"button_click"}}),u.z.analyticsEvent.count({where:{event:"scroll_depth"}}),u.z.analyticsEvent.findMany({take:10,orderBy:{timestamp:"desc"},select:{id:!0,event:!0,properties:!0,timestamp:!0,url:!0}})]),g=(await u.z.analyticsEvent.findMany({where:{event:"button_click"},select:{properties:!0}})).reduce((a,b)=>{if(b.properties)try{let c=JSON.parse(b.properties).buttonText||"Unknown";a[c]=(a[c]||0)+1}catch{}return a},{}),h=(await u.z.analyticsEvent.findMany({where:{event:"scroll_depth"},select:{properties:!0}})).reduce((a,b)=>{if(b.properties)try{let c=JSON.parse(b.properties).depth;"number"==typeof c&&(a[c]=(a[c]||0)+1)}catch{}return a},{}),i=f.map(a=>({...a,properties:a.properties?(()=>{try{return JSON.parse(a.properties)}catch{return null}})():null}));return(0,v.kU)({summary:{totalEvents:a,totalSessions:b,pageViews:c,buttonClicks:d,scrollEvents:e},buttonStats:Object.entries(g).sort(([,a],[,b])=>b-a).slice(0,10).reduce((a,[b,c])=>({...a,[b]:c}),{}),scrollStats:h,recentEvents:i},"Analytics dashboard data retrieved successfully")}catch(a){return console.error("Analytics dashboard error:",a),(0,v.pb)("Failed to fetch analytics data",500)}}async function x(){return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Analytics Dashboard</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; margin: 40px; }
        .card { background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .stat { display: inline-block; margin: 10px 20px 10px 0; }
        .stat-value { font-size: 24px; font-weight: bold; color: #0066FF; }
        .stat-label { font-size: 14px; color: #666; }
        .event { padding: 8px; border-bottom: 1px solid #eee; font-size: 12px; }
        pre { background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto; }
      </style>
    </head>
    <body>
      <h1>Analytics Dashboard</h1>
      <div id="dashboard">Loading...</div>
      
      <script>
        async function loadDashboard() {
          try {
            const response = await fetch('/api/analytics/dashboard');
            const data = await response.json();
            
            if (data.success) {
              const { summary, buttonStats, scrollStats, recentEvents } = data.data;
              
              document.getElementById('dashboard').innerHTML = \`
                <div class="card">
                  <h2>Summary</h2>
                  <div class="stat">
                    <div class="stat-value">\${summary.totalEvents}</div>
                    <div class="stat-label">Total Events</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.totalSessions}</div>
                    <div class="stat-label">Sessions</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.pageViews}</div>
                    <div class="stat-label">Page Views</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.buttonClicks}</div>
                    <div class="stat-label">Button Clicks</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.scrollEvents}</div>
                    <div class="stat-label">Scroll Events</div>
                  </div>
                </div>
                
                <div class="card">
                  <h2>Top Clicked Buttons</h2>
                  <pre>\${JSON.stringify(buttonStats, null, 2)}</pre>
                </div>
                
                <div class="card">
                  <h2>Scroll Depth Distribution</h2>
                  <pre>\${JSON.stringify(scrollStats, null, 2)}</pre>
                </div>
                
                <div class="card">
                  <h2>Recent Events</h2>
                  \${recentEvents.map(event => \`
                    <div class="event">
                      <strong>\${event.event}</strong> - \${new Date(event.timestamp).toLocaleString()}
                      <br>URL: \${event.url}
                      \${event.properties ? \`<br>Data: \${JSON.stringify(event.properties)}\` : ''}
                    </div>
                  \`).join('')}
                </div>
              \`;
            } else {
              document.getElementById('dashboard').innerHTML = '<p>Error loading dashboard: ' + data.error + '</p>';
            }
          } catch (error) {
            document.getElementById('dashboard').innerHTML = '<p>Error loading dashboard: ' + error.message + '</p>';
          }
        }
        
        loadDashboard();
        setInterval(loadDashboard, 10000); // Refresh every 10 seconds
      </script>
    </body>
    </html>
  `,{headers:{"Content-Type":"text/html"}})}let y=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/analytics/dashboard/route",pathname:"/api/analytics/dashboard",filename:"route",bundlePath:"app/api/analytics/dashboard/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"/Users/brettlechtenberg/Desktop/No BS Video Growth Strategies For Business/.queen/worktrees/001-video-growth-strategies-landing-page/src/app/api/analytics/dashboard/route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:z,workUnitAsyncStorage:A,serverHooks:B}=y;function C(){return(0,g.patchFetch)({workAsyncStorage:z,workUnitAsyncStorage:A})}async function D(a,b,c){var d;let e="/api/analytics/dashboard/route";"/index"===e&&(e="/");let g=await y.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!x){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||y.isDev||x||(G="/index"===(G=D)?"/":G);let H=!0===y.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>y.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>y.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await y.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await y.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await y.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},8196:(a,b,c)=>{"use strict";var d,e;c.d(b,{CR:()=>g,ZS:()=>d,Zp:()=>f}),function(a){a.assertEqual=a=>{},a.assertIs=function(a){},a.assertNever=function(a){throw Error()},a.arrayToEnum=a=>{let b={};for(let c of a)b[c]=c;return b},a.getValidEnumValues=b=>{let c=a.objectKeys(b).filter(a=>"number"!=typeof b[b[a]]),d={};for(let a of c)d[a]=b[a];return a.objectValues(d)},a.objectValues=b=>a.objectKeys(b).map(function(a){return b[a]}),a.objectKeys="function"==typeof Object.keys?a=>Object.keys(a):a=>{let b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b},a.find=(a,b)=>{for(let c of a)if(b(c))return c},a.isInteger="function"==typeof Number.isInteger?a=>Number.isInteger(a):a=>"number"==typeof a&&Number.isFinite(a)&&Math.floor(a)===a,a.joinValues=function(a,b=" | "){return a.map(a=>"string"==typeof a?`'${a}'`:a).join(b)},a.jsonStringifyReplacer=(a,b)=>"bigint"==typeof b?b.toString():b}(d||(d={})),(e||(e={})).mergeShapes=(a,b)=>({...a,...b});let f=d.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),g=a=>{switch(typeof a){case"undefined":return f.undefined;case"string":return f.string;case"number":return Number.isNaN(a)?f.nan:f.number;case"boolean":return f.boolean;case"function":return f.function;case"bigint":return f.bigint;case"symbol":return f.symbol;case"object":if(Array.isArray(a))return f.array;if(null===a)return f.null;if(a.then&&"function"==typeof a.then&&a.catch&&"function"==typeof a.catch)return f.promise;if("undefined"!=typeof Map&&a instanceof Map)return f.map;if("undefined"!=typeof Set&&a instanceof Set)return f.set;if("undefined"!=typeof Date&&a instanceof Date)return f.date;return f.object;default:return f.unknown}}},8335:()=>{},9121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,930],()=>b(b.s=8120));module.exports=c})();