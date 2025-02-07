import{b as e,e as s,r as a,j as t,T as i,S as l,B as o,m as r}from"./index-aeca932e.js";import{F as d}from"./index-85dc0d3a.js";import{I as n}from"./index-d90fa46f.js";import{a as c}from"./index-801a9590.js";import"./index-d93151a5.js";import"./index-5a025839.js";import"./index-fb057fd6.js";import{D as p}from"./index-a0588428.js";import{s as u}from"./store-77f5b287.js";import{u as m}from"./useSetState-8e08c7f5.js";import{M as x}from"./index-6226197c.js";import{E as j}from"./EditOutlined-21831c3e.js";import{S as h}from"./SearchOutlined-fa850377.js";import{P as v}from"./PlusCircleOutlined-90803570.js";import"./responsiveObserve-cfbf1a72.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";import"./index-5bcf51a7.js";import"./getScrollBarSize-6b2349d8.js";import"./isEqual-89fb4070.js";import"./useForceUpdate-c2b76191.js";import"./index-4a60c0a0.js";import"./ActionButton-04036752.js";import"./Portal-0dc81ff6.js";const{Option:y}=l,g={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:19}}};function S(){const{t:S}=e();document.title="HADO CRM";const b=s((e=>e.app.powersCode)),[f]=d.useForm(),[w,N]=a.useState([]),[T,C]=a.useState(!1),[k,I]=m({pageNum:1,pageSize:10,total:0}),[L,z]=m({operateType:"add",nowData:null,modalShow:!1,modalLoading:!1}),[E,V]=m({puuid:void 0,status:void 0}),F=async e=>{if(!b.includes("version:query"))return;const s={page:e.pageNum,limit:e.pageSize,puuid:E.puuid,status:E.status};C(!0);try{const a=await u.getVersionList(s);a&&200===a.code?(N(a.data),I({total:a.cont,pageNum:e.pageNum,pageSize:e.pageSize})):r.error((null==a?void 0:a.message)??S("dataFetchFailed"))}finally{C(!1)}};a.useState();a.useState();const O=(e,s)=>{z({modalShow:!0,nowData:e,operateType:s}),e&&f.setFieldsValue({puuid:e.puuid,versioncode:e.version,versionurl:e.url,status:e.state})},D=()=>{f.setFieldsValue({puuid:"",versioncode:"",versionurl:"",status:""}),z({modalShow:!1,modalLoading:!1})},P=[{title:S("number"),dataIndex:"serial",key:"serial"},{title:S("productName"),dataIndex:"name",key:"name"},{title:S("versionNumber"),dataIndex:"version",key:"version"},{title:"URL",dataIndex:"url",key:"url"},{title:S("status"),dataIndex:"state",key:"state",render:(e,s)=>t.jsx("span",{children:S(1===e?"listed":"delisted")})},{title:S("creationTime"),dataIndex:"time",key:"time"},{title:S("action"),key:"control",width:200,render:(e,s)=>{const a=[];b.includes("version:edit")?a.push(t.jsx("span",{className:"control-btn blue",onClick:()=>O(s,"up"),children:t.jsx(i,{placement:"top",title:S("edit"),children:t.jsx(j,{})})},"1")):a.push("-");const l=[];return a.forEach(((e,s)=>{s&&l.push(t.jsx(p,{type:"vertical"},`line${s}`)),l.push(e)})),l}}],[B,R]=a.useState([]),[U,A]=a.useState(""),M=e=>{A(e)},q=a.useMemo((()=>w.map(((e,s)=>({key:e.id,uuid:e.uuid,serial:s+1+(k.pageNum-1)*k.pageSize,name:e.prodname,version:e.versioncode,url:e.versionurl,state:e.status,time:e.addtime,puuid:e.puuid})))),[k,w]);a.useEffect((()=>{F(k),(async()=>{const e=await u.getProduct();if(200===e.code){const s=e.data.map((e=>({label:e.prodname,value:e.uuid})));R(s)}else r.error(e.msg)})()}),[]);const Q={emptyText:S("noDataAvailable")};return t.jsxs("div",{className:"role-box",children:[t.jsxs("div",{className:"g-search",children:[t.jsxs("div",{className:"btnBoxItem",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"item-lable",style:{width:"60px"},children:[S("selectProduct"),":"," "]}),t.jsx(l,{disabled:"see"===L.operateType,options:B,allowClear:!0,onSelect:M,placeholder:S("pleaseEnter"),style:{width:"150px"},onChange:e=>{V({puuid:e})}})]}),t.jsxs("div",{style:{marginLeft:30},children:[t.jsxs("span",{className:"item-lable",style:{width:"60px"},children:[S("selectStatus"),":"," "]}),t.jsxs(l,{disabled:"see"===L.operateType,placeholder:S("pleaseSelect"),style:{width:"150px"},allowClear:!0,onChange:e=>{V({status:e})},children:[t.jsx(y,{value:1,children:S("listed")},1),t.jsx(y,{value:2,children:S("delisted")},2)]})]})]}),t.jsxs("ul",{className:"search-func",children:[b.includes("version:search")&&t.jsx(o,{type:"primary",icon:t.jsx(h,{}),onClick:()=>{F(k)},className:"btn",children:S("search")}),b.includes("version:add")&&t.jsx("li",{children:t.jsx(o,{type:"primary",icon:t.jsx(v,{}),disabled:!b.includes("version:add"),onClick:()=>O(null,"add"),className:"btn",children:S("addNewVersion")})})]})]}),t.jsx("div",{className:"diy-table",children:t.jsx(c,{columns:P,loading:T,locale:Q,dataSource:q,pagination:{total:k.total,current:k.pageNum,pageSize:k.pageSize,showQuickJumper:!1,showTotal:e=>S("dataNumber",{count:e}),onChange:(e,s)=>((e,s)=>{F({pageNum:e,pageSize:s||k.pageSize})})(e,s)}})}),t.jsx(x,{title:{add:S("addNewVersion"),up:S("edit")}[L.operateType],open:L.modalShow,cancelText:S("cancel"),okText:S("confirm"),onOk:()=>(async()=>{if("see"!==L.operateType)try{const s=await f.validateFields();if(z({modalLoading:!0}),"add"===L.operateType)try{const e=await u.addVersion(s);200===(null==e?void 0:e.code)?(r.success("success"),D()):(z({modalLoading:!1}),r.error((null==e?void 0:e.message)??"error"))}catch(e){}finally{z({modalLoading:!1})}else try{const e={versionuuid:L.nowData.uuid,...s},a=await u.updateVersion(e);200===(null==a?void 0:a.code)?(r.success("success"),D()):r.error((null==a?void 0:a.message)??"error")}finally{z({modalLoading:!1})}F(k)}catch{}else D()})(),onCancel:()=>D(),confirmLoading:L.modalLoading,children:t.jsxs(d,{form:f,initialValues:{formConditions:1},children:[t.jsx(d.Item,{label:S("productName"),name:"puuid",...g,children:t.jsx(l,{disabled:"see"===L.operateType,options:B,onSelect:M,placeholder:S("pleaseSelect")})}),t.jsx(d.Item,{label:S("versionNumber"),name:"versioncode",...g,children:t.jsx(n,{placeholder:S("pleaseEnter"),disabled:"see"===L.operateType})}),t.jsx(d.Item,{label:"URL",name:"versionurl",...g,children:t.jsx(n,{placeholder:S("pleaseEnter"),disabled:"see"===L.operateType})}),t.jsx(d.Item,{label:S("status"),name:"status",...g,children:t.jsxs(l,{disabled:"see"===L.operateType,children:[t.jsx(y,{value:1,children:S("listed")},1),t.jsx(y,{value:2,children:S("delisted")},2)]})})]})})]})}export{S as default};
