import{r as e,A as a,_ as s,b as r,a as t,e as l,j as o,T as i,B as n,S as d,t as u,m as c}from"./index-aeca932e.js";import{F as p}from"./index-85dc0d3a.js";import{I as m}from"./index-d90fa46f.js";import{a as x}from"./index-801a9590.js";import"./index-d93151a5.js";import"./index-5a025839.js";import"./index-fb057fd6.js";import{P as h}from"./index-60197fbb.js";import{D as g}from"./index-a0588428.js";import{u as j}from"./user-a3dc1d16.js";import{u as v}from"./useSetState-8e08c7f5.js";import{u as y}from"./useMount-64f23307.js";import{M as f}from"./index-6226197c.js";import{E as b}from"./EditOutlined-21831c3e.js";import{S,C as w}from"./StopOutlined-b16a34ba.js";import{P as I}from"./PlusCircleOutlined-90803570.js";import"./responsiveObserve-cfbf1a72.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";import"./index-5bcf51a7.js";import"./getScrollBarSize-6b2349d8.js";import"./isEqual-89fb4070.js";import"./useForceUpdate-c2b76191.js";import"./index-4a60c0a0.js";import"./ActionButton-04036752.js";import"./Portal-0dc81ff6.js";const T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"};var N=function(r,t){return e.createElement(a,s({},r,{ref:t,icon:T}))};const k=e.forwardRef(N),C={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:19}}};function E(){const{t:a}=r();document.title="HADO CRM",t();const s=l((e=>e.app.userinfo)),T=l((e=>e.app.powersCode)),[N]=p.useForm(),[E]=p.useForm(),[F,z]=e.useState([]),[U,O]=e.useState(!1),[A,P]=v({pageNum:1,pageSize:10,total:0}),[q,L]=v({operateType:"add",nowData:null,modalShow:!1,modalLoading:!1}),[M,R]=e.useState([]),[V,B]=e.useState(0),[D,Q]=e.useState([]),[$,_]=e.useState([]),H=async e=>{var a;N.setFieldsValue({store:""});const s=null==(a=(await j.getStores({agenuuid:e})).data)?void 0:a.map((e=>({label:e.providername,value:e.uuid})));_(s)},[J,X]=e.useState([]);async function Y(e){const s={page:e.pageNum,limit:e.pageSize};O(!0);try{const r=await j.getUsers(s);r&&200===r.code?(z(r.data),P({pageNum:e.pageNum,pageSize:e.pageSize,total:r.cont})):c.error((null==r?void 0:r.message)??a("dataFetchFailed"))}finally{O(!1)}}const[Z,G]=e.useState(""),K={username:"",password:"",email:"",phone:"",agent:"",store:""},W=(e,a)=>{L({modalShow:!0,nowData:e,operateType:a}),setTimeout((()=>{"add"===a?N.setFieldsValue({...K}):e&&(e.proxyId&&H(e.proxyId),G(e.uuid),N.setFieldsValue({...e,store:"-"===e.storeId?"":e.storeId,agent:"-"===e.proxyId?"":e.proxyId,userlevel:"-"===e.userlevel?"":e.userlevel}),B(e.userlevel))}))},ee=()=>{N.setFieldsValue({...K}),L({modalShow:!1})},ae=[{title:a("number"),dataIndex:"serial",key:"serial"},{title:a("username"),dataIndex:"username",key:"username"},{title:a("storeName"),dataIndex:"store",key:"store"},{title:a("distributor"),dataIndex:"proxy",key:"proxy"},{title:a("phoneNumber"),dataIndex:"phone",key:"phone"},{title:a("email"),dataIndex:"email",key:"email"},{title:a("role"),dataIndex:"role",key:"role"},{title:a("status"),dataIndex:"conditions",key:"conditions",render:e=>1===e?o.jsx("span",{style:{color:"green"},children:a("enable")}):o.jsx("span",{style:{color:"red"},children:a("disable")})},{title:a("action"),key:"control",width:200,render:(e,r)=>{const t=[],l=s.userBasicInfo||{id:-1};T.includes("user:up")&&l.id!==r.id&&"admin"!==r.role&&t.push(o.jsx("span",{className:"control-btn blue",onClick:()=>W(r,"up"),children:o.jsx(i,{placement:"top",title:a("edit"),children:o.jsx(b,{})})},"1")),T.includes("user:role")&&l.id!==r.id&&"admin"!==r.role&&t.push(o.jsx("span",{className:"control-btn blue",onClick:()=>le(r),children:o.jsx(i,{placement:"top",title:a("assignRole"),children:o.jsx(k,{})})},"2")),T.includes("user:del")&&l.id!==r.id&&"admin"!==r.role&&t.push(o.jsx(h,{title:1===r.status?a("disable"):a("enable"),onConfirm:()=>(async e=>{O(!0);try{const s=await j.setUserState({uuid:e.uuid,status:1===e.status?0:1});s&&200===s.code?(c.success(a("operationSuccessful")),Y(A)):c.error((null==s?void 0:s.message)??"操作失败")}finally{O(!1)}})(r),okText:a("confirm"),cancelText:a("cancel"),children:o.jsx("span",{className:"control-btn red",children:o.jsx(i,{placement:"top",title:1===r.status?a("disable"):a("enable"),children:1===r.status?o.jsx(S,{}):o.jsx(w,{style:{color:"green"}})})})},"3"));const n=[];return t.forEach(((e,a)=>{a&&n.push(o.jsx(g,{type:"vertical"},`line${a}`)),n.push(e)})),n}}],se=e.useMemo((()=>null==F?void 0:F.map(((e,a)=>({key:a,id:e.id,uuid:e.uuid,serial:a+1+(A.pageNum-1)*A.pageSize,username:e.username,store:e.providerinfor?e.providerinfor.providername:"-",storeId:e.providerinfor?e.providerinfor.uuid:"-",proxy:e.providerinfor&&e.providerinfor.agentinfor?e.providerinfor.agentinfor.providername:"-",proxyId:e.providerinfor&&e.providerinfor.agentinfor?e.providerinfor.agentinfor.uuid:"-",email:e.emailaddr,phone:e.mob,conditions:e.status,status:e.status,control:e.id,userlevel:e.userlevel,role:e.rolelist?e.rolelist.rolename:"-"})))),[A,F]),[re,te]=e.useState(!1),le=e=>{(async e=>{var a;try{const s=await j.getRoles({provideruuid:"-"===e?"":e});if(s&&200===s.code){const e=null==(a=s.data)?void 0:a.map((e=>({label:e.rolename,value:e.uuid})));X(e)}}catch{}})(""),G(e.uuid),te(!0)};y((()=>{Y(A),(async()=>{var e;const a=null==(e=(await j.getAgents()).data)?void 0:e.map((e=>({label:e.providername,value:e.uuid})));Q(a)})(),(async()=>{var e;const a=await j.getUserTypes();if(200===a.code){const s=null==(e=a.data)?void 0:e.map((e=>({label:e.name,value:e.id})));R(s)}})()}));const oe={emptyText:a("noDataAvailable")};return o.jsxs("div",{className:"user-box",children:[o.jsx("div",{className:"user-search",children:o.jsx("ul",{className:"search-func",children:T.includes("user:add")&&o.jsx("li",{children:o.jsx(n,{type:"primary",icon:o.jsx(I,{}),disabled:!T.includes("user:add"),onClick:()=>W(null,"add"),children:a("addNewUser")})})})}),o.jsx("div",{className:"diy-table",children:o.jsx(x,{columns:ae,loading:U,locale:oe,dataSource:se,pagination:{total:A.total,current:A.pageNum,pageSize:A.pageSize,showQuickJumper:!1,showTotal:e=>a("dataNumber",{count:e}),onChange:(e,a)=>{Y({pageNum:e,pageSize:a})}}})}),o.jsx(f,{title:{add:a("addNewUser"),up:a("editUser"),see:a("view")}[q.operateType],open:q.modalShow,cancelText:a("cancel"),okText:a("confirm"),onOk:async()=>{var e;if("see"!==q.operateType)try{const a=await N.validateFields();L({modalLoading:!0});const s={username:a.username,mob:a.phone,emailaddr:a.email,hostprovider:a.store,userlevel:a.userlevel,agentuuid:a.agent};if("add"===q.operateType)try{const e=await j.addUser(s);e&&200===e.code?(c.success("添加成功"),Y(A),ee()):c.error((null==e?void 0:e.message)??"操作失败")}finally{L({modalLoading:!1})}else{const s=$?null==(e=$.find((e=>e.label===a.store||e.value===a.store)))?void 0:e.value:null,r={uuid:Z,username:a.username,mob:a.phone,email:a.email,hostprovider:s,userlevel:a.userlevel,agentuuid:a.agent};try{const e=await j.editUser(r);e&&200===e.code?(c.success("修改成功"),Y(A),ee()):c.error((null==e?void 0:e.message)??"操作失败")}finally{L({modalLoading:!1})}}}catch{}else ee()},onCancel:ee,confirmLoading:q.modalLoading,children:o.jsxs(p,{form:N,labelCol:{flex:"120px"},initialValues:{conditions:1},children:[o.jsx(p.Item,{label:a("username"),name:"username",...C,rules:[{required:!0,whitespace:!0,message:a("pleaseEnter")},{max:20,message:"最多输入20位字符"}],children:o.jsx(m,{placeholder:a("pleaseEnter"),disabled:"see"===q.operateType})}),"sel"===q.operateType&&o.jsx(p.Item,{label:"密码",name:"password",...C,rules:[{required:!0,whitespace:!0,message:a("pleaseEnter")},{min:6,message:a("minInputLength")},{max:18,message:"最多输入18位字符"}],children:o.jsx(m.Password,{placeholder:a("pleaseEnter"),disabled:"sel"===q.operateType})}),o.jsx(p.Item,{label:a("userType"),name:"userlevel",...C,rules:[{required:!0,message:a("pleaseSelect")}],children:o.jsx(d,{disabled:"see"===q.operateType,options:M,onChange:e=>{B(e)}})}),o.jsx(p.Item,{label:a("phoneNumber"),name:"phone",...C,children:o.jsx(m,{placeholder:a("pleaseEnter"),disabled:"see"===q.operateType})}),o.jsx(p.Item,{label:a("email"),name:"email",...C,rules:[{required:!0,message:a("pleaseEnter")},()=>({validator:(e,s)=>{const r=s;return r&&!u.checkEmail(r)?Promise.reject(a("incorrectEmailFormat")):Promise.resolve()}})],children:o.jsx(m,{placeholder:a("pleaseEnter"),disabled:"see"===q.operateType})}),999!==V&&o.jsx(p.Item,{label:a("agentName"),name:"agent",...C,rules:[{required:!0,message:a("pleaseSelect")}],children:o.jsx(d,{disabled:"see"===q.operateType,options:D,onSelect:H})}),(50===V||51===V)&&o.jsx(p.Item,{label:a("store"),name:"store",...C,rules:[{required:!0,message:a("pleaseSelect")}],children:o.jsx(d,{disabled:"see"===q.operateType,options:$})})]})}),o.jsx(f,{title:"授予角色",open:re,onOk:async()=>{const e=await j.grantRole({uuid:Z,roleid:E.getFieldValue("role")});e&&200==e.code?(c.success("success"),Y(A)):c.error((null==e?void 0:e.msg)??"操作失败"),te(!1)},onCancel:()=>{te(!1)},cancelText:a("cancel"),okText:a("confirm"),children:o.jsx("div",{style:{margin:30},children:o.jsx(p,{form:E,children:o.jsx(p.Item,{label:a("selectRole"),name:"role",...C,rules:[{message:a("pleaseSelect")}],children:o.jsx(d,{disabled:"see"===q.operateType,options:J})})})})})]})}export{E as default};
