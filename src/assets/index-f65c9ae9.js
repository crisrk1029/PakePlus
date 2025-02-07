import{b as e,e as s,r as a,j as r,B as n,m as o}from"./index-aeca932e.js";import{F as i}from"./index-85dc0d3a.js";import{I as l}from"./index-d90fa46f.js";import{T as d}from"./index-57f63cdf.js";import{u as m}from"./user-a3dc1d16.js";import{u as t}from"./useSetState-8e08c7f5.js";import{M as p}from"./index-6226197c.js";import"./responsiveObserve-cfbf1a72.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";import"./ActionButton-04036752.js";import"./Portal-0dc81ff6.js";import"./getScrollBarSize-6b2349d8.js";function c(){var c;const{t:u}=e();document.title="HADO CRM";const f=s((e=>e.app.powersCode)),[h,w]=t({operateType:"add",nowData:null,modalShow:!1,modalLoading:!1}),[x,j]=a.useState([]),{userinfo:I}=s((e=>e.app)),[g]=i.useForm();a.useEffect((()=>{var e;g.setFieldsValue({username:I.userBasicInfo.username,password:"*********",email:I.userBasicInfo.emailaddr,phone:I.userBasicInfo.mob,role:null==(e=I.userBasicInfo.rolelist)?void 0:e.rolename,status:0===I.userBasicInfo.status?u("freeze"):u("activate")}),(async()=>{var e;const s=null==(e=(await m.getAgents()).data)?void 0:e.map((e=>({label:e.providername,value:e.uuid})));j(s)})()}),[]);return r.jsxs(r.Fragment,{children:[r.jsxs(i,{name:"wrap",labelCol:{flex:"110px"},labelAlign:"left",wrapperCol:{flex:1},colon:!1,style:{maxWidth:1e3},children:[r.jsx(i.Item,{label:u("username")+"：",name:"username",children:r.jsx("span",{children:I.userBasicInfo.username})}),r.jsx(i.Item,{label:u("email")+"：",name:"email",children:r.jsx("span",{children:I.userBasicInfo.emailaddr?I.userBasicInfo.emailaddr:"-"})}),r.jsx(i.Item,{label:u("phoneNumber")+"：",name:"phone",children:r.jsx("span",{children:I.userBasicInfo.mob})}),r.jsx(i.Item,{label:u("agentName")+"：",name:"password",children:r.jsx("span",{children:I.userBasicInfo.providerinfor?I.userBasicInfo.providerinfor.agentinfor?I.userBasicInfo.providerinfor.agentinfor.providername:"":"-"})}),r.jsx(i.Item,{label:u("store")+"：",name:"proxy",children:r.jsx("span",{children:I.userBasicInfo.providerinfor?I.userBasicInfo.providerinfor.providername:"-"})}),r.jsx(i.Item,{label:u("role")+"：",name:"role",children:r.jsx(d,{children:null==(c=I.userBasicInfo.rolelist)?void 0:c.rolename})}),f.includes("my:up")&&r.jsx(i.Item,{label:" ",children:r.jsx(n,{type:"primary",htmlType:"submit",onClick:e=>{w({modalShow:!0})},children:u("changePassword")})})]}),r.jsx(p,{title:u("changePassword"),okText:u("confirm"),cancelText:u("cancel"),onOk:async()=>{try{const e=await g.validateFields();if("*********"!==e.password&&""!==e.newPassword){await m.editPassword({passwd:e.newPassword})}o.success(u("passwordModifiedSuccessfully")),w({modalShow:!1})}finally{w({modalLoading:!1})}},onCancel:()=>{w({modalShow:!1})},open:h.modalShow,children:r.jsxs(i,{form:g,initialValues:{conditions:1},children:[r.jsx(i.Item,{label:u("oldPassword"),name:"oldpassword",rules:[{min:6,message:u("minInputLength")},{max:12,message:u("maxInputLength")},{required:!0,message:u("pleaseEnter")}],children:r.jsx(l.Password,{placeholder:u("pleaseEnter")})}),r.jsx(i.Item,{label:u("newPassword"),name:"newPassword",hasFeedback:!0,rules:[{min:6,message:u("minInputLength")},{max:12,message:u("maxInputLength")},{required:!0,message:u("passwordTips")}],children:r.jsx(l.Password,{placeholder:u("pleaseEnter")})}),r.jsx(i.Item,{label:u("confirmPassword"),name:"confirmNewPassword",dependencies:["newPassword"],hasFeedback:!0,rules:[{min:6,message:u("minInputLength")},{max:12,message:u("maxInputLength")},{required:!0,message:u("passwordTips")},({getFieldValue:e})=>({validator:(s,a)=>a&&e("newPassword")!==a?Promise.reject(new Error(u("passwordNotSame"))):Promise.resolve()})],children:r.jsx(l.Password,{placeholder:u("pleaseEnter")})})]})})]})}export{c as default};
