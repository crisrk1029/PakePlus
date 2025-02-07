import{r as e,A as s,_ as a,a as t,b as r,u as n,t as o,i as l,m as i,c,j as d,S as u,D as m,B as p}from"./index-aeca932e.js";import{u as g}from"./user-a3dc1d16.js";import{F as f}from"./index-85dc0d3a.js";import{I as h}from"./index-d90fa46f.js";import{C as x}from"./index-d93151a5.js";import"./responsiveObserve-cfbf1a72.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";import"./index-4a60c0a0.js";const w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-44.9 44.9-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-65.3 65.3a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 00608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z"}}]},name:"key",theme:"outlined"};var v=function(t,r){return e.createElement(s,a({},t,{ref:r,icon:w}))};const j=e.forwardRef(v);const S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var y=function(t,r){return e.createElement(s,a({},t,{ref:r,icon:S}))};const I=e.forwardRef(y);function b(){const s=t(),{t:a}=r(),w=n(),[v]=f.useForm(),[S,y]=e.useState(!1),[b,A]=e.useState(!1);e.useState("00000");const[E,z]=e.useState(!1),[B,N]=e.useState("");e.useEffect((()=>{var e,s;document.title="登录HADO";const a=localStorage.getItem("userLoginInfo");if(a){const e=JSON.parse(a);A(!0),v.setFieldsValue({username:e.username,password:o.uncompile(e.password)})}a?null==(s=document.getElementById("vcode"))||s.focus():null==(e=document.getElementById("username"))||e.focus(),z(!0),N(localStorage.getItem("crmlang")),l.changeLanguage(B)}),[v]);const C=e.useCallback((async(e,a)=>{var t,r,n,o,l;let d=null,u=[],m=[],p=[];try{const f=await g.login({login:e,passwd:a});if(-1===f.code)return i.error(f.msg),f;localStorage.setItem("token",f.data.token),localStorage.setItem("ip",f.data.ip);const h=await g.getDetail();if(-1===h.code)return i.error(h.msg),h;d=h.data;const x=await g.getAgents();if(-1===x.code)return i.error(x.msg),x;{const e=null==(t=x.data)?void 0:t.map((e=>({label:e.providername,value:e.uuid})));s.app.reducerAgentOpts(e)}u=[{id:1,username:"admin",password:"123456",phone:"13600000000",email:"admin@react.com",desc:"超级管理员",conditions:1,menuAndPowers:(null==(l=null==(o=null==(n=null==(r=h.data)?void 0:r.rolelist)?void 0:n.roledetail)?void 0:o.powerlist)?void 0:l.menuAndPowers)||[]}];const w=u.reduce(((e,s)=>[...e,...s.menuAndPowers]),[]),v=c.getMenusById({id:Array.from(new Set(null==w?void 0:w.map((e=>e.menuId))))});if(!v||200!==v.status)return v;m=v.data.filter((e=>1===e.conditions));const j=c.getPowerById({id:Array.from(new Set(w.reduce(((e,s)=>[...e,...s.powers]),[])))});return j&&200===j.status?(p=j.data.filter((e=>1===e.conditions)),{status:200,data:{userBasicInfo:d,roles:u,menus:m,powers:p}}):j}catch(f){}}),[s.sys,s.app]),P=async()=>{try{const e=await v.validateFields();y(!0);const a=await C(e.username,e.password);a&&200===a.status?(i.success("success"),b?localStorage.setItem("userLoginInfo",JSON.stringify({username:e.username,password:o.compile(e.password)})):localStorage.removeItem("userLoginInfo"),s.app.reducerUserInfo(a.data),w("/")):y(!1)}catch(e){y(!1)}};return d.jsxs("div",{className:"page-login",children:[d.jsx("div",{className:"langBox",children:d.jsx(u,{bordered:!1,placeholder:a("switch"),style:{color:"white"},onChange:e=>{localStorage.setItem("crmlang",e),l.changeLanguage(e),N(e)},options:[{value:"zh-CN",label:"简中"},{value:"zh-TW",label:"繁中"},{value:"en-US",label:"EN"},{value:"ja-JP",label:"日本語"}],value:B,suffixIcon:d.jsx(m,{style:{color:"white"}})})}),d.jsx("div",{className:"title",children:d.jsx("span",{children:a("HADO")})}),d.jsx("div",{className:E?"loginBox show":"loginBox",children:d.jsx(f,{form:v,children:d.jsxs("div",{children:[d.jsx(f.Item,{label:d.jsx("label",{style:{color:"white"},children:a("account")}),name:"username",rules:[{required:!0,whitespace:!0,message:a("pleaseEnter")}],children:d.jsx(h,{prefix:d.jsx(I,{style:{fontSize:13}}),size:"large",id:"username",placeholder:a("pleaseEnter"),onPressEnter:P})}),d.jsx(f.Item,{label:d.jsx("label",{style:{color:"white"},children:a("password")}),name:"password",rules:[{required:!0,message:a("pleaseEnter")},{max:16,message:a("enterUp",{num:16})},{min:6,message:a("enterAtLeast",{num:6})}],children:d.jsx(h.Password,{prefix:d.jsx(j,{style:{fontSize:13}}),size:"large",type:"password",placeholder:a("pleaseEnter"),onPressEnter:P})}),d.jsxs("div",{style:{lineHeight:"40px"},children:[d.jsx(x,{className:"remember",checked:b,onChange:e=>{A(e.target.checked)},children:a("remember")}),d.jsx(p,{className:"submit-btn",size:"large",type:"primary",loading:S,onClick:P,children:a(S?"pleaseWait":"login")})]})]})})})]})}export{b as default};
