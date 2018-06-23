(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{464:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(217),c=(r(250),r(237)),s=r.n(c),i=(r(233),r(236)),l=r.n(i),u=r(33),d=r.n(u),p=r(299),f=r(297),h=r(295),k=r(298),m=r(353),v=r.n(m);function b(e,t,r){return function(){return l()(s.a.mark(function e(t,r,n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("https://us-central1-reactbkk3-tickets-checkin.cloudfunctions.net/checkIn",{refCode:(""+t).toUpperCase(),totp:r,eventId:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)})).apply(this,arguments)}.apply(this,arguments)}var E=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={error:null,errorText:"",success:!1,attendee:null,loading:!1},t.onSubmit=function(e){e.preventDefault(),t.checkIn()},t.checkIn=l()(s.a.mark(function e(){var r,n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.state.loading&&!t.state.success){e.next=2;break}return e.abrupt("return");case 2:if(t.setState({loading:!0,error:null}),e.prev=3,t.form){e.next=6;break}return e.abrupt("return");case 6:if(r=t.form.refCode.value,n=t.form.totp.value,r){e.next=11;break}return t.setState({error:"refCode",errorText:"Ticket reference code is required."}),e.abrupt("return");case 11:if(n){e.next=14;break}return t.setState({error:"totp",errorText:"TOTP is required."}),e.abrupt("return");case 14:return e.next=16,b(r,n,"reactbkk3");case 16:if("EREF"!==(a=e.sent).error){e.next=20;break}return t.setState({error:"refCode",errorText:"Ticket reference code is not recognized. Please double-check your reference code."}),e.abrupt("return");case 20:if("ETOKEN"!==a.error){e.next=23;break}return t.setState({error:"totp",errorText:"TOTP code is incorrect. You can find the TOTP code at the checkin kiosk."}),e.abrupt("return");case 23:if(a.attendee){e.next=25;break}throw new Error('Expected field "attendee" to be present in result');case 25:t.setState({success:!0,attendee:a.attendee}),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(3),t.setState({error:"unknown",errorText:"UNEXPECTED ERROR — "+e.t0});case 31:return e.prev=31,t.setState({loading:!1}),e.finish(31);case 34:case"end":return e.stop()}},e,this,[[3,28,31,34]])})),t}d()(t,e);var r=t.prototype;return r.render=function(){return a.a.createElement(p.a,{actions:(this.state.success?[]:[{text:"Check in",onClick:this.checkIn}]).concat([{text:"Close",onClick:this.props.onClose}]),heading:"Self check-in",onCloseComplete:this.props.onClose,shouldCloseOnOverlayClick:!1},this.renderContent())},r.renderContent=function(){var e=this;if(this.state.success){var t=this.state.attendee.info||{};return a.a.createElement("div",null,a.a.createElement("div",null,"Welcome to React Bangkok 3.0.0!"),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("strong",null,t.name)),a.a.createElement("div",null,t.position),a.a.createElement("div",null,t.company),a.a.createElement("br",null),a.a.createElement("div",null,"Thank you for checking in. Please proceed to receive your T-shirt and name tag. We hope you enjoy the event!"))}return a.a.createElement("form",{onSubmit:this.onSubmit,onKeyDown:function(t){13===t.keyCode&&(t.preventDefault(),e.checkIn())},ref:function(t){e.form=t}},a.a.createElement(k.a,{isInvalid:"refCode"===this.state.error,name:"refCode",label:"Ticket reference code",placeholder:"ABCDEF"}),a.a.createElement(k.a,{isInvalid:"totp"===this.state.error,name:"totp",label:"TOTP code (shown at kiosk)",placeholder:"123456"}),!!this.state.loading&&a.a.createElement(C,{text:"Checking in..."}),a.a.createElement("div",{style:{marginTop:20}},a.a.createElement(h.a,{isOpen:!!this.state.error,appearance:"error"},"Cannot check in: ",this.state.errorText)))},t}(a.a.Component);function C(e){var t=e.text;return a.a.createElement("div",{className:Object(o.css)({marginTop:"20px"})},a.a.createElement("span",{className:Object(o.css)({display:"inline-block",verticalAlign:"middle"})},a.a.createElement(f.a,null))," ",t)}function x(e){var t=e.onClose;return a.a.createElement(E,{onClose:t})}r.d(t,"renderDialog",function(){return x})}}]);
//# sourceMappingURL=checkin-5b8a3abfd4648c5b7863.js.map