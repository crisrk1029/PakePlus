import{b as e,g as l,u as s,r as i,j as a,S as n,t,B as o,h as r,k as d,m}from"./index-aeca932e.js";import{C as u}from"./index-e693154d.js";import{T as c}from"./index-376edbd3.js";import"./index-d88d2b2a.js";import"./index-57f63cdf.js";/* empty css              */import{F as p}from"./index-85dc0d3a.js";import{I as v}from"./index-d90fa46f.js";import{u as h}from"./user-a3dc1d16.js";import{s as j}from"./store-77f5b287.js";import{I as x}from"./antd-img-crop.esm-86a10eb1.js";import{U as f}from"./index-af455608.js";import{U as b}from"./UploadOutlined-636e8664.js";import"./CalendarOutlined-8ff6678f.js";import"./responsiveObserve-cfbf1a72.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";import"./index-6226197c.js";import"./ActionButton-04036752.js";import"./Portal-0dc81ff6.js";import"./getScrollBarSize-6b2349d8.js";import"./index-5bcf51a7.js";import"./useForceUpdate-c2b76191.js";import"./DeleteOutlined-6b999003.js";function y(){const{t:y}=e(),[g]=p.useForm(),[N]=p.useForm();let[S,C]=l();const F=S.get("store"),I=localStorage.getItem("token"),E=s();document.title="HADO CRM";const[P,w]=i.useState([]),[T,D]=i.useState({label:"",value:""}),[A,H]=i.useState({label:"",value:0}),[O,k]=i.useState([]),[_,q]=i.useState(0),[B,$]=i.useState(),[L,W]=i.useState([]),[U,z]=i.useState(0),[V,M]=i.useState([]),R=async e=>{const l=(await j.getCountry({continentid:e})).data.map((e=>({label:e.nationname,value:e.id})));M(l)},G=e=>{},Q=e=>{},[Y,Z]=i.useState([]),J={accept:"image/*",headers:{Authorization:`${I}`},action:`${d}service_api/file_upload`,onChange({file:e,fileList:l}){e.status,Z(l)},fileList:Y,maxCount:5,multiple:!0},[K,X]=i.useState([]),ee={accept:"image/*",headers:{Authorization:`${I}`},action:`${d}service_api/file_upload`,onChange({file:e,fileList:l}){e.status,X(l)},fileList:K,maxCount:1};return i.useEffect((()=>{"add"!==F&&(async()=>{var e,l,s,i,a,n,t,o,d,m,u,c,p,v,h,x,f,b,y,S,C,I,E,P,w,T,A;const O=(await j.getStoreDetail({uuid:F})).data;R(null==O?void 0:O.continentid);const k=(null==(l=null==(e=null==O?void 0:O.detileinfor)?void 0:e.comments)?void 0:l.businesstime)?null==(a=null==(i=null==(s=null==O?void 0:O.detileinfor)?void 0:s.comments)?void 0:i.businesstime)?void 0:a.split("-"):null,_=k?k.map((e=>r(e,"HH:mm"))):null,B={storename:null==O?void 0:O.providername,company:null==(t=null==(n=null==O?void 0:O.detileinfor)?void 0:n.comments)?void 0:t.companyname,proxyname:null==(o=null==O?void 0:O.agentinfor)?void 0:o.providername,storetype:null==O?void 0:O.providerlevel_name,storepath:"1",pathDetail:null==(m=null==(d=null==O?void 0:O.detileinfor)?void 0:d.comments)?void 0:m.providaddr,pathDesc:null==(c=null==(u=null==O?void 0:O.detileinfor)?void 0:u.comments)?void 0:c.addrremark,storePhone:null==O?void 0:O.mob,storeTime:_},L={label:null==O?void 0:O.providerlevel_name,value:null==O?void 0:O.provideragentuuid};D(L);const W={label:null==O?void 0:O.providerlevel_name,value:null==O?void 0:O.providerlevel};H(W),q(null==O?void 0:O.providerlevel);const U=null==O?void 0:O.continentid;$(U);const V=Number(null==O?void 0:O.nationid);z(V);const M={personName:null==(p=null==O?void 0:O.providercontact)?void 0:p.username,personPhone:null==(v=null==O?void 0:O.providercontact)?void 0:v.usermob,personEmail:null==(h=null==O?void 0:O.providercontact)?void 0:h.email},G=(null==(f=null==(x=null==O?void 0:O.detileinfor)?void 0:x.providerpic)?void 0:f.providerimg)?null==(C=null==(S=null==(y=null==(b=null==O?void 0:O.detileinfor)?void 0:b.providerpic)?void 0:y.providerimg)?void 0:S.split(","))?void 0:C.map(((e,l)=>({name:`file${l+1}`,url:e}))):null;Z(G);const Q=(null==(E=null==(I=null==O?void 0:O.detileinfor)?void 0:I.providerpic)?void 0:E.providerlogo)?null==(A=null==(T=null==(w=null==(P=null==O?void 0:O.detileinfor)?void 0:P.providerpic)?void 0:w.providerlogo)?void 0:T.split(","))?void 0:A.map(((e,l)=>({name:`logo${l+1}`,url:e}))):null;X(Q),g.setFieldsValue(B),N.setFieldsValue(M)})(),(async()=>{const e=(await h.getAgents()).data.map((e=>({label:e.providername,value:e.uuid})));w(e)})(),(async()=>{const e=(await j.getStoreType()).data.map((e=>({label:e.name,value:e.id})));k(e)})(),(async()=>{const e=(await j.getArea()).data.map((e=>({label:e.name,value:e.id})));W(e)})()}),[]),a.jsxs("div",{className:"store-edit",children:[a.jsx("div",{className:"item",children:a.jsx(u,{title:y("storeInformation"),bordered:!0,children:a.jsxs(p,{form:g,name:"storeInfo",wrapperCol:{span:16},onFinish:G,labelAlign:"left",onFinishFailed:Q,autoComplete:"off",children:[a.jsxs("div",{className:"first",children:[a.jsx(p.Item,{label:y("storeName"),name:"storename",rules:[{required:!0,message:y("storeNameCannotBeEmpty"),max:20}],children:a.jsx(v,{})}),a.jsx(p.Item,{label:y("companyName"),name:"company",rules:[{message:y("pleaseEnter"),max:20}],children:a.jsx(v,{})})]}),a.jsxs("div",{className:"first",children:[a.jsx(p.Item,{label:y("storeType"),name:"storetype",rules:[{required:!0,message:y("storeTypeCannotBeEmpty")}],children:a.jsx(n,{options:O,value:A,onSelect:async e=>{q(e);const l=O.find((l=>l.value===e));H(l)}})}),5!==_&&a.jsx(p.Item,{label:y("distributor"),name:"proxyname",rules:[{required:!0,message:y("agentCannotBeEmpty")}],children:a.jsx(n,{options:P,value:T,onSelect:async e=>{const l=P.find((l=>l.value===e));D(l)}})})]}),a.jsx("div",{className:"first path",children:a.jsx(p.Item,{label:y("storeAddress"),name:"storepath",rules:[()=>({validator:()=>B&&U?Promise.resolve():Promise.reject(y("storeAddressCannotBeEmpty"))}),{required:!0}],children:a.jsxs("div",{className:"path-city-field",children:[a.jsx(n,{options:L,value:B,onSelect:async e=>{z(null);const l=L.find((l=>l.value==e));$(l.value),R(e)}}),a.jsx(n,{options:V,value:U,onSelect:async e=>{const l=V.find((l=>l.value===e));z(l.value),g.setFieldValue("storepath",e),g.setFields([{name:"storepath",errors:null}])}})]})})}),a.jsx(p.Item,{label:y("detailedAddress"),name:"pathDetail",style:{maxWidth:1e3},rules:[{message:y("pleaseEnter")}],children:a.jsx(v,{})}),a.jsx(p.Item,{label:y("addressDescription"),name:"pathDesc",style:{maxWidth:1e3},rules:[{message:y("pleaseEnter")}],children:a.jsx(v,{})}),a.jsxs("div",{className:"first",children:[a.jsx(p.Item,{label:y("storePhoneNumber"),name:"storePhone",style:{maxWidth:1e3},children:a.jsx(v,{})}),a.jsx(p.Item,{label:y("businessHours"),name:"storeTime",style:{maxWidth:1e3},rules:[{type:"array",message:"请选择营业时间!"}],children:a.jsx(c.RangePicker,{format:"HH:mm",placeholder:[y("startDate"),y("endDate")]})})]})]})})}),a.jsx("div",{className:"item",children:a.jsx(u,{title:y("storeManagerInformation"),bordered:!0,children:a.jsxs(p,{name:"storePerson",form:N,wrapperCol:{span:16},onFinish:G,labelAlign:"right",onFinishFailed:Q,autoComplete:"off",children:[a.jsxs("div",{className:"first",children:[a.jsx(p.Item,{label:y("name"),name:"personName",rules:[{required:!0,message:y("pleaseEnter")}],children:a.jsx(v,{style:{width:270}})}),a.jsx(p.Item,{label:y("phoneNumber"),name:"personPhone",labelCol:{span:7},children:a.jsx(v,{style:{width:270}})})]}),a.jsx("div",{className:"first",children:a.jsx(p.Item,{label:y("email"),name:"personEmail",labelCol:{span:2.5},style:{maxWidth:1e3},rules:[()=>({validator:(e,l)=>{const s=l;return s&&!t.checkEmail(s)?Promise.reject(y("incorrectEmailFormat")):Promise.resolve()}}),{required:!0,message:y("pleaseEnter")}],children:a.jsx(v,{style:{width:270}})})})]})})}),a.jsx("div",{className:"item",children:a.jsxs(u,{title:y("otherInformation"),bordered:!0,children:[a.jsxs("div",{className:"inline",children:[a.jsxs("span",{className:"inline-label",children:[y("storePhotos"),"："]}),a.jsx("div",{className:"file-upload",children:a.jsx(f,{...J,listType:"picture",children:a.jsx(o,{icon:a.jsx(b,{}),children:y("uploadFile")})})}),a.jsx("div",{className:"tips",children:y("tips2",{num:10,count:5})})]}),a.jsxs("div",{className:"inline",children:[a.jsxs("span",{className:"inline-label",children:[y("storeLOGO"),"："]}),a.jsx("div",{className:"file-upload",children:a.jsx(x,{children:a.jsx(f,{...ee,listType:"picture",children:a.jsx(o,{icon:a.jsx(b,{}),children:y("uploadFile")})})})}),a.jsx("div",{className:"tips",children:y("tips2",{num:10,count:1})})]})]})}),a.jsxs("div",{className:"submit-btn",children:[a.jsx(o,{type:"primary",onClick:async()=>{try{const e=await g.validateFields(),l=await N.validateFields();let s,i={providername:e.storename,provideragentuuid:T.value,providerlevel:A.value,providaddr:e.pathDetail,mob:l.personPhone,username:l.personName,usermob:l.personPhone,email:l.personEmail,continentid:B,nationid:U,addrremark:e.pathDesc,businesstime:e.storeTime?r(e.storeTime[0]).format("HH:mm")+"-"+r(e.storeTime[1]).format("HH:mm"):"",companyname:e.company,providerimg:null==Y?void 0:Y.map((e=>{var l;return e.response?null==(l=null==e?void 0:e.response)?void 0:l.data:e.url})).join(","),providerlogo:null==K?void 0:K.map((e=>{var l;return e.response?null==(l=null==e?void 0:e.response)?void 0:l.data:e.url})).join(",")};"add"===F?s=await j.saveStore(i):(i.uuid=F,s=await j.updateStore(i)),s&&200===s.code?(m.success("success"),E("/store/list")):m.error((null==s?void 0:s.message)??"error")}catch(e){}},children:y("submit")}),a.jsx(o,{htmlType:"button",onClick:()=>{E(-1)},style:{marginLeft:80},children:y("return")})]})]})}export{y as default};
