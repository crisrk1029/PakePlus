import{e,r as a,g as s,j as i,B as l,S as n,h as o,m as d,T as r}from"./index-aeca932e.js";import{F as m}from"./index-85dc0d3a.js";import{I as c}from"./index-d90fa46f.js";import{a as u}from"./index-801a9590.js";import"./index-d93151a5.js";import"./index-5a025839.js";import"./index-fb057fd6.js";import{P as p}from"./index-60197fbb.js";import{D as h}from"./index-a0588428.js";import{D as j}from"./index-d88d2b2a.js";import"./index-57f63cdf.js";import{t as x}from"./teacher-e39ee8aa.js";import{u as y}from"./useSetState-8e08c7f5.js";import{u as f}from"./useMount-64f23307.js";import{M as g}from"./index-6226197c.js";import{P as v}from"./PlusCircleOutlined-90803570.js";import{E as D}from"./EditOutlined-21831c3e.js";import{D as T}from"./DeleteOutlined-c2326a92.js";import"./responsiveObserve-cfbf1a72.js";import"./index-73995e0d.js";import"./EyeOutlined-f0ed5c3d.js";import"./index-5bcf51a7.js";import"./getScrollBarSize-6b2349d8.js";import"./isEqual-89fb4070.js";import"./useForceUpdate-c2b76191.js";import"./index-4a60c0a0.js";import"./ActionButton-04036752.js";import"./CalendarOutlined-8ff6678f.js";import"./Portal-0dc81ff6.js";import"./DeleteOutlined-6b999003.js";function Y(){document.title="教练管理";const Y=e((e=>e.app.powersCode)),[S]=m.useForm(),[w,b]=a.useState([]),[M,k]=a.useState(!1);let[L,N]=s();const C=L.get("teacher"),[H,O]=y({pageNum:1,pageSize:10,total:0}),[I,z]=y({operateType:"add",nowData:null,modalShow:!1,modalLoading:!1}),F=async e=>{const a={coachuuid:C,page:e.pageNum,limit:e.pageSize};k(!0);try{const s=await x.getTeacherLeaveList(a);s&&200===s.code?(b(s.data),O({pageNum:e.pageNum,pageSize:e.pageSize,total:s.cont})):d.error((null==s?void 0:s.message)??t("dataFetchFailed"))}finally{k(!1)}},E={leaveType:"",startDate:"",endDate:"",desc:"",id:""},P=(e,a)=>{z({modalShow:!0,nowData:e,operateType:a}),e&&S.setFieldsValue({leaveType:e.type,startDate:o(e.startDate),endDate:o(e.endDate),desc:e.desc,id:e.id})},[q,V]=a.useState("1"),[B,$]=a.useState(null),[Q,U]=a.useState(null),A=[{value:1,label:"休假"},{value:2,label:"事假"},{value:3,label:"病假"},{value:4,label:"其他"}],J=e=>{const a=A.find((a=>a.value===e));return a?a.label:""},R=e=>{const a=A.find((a=>a.label===e));return a?a.value:null},W=()=>{S.setFieldsValue({...E}),z({modalShow:!1})},X=[{title:"编号",dataIndex:"serial",key:"serial"},{title:"请假类型",dataIndex:"type",key:"type"},{title:"开始时间",dataIndex:"startDate",key:"startDate"},{title:"结束时间",dataIndex:"endDate",key:"endDate"},{title:"请假说明",dataIndex:"desc",key:"desc"},{title:"创建时间",dataIndex:"createTime",key:"createTime"},{title:"操作",key:"control",width:200,render:(e,a)=>{const t=[];Y.includes("teacher:edit")&&t.push(i.jsx("span",{className:"control-btn blue",onClick:()=>P(a,"edit"),children:i.jsx(r,{placement:"top",title:"编辑",children:i.jsx(D,{})})},"1")),Y.includes("teacher:leave")&&t.push(i.jsx(p,{title:"确定删除吗？",onConfirm:()=>(async e=>{k(!0);try{const a=await x.deleteTeacherLeave({coachid:e.id});a&&200===a.code?(d.success("删除成功"),F(H)):d.error((null==a?void 0:a.message)??"操作失败")}finally{k(!1)}})(a),okText:"确定",cancelText:"取消",children:i.jsx("span",{className:"control-btn red",children:i.jsx(r,{placement:"top",title:"删除",children:i.jsx(T,{})})})},"3"));const s=[];return t.forEach(((e,a)=>{a&&s.push(i.jsx(h,{type:"vertical"},`line${a}`)),s.push(e)})),s}}],Z=a.useMemo((()=>w.map(((e,a)=>({key:a,id:e.id,uuid:e.uuid,serial:a+1+(H.pageNum-1)*H.pageSize,type:J(e.status),startDate:e.timestart,endDate:e.timeend,desc:e.comments,createTime:e.addtime})))),[H,w]);return f((()=>{F(H)})),i.jsxs("div",{className:"user-box",children:[i.jsx("div",{className:"user-search",children:i.jsx("ul",{className:"search-func",children:Y.includes("teacher:add")&&i.jsx("li",{children:i.jsx(l,{type:"primary",icon:i.jsx(v,{}),disabled:!Y.includes("teacher:add"),onClick:()=>P(null,"add"),children:"新增休假"})})})}),i.jsx("div",{className:"diy-table",children:i.jsx(u,{columns:X,loading:M,dataSource:Z,pagination:{total:H.total,current:H.pageNum,pageSize:H.pageSize,showQuickJumper:!1,showTotal:e=>`共 ${e} 条数据`,onChange:(e,a)=>{F({pageNum:e,pageSize:a})}}})}),i.jsx(g,{title:{add:"新增休假",edit:"教练请假",see:"查看"}[I.operateType],open:I.modalShow,cancelText:"取消",okText:"提交",onOk:async()=>{try{const e=await S.validateFields();if(z({modalLoading:!0}),"add"===I.operateType)try{const a={coachuuid:C,status:e.leaveType,timestart:null==B?void 0:B.format("YYYY-MM-DD HH:mm:ss"),timeend:null==Q?void 0:Q.format("YYYY-MM-DD HH:mm:ss"),comments:e.desc},t=await x.addTeacherLeave(a);t&&200===t.code?(d.success("添加成功"),F(H),W()):d.error((null==t?void 0:t.message)??"操作失败")}finally{z({modalLoading:!1})}else try{const a={coachid:I.nowData.id,coachuuid:C,timestart:(null==B?void 0:B.format("YYYY-MM-DD HH:mm:ss"))?null==B?void 0:B.format("YYYY-MM-DD HH:mm:ss"):I.nowData.startDate,timeend:(null==Q?void 0:Q.format("YYYY-MM-DD HH:mm:ss"))?null==Q?void 0:Q.format("YYYY-MM-DD HH:mm:ss"):I.nowData.endDate,status:R(e.leaveType),comments:e.desc},t=await x.editTeacherLeave(a);200===(null==t?void 0:t.code)?(d.success("修改成功"),W()):d.error((null==t?void 0:t.message)??"修改失败")}finally{z({modalLoading:!1})}F(H)}catch{}},onCancel:W,confirmLoading:I.modalLoading,children:i.jsxs(m,{form:S,initialValues:{formConditions:1},children:[i.jsx(m.Item,{label:"休假类型",name:"leaveType",style:{marginLeft:10,width:220},rules:[{required:!0}],children:i.jsxs(n,{onChange:e=>{V(e)},children:[i.jsx(n.Option,{value:"1",children:"休假"}),i.jsx(n.Option,{value:"2",children:"事假"}),i.jsx(n.Option,{value:"3",children:"病假"}),i.jsx(n.Option,{value:"4",children:"其他"})]})}),i.jsx(m.Item,{label:"开始时间",name:"startDate",rules:[{required:!0}],children:i.jsx(j,{showTime:!0,onChange:(e,a)=>{$(e)}})}),i.jsx(m.Item,{label:"结束时间",name:"endDate",rules:[{required:!0}],children:i.jsx(j,{showTime:!0,onChange:(e,a)=>{U(e)}})}),i.jsx(m.Item,{label:"说明",name:"desc",style:{width:400,marginLeft:10},children:i.jsx(c,{placeholder:"请输入"})})]})})]})}export{Y as default};
