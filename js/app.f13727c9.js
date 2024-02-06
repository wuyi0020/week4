(function(){"use strict";var t={8524:function(t,e,i){var n=i(7764),o=i(4108),a=i(9096);const s=(0,o.QD)("nav",null,null,-1),d={class:"navbar fixed-top navbar-dark bg-dark"},r={class:"container-fluid"};function c(t,e,i,n,c,l){const u=(0,o.E1)("router-link"),p=(0,o.E1)("router-view");return(0,o.Wz)(),(0,o.An)(o.ae,null,[s,(0,o.QD)("nav",d,[(0,o.QD)("div",r,[(0,o.K2)(u,{class:"navbar-brand",to:"/"},{default:(0,o.Ql)((()=>[(0,o.mY)("Home")])),_:1}),(0,o.K2)(u,{class:"btn btn-outline-light me-2",to:"/buycoin"},{default:(0,o.Ql)((()=>[(0,o.mY)("購買硬幣")])),_:1}),c.LoginState?((0,o.Wz)(),(0,o.An)("div",{key:1,class:"btn btn-outline-light me-2",onClick:e[0]||(e[0]=t=>l.logOut()),to:"/login"},"登出")):((0,o.Wz)(),(0,o.Az)(u,{key:0,class:"btn btn-outline-light me-2",to:"/login"},{default:(0,o.Ql)((({route:t})=>[(0,o.mY)((0,a.WA)(t),1)])),_:1}))])]),(0,o.K2)(p)],64)}var l=i(2964),u={data(){return{LoginState:!1,apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020"}},methods:{checkAdmin(){const t=`${this.apiUrl}/api/user/check`;l.c.post(t).then((()=>{this.LoginState=!0})).catch((()=>{this.LoginState=!1}))},logOut(){document.cookie="hexToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",this.checkAdmin()}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");l.c.defaults.headers.common.Authorization=t,this.checkAdmin()}},p=i(4100);const m=(0,p.c)(u,[["render",c]]);var g=m,h=i(7464);const b={class:"home"};function D(t,e,i,n,a,s){return(0,o.Wz)(),(0,o.An)("div",b)}var v={name:"HomeView",components:{}};const Q=(0,p.c)(v,[["render",D]]);var f=Q;const y={class:"container mt-5"},k={class:"row justify-content-center"},A={class:"col-md-6"},I={class:"card"},w=(0,o.QD)("div",{class:"card-header"},[(0,o.QD)("h3",{class:"text-center"},"登入")],-1),W={class:"card-body"},x={class:"mb-3"},U=(0,o.QD)("label",{for:"username",class:"form-label"},"使用者名稱：",-1),$={class:"mb-3"},_=(0,o.QD)("label",{for:"password",class:"form-label"},"密碼：",-1),z=(0,o.QD)("div",{class:"text-center"},[(0,o.QD)("button",{type:"submit",class:"btn btn-primary"},"登入")],-1);function P(t,e,i,a,s,d){return(0,o.Wz)(),(0,o.An)("div",y,[(0,o.QD)("div",k,[(0,o.QD)("div",A,[(0,o.QD)("div",I,[w,(0,o.QD)("div",W,[(0,o.QD)("form",{onSubmit:e[2]||(e[2]=(0,n.Y7)(((...t)=>d.login&&d.login(...t)),["prevent"]))},[(0,o.QD)("div",x,[U,(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>s.user.username=t),id:"username",name:"username",required:""},null,512),[[n.Og,s.user.username]])]),(0,o.QD)("div",$,[_,(0,o.wt)((0,o.QD)("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s.user.password=t),autocomplete:"current-password"},null,512),[[n.Og,s.user.password]])]),z],32)])])])])])}i(3248);var L={name:"HomeView",components:{},data(){return{user:{username:"",password:""}}},methods:{login(){const t="https://vue3-course-api.hexschool.io/v2/admin/signin";l.c.post(t,this.user).then((t=>{const{token:e,expired:i}=t.data;console.log(t),document.cookie=`hexToken=${e};expires=${new Date(i)}; path=/`,this.$router.push("/product")})).catch((t=>{alert(t.response.data.message)}))}}};const O=(0,p.c)(L,[["render",P]]);var C=O;const S={class:"container"},V={class:"row py-3"},T={class:"col-md-6"},j=(0,o.QD)("h2",null,"產品列表",-1),Y={class:"table table-hover mt-4"},E=(0,o.QD)("thead",null,[(0,o.QD)("tr",null,[(0,o.QD)("th",{width:"150"},"產品名稱"),(0,o.QD)("th",{width:"120"},"原價"),(0,o.QD)("th",{width:"120"},"售價"),(0,o.QD)("th",{width:"150"},"是否啟用"),(0,o.QD)("th",{width:"120"},"查看細節")])],-1),K={width:"150"},H={width:"120"},M={width:"120"},q={width:"150"},F={key:0,class:"text-success"},J={key:1},B={width:"120"},G=["onClick"],N={class:"col-md-6"},R=(0,o.QD)("h2",null,"單一產品細節",-1),X={class:"card mb-3"},Z=["src"],tt={class:"card-body"},et={class:"card-title"},it={class:"badge bg-primary ms-2"},nt={class:"card-text"},ot={class:"card-text"},at={class:"d-flex"},st={class:"card-text me-2"},dt={class:"card-text text-secondary"},rt={key:0},ct=["src"],lt={key:1,class:"text-secondary"};function ut(t,e,i,n,s,d){return(0,o.Wz)(),(0,o.An)("div",S,[(0,o.QD)("div",V,[(0,o.QD)("div",T,[j,(0,o.QD)("table",Y,[E,(0,o.QD)("tbody",null,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(s.products,(t=>((0,o.Wz)(),(0,o.An)("tr",{key:t.id},[(0,o.QD)("td",K,(0,a.WA)(t.title),1),(0,o.QD)("td",H,(0,a.WA)(t.origin_price),1),(0,o.QD)("td",M,(0,a.WA)(t.price),1),(0,o.QD)("td",q,[t.is_enabled?((0,o.Wz)(),(0,o.An)("span",F,"啟用")):(0,o.g1)("",!0),t.is_enabled?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("span",J,"未啟用"))]),(0,o.QD)("td",B,[(0,o.QD)("button",{type:"button",class:"btn btn-primary",onClick:e=>s.SingleInfo=t},"查看細節",8,G)])])))),128))])]),(0,o.QD)("p",null,[(0,o.mY)(" 目前有 "),(0,o.QD)("span",null,(0,a.WA)(s.products.length),1),(0,o.mY)(" 項產品 ")])]),(0,o.QD)("div",N,[R,s.SingleInfo.title?((0,o.Wz)(),(0,o.An)(o.ae,{key:0},[(0,o.QD)("div",X,[(0,o.QD)("img",{src:s.SingleInfo.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,Z),(0,o.QD)("div",tt,[(0,o.QD)("h5",et,[(0,o.mY)((0,a.WA)(s.SingleInfo.title)+" ",1),(0,o.QD)("span",it,(0,a.WA)(s.SingleInfo.category),1)]),(0,o.QD)("p",nt,"商品描述："+(0,a.WA)(s.SingleInfo.description),1),(0,o.QD)("p",ot,"商品內容："+(0,a.WA)(s.SingleInfo.content),1),(0,o.QD)("div",at,[(0,o.QD)("p",st,(0,a.WA)(s.SingleInfo.price),1),(0,o.QD)("p",dt,[(0,o.QD)("del",null,(0,a.WA)(s.SingleInfo.origin_price),1)]),(0,o.mY)(" 元 / "+(0,a.WA)(s.SingleInfo.unit),1)])])]),s.SingleInfo.imagesUrl?((0,o.Wz)(),(0,o.An)("div",rt,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(s.SingleInfo.imagesUrl,((t,e)=>((0,o.Wz)(),(0,o.An)("img",{key:e,src:t,alt:"",class:"images m-2"},null,8,ct)))),128))])):(0,o.g1)("",!0)],64)):(0,o.g1)("",!0),s.SingleInfo.title?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("p",lt,"請選擇一個商品查看"))])])])}var pt={name:"ProductView",components:{},data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020",products:[],SingleInfo:{}}},methods:{checkAdmin(){const t=`${this.apiUrl}/api/user/check`;l.c.post(t).then((()=>{this.getData()})).catch((t=>{alert(t.response.data.message),this.$router.push("/login")}))},getData(){const t=`${this.apiUrl}/api/${this.apiPath}/admin/products`;l.c.get(t).then((t=>{this.products=t.data.products})).catch((t=>{alert(t.response.data.message)}))},openProduct(t){this.tempProduct=t}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");l.c.defaults.headers.common.Authorization=t,this.checkAdmin()}};const mt=(0,p.c)(pt,[["render",ut]]);var gt=mt;const ht={class:"container"},bt={class:"row"},Dt={key:0,class:"col"},vt=(0,o.QD)("h1",null," 編輯購買硬幣 ",-1),Qt=[vt],ft={key:1,class:"d-flex align-items-center justify-content-center"},yt=(0,o.QD)("strong",null,"Loading... ",-1),kt=(0,o.QD)("div",{class:"spinner-border",role:"status","aria-hidden":"true"},null,-1),At=[yt,kt],It={class:"row justify-content-center"},wt={key:0,class:"col-6 mb-1"},Wt={class:"row"};function xt(t,e,i,n,a,s){const d=(0,o.E1)("ProductCoinAdd"),r=(0,o.E1)("ProductCoin");return(0,o.Wz)(),(0,o.An)("div",ht,[(0,o.QD)("div",bt,[a.products.length?((0,o.Wz)(),(0,o.An)("div",Dt,Qt)):((0,o.Wz)(),(0,o.An)("div",ft,At))]),(0,o.QD)("div",It,[a.products.length?((0,o.Wz)(),(0,o.An)("div",wt,[(0,o.K2)(d,{"-add-coin":s.AddItem,addItem:a.addItem},null,8,["-add-coin","addItem"])])):(0,o.g1)("",!0)]),(0,o.QD)("div",Wt,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(a.products,(t=>((0,o.Wz)(),(0,o.An)("div",{class:"col-4",key:t.id},[(0,o.K2)(r,{item:t,getcoinData:s.getcoinData},null,8,["item","getcoinData"])])))),128))])])}const Ut={class:"card text-center border-dark mb-3"},$t={key:0,class:"input-group card-header mb-3"},_t={class:"input-group-prepend"},zt=["id"],Pt=["placeholder","aria-describedby"],Lt={key:1,class:"card-header"},Ot={class:"card-body"},Ct={key:0,class:"input-group mb-3"},St={class:"input-group-prepend"},Vt=["id"],Tt=["placeholder","aria-describedby"],jt=["src"],Yt=["src"],Et={key:3,class:"input-group mb-3"},Kt={class:"input-group-prepend"},Ht=["id"],Mt=["placeholder","aria-describedby"],qt={key:4},Ft={class:"row"},Jt={key:0,class:"input-group mb-3 col"},Bt={class:"input-group-prepend"},Gt=["id"],Nt=["placeholder","aria-describedby"],Rt={key:1,class:"col card-text"},Xt={key:2,class:"input-group mb-3 col"},Zt={class:"input-group-prepend"},te=["id"],ee=["placeholder","aria-describedby"],ie={key:3,class:"col card-text"};function ne(t,e,i,s,d,r){return(0,o.Wz)(),(0,o.An)("div",null,[(0,o.QD)("div",Ut,[d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("div",$t,[(0,o.QD)("div",_t,[(0,o.QD)("span",{class:"input-group-text",id:`${i.item.id}_title`},"標題",8,zt)]),(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control",placeholder:i.item.title,"aria-label":"標題","aria-describedby":`${i.item.id}_title`,"onUpdate:modelValue":e[0]||(e[0]=t=>d.editItem[i.item.id].title=t)},null,8,Pt),[[n.Og,d.editItem[i.item.id].title]])])):((0,o.Wz)(),(0,o.An)("h2",Lt,(0,a.WA)(i.item.title),1)),(0,o.QD)("div",Ot,[d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("div",Ct,[(0,o.QD)("div",St,[(0,o.QD)("span",{class:"input-group-text",id:`${i.item.id}_imageUrl`},"圖片網址",8,Vt)]),(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control",placeholder:i.item.imageUrl,"aria-label":"圖片網址","aria-describedby":`${i.item.id}_imageUrl`,"onUpdate:modelValue":e[1]||(e[1]=t=>d.editItem[i.item.id].imageUrl=t)},null,8,Tt),[[n.Og,d.editItem[i.item.id].imageUrl]])])):(0,o.g1)("",!0),d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("img",{key:1,src:d.editItem[i.item.id].imageUrl,alt:""},null,8,jt)):((0,o.Wz)(),(0,o.An)("img",{key:2,src:i.item.imageUrl,alt:"",class:"coin card-img-top"},null,8,Yt)),d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("div",Et,[(0,o.QD)("div",Kt,[(0,o.QD)("span",{class:"input-group-text",id:`${i.item.id}_content`},"內容",8,Ht)]),(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control",placeholder:i.item.content,"aria-label":"內容","aria-describedby":`${i.item.id}_content`,"onUpdate:modelValue":e[2]||(e[2]=t=>d.editItem[i.item.id].content=t)},null,8,Mt),[[n.Og,d.editItem[i.item.id].content]])])):((0,o.Wz)(),(0,o.An)("div",qt,(0,a.WA)(i.item.content),1)),(0,o.QD)("div",Ft,[d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("div",Jt,[(0,o.QD)("div",Bt,[(0,o.QD)("span",{class:"input-group-text",id:`${i.item.id}_origin_price`},"原價",8,Gt)]),(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control",placeholder:i.item.origin_price,"aria-label":"原價","aria-describedby":`${i.item.id}_origin_price`,"onUpdate:modelValue":e[3]||(e[3]=t=>d.editItem[i.item.id].origin_price=t)},null,8,Nt),[[n.Og,d.editItem[i.item.id].origin_price]])])):((0,o.Wz)(),(0,o.An)("del",Rt,"原價:"+(0,a.WA)(i.item.origin_price),1)),d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("div",Xt,[(0,o.QD)("div",Zt,[(0,o.QD)("span",{class:"input-group-text",id:`${i.item.id}_price`},"現價",8,te)]),(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control",placeholder:i.item.origin_price,"aria-label":"現價","aria-describedby":`${i.item.id}_price`,"onUpdate:modelValue":e[4]||(e[4]=t=>d.editItem[i.item.id].price=t)},null,8,ee),[[n.Og,d.editItem[i.item.id].price]])])):((0,o.Wz)(),(0,o.An)("div",ie,"現價:"+(0,a.WA)(i.item.price),1))]),(0,o.QD)("div",null,[d.edittingList[i.item.id]?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("button",{key:"修改",class:"btn btn-outline-success",onClick:e[5]||(e[5]=t=>r.editProduct(i.item))},"修改")),d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("button",{key:"取消",class:"btn btn-outline-success",onClick:e[6]||(e[6]=t=>r.editProductCancel(i.item.id))},"取消")):(0,o.g1)("",!0),d.edittingList[i.item.id]?((0,o.Wz)(),(0,o.An)("button",{key:"確定",class:"btn btn-outline-success",onClick:e[7]||(e[7]=t=>r.editProductDone(i.item.id))},"確定")):(0,o.g1)("",!0),(0,o.QD)("button",{class:"btn btn-outline-danger",onClick:e[8]||(e[8]=t=>r.delProduct(i.item.id))},"刪除")])])])])}var oe={name:"ProductCoin",props:["item","getcoinData"],data(){return{edittingList:{},editItem:{},apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020"}},methods:{editProduct(t){this.edittingList[t.id]=!this.edittingList[t.id],this.editItem[t.id]={...t}},editProductCancel(t){this.edittingList[t]=!this.edittingList[t],this.editItem[t]=""},editProductDone(t){const e=`${this.apiUrl}/api/${this.apiPath}/admin/product/${t}`;let i;this.edittingList[t]=!this.edittingList[t],console.log(this.editItem[t]),i={...this.editItem[t]},delete i.id,console.log(i),l.c.put(e,{data:i}).then((t=>{console.log(t),this.getcoinData()})).catch((t=>{console.log(t),alert(t.response)})),console.log(this.editItem[t])},delProduct(t){const e=`${this.apiUrl}/api/${this.apiPath}/admin/product/${t}`;l.c.delete(e).then((t=>{console.log(t),this.getcoinData()})).catch((t=>{console.log(t),console.log(t.response.data.message),alert(t.response.data.message)}))}}};const ae=(0,p.c)(oe,[["render",ne]]);var se=ae;const de={class:"card text-center border-dark"},re=(0,o.QD)("div",{class:"card-header user-select-none","data-bs-toggle":"collapse","data-bs-target":"#addItemCollapse","aria-controls":"addItemCollapse",role:"button","aria-expanded":"false"},"新增商品",-1),ce={class:"card-body collapse",id:"addItemCollapse"},le={class:"input-group mb-3 col"},ue=(0,o.QD)("div",{class:"input-group-prepend"},[(0,o.QD)("span",{class:"input-group-text",id:"add_title"},"標題")],-1),pe={class:"input-group mb-3 col"},me=(0,o.QD)("div",{class:"input-group-prepend"},[(0,o.QD)("span",{class:"input-group-text",id:"add_imageUrl"},"圖片網址")],-1),ge=["src"],he={class:"input-group mb-3 col"},be=(0,o.QD)("div",{class:"input-group-prepend"},[(0,o.QD)("span",{class:"input-group-text",id:"add_content"},"內容")],-1),De={class:"row"},ve={class:"input-group mb-3 col"},Qe=(0,o.QD)("div",{class:"input-group-prepend"},[(0,o.QD)("span",{class:"input-group-text",id:"add_origin_price"},"原價")],-1),fe={class:"input-group mb-3 col"},ye=(0,o.QD)("div",{class:"input-group-prepend"},[(0,o.QD)("span",{class:"input-group-text",id:"add_price"},"現價")],-1);function ke(t,e,i,a,s,d){return(0,o.Wz)(),(0,o.An)("div",de,[re,(0,o.QD)("div",ce,[(0,o.QD)("div",le,[ue,(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control","aria-label":"標題","aria-describedby":"add_title","onUpdate:modelValue":e[0]||(e[0]=t=>s.addItem.title=t)},null,512),[[n.Og,s.addItem.title]])]),(0,o.QD)("div",pe,[me,(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control","aria-label":"圖片網址","aria-describedby":"add_imageUrl","onUpdate:modelValue":e[1]||(e[1]=t=>s.addItem.imageUrl=t)},null,512),[[n.Og,s.addItem.imageUrl]])]),(0,o.QD)("img",{src:s.addItem.imageUrl,alt:""},null,8,ge),(0,o.QD)("div",he,[be,(0,o.wt)((0,o.QD)("input",{type:"text",class:"form-control","aria-label":"內容","aria-describedby":"add_content","onUpdate:modelValue":e[2]||(e[2]=t=>s.addItem.content=t)},null,512),[[n.Og,s.addItem.content]])]),(0,o.QD)("div",De,[(0,o.QD)("div",ve,[Qe,(0,o.wt)((0,o.QD)("input",{type:"number",class:"form-control","aria-label":"原價","aria-describedby":"add_origin_price","onUpdate:modelValue":e[3]||(e[3]=t=>s.addItem.origin_price=t)},null,512),[[n.Og,s.addItem.origin_price]])]),(0,o.QD)("div",fe,[ye,(0,o.wt)((0,o.QD)("input",{type:"number",class:"form-control","aria-label":"現價","aria-describedby":"add_price","onUpdate:modelValue":e[4]||(e[4]=t=>s.addItem.price=t)},null,512),[[n.Og,s.addItem.price]])])]),(0,o.QD)("div",null,[(0,o.QD)("button",{key:"確定",class:"btn btn-outline-success",onClick:e[5]||(e[5]=t=>i.AddCoin(s.addItem))},"確定新增")])])])}var Ae={data(){return{addItem:{title:"",category:"coin",content:"",description:"",imageUrl:"",imagesUrl:[],is_enabled:1,origin_price:0,price:0,unit:"TWD"}}},props:["AddCoin"]};const Ie=(0,p.c)(Ae,[["render",ke]]);var we=Ie,We={name:"CoinView",components:{ProductCoin:se,ProductCoinAdd:we},data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"wuyi0020",products:[],edittingList:{},editItem:{},addItem:{title:"",category:"coin",content:"",description:"",imageUrl:"",imagesUrl:[],is_enabled:1,origin_price:0,price:0,unit:"TWD"}}},methods:{checkAdmin(){const t=`${this.apiUrl}/api/user/check`;l.c.post(t).then((()=>{this.getcoinData()})).catch((t=>{alert(t.response.data.message),this.$router.push("/login")}))},getcoinData(){const t=`${this.apiUrl}/api/${this.apiPath}/admin/products?category=coin`;l.c.get(t).then((t=>{this.products=t.data.products,console.log(this.products),this.products.sort(((t,e)=>t.description>e.description?1:-1)),console.log(this.edittingList)})).catch((t=>{alert(t.response.data.message)}))},openProduct(t){this.tempProduct=t},editProduct(t){this.edittingList[t.id]=!this.edittingList[t.id],this.editItem[t.id]={...t}},editProductCancel(t){this.edittingList[t]=!this.edittingList[t],this.editItem[t]=""},editProductDone(t){const e=`${this.apiUrl}/api/${this.apiPath}/admin/product/${t}`;let i;this.edittingList[t]=!this.edittingList[t],console.log(this.editItem[t]),i={...this.editItem[t]},delete i.id,console.log(i),l.c.put(e,{data:i}).then((t=>{console.log(t),this.getcoinData()})).catch((t=>{console.log(t),alert(t.response)})),console.log(this.editItem[t])},AddItem(t){const e=`${this.apiUrl}/api/${this.apiPath}/admin/product`;t.description=`${this.products.length+1}`;let i={};i["data"]={...t},console.log(t),console.log(i["data"]),l.c.post(e,i).then((t=>{console.log(t),this.getcoinData()})).catch((t=>{alert(t.response.data.message)}))},delProduct(t){const e=`${this.apiUrl}/api/${this.apiPath}/admin/product/${t}`;l.c.delete(e).then((t=>{console.log(t),this.getcoinData()})).catch((t=>{console.log(t),console.log(t.response.data.message),alert(t.response.data.message)}))}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");l.c.defaults.headers.common.Authorization=t,this.checkAdmin()}};const xe=(0,p.c)(We,[["render",xt]]);var Ue=xe;const $e=[{path:"/",name:"home",component:f},{path:"/login",name:"login",component:C},{path:"/product",name:"product",component:gt},{path:"/buycoin",name:"buycoin",component:Ue}],_e=(0,h.gv)({history:(0,h.Ow)(),routes:$e});var ze=_e;(0,n.W0)(g).use(ze).mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,a){if(!n){var s=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],a=t[l][2];for(var d=!0,r=0;r<n.length;r++)(!1&a||s>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[r])}))?n.splice(r--,1):(d=!1,a<s&&(s=a));if(d){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,o,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,s=n[0],d=n[1],r=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in d)i.o(d,o)&&(i.m[o]=d[o]);if(r)var l=r(i)}for(e&&e(n);c<s.length;c++)a=s[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(l)},n=self["webpackChunkweek4"]=self["webpackChunkweek4"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[999],(function(){return i(8524)}));n=i.O(n)})();
//# sourceMappingURL=app.f13727c9.js.map