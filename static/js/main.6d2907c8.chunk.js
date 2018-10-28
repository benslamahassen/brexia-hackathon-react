(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(e,t,a){e.exports=a(620)},232:function(e,t,a){},236:function(e,t,a){},539:function(e,t,a){},541:function(e,t,a){},545:function(e,t,a){},585:function(e,t,a){},610:function(e,t,a){},620:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(54),o=a.n(l),c=(a(232),a(55)),s=a(56),i=a(58),u=a(57),m=a(59),d=a(71),p=a(223),f=a.n(p),h=a(77),v=a.n(h),E=a(38),O=a.n(E),b=(a(236),a(48)),C=a(218),g=a(219),N=function(e,t,a){var n=t.name,r=t.color,l=void 0===r?"darkgrey":r,o=t.posX,c=void 0===o?50:o,s=t.posY,i=void 0===s?50:s,u=t.output,m=void 0!==u&&u,p=t.extras,f=void 0===p?{}:p,h=new d.DefaultNodeModel(n,l);h.setPosition(c,i),h.addInPort("Out"),h.extras=f,m&&h.addOutPort("In"),m&&h.addListener({selectionChanged:a}),e.addNode(h)},k=function(e){return 0===Object.keys(e).length?[]:Object.keys(e.getOutPorts()[0].links).map(function(t){return e.getOutPorts()[0].links[t].sourcePort.parent})},y=function(e){if(!e)return[];if("file"===e.extras.nodeType)return e.extras.columns;var t=e.extras.outColumn;return t||[]},w=function(e){var t=new g.Map;Object.keys(e.nodes).forEach(function(a){return t.set(a,e.nodes[a])});var a=new C.TopologicalSort(t);Object.keys(e.links).forEach(function(t){var n=e.links[t],r=n.sourcePort.parent.id,l=n.targetPort.parent.id;a.addEdge(r,l)});var n=a.sort(),r=Object(b.a)(n.entries()),l=[],o=!0,c=!1,s=void 0;try{for(var i,u=r[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var m=i.value[1].node.extras;m.transformation&&("Select"===m.transformation&&l.push({transformation:m.transformation,query:m.query,type:"csv"}),"Combine"===m.transformation&&l.push({transformation:m.transformation,joinColumnTuples:m.tuples}))}}catch(d){c=!0,s=d}finally{try{o||null==u.return||u.return()}finally{if(c)throw s}}console.log("%cLook here !","color: red"),console.log("%cOrdered transformation instructions queries after traversing graph, to be execueted with Spark","color: red"),console.log(l)};var x=function(e){var t=e.model,a=e.toggleViewMode;return r.a.createElement("div",null,r.a.createElement(v.a,{className:"navbar",position:"static"},r.a.createElement(O.a,{color:"inherit",onClick:function(){return w(t)}},"Run"),r.a.createElement(O.a,{color:"inherit",onClick:a},"Preview")))},S=a(78),j=a.n(S),M=a(225),I=a(113),T=a(117),D=a(226);a(539);var K=function(e){var t=e.model,a=e.files,n=e.addFile,l=e.refreshRenderKey,o=e.updateSeletction,c=function(e,t){return Math.floor(Math.random()*(e-t))+t},s=function(e,a){N(t,{name:e,color:a,posX:c(600,100),posY:c(600,100),output:!0,extras:{nodeType:"transformation",transType:e}},o),l()};return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"title"},"Transformations"),r.a.createElement("div",{className:"elements-column"},r.a.createElement("button",{onClick:function(){return s("Select","red")},className:"element"},"Select"),r.a.createElement("button",{onClick:function(){return s("Combine","green")},className:"element"},"Combine"),r.a.createElement("button",{onClick:function(){return s("GroupBy","orange")},className:"element"},"GroupBy"))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"title"},"Datasets"),r.a.createElement("div",{className:"elements-grid"},function(e){return e.map(function(e,a){var n="csv"===e.extension?"https://png.icons8.com/wired/50/000000/csv.png":"https://png.icons8.com/wired/50/000000/ms-excel.png";return r.a.createElement("button",{key:a,className:"element"},r.a.createElement("img",{onClick:function(a){return function(e,a){e.stopPropagation(),N(t,{name:a.name,color:"blue",posX:c(900,600),posY:c(600,100),output:!1,extras:{extension:a.extension,nodeType:"file",columns:a.columns}},o),l()}(a,e)},className:"icon",src:n,alt:e.name}),r.a.createElement("div",{className:"element-title"},e.name))})}(a)),r.a.createElement("div",{className:"dropzone-container"},r.a.createElement(D.a,{onDrop:n,onFileDialogCancel:function(){}},"Drag files here"))))};a(541);a(543);var P=function(e){var t=e.engine;return r.a.createElement("div",{className:"flowchart"},r.a.createElement(d.DiagramWidget,{diagramEngine:t}))},H=a(115),B=a.n(H),A=a(114),F=a.n(A),R=a(116),G=a.n(R),V=a(13),q=a.n(V),L=(a(545),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchKeyword:"",input:"",operations:[],checkedColumns:{}},a.filteredColumns=function(e,t){return e?t?e.filter(function(e){return e.includes(t)}):e:[]},a.addOperation=function(e){e.persist();var t="add"===e.target.innerText?a.state.input:e.target.innerText;a.setState(function(e){return{operations:Object(b.a)(e.operations).concat([t]),input:""}})},a.removeOperation=function(e,t){var n=a.state.operations;n.splice(t,1),a.setState({operations:n})},a.saveHandler=function(){var e=a.props,t=e.modalData,n=e.toggleModal,r=e.model,l=a.state,o=l.operations,c=l.checkedColumns,s=Object.keys(c).filter(function(e){return e.includes(t.id)}).map(function(e){return e.slice(e.indexOf("*")+1)}),i="SELECT ".concat(s.join(", ")," FROM ").concat(t.firstSourceName.split(".")[0]," ").concat(o.join(" "));r.nodes[t.id].extras={outColumn:s,transformation:"Select",query:i},n()},a.handleCheckbox=function(e,t){var n=a.state.checkedColumns;n[t+"*"+e.target.name]=e.target.checked,a.setState({checkedColumns:n})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,n=t.toggleModal,l=t.modalData,o=this.state,c=o.searchKeyword,s=o.operations,i=o.checkedColumns;return r.a.createElement("div",null,r.a.createElement(F.a,{className:"select-modal",fullScreen:!0,open:a},r.a.createElement(v.a,null,r.a.createElement(B.a,null,r.a.createElement(O.a,{color:"inherit",onClick:n,label:"Close"},"Close"),r.a.createElement(O.a,{color:"inherit",onClick:this.saveHandler},"save"))),r.a.createElement(G.a,{className:"select-diaglog"},r.a.createElement("div",{className:"select-modal-content"},r.a.createElement("div",{className:"columns"},r.a.createElement("input",{type:"text",className:"input-select",onChange:function(t){return t.persist()||e.setState({searchKeyword:t.target.value})}}),this.filteredColumns(l.columns,c).map(function(t,a){return r.a.createElement("span",{key:a},r.a.createElement("input",{checked:i[l.id+"*"+t],name:t,type:"checkbox",onChange:function(t){return e.handleCheckbox(t,l.id)}})," "+t)})),r.a.createElement("div",{className:"input"},r.a.createElement("div",null,r.a.createElement("div",{className:"row"},s.map(function(t,a){return r.a.createElement(q.a,{onClick:function(t){return e.removeOperation(t,a)},key:a,className:"column",label:t})})))),r.a.createElement("div",{className:"operations"},r.a.createElement("div",{className:"row"},r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"AND"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"OR"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"NOT"})),r.a.createElement("div",{className:"row"},r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"LIKE"}),r.a.createElement("span",{onClick:this.addOperation,className:"column"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"WHERE"})),r.a.createElement("div",{className:"row"},r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"="}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:">"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"<"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"<>"})),r.a.createElement("div",{className:"row"},r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:">="}),r.a.createElement("span",{className:"column"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"<="})),r.a.createElement("div",{className:"row"},r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"AVG"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"MIN"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"MAX"})),r.a.createElement("div",{className:"row"},r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"("}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"+"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"-"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"*"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:"/"}),r.a.createElement(q.a,{onClick:this.addOperation,className:"column",label:")"})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{onChange:function(t){return t.persist()||e.setState({input:t.target.value})},type:"text",className:"column input-select"}),r.a.createElement(q.a,{onClick:this.addOperation,label:"add"})))))))}}]),t}(n.Component)),W=a(85),X=a(154),U=a.n(X),Y=a(156),J=a.n(Y),z=a(87),$=a.n(z),Q=a(155),Z=a.n(Q),_=a(86),ee=a.n(_),te=(a(585),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchKeywordOne:"",searchKeywordTwo:"",inputOne:[],inputTwo:[]},a.filteredColumns=function(e,t){return e?t?e.filter(function(e){return e.includes(t)}):e:[]},a.removeInput=function(e,t){var n=a.state["input".concat(e)];n.splice(t,1),a.setState(Object(W.a)({},"input".concat(e),n))},a.saveHandler=function(){var e=a.props,t=e.modalData,n=e.toggleModal,r=e.model,l=a.state,o=l.inputOne,c=l.inputTwo,s=(o.length>=c.length?o:c).map(function(e,t){return[o[t],c[t]]}),i=Object(b.a)(new Set(t.columns.concat(t.secondColumns)));r.nodes[t.id].extras={outColumn:i,transformation:"Combine",tuples:s},n()},a.addInput=function(e,t){a.setState(function(a){return Object(W.a)({},"input".concat(e),Object(b.a)(a["input".concat(e)]).concat([t]))})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,n=t.toggleModal,l=t.modalData,o=this.state,c=o.searchKeywordOne,s=o.searchKeywordTwo,i=o.inputOne,u=o.inputTwo;return r.a.createElement("div",null,r.a.createElement(F.a,{className:"select-modal",fullScreen:!0,open:a},r.a.createElement(v.a,null,r.a.createElement(B.a,null,r.a.createElement(O.a,{color:"inherit",onClick:n,label:"Close"},"Close"),r.a.createElement(O.a,{color:"inherit",onClick:this.saveHandler},"save"))),r.a.createElement(G.a,{className:"select-diaglog"},r.a.createElement("div",{className:"select-modal-content"},r.a.createElement("div",{className:"columns"},r.a.createElement("input",{type:"text",className:"input-select",onChange:function(t){return t.persist()||e.setState({searchKeywordOne:t.target.value})}}),this.filteredColumns(l.columns,c).map(function(t,a){return r.a.createElement("div",{key:a,onClick:function(a){return e.addInput("One",t)}},t)})),r.a.createElement("div",{className:"input"},r.a.createElement(U.a,null,r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,r.a.createElement($.a,null,"INPUT 1"))),r.a.createElement(J.a,null,i.map(function(t,a){return r.a.createElement(ee.a,{key:a,onClick:function(){return e.removeInput("One",a)}},r.a.createElement($.a,null,t))}))),r.a.createElement(U.a,null,r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,r.a.createElement($.a,null,"INPUT 2"))),r.a.createElement(J.a,null,u.map(function(t,a){return r.a.createElement(ee.a,{key:a,onClick:function(){return e.removeInput("Two",a)}},r.a.createElement($.a,null,t))})))),r.a.createElement("div",{className:"columns"},r.a.createElement("input",{type:"text",className:"input-select",onChange:function(t){return t.persist()||e.setState({searchKeywordTwo:t.target.value})}}),this.filteredColumns(l.secondColumns,s).map(function(t,a){return r.a.createElement("div",{key:a,onClick:function(a){return e.addInput("Two",t)}},t)}))))))}}]),t}(n.Component)),ae=a(222),ne=a.n(ae),re=function(){var e=Object(I.a)(j.a.mark(function e(t,a){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.a.get("http://192.168.1.164:9012/cols/"+t+"/"+a);case 3:return n=e.sent,e.abrupt("return",n.data.cols);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),le=(a(610),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nodeIsSelected:!1,files:[{name:"testFile.csv",extension:"csv",columns:["Column1","Column2","Column3","Column4","Column5","Column6","Column"]},{name:"TestFile.xlsx",extension:"xlsx",columns:["ColumnA","ColumnB","ColumnC","ColumnD","ColumnE"]}],selectModalIsOpen:!1,combineModalIsOpen:!1,groupByModalIsOpen:!1,modalData:{},instructions:[]},a.updateSeletction=function(e){return a.setState({nodeIsSelected:e.isSelected&&["Select","Combine","GroupBy"].includes(e.entity.name)?e.entity:null})},a.refreshRenderKey=function(){return a.forceUpdate()},a.editNodeHandler=function(){var e=a.state.nodeIsSelected,t=k(e)[0],n=t?"file"===t.extras.nodeType?t.name:t.id:{},r=y(t);switch(e.name){case"Select":a.setState(function(t){return{selectModalIsOpen:!t.selectModalIsOpen,modalData:Object(T.a)({},e,{columns:r,firstSourceName:n})}});break;case"Combine":var l=k(e)[1],o=l?"file"===l.extras.nodeType?l.name:l.id:{},c=y(l);a.setState(function(t){return{combineModalIsOpen:!t.combineModalIsOpen,modalData:Object(T.a)({},e,{columns:r,secondColumns:c,firstSourceName:n,secondSourceName:o})}});break;case"GroupBy":a.setState(function(t){return{groupByModalIsOpen:!t.groupByModalIsOpen,modalData:Object(T.a)({},e,{columns:["dsfsdf","dsfsdf","dsfsdf","dsfsdf","dsfsdf"],firstSourceName:n})}})}},a.addFile=function(){var e=Object(I.a)(j.a.mark(function e(t){var n,r,l,o,c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(M.a)(t,1),"text/csv"===(r=n[0]).type||!r.type.split(".")[1]||r.type.split(".")[1].includes("xls")){e.next=3;break}return e.abrupt("return");case 3:return l="text/csv"===r.type?"csv":"xlsx",e.next=6,re(r.name.split(".")[0],l);case 6:(o=e.sent).length>0&&(c={name:r.name,extension:l,columns:o},a.setState(function(e){return{files:Object(b.a)(e.files).concat([c])}}));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.nodeIsSelected,a=e.files,n=e.renderKey,l=e.selectModalIsOpen,o=e.combineModalIsOpen,c=e.modalData,s=this.props,i=s.model,u=s.engine,m={model:i,addFile:this.addFile,files:a,refreshRenderKey:this.refreshRenderKey,updateSeletction:this.updateSeletction},d={isOpen:l,toggleModal:this.editNodeHandler,modalData:c,model:i},p={isOpen:o,toggleModal:this.editNodeHandler,modalData:c,model:i};return r.a.createElement("div",{className:"editor"},r.a.createElement(P,{key:n,engine:u}),r.a.createElement(K,m),t&&r.a.createElement(O.a,{onClick:this.editNodeHandler,className:"edit-element"},"Edit element"),r.a.createElement(L,d),r.a.createElement(te,p))}}]),t}(n.Component)),oe=a(224);a(612);var ce=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement(oe.a,{data:t,columns:[{id:"name",Header:"Name",accessor:function(e){return e.email}},{id:"email",Header:"Email",accessor:function(e){return e.email}}]}))},se=new d.DiagramEngine;se.installDefaultFactories();var ie=new d.DiagramModel;se.setDiagramModel(ie);var ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={previewMode:!1},a.toggleViewMode=function(){return a.setState(function(e){return{previewMode:!e.previewMode}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.previewMode;return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(x,{model:ie,toggleViewMode:this.toggleViewMode}),e?r.a.createElement(ce,null):r.a.createElement(le,{model:ie,engine:se})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[227,2,1]]]);
//# sourceMappingURL=main.6d2907c8.chunk.js.map