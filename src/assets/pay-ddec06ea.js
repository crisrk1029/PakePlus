import{a1 as e}from"./index-aeca932e.js";const a={payRefund:a=>e({url:"service_api/order_scancode_pay_refund",method:"post",data:a}),payStatus:a=>e({url:"service_api/order_scancode_pay_status",method:"get",params:a}),payX:a=>e({url:"service_api/crm_order_pay",method:"post",data:a}),payXRefund:a=>e({url:"service_api/crm_order_refund",method:"post",data:a}),payK:a=>e({url:"service_api/order_scancode_pay",method:"post",data:a}),refundAmount:a=>e({url:"wechat/refund_amount",method:"get",params:a}),refund:a=>e({url:"wechat/refund_order",method:"post",data:a})};export{a as p};
