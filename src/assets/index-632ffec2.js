import{r as e,A as t,_ as a,b as s,u as i,e as n,j as o,T as l,m as c}from"./index-aeca932e.js";import{F as r}from"./index-85dc0d3a.js";import{a as d}from"./index-801a9590.js";import"./index-d93151a5.js";import"./index-d90fa46f.js";import"./index-5a025839.js";import"./index-fb057fd6.js";import{D as m}from"./index-a0588428.js";import{h as p}from"./hado-2bd80816.js";import{E as u}from"./EditOutlined-21831c3e.js";import"./responsiveObserve-cfbf1a72.js";import"./index-5bcf51a7.js";import"./getScrollBarSize-6b2349d8.js";import"./isEqual-89fb4070.js";import"./useForceUpdate-c2b76191.js";import"./index-4a60c0a0.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";const j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 000-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"file-search",theme:"outlined"};var x=function(s,i){return e.createElement(t,a({},s,{ref:i,icon:j}))};const h=e.forwardRef(x);function y(){const{t:t}=s();document.title="HADO CRM";const a=i(),j=n((e=>e.app.powersCode));r.useForm();const[x,y]=e.useState([]),[f,v]=e.useState(!1),b=(e,t)=>{a("detail"===t?`/game/detail?id=${e.key}&title=${e.tableName}`:`/game/log?id=${e.key}`)},g=[{title:t("number"),dataIndex:"serial",key:"serial"},{title:t("configurationTableName"),dataIndex:"tableName",key:"teacherName"},{title:t("lastSync"),dataIndex:"lastSync",key:"lastSync"},{title:t("syncTime"),dataIndex:"syncTime",key:"syncTime"},{title:t("status"),key:"control",width:200,render:(e,a)=>{const s=[];j.includes("hado:log")&&s.push(o.jsx("span",{className:"control-btn blue",onClick:()=>b(a,"log"),children:o.jsx(l,{placement:"top",title:t("viewLogs"),children:o.jsx(h,{})})},"1")),j.includes("hado:detail")&&s.push(o.jsx("span",{className:"control-btn blue",onClick:()=>b(a,"detail"),children:o.jsx(l,{placement:"top",title:t("view"),children:o.jsx(u,{})})},"2"));const i=[];return s.forEach(((e,t)=>{t&&i.push(o.jsx(m,{type:"vertical"},`line${t}`)),i.push(e)})),i}}],k=e.useMemo((()=>x.map(((e,t)=>({key:e.id,serial:e.id,tableName:e.tablename,lastSync:e.lastuser,syncTime:e.synctime})))),[x]);e.useEffect((()=>{(async()=>{v(!0);try{const e=await p.hadoWorld();e&&200===e.code?y(e.data):c.error((null==e?void 0:e.message)??t("dataFetchFailed"))}finally{v(!1)}})()}),[]);const S={emptyText:t("noDataAvailable")};return o.jsx("div",{className:"store-list-box",children:o.jsx("div",{className:"diy-table",children:o.jsx(d,{columns:g,loading:f,locale:S,dataSource:k,pagination:!1})})})}export{y as default};
