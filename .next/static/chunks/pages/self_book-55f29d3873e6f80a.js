(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{48689:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},l=t(42135),s=function(e,n){return i.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="DeleteOutlined";var c=i.forwardRef(s)},24969:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),i=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},l=t(42135),s=function(e,n){return i.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};s.displayName="PlusOutlined";var c=i.forwardRef(s)},60105:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/self_book",function(){return t(5580)}])},5580:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return re}});var r=t(85893),i=t(67294),a=(t(11954),t(47359)),l=t(57047),s=t(47568),c=t(41799),o=t(69396),u=t(70655),d=t(29815),h=t(71577),m=t(87924),p=t(24016),f=t(87462),g=t(71002),v=t(97685),x=t(94184),y=t.n(x),j=t(50344),b=t(98423),Z=t(53124),C=t(34041),k=t(96159),N=C.Z.Option;function q(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var w=function(e,n){var t,r=e.prefixCls,a=e.className,l=e.popupClassName,s=e.dropdownClassName,c=e.children,o=e.dataSource,u=(0,j.Z)(c);if(1===u.length&&(0,k.l$)(u[0])&&!q(u[0])){var d=(0,v.Z)(u,1);t=d[0]}var h,m=t?function(){return t}:void 0;return h=u.length&&q(u[0])?c:o?o.map((function(e){if((0,k.l$)(e))return e;switch((0,g.Z)(e)){case"string":return i.createElement(N,{key:e,value:e},e);case"object":var n=e.value;return i.createElement(N,{key:n,value:n},e.text);default:return}})):[],i.createElement(Z.C,null,(function(t){var c=(0,t.getPrefixCls)("select",r);return i.createElement(C.Z,(0,f.Z)({ref:n},(0,b.Z)(e,["dataSource"]),{prefixCls:c,popupClassName:l||s,className:y()("".concat(c,"-auto-complete"),a),mode:C.Z.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:m}),h)}))},I=i.forwardRef(w);I.Option=N;var V=I,S=t(98542),T=t(83134),_=t(315),E=t(50888),D=t(24969),P=t(30381),O=t.n(P),B=t(5363),K=t(74444),R=t(70264),U="/post/create-post",z="/book/get-all-author-by-Key-word";var H={creatPost:function(e){return(0,R._i)({url:U,method:"post",data:e})},getAuthorByKeyWord:function(e){return(0,R._i)({url:z,method:"get",params:e})}};function M(e){var n=e.handleReset,t=e.setListBook,a=e.setKeyPage,l=(0,i.useState)(!1)[0],f=(0,i.useState)(),g=f[0],v=f[1],x=(0,i.useState)(),y=x[0],j=x[1],b=(0,i.useState)(),Z=b[0],C=b[1],k=function(){var e=(0,s.Z)((function(e){var n;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,B.C)(e.file)];case 1:return n=t.sent(),v(n),[2]}}))}));return function(n){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){y&&H.getAuthorByKeyWord({keyWord:y}).then((function(e){var n=e?e.map((function(e){return{value:e.author}})):null;C(n)}))}),[y]),console.log(Z);var N=(0,r.jsxs)("div",{children:[l?(0,r.jsx)(E.Z,{}):(0,r.jsx)(D.Z,{}),(0,r.jsx)("div",{style:{marginTop:8},children:"T\u1ea3i \u1ea3nh l\xean"})]});return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{marginBottom:20,display:"flex",justifyContent:"flex-end"},children:(0,r.jsx)(h.Z,{onClick:n,style:{marginRight:"5px"},type:"primary",children:"Quay l\u1ea1i"})}),(0,r.jsxs)(m.Z,{name:"basic",labelAlign:"left",labelCol:{span:7},wrapperCol:{span:17},initialValues:{},onFinish:function(e){var n;n=e,t((function(e){return(0,d.Z)(e).concat([(0,o.Z)((0,c.Z)({},n),{author:[n.author],key:(0,K.k$)(),bookImages:[g],publicationDate:O()(n.publicationDate).format("YYYY-MM-DD")})])})),a("view")},autoComplete:"off",colon:!1,id:"form-book",children:[(0,r.jsx)(m.Z.Item,{label:"ISBN",name:"isbn",children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp ISBN"})}),(0,r.jsx)(m.Z.Item,{label:"T\xean s\xe1ch",required:!0,name:"name",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp t\xean s\xe1ch"})}),(0,r.jsx)(m.Z.Item,{label:"Lo\u1ea1i b\xeca",required:!0,name:"coverType",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp lo\u1ea1i b\xeca"})}),(0,r.jsx)(m.Z.Item,{label:"Ta\u0301i ba\u0309n l\xe2\u0300n",required:!0,name:"reprints",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp l\xe2\u0300n ta\u0301i ba\u0309n"})}),(0,r.jsx)(m.Z.Item,{label:"T\xe1c gi\u1ea3",required:!0,name:"author",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(V,{style:{width:"100%"},onSearch:function(e){j(e)},options:Z,placeholder:"Vui lo\u0300ng cho\u0323n ta\u0301c gia\u0309",filterOption:function(e,n){return n&&n.value&&-1!==n.value.toUpperCase().indexOf(e.toUpperCase())}})}),(0,r.jsx)(m.Z.Item,{label:"Ng\xf4n ng\u1eef",required:!0,name:"language",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp ng\xf4n ng\u1eef"})}),(0,r.jsx)(m.Z.Item,{label:"Nh\xe0 xu\u1ea5t b\u1ea3n",required:!0,name:"publicCompany",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp nha\u0300 xu\xe2\u0301t ba\u0309n"})}),(0,r.jsx)(m.Z.Item,{label:"Ng\xe0y xu\u1ea5t b\u1ea3n",required:!0,name:"publicationDate",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(S.Z,{placeholder:"Ch\u1ecdn ng\xe0y xu\u1ea5t b\u1ea3n",style:{width:"100%"},format:["DD-MM-YYYY"]})}),(0,r.jsx)(m.Z.Item,{label:"M\xf4 t\u1ea3",required:!0,name:"description",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp m\xf4 t\u1ea3"})}),(0,r.jsx)(m.Z.Item,{label:"T\xecnh tr\u1ea1ng s\xe1ch",required:!0,name:"statusQuo",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],initialValue:"C\xf2n m\u1edbi",children:(0,r.jsxs)(T.ZP.Group,{name:"statusQuo",children:[(0,r.jsx)(T.ZP,{value:"C\xf2n m\u1edbi",children:"C\xf2n m\u1edbi"}),(0,r.jsx)(T.ZP,{value:"\u0110\xe3 qua s\u1eed d\u1ee5ng",children:"\u0110\xe3 qua s\u1eed d\u1ee5ng"})]})}),(0,r.jsx)(m.Z.Item,{label:"H\xecnh \u1ea3nh",required:!0,name:"bookImages",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(_.Z,{name:"url",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(){return!1},onChange:function(e){return k(e)},children:g?(0,r.jsx)("img",{src:g,alt:"avatar",style:{width:"100%"}}):N})})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,r.jsx)(h.Z,{onClick:function(){n()},style:{marginRight:"5px"},children:"H\u1ee7y"}),(0,r.jsx)(h.Z,{style:{marginRight:"5px"},type:"primary",htmlType:"submit",form:"form-book",children:"Save"})]})]})}var F=t(13448),L=t(69518),A=t(18429),Y=t(1413),G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"barcode",theme:"outlined"},Q=t(42135),W=function(e,n){return i.createElement(Q.Z,(0,Y.Z)((0,Y.Z)({},e),{},{ref:n,icon:G}))};W.displayName="BarcodeOutlined";var $=i.forwardRef(W),X=(t(30150),t(96231)),J=t(9473),ee=t(11163);function ne(){var e=(0,ee.useRouter)(),n=(0,J.v9)((function(e){return e.user})),t=(0,i.useState)("view"),a=t[0],l=t[1],d=(0,i.useState)(),f=d[0],g=d[1],v=(0,i.useState)(!1),x=v[0],y=(v[1],(0,i.useState)([])),j=y[0],b=y[1],Z=(0,i.useState)(),k=Z[0],N=Z[1],q=(0,i.useState)(),w=q[0],I=q[1],V=(0,i.useState)([]),S=V[0],T=V[1],P=(0,i.useState)(),O=P[0],K=P[1],R=function(){l("view")},U=function(){var e=(0,s.Z)((function(e){var n;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,B.C)(e.file)];case 1:return n=t.sent(),g(n),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),z=(0,r.jsxs)("div",{children:[x?(0,r.jsx)(E.Z,{}):(0,r.jsx)(D.Z,{}),(0,r.jsx)("div",{style:{marginTop:8},children:"T\u1ea3i \u1ea3nh l\xean"})]});return(0,i.useEffect)((function(){X.Z.getCategoryDetail().then((function(e){b(e)}))}),[]),(0,i.useEffect)((function(){k&&X.Z.getSubcategoryDeatail(k).then((function(e){I(e)}))}),[k]),(0,r.jsx)("div",{className:"post-to-self-container",children:"view"===a?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{marginBottom:20,display:"flex",justifyContent:"flex-end"},children:[(0,r.jsx)(h.Z,{onClick:R,style:{marginRight:"5px"},htmlType:"submit",form:"form-self",type:"primary",disabled:0===S.length,children:"\u0110\u0103ng b\xe1n"}),(0,r.jsx)(h.Z,{onClick:function(){l("post")},style:{marginRight:"5px"},type:"primary",children:"Th\xeam s\xe1ch"})]}),(0,r.jsxs)(m.Z,{name:"basic",labelAlign:"left",labelCol:{span:7},wrapperCol:{span:17},onFinish:function(t){!function(t){var r=(0,o.Z)((0,c.Z)({},t),{form:"b\xe1n",imageUrl:f,bookList:S,userId:null===n||void 0===n?void 0:n.id});H.creatPost(r).then((function(n){n&&(F.Z.success({message:"T\u1ea1o b\xe0i post th\xe0nh c\xf4ng!"}),e.push("/"))}))}(t)},initialValues:O,onValuesChange:function(e){K((0,c.Z)({},O,e))},autoComplete:"off",colon:!1,id:"form-self",children:[(0,r.jsx)(m.Z.Item,{label:"Danh m\u1ee5c s\xe1ch",name:"categoryId",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(C.Z,{allowClear:!0,fieldNames:{label:"name",value:"id"},onChange:function(e){N(e)},options:j,placeholder:"Ch\u1ecdn danh m\u1ee5c s\xe1ch"})}),(0,r.jsx)(m.Z.Item,{label:"Th\u1ec3 lo\u1ea1i s\xe1ch",required:!0,name:"subCategoryId",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(C.Z,{allowClear:!0,fieldNames:{label:"name",value:"id"},options:w,placeholder:"Ch\u1ecdn th\u1ec3 lo\u1ea1i s\xe1ch"})}),(0,r.jsx)(m.Z.Item,{label:"Ti\xeau \u0111\u1ec1 b\xe0i \u0111\u0103ng",required:!0,name:"title",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp ti\xeau \u0111\u1ec1"})}),(0,r.jsx)(m.Z.Item,{label:"\u1ea2nh b\xe0i \u0111\u0103ng",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"imageUrl",children:(0,r.jsx)(_.Z,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(){return!1},onChange:function(e){return U(e)},children:f?(0,r.jsx)("img",{src:f,alt:"avatar",style:{width:"100%"}}):z})}),(0,r.jsx)(m.Z.Item,{label:"Gi\xe1 g\u1ed1c",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"initPrice",children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp gi\xe1 g\u1ed1c"})}),(0,r.jsx)(m.Z.Item,{label:"Gi\xe1 b\xe1n",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"price",children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp gi\xe1 b\xe1n"})}),(0,r.jsx)(m.Z.Item,{label:"\u0110\u1ecba ch\u1ec9",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"location",children:(0,r.jsx)(p.Z,{placeholder:"S\u1ed1 nh\xe0 - t\xean \u0111\u01b0\u1eddng - ph\u01b0\u1eddng/x\xe3 - qu\u1eadn/huy\u1ec7n - t\u1ec9nh/TP"})})]}),S.length>0&&(0,r.jsx)("div",{className:"home-list-book",children:S.map((function(e,n){return(0,r.jsxs)("div",{className:"item-book",children:[(0,r.jsx)("div",{className:"icon-delete",children:(0,r.jsx)(A.Z,{onClick:function(){return function(e){var n=S.filter((function(n){return n.key!==e.key}));T(n)}(e)}})}),(0,r.jsx)(L.Z,{preview:!1,width:160,height:160,src:null===e||void 0===e?void 0:e.bookImages[0]}),(0,r.jsx)("div",{className:"text-title",children:null===e||void 0===e?void 0:e.name}),(0,r.jsxs)("div",{className:"author",children:["T\xe1c gi\u1ea3:",null===e||void 0===e?void 0:e.author," - (",null===e||void 0===e?void 0:e.statusQuo,")"]}),(0,r.jsx)("div",{className:"row-end",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)($,{}),(0,r.jsx)("div",{className:"text-align-center",children:null===e||void 0===e?void 0:e.isbn})]}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,r.jsx)("div",{className:"text-align-center",children:null===e||void 0===e?void 0:e.publicationDate})})]})})]},n)}))})]}):(0,r.jsx)(M,{setListBook:T,setKeyPage:l,handleReset:R})})}function te(){var e=(0,ee.useRouter)(),n=(0,J.v9)((function(e){return e.user})),t=(0,i.useState)("view"),a=t[0],l=t[1],d=(0,i.useState)(),f=d[0],g=d[1],v=(0,i.useState)(!1),x=v[0],y=(v[1],(0,i.useState)([])),j=y[0],b=y[1],Z=(0,i.useState)(),k=Z[0],N=Z[1],q=(0,i.useState)(),w=q[0],I=q[1],V=(0,i.useState)([]),S=V[0],T=V[1],P=(0,i.useState)(),O=P[0],K=P[1],R=function(){l("view")},U=function(){var e=(0,s.Z)((function(e){var n;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,B.C)(e.file)];case 1:return n=t.sent(),g(n),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),z=(0,r.jsxs)("div",{children:[x?(0,r.jsx)(E.Z,{}):(0,r.jsx)(D.Z,{}),(0,r.jsx)("div",{style:{marginTop:8},children:"T\u1ea3i \u1ea3nh l\xean"})]});return(0,i.useEffect)((function(){X.Z.getCategoryDetail().then((function(e){b(e)}))}),[]),(0,i.useEffect)((function(){k&&X.Z.getSubcategoryDeatail(k).then((function(e){I(e)}))}),[k]),(0,r.jsx)("div",{className:"post-to-self-container",children:"view"===a?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{marginBottom:20,display:"flex",justifyContent:"flex-end"},children:[(0,r.jsx)(h.Z,{onClick:R,style:{marginRight:"5px"},htmlType:"submit",form:"form-trade",type:"primary",disabled:0===S.length,children:"\u0110\u0103ng b\xe0i"}),(0,r.jsx)(h.Z,{onClick:function(){l("post")},style:{marginRight:"5px"},type:"primary",children:"Th\xeam s\xe1ch"})]}),(0,r.jsxs)(m.Z,{name:"basic",labelAlign:"left",labelCol:{span:7},wrapperCol:{span:17},onFinish:function(t){!function(t){var r=(0,o.Z)((0,c.Z)({},t),{form:"trao \u0111\u1ed5i",imageUrl:f,bookList:S,userId:null===n||void 0===n?void 0:n.id});H.creatPost(r).then((function(n){n&&(F.Z.success({message:"T\u1ea1o b\xe0i post th\xe0nh c\xf4ng!"}),e.push("/"))}))}(t)},initialValues:O,onValuesChange:function(e){K((0,c.Z)({},O,e))},autoComplete:"off",colon:!1,id:"form-trade",children:[(0,r.jsx)(m.Z.Item,{label:"Danh m\u1ee5c s\xe1ch",name:"categoryId",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(C.Z,{allowClear:!0,fieldNames:{label:"name",value:"id"},onChange:function(e){N(e)},options:j,placeholder:"Ch\u1ecdn danh m\u1ee5c s\xe1ch"})}),(0,r.jsx)(m.Z.Item,{label:"Th\u1ec3 lo\u1ea1i s\xe1ch",required:!0,name:"subCategoryId",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(C.Z,{allowClear:!0,fieldNames:{label:"name",value:"id"},options:w,placeholder:"Ch\u1ecdn th\u1ec3 lo\u1ea1i s\xe1ch"})}),(0,r.jsx)(m.Z.Item,{label:"Ti\xeau \u0111\u1ec1 b\xe0i \u0111\u0103ng",required:!0,name:"title",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp ti\xeau \u0111\u1ec1"})}),(0,r.jsx)(m.Z.Item,{label:"\u1ea2nh b\xe0i \u0111\u0103ng",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"imageUrl",children:(0,r.jsx)(_.Z,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(){return!1},onChange:function(e){return U(e)},children:f?(0,r.jsx)("img",{src:f,alt:"avatar",style:{width:"100%"}}):z})}),(0,r.jsx)(m.Z.Item,{label:"Gi\xe1 g\u1ed1c",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"initPrice",children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp gi\xe1 g\u1ed1c"})}),(0,r.jsx)(m.Z.Item,{label:"T\xean s\xe1ch mu\u1ed1n trao \u0111\u1ed5i",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"bookExchange",children:(0,r.jsx)(p.Z,{placeholder:"Nh\u1eadp gi\xe1 b\xe1n"})}),(0,r.jsx)(m.Z.Item,{label:"\u0110\u1ecba ch\u1ec9",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}],name:"location",children:(0,r.jsx)(p.Z,{placeholder:"S\u1ed1 nh\xe0 - t\xean \u0111\u01b0\u1eddng - ph\u01b0\u1eddng/x\xe3 - qu\u1eadn/huy\u1ec7n - t\u1ec9nh/TP"})})]}),S.length>0&&(0,r.jsx)("div",{className:"home-list-book",children:S.map((function(e,n){return(0,r.jsxs)("div",{className:"item-book",children:[(0,r.jsx)("div",{className:"icon-delete",children:(0,r.jsx)(A.Z,{onClick:function(){return function(e){var n=S.filter((function(n){return n.key!==e.key}));T(n)}(e)}})}),(0,r.jsx)(L.Z,{preview:!1,width:160,height:160,src:null===e||void 0===e?void 0:e.bookImages[0]}),(0,r.jsx)("div",{className:"text-title",children:null===e||void 0===e?void 0:e.name}),(0,r.jsxs)("div",{className:"author",children:["T\xe1c gi\u1ea3:",null===e||void 0===e?void 0:e.author," - (",null===e||void 0===e?void 0:e.statusQuo,")"]}),(0,r.jsx)("div",{className:"row-end",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)($,{}),(0,r.jsx)("div",{className:"text-align-center",children:null===e||void 0===e?void 0:e.isbn})]}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,r.jsx)("div",{className:"text-align-center",children:null===e||void 0===e?void 0:e.publicationDate})})]})})]},n)}))})]}):(0,r.jsx)(M,{setListBook:T,setKeyPage:l,handleReset:R})})}function re(){var e=[{key:"1",label:"\u0110\u0103ng b\xe1n",children:(0,r.jsx)(ne,{})},{key:"2",label:"Trao \u0111\u1ed5i",children:(0,r.jsx)(te,{})}];return(0,r.jsxs)("div",{className:"self-book-container",children:[(0,r.jsx)(a.Z,{}),(0,r.jsxs)("div",{className:"self-book",children:[(0,r.jsx)("div",{className:"title-text",children:(0,r.jsx)("p",{style:{fontSize:20,fontWeight:"500"},children:"Chi ti\u1ebft s\xe1ch"})}),(0,r.jsx)(l.Z,{defaultActiveKey:"1",items:e,onChange:function(e){}})]})]})}},5363:function(e,n,t){"use strict";t.d(n,{C:function(){return c}});var r=t(47568),i=t(70655),a=t(86650),l=t(74444),s=(0,a.cF)();function c(e){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)((function(e){var n;return(0,i.__generator)(this,(function(t){return n=(0,a.iH)(s,"".concat(e.name+(0,l.k$)())),[2,(0,a.KV)(n,e).then((0,r.Z)((function(){return(0,i.__generator)(this,(function(e){return[2,(0,a.Jt)(n)]}))})))]}))}))).apply(this,arguments)}},30150:function(){},11954:function(){},50132:function(e,n,t){"use strict";var r=t(87462),i=t(4942),a=t(91),l=t(1413),s=t(15671),c=t(43144),o=t(60136),u=t(73568),d=t(67294),h=t(94184),m=t.n(h),p=function(e){(0,o.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;(0,s.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,i=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),i&&i({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var i="checked"in e?e.checked:e.defaultChecked;return r.state={checked:i},r}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,s=n.style,c=n.name,o=n.id,u=n.type,h=n.disabled,p=n.readOnly,f=n.tabIndex,g=n.onClick,v=n.onFocus,x=n.onBlur,y=n.onKeyDown,j=n.onKeyPress,b=n.onKeyUp,Z=n.autoFocus,C=n.value,k=n.required,N=(0,a.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),q=Object.keys(N).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=N[n]),e}),{}),w=this.state.checked,I=m()(t,l,(e={},(0,i.Z)(e,"".concat(t,"-checked"),w),(0,i.Z)(e,"".concat(t,"-disabled"),h),e));return d.createElement("span",{className:I,style:s},d.createElement("input",(0,r.Z)({name:c,id:o,type:u,required:k,readOnly:p,disabled:h,tabIndex:f,className:"".concat(t,"-input"),checked:!!w,onClick:g,onFocus:v,onBlur:x,onKeyUp:b,onKeyDown:y,onKeyPress:j,onChange:this.handleChange,autoFocus:Z,ref:this.saveInput,value:C},q)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=p},29815:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(20943);var i=t(13375);var a=t(91566);function l(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,i.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[629,178,774,888,179],(function(){return n=60105,e(e.s=n);var n}));var n=e.O();_N_E=n}]);