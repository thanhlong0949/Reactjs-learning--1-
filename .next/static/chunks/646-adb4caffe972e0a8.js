(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{87881:function(e,n,t){"use strict";t.d(n,{A:function(){return o}});var i=t(85893),l=(t(67294),t(58492));function o(e){var n=e.listBreakcrum;return(0,i.jsx)("div",{children:(0,i.jsx)(l.Z,{children:n.map((function(e,n){return(0,i.jsx)(l.Z.Item,{children:e},n)}))})})}},90048:function(e,n,t){"use strict";var i=t(85893),l=(t(67294),t(26994),t(24016)),o=t(98542),s=t(84908),r=t(45239),a=t(34041),c=t(33461);n.Z=function(e){var n,t=e.listSearchText,u=e.listSelectOption,d=e.listDatePicker,h=e.listCascader,f=l.Z.Search,p=o.Z.RangePicker;return(0,i.jsxs)("div",{className:"group-filter-global",children:[t&&t.map((function(e,t){return(0,i.jsx)(s.Z,{title:e.tooltip,children:(0,i.jsx)(f,{placeholder:null!==(n=e.placeHolder)&&void 0!==n?n:"T\xecm ki\u1ebfm...",allowClear:!0,onSearch:e.onSearch,style:{width:e.width?e.width:200},className:"search-text",enterButton:!0,maxLength:e.maxLength})},t)})),h&&h.map((function(e,n){return(0,i.jsx)(r.Z,{options:e.optionGroup,onChange:e.onChangeCascader,placeholder:e.placeHolder,className:"slect-option"},n)})),u&&u.map((function(e,n){return(0,i.jsx)(s.Z,{title:e.tooltip,children:(0,i.jsxs)("div",{style:{marginRight:10},children:[(0,i.jsxs)("span",{style:{marginRight:3},children:[e.title,": "]}),(0,i.jsx)(a.Z,{mode:e.mode,value:e.value,placeholder:e.placeholder,defaultValue:e.defaultValue,style:{width:e.width?e.width:200},onChange:e.handleChange,options:e.optionSelect,className:"slect-option",loading:e.loading})]})},n)})),d&&d.map((function(e,n){return(0,i.jsx)(s.Z,{title:e.tooltip,children:(0,i.jsxs)("div",{style:{marginLeft:10},children:[(0,i.jsxs)("span",{style:{marginRight:3},children:[e.title,": "]}),(0,i.jsx)(p,{onChange:function(n){var t=0,i=0;n&&n.length>0&&(t=(0,c.rJ)(n[0]),i=(0,c.rJ)(n[1],!0)),e.onChange(t,i)},style:{width:e.width?e.width:250},className:"date-picker",format:"DD-MM-YYYY"})]})},n)}))]})}},4646:function(e,n,t){"use strict";t.d(n,{j:function(){return b}});var i=t(41799),l=t(69396),o=t(85893),s=(t(25001),t(71577)),r=t(69518),a=t(3698),c=t(67294),u=t(11163),d=t(80993),h=t(87881),f=t(96231),p=t(9473),g=t(90048),m=t(79759),v=t(88767),x=t(43210),y=t(33461),j=t(96486),k=t(20061),C=t(83977),Z={apiKey:"AIzaSyDuy-Rh6czNs1Jm4LGfFUAdHvB-AIncyng",authDomain:"storage-4255a.firebaseapp.com",projectId:"storage-4255a",storageBucket:"storage-4255a.appspot.com",messagingSenderId:"76967828674",appId:"1:76967828674:web:8949168713af2353262f5b",measurementId:"G-C4CVCPRJQ8"};function b(){var e=(0,u.useRouter)(),n=(0,p.v9)((function(e){return e.category})),t=(0,c.useState)([]),b=t[0],w=t[1],N=(0,c.useState)([]),S=N[0],I=N[1],T=(0,c.useState)(20),B=T[0],L=T[1],A=(0,c.useState)(1),K=A[0],q=A[1],R=(0,c.useState)(["Trang ch\u1ee7","T\u1ea5t c\u1ea3 s\xe1ch"]),D=R[0],G=R[1],P=(0,c.useContext)(x.Z).searchHomeListBook,Y=(0,c.useState)({sortBy:"null",filter:"null",keyWord:"null"}),_=Y[0],z=Y[1],E=(0,c.useState)(0),V=E[0],F=E[1],H=[{value:"null",label:"T\u1ea5t c\u1ea3"}],J=(0,k.KL)((0,C.ZF)(Z));(0,c.useEffect)((function(){(0,k.LP)(J,{vapidKey:"BIYxNzI3XKaLdK5VLm9H65f2_bnUoqGKluFT8efWn7tN4XYunCAgUexKAdWx0wKhVQ7LD4Zm-DLF8RNK0K4Alh8"}).then((function(e){e?(console.log("current token for client: ",e),localStorage.setItem("FCMToken",e)):console.log("No registration token available. Request permission to generate one.")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))}),[]),(0,c.useEffect)((function(){new Promise((function(e){(0,k.ps)(J,(function(n){e(n)}))})).then((function(e){console.log(e)})).catch((function(e){return console.log("failed: ",e)}))}),[]);var W=[{title:"S\u0103\u0301p x\xea\u0301p theo",placeholder:"Gi\xe1",width:120,value:"null"===_.sortBy?"":_.sortBy,handleChange:function(e){z((0,l.Z)((0,i.Z)({},_),{sortBy:e}))},optionSelect:[{value:"T\u0103ng d\u1ea7n",label:"T\u0103ng d\u1ea7n"},{value:"Gi\u1ea3m d\u1ea7n",label:"Gi\u1ea3m d\u1ea7n"}]},{title:"Th\xe0nh ph\u1ed1",placeholder:"Ch\u1ecdn th\xe0nh ph\u1ed1",width:120,value:"null"===_.filter?"":_.filter,handleChange:function(e){z((0,l.Z)((0,i.Z)({},_),{filter:e}))},optionSelect:null!==H&&void 0!==H?H:[]}],U=(0,v.useQuery)("GET_DATA_CITY",(function(){return f.Z.getAllCity()}));return(null===U||void 0===U?void 0:U.data)&&U.data.map((function(e){return H.push({value:e,label:e})})),(0,c.useEffect)((function(){e.query.search?f.Z.searchPost(e.query.search).then((function(e){I(null===e||void 0===e?void 0:e.slice(0,B)),w(e),G(["Trang ch\u1ee7","T\xecm ki\u1ebfm"])})):e.query.kind?f.Z.getKindBook({subcategoryId:e.query.type,sortBy:"null",filter:"null"}).then((function(t){w(t),I(null===t||void 0===t?void 0:t.slice(0,B)),function(){var t,i=[""],l=n.find((function(n){return n.id===e.query.kind}));l&&(i.push(l.name),(null===l||void 0===l?void 0:l.subcategoryList)&&i.push(null===(t=l.subcategoryList.find((function(n){return n.id===e.query.type})))||void 0===t?void 0:t.name)),G(i)}(),G((0,j.concat)(["Trang ch\u1ee7","T\u1ea5t c\u1ea3 s\xe1ch"],n))})):"/"===window.history.state.as&&(f.Z.getAllPost({keyWord:P,sortBy:_.sortBy,filter:_.filter}).then((function(e){I(null===e||void 0===e?void 0:e.slice(0,B)),w(e),F(e.length)})),G(["Trang ch\u1ee7","T\u1ea5t c\u1ea3 s\xe1ch"]))}),[e.query,_,P]),(0,o.jsxs)("div",{className:"home-container",children:[(0,o.jsx)(h.A,{listBreakcrum:D}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingRight:"10%"},children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(g.Z,{listSelectOption:W}),(0,o.jsx)(s.Z,{onClick:function(){z({keyWord:"null",sortBy:"null",filter:"null"}),I([]),f.Z.getAllPost(_).then((function(e){I(null===e||void 0===e?void 0:e.slice(0,B)),w(e)}))},children:"\u0110\u1eb7t l\u1ea1i"})]}),(0,o.jsxs)("span",{style:{marginLeft:5},children:["K\u1ebft qu\u1ea3: ",V]})]}),(0,o.jsx)("div",{className:"home-list-book",children:S.isLoading?(0,o.jsx)(m.Y,{}):S.map((function(n,t){return(0,o.jsxs)("div",{className:"item-book",children:[(0,o.jsx)(r.Z,{preview:!1,width:160,height:160,src:n.imageUrl}),(0,o.jsx)("div",{className:"text-title",children:n.title}),(0,o.jsxs)("div",{className:"row-end",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,o.jsx)("div",{className:"text-align-center",children:n.price?"".concat((0,y.n5)(n.price)," VN\u0110"):"Ch\u01b0a c\xf3 gi\xe1"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(d.JO,{icon:"location",size:18}),(0,o.jsx)("span",{style:{fontSize:"12px"},children:n.location})]})]}),(0,o.jsx)("div",{children:(0,o.jsx)(s.Z,{style:{borderColor:"B\xe1n"===n.form?"red":"blue",color:"B\xe1n"===n.form?"red":"blue"},onClick:function(){return function(n){e.push({pathname:"/detail_book",query:{key:n.form,postId:n.id,bookId:n.bookList[0].bookId,userId:n.userId}})}(n)},children:"b\xe1n"===n.form.toLowerCase()?"B\xe1n":"Trao \u0111\u1ed5i"})})]}),(0,o.jsxs)("div",{className:"author",children:[(0,o.jsx)("span",{children:"Ng\u01b0\u1eddi \u0111\u0103ng:"}),n.userName]})]},t)}))}),b.length>0&&(0,o.jsx)("div",{className:"pagination-home",children:(0,o.jsx)(a.Z,{responsive:!0,current:K,total:b.length,pageSize:B,onChange:function(e,n){!function(e,n){e===K&&n===B||(L(n),q(e),I(b.slice((e-1)*n,e*n)))}(e,n)}})})]})}},26994:function(){},25001:function(){}}]);