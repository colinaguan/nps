(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(e,a,t){e.exports=t.p+"static/media/logo.5bc5eafd.png"},,,function(e,a,t){},,,,,function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e){e.exports={}},function(e,a,t){},function(e){e.exports={}},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(24),r=t.n(s),c=(t(32),t(5)),o=t(6),i=t(8),m=t(7),d=t(10),u=t(9),p=t(11),h=t(12),E=t(15),f=(t(22),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={checkDes:{}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onCheckChange",value:function(e){var a=e.target.checked,t=e.target.value;console.log(t+" "+a);var l=Object.assign({},this.state.checkDes,Object(E.a)({},t,a));console.log(l),this.setState({checkDes:l})}},{key:"onClear",value:function(){console.log("Clearing"),document.getElementById("filter-form").reset(),this.setState({checkDes:{}}),this.props.onDesigChange([])}},{key:"onFormSubmit",value:function(){console.log("Form submitted"),console.log(this.state.checkDes);var e=[];for(var a in this.state.checkDes)!0===this.state.checkDes[a]&&e.push(a);this.props.onDesigChange(e)}},{key:"render",value:function(){var e,a=this,t=this.props.desigs;return t.sort(),e=t.map(function(e){return n.a.createElement("div",{class:"form-check"},n.a.createElement("input",{class:"form-check-input",type:"checkbox",value:e,onChange:a.onCheckChange.bind(a),id:"defaultCheck1"}),n.a.createElement("label",{class:"form-check-label",for:"defaultCheck1"},e))}),n.a.createElement("div",{className:"col col-filter"},n.a.createElement("button",{type:"button",className:"btn btn-lg btn-outline-success","data-toggle":"modal","data-target":"#desModal"},"Filter by Designation"),n.a.createElement("div",{class:"modal fade",id:"desModal",tabindex:"-1",role:"dialog","aria-labelledby":"desModalLabel","aria-hidden":"true"},n.a.createElement("div",{class:"modal-dialog",role:"document"},n.a.createElement("div",{class:"modal-content"},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Filter by Designation"),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{class:"modal-body"},n.a.createElement("form",{id:"filter-form"},e)),n.a.createElement("div",{class:"modal-footer"},n.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:this.onClear.bind(this)},"Clear"),n.a.createElement("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal",onClick:this.onFormSubmit.bind(this)},"Filter"))))))}}]),a}(l.Component)),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={checkS:{}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onCheckChange",value:function(e){var a=e.target.checked,t=e.target.value;console.log(t+" "+a);var l=Object.assign({},this.state.checkS,Object(E.a)({},t,a));console.log(l),this.setState({checkS:l})}},{key:"onClear",value:function(){console.log("Clearing"),document.getElementById("filter-form").reset(),this.setState({checkS:{}}),this.props.onStatesChange([])}},{key:"onFormSubmit",value:function(){console.log("Form submitted"),console.log(this.state.checkS);var e=[];for(var a in this.state.checkS)!0===this.state.checkS[a]&&e.push(a);this.props.onStatesChange(e)}},{key:"render",value:function(){var e,a=this,t=this.props.states;return t.sort(),e=t.map(function(e){return n.a.createElement("div",{class:"form-check"},n.a.createElement("input",{class:"form-check-input",type:"checkbox",value:e,onChange:a.onCheckChange.bind(a),id:"defaultCheck1"}),n.a.createElement("label",{class:"form-check-label",for:"defaultCheck1"},e))}),n.a.createElement("div",{className:"col col-filter"},n.a.createElement("button",{type:"button",className:"btn btn-lg btn-outline-success","data-toggle":"modal","data-target":"#stateModal"},"Filter by State"),n.a.createElement("div",{class:"modal fade",id:"stateModal",tabindex:"-1",role:"dialog","aria-labelledby":"stateModalLabel","aria-hidden":"true"},n.a.createElement("div",{class:"modal-dialog",role:"document"},n.a.createElement("div",{class:"modal-content"},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Filter by State"),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{class:"modal-body"},n.a.createElement("form",{id:"filter-form"},e)),n.a.createElement("div",{class:"modal-footer"},n.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:this.onClear.bind(this)},"Clear"),n.a.createElement("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal",onClick:this.onFormSubmit.bind(this)},"Filter"))))))}}]),a}(l.Component);t(33);var g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={desigs:[],states:[],desigCheck:[],statesCheck:[],searchCheck:""},t.onDesigChange=t.onDesigChange.bind(Object(d.a)(t)),t.onStatesChange=t.onStatesChange.bind(Object(d.a)(t)),t.onSearchChange=t.onSearchChange.bind(Object(d.a)(t)),t.state.desigs=function(e){var a=new Set;return e.forEach(function(e){a.add(e.designation)}),Array.from(a)}(t.props.parks.data),t.state.states=function(e){var a=new Set;return e.forEach(function(e){e.states.split(",").forEach(function(e){a.add(e)})}),Array.from(a)}(t.props.parks.data),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"onDesigChange",value:function(e){console.log("Designation Change"),this.setState({desigCheck:e})}},{key:"onStatesChange",value:function(e){console.log("States Change"),console.log(e),this.setState({statesCheck:e})}},{key:"onSearchChange",value:function(e){console.log("Input changed"),console.log(e.target.value),this.setState({searchCheck:e.target.value})}},{key:"render",value:function(){var e,a=this,t=this.props.parks.data;return console.log(t),0!==this.state.desigCheck.length&&(t=t.filter(function(e){return a.state.desigCheck.includes(e.designation)})),console.log(t),console.log("StatesCheck: "),console.log(this.state.statesCheck),0!==this.state.statesCheck.length&&(t=t.filter(function(e){return e.states.split(",").every(function(e){return a.state.statesCheck.includes(e)})})),console.log(t),console.log("Search Check: "+this.state.searchCheck),this.state.searchCheck&&(t=t.filter(function(e){return e.fullName.toLowerCase().includes(a.state.searchCheck.toLowerCase())})),console.log(t),e=t?t.map(function(e){var a=e.states.split(",").join(" ");return n.a.createElement("div",{className:"col-lg-4 col-md-6"},n.a.createElement("div",{className:"card park-card",key:e.fullName},n.a.createElement("img",{className:"card-img-top",src:e.images[0].url,alt:"Card image cap"}),n.a.createElement("div",{className:"card-block d-flex"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.fullName),n.a.createElement("p",{className:"card-text text-muted"},e.designation+" ",n.a.createElement("small",{style:{opacity:.5}},a)),n.a.createElement(p.c,{to:"/parks/"+e.parkCode},n.a.createElement("button",{type:"button learn-more",className:"btn btn-success btn-learn-more"},"Learn More"))))))}):n.a.createElement("div",null),n.a.createElement("div",null,n.a.createElement("div",{className:"container search-filter"},n.a.createElement("div",{className:"row"},n.a.createElement("input",{onChange:this.onSearchChange,type:"text",className:"search-bar",placeholder:"Search..."})),n.a.createElement("div",{className:"row filter-row"},n.a.createElement(f,{desFilter:!0,onDesigChange:this.onDesigChange,desigs:this.state.desigs}),n.a.createElement(v,{stateFilter:!0,onStatesChange:this.onStatesChange,states:this.state.states}))),n.a.createElement("div",{className:"row"},e))}}]),a}(l.Component),b=(t(38),t(39),t(40),t(41),t(42),t(43),t(44),t(45),t(46),t(47),"https://developer.nps.gov/api/v1/"),N="kTXawZC8Up8xkPa8gocEoJ9ZRAeXGZnKzx5PxtcS";function k(e){return e.split("\n").map(function(e,a){return n.a.createElement("span",{key:a},e,n.a.createElement("br",null))})}function y(e){return{__html:e.description}}var C=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={parkInfo:{},alerts:{},articles:{},campgrounds:{},events:{},lessonplans:{},newsreleases:{},people:{},places:{},visitorcenters:{}},t.state.parkInfo=t.props.parks.data.find(function(a){return a.parkCode===e.id}),fetch(b+"alerts?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({alerts:e})}).catch(console.log),fetch(b+"articles?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({articles:e})}).catch(console.log),fetch(b+"campgrounds?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({campgrounds:e})}).catch(console.log),fetch(b+"events?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({events:e})}).catch(console.log),fetch(b+"lessonplans?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({lessonplans:e})}).catch(console.log),fetch(b+"newsreleases?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({newsreleases:e})}).catch(console.log),fetch(b+"people?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({people:e})}).catch(console.log),fetch(b+"places?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({places:e})}).catch(console.log),fetch(b+"visitorcenters?parkCode="+t.props.id+"&api_key="+N).then(function(e){return e.json()}).then(function(e){return t.setState({visitorcenters:e})}).catch(console.log),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e,a=[this.state.alerts,this.state.articles,this.state.campgrounds,this.state.events,this.state.lessonplans,this.state.newsreleases,this.state.people,this.state.places,this.state.visitorcenters].every(function(e){return a=e,!(0===Object.entries(a).length&&a.constructor===Object);var a}),t=this.state.parkInfo.states.split(",").join(" "),l=this.state.parkInfo.images.map(function(e,a){return 0===a?n.a.createElement("div",{className:"carousel-item active",key:a},n.a.createElement("img",{className:"d-block w-100",src:e.url})):n.a.createElement("div",{className:"carousel-item",key:a},n.a.createElement("img",{className:"d-block w-100",src:e.url}))}),s=this.state.parkInfo.images.map(function(e,a){return 0===a?n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":a,key:a,className:"active"}):n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":a,key:a})});this.state.alerts&&this.state.alerts.total>0&&(e=this.state.alerts.data.map(function(e){return n.a.createElement("div",{className:"alerts-text",key:e},n.a.createElement("h6",null,e.title),n.a.createElement("p",null,e.description))}));var r,c,o,i,m=k(this.state.parkInfo.description),d=k(this.state.parkInfo.directionsInfo);this.state.visitorcenters&&this.state.visitorcenters.total>0&&(r=this.state.visitorcenters.data.map(function(e){return n.a.createElement("div",{className:"visitor-center",key:e},n.a.createElement("h5",null,e.name),n.a.createElement("p",null,e.description),""!==e.directionsInfo&&n.a.createElement("div",{className:"vcenter-dir"},n.a.createElement("h6",null,"Directions"),n.a.createElement("p",null,e.directionsInfo)),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.url},"More information...")))})),this.state.campgrounds&&this.state.campgrounds.total>0&&(c=this.state.campgrounds.data.map(function(e){return n.a.createElement("div",{className:"campground",key:e},n.a.createElement("h5",null,e.name),n.a.createElement("p",null,e.description),""!==e.directionsoverview&&n.a.createElement("div",{className:"campground-dir"},n.a.createElement("h6",null,"Directions"),n.a.createElement("p",null,e.directionsoverview)),""!==e.weatheroverview&&n.a.createElement("div",{className:"campground-dir"},n.a.createElement("h6",null,"Weather"),n.a.createElement("p",null,e.weatheroverview)),n.a.createElement("h6",null,"Regulations"),n.a.createElement("p",null,e.regulationsoverview),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.regulationsurl},"More information on regulations...")))})),this.state.places&&this.state.places.total>0&&(o=this.state.places.data.map(function(e){return n.a.createElement("div",{className:"places",key:e},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.listingdescription),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.url},"More information...")))})),this.state.people&&this.state.people.total>0&&(i=this.state.people.data.map(function(e){return n.a.createElement("div",{className:"people",key:e},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.listingdescription),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.url},"More information...")))}));var u,p,h,E,f=this.state.parkInfo.addresses.map(function(e){if("Physical"===e.type)return n.a.createElement("div",{className:"p-right-info",key:e},e.line1,n.a.createElement("br",null),0!==e.line2.length&&n.a.createElement("div",null,e.line2," ",n.a.createElement("br",null)),0!==e.line3.length&&n.a.createElement("div",null,e.line3," ",n.a.createElement("br",null)),e.city+", "+e.stateCode+" "+e.postalCode)}),v=this.state.parkInfo.contacts.emailAddresses[0].emailAddress,g=this.state.parkInfo.contacts.phoneNumbers.map(function(e){if("Voice"===e.type){var a=e.phoneNumber;return n.a.createElement("div",{className:"contact-info-text",key:e},isNaN(a)&&n.a.createElement("div",{className:"phone-number"},n.a.createElement("p",{className:"p-right-info"},a)),!isNaN(a)&&n.a.createElement("div",{className:"phone-number"},n.a.createElement("p",{className:"p-right-info"},"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6,4))))}});return this.state.articles&&this.state.articles.total>0&&(u=this.state.articles.data.map(function(e){return n.a.createElement("div",{className:"article",key:e},n.a.createElement("h6",null,e.title),n.a.createElement("p",null,e.listingdescription),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.url},"View full article...")))})),this.state.events&&this.state.events.total>0&&(p=this.state.events.data.map(function(e){return n.a.createElement("div",{className:"event",key:e},n.a.createElement("h6",null,e.title),e.description.includes("<")&&n.a.createElement("div",{dangerouslySetInnerHTML:y(e)}),!e.description.includes("<")&&n.a.createElement("p",null,e.description))})),this.state.newsreleases&&this.state.newsreleases.total>0&&(h=this.state.newsreleases.data.map(function(e){return n.a.createElement("div",{className:"news-release",key:e},n.a.createElement("h6",null,e.title),n.a.createElement("p",null,e.abstract),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.url},"View full news release...")))})),this.state.lessonplans&&this.state.lessonplans.total>0&&(E=this.state.lessonplans.data.map(function(e){return n.a.createElement("div",{className:"lesson",key:e},n.a.createElement("h6",null,e.title),n.a.createElement("p",null,e.questionobjective),n.a.createElement("p",{className:"a-link"},n.a.createElement("a",{href:e.url},"View full lesson plan...")))})),a?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"card carousel-card"},n.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",null,n.a.createElement("div",{className:"park-header"},n.a.createElement("h3",{className:"park-title"},this.state.parkInfo.fullName),n.a.createElement("p",{className:"park-desig-state"},this.state.parkInfo.designation+" ",n.a.createElement("small",null,t))),n.a.createElement("div",{className:"gradient"})),n.a.createElement("ol",{className:"carousel-indicators"},s),n.a.createElement("div",{className:"carousel-inner"},l),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))),n.a.createElement("div",{className:"row"},this.state.alerts.total>0&&n.a.createElement("div",{className:"alert alert-danger row-alert",role:"alert","data-toggle":"modal","data-target":"#exampleModal"},n.a.createElement("div",{className:"alert-message d-flex align-items-center"},n.a.createElement("span",{className:"badge badge-light"},this.state.alerts.total),n.a.createElement("div",{className:"alert-text"},"View Alerts in Effect")),n.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title alert-modal-title",id:"exampleModalLabel"},"Alerts in Effect"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},e)))))),n.a.createElement("div",{className:"row row-info"},n.a.createElement("div",{className:"col-8"},n.a.createElement("div",{className:"card content-pane"},n.a.createElement("div",{className:"card-header"},n.a.createElement("ul",{className:"nav nav-tabs card-header-tabs overflow-hidden",id:"pills-tab",role:"tablist"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active",id:"pills-overview-tab","data-toggle":"pill",href:"#pills-overview",role:"tab","aria-controls":"pills-overview","aria-selected":"true"},"Overview")),this.state.visitorcenters.total>0&&n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"pills-vcenters-tab","data-toggle":"pill",href:"#pills-vcenters",role:"tab","aria-controls":"pills-vcenters","aria-selected":"false"},"Visitor Centers")),this.state.campgrounds.total>0&&n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"pills-campgrounds-tab","data-toggle":"pill",href:"#pills-campgrounds",role:"tab","aria-controls":"pills-campgrounds","aria-selected":"false"},"Campgrounds")),this.state.places.total>0&&n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"pills-places-tab","data-toggle":"pill",href:"#pills-places",role:"tab","aria-controls":"pills-places","aria-selected":"false"},"Attractions")),this.state.people.total>0&&n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"pills-people-tab","data-toggle":"pill",href:"#pills-people",role:"tab","aria-controls":"pills-people","aria-selected":"false"},"Related People")))),n.a.createElement("div",{className:"card-body card-info-pane"},n.a.createElement("div",{className:"tab-content pane-scroll",id:"pills-tabContent"},n.a.createElement("div",{className:"tab-pane fade show active",id:"pills-overview",role:"tabpanel","aria-labelledby":"pills-overview-tab"},n.a.createElement("p",{className:"card-text"},m),n.a.createElement("h6",null,"Directions"),n.a.createElement("p",{className:"card-text"},d),n.a.createElement("a",{href:this.state.parkInfo.directionsUrl,target:"_blank"},"More information on directions...")),n.a.createElement("div",{className:"tab-pane fade",id:"pills-vcenters",role:"tabpanel","aria-labelledby":"pills-vcenters-tab"},r),n.a.createElement("div",{className:"tab-pane fade",id:"pills-campgrounds",role:"tabpanel","aria-labelledby":"pills-campgrounds-tab"},c),n.a.createElement("div",{className:"tab-pane fade",id:"pills-places",role:"tabpanel","aria-labelledby":"pills-places-tab"},o),n.a.createElement("div",{className:"tab-pane fade",id:"pills-people",role:"tabpanel","aria-labelledby":"pills-people-tab"},i))))),n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"row row-info-button"},n.a.createElement("a",{href:this.state.parkInfo.url,target:"_blank",className:"btn btn-success btn-more-info d-flex align-items-center justify-content-center"},"View more info")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5 col-left-info"},n.a.createElement("p",{className:"p-left-info"},"Address")),n.a.createElement("div",{className:"col-7 col-right-info"},f)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5 col-left-info"},n.a.createElement("p",{className:"p-left-info"},"Phone")),n.a.createElement("div",{className:"col-7 col-right-info"},g)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5 col-left-info"},n.a.createElement("p",{className:"p-left-info"},"Email")),n.a.createElement("div",{className:"col-7 col-right-info"},n.a.createElement("p",{className:"p-right-info"},v))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5 col-left-info"},n.a.createElement("p",{className:"p-left-info"},"Monday",n.a.createElement("br",null),"Tuesday",n.a.createElement("br",null),"Wednesday",n.a.createElement("br",null),"Thursday",n.a.createElement("br",null),"Friday",n.a.createElement("br",null),"Saturday",n.a.createElement("br",null),"Sunday",n.a.createElement("br",null))),n.a.createElement("div",{className:"col-7 col-right-info"},n.a.createElement("p",{className:"p-right-info"},this.state.parkInfo.operatingHours[0].standardHours.monday,n.a.createElement("br",null),this.state.parkInfo.operatingHours[0].standardHours.tuesday,n.a.createElement("br",null),this.state.parkInfo.operatingHours[0].standardHours.wednesday,n.a.createElement("br",null),this.state.parkInfo.operatingHours[0].standardHours.thursday,n.a.createElement("br",null),this.state.parkInfo.operatingHours[0].standardHours.friday,n.a.createElement("br",null),this.state.parkInfo.operatingHours[0].standardHours.saturday,n.a.createElement("br",null),this.state.parkInfo.operatingHours[0].standardHours.sunday,n.a.createElement("br",null)))),n.a.createElement("div",{className:"row extra-info-row"},n.a.createElement("div",{className:"col col-left-info"},this.state.articles.total>0&&n.a.createElement("p",{className:"extra-info","data-toggle":"modal","data-target":"#articleModalLong"},"Articles"),this.state.events.total>0&&n.a.createElement("p",{className:"extra-info","data-toggle":"modal","data-target":"#eventsModalLong"},"Events"),this.state.newsreleases.total>0&&n.a.createElement("p",{className:"extra-info","data-toggle":"modal","data-target":"#newsModalLong"},"News Releases"),this.state.lessonplans.total>0&&n.a.createElement("p",{className:"extra-info","data-toggle":"modal","data-target":"#lessonModalLong"},"Lesson Plans")),n.a.createElement("div",{className:"modal fade",id:"articleModalLong",tabindex:"-1",role:"dialog","aria-":!0,labelledby:"articleModalLongTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"articleModalTitle"},"Articles"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},u)))),n.a.createElement("div",{className:"modal fade",id:"eventsModalLong",tabindex:"-1",role:"dialog","aria-":!0,labelledby:"eventsModalLongTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"eventsModalTitle"},"Events"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},p)))),n.a.createElement("div",{className:"modal fade",id:"newsModalLong",tabindex:"-1",role:"dialog","aria-":!0,labelledby:"newsModalLongTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"newsModalTitle"},"News Releases"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},h)))),n.a.createElement("div",{className:"modal fade",id:"lessonModalLong",tabindex:"-1",role:"dialog","aria-":!0,labelledby:"lessonModalLongTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"lessonModalTitle"},"Lesson Plans"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},E)))))))):n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"card carousel-card"},n.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",null,n.a.createElement("div",{className:"park-header"},n.a.createElement("h3",{className:"park-title"},this.state.parkInfo.fullName),n.a.createElement("p",{className:"park-desig-state"},this.state.parkInfo.designation+" ",n.a.createElement("small",null,t))),n.a.createElement("div",{className:"gradient"})),n.a.createElement("ol",{className:"carousel-indicators"},s),n.a.createElement("div",{className:"carousel-inner"},l),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))),n.a.createElement("div",{className:"container loading-container d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),a}(l.Component),w=(t(48),t(19)),x=t.n(w),j=(t(49),"https://developer.nps.gov/api/v1/"),S="tT5XaeyZMoQASmB5dx2kdyuU2vcMLKc1be2iiFpw",I=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleParkClick=t.handleParkClick.bind(Object(d.a)(t)),t.handleParkInfo=t.handleParkInfo.bind(Object(d.a)(t)),t.state={parks:null,events:null,page:"parks"},fetch(j+"parks?limit=500&fields=addresses,contacts,images,operatingHours&api_key="+S).then(function(e){return e.json()}).then(function(e){return t.setState({parks:e})}).catch(console.log),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleParkClick",value:function(){this.setState({page:"parks"})}},{key:"handleParkInfo",value:function(e){var a=e.parkCode;this.setState({page:a})}},{key:"render",value:function(){var e=this;return console.log(this.state.parks),this.state.parks?n.a.createElement("div",{className:"container"},n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Ubuntu&display=swap",rel:"stylesheet"}),n.a.createElement(p.b,null,n.a.createElement("nav",{className:"navbar d-flex justify-content-center"},n.a.createElement(p.c,{className:"navbar-brand text-center center-block",to:"/"},n.a.createElement("span",null,n.a.createElement("img",{className:"logo",width:"30",height:"30",src:x.a})))),n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/",exact:!0,render:function(){return n.a.createElement(g,{parks:e.state.parks,handleParkInfo:e.handleParkInfo})}}),n.a.createElement(h.a,{path:"/parks/:id",render:function(a){return n.a.createElement(C,{parks:e.state.parks,pageName:e.state.page,id:a.match.params.id})}})))):n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar d-flex justify-content-center"},n.a.createElement(p.c,{className:"navbar-brand text-center center-block",to:"/"},n.a.createElement("img",{className:"logo",width:"30",height:"30",src:x.a}))),n.a.createElement("div",{className:"container loading-container d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(p.a,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[27,1,2]]]);
//# sourceMappingURL=main.c0347bde.chunk.js.map