(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={wrapper:"Machine_wrapper__2jO7U",text:"Machine_text__1B7dT",buttonContainer:"Machine_buttonContainer__5GlFj",inputTable:"Machine_inputTable__Rt9iS"}},23:function(e,t,a){e.exports={wrapper:"Spinner_wrapper__2kQ2o",image:"Spinner_image__lQnnj"}},24:function(e,t,a){e.exports={text:"About_text__AAQxL",image:"About_image__sOw_H"}},25:function(e,t,a){e.exports={multichar:"MultiChar_multichar__KjeAk",multicharTop:"MultiChar_multicharTop__3Y6L2"}},40:function(e,t,a){e.exports=a.p+"static/media/bottom.0525589f.svg"},41:function(e,t,a){e.exports=a.p+"static/media/top.73de132d.svg"},42:function(e,t,a){e.exports=a.p+"static/media/machine.1e7ec382.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/machine-rotated.862df7bb.jpg"},44:function(e,t,a){e.exports=a(76)},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),i=a(3),o=a(10),c=a(20),s=a(12),m=a(13),u=a(15),h=a(14),p=a(16),d=a(79),b=a(78),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!0},a.toggleNavbar=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.collapsed;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.PerseidsHeader,null,l.a.createElement(b.a,{onClick:this.toggleNavbar,"aria-label":"navigation menu"}),function(e){return l.a.createElement(d.a,{isOpen:!e,navbar:!0},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{className:"nav-link",exact:!0,to:"/"},"Reasoning machine")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{className:"nav-link",exact:!0,to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{className:"nav-link",exact:!0,to:"/instructions"},"Instructions"))))}(e)))}}]),t}(n.Component),f=a(17),g=a(19),v=a.n(g),y=a(23),w=a.n(y),x=a(40),N=a.n(x),A=a(41),_=a.n(A),k=function(e){var t=e%360;return t<0?t+360:t},L=function(e,t){var a=e+k(t-e),n=e-k(e-t);return Math.abs(e-a)<Math.abs(e-n)?a:n},T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={topAngle:0,bottomAngle:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.bottomAngle,a=e.topAngle;return console.log(this.props),console.log(this.state),l.a.createElement("div",{className:"col-12 col-lg-6 text-center ".concat(w.a.wrapper)},l.a.createElement("img",{src:N.a,className:w.a.image,alt:"baseboard",style:{transform:"rotate(".concat(t,"deg)")}}),l.a.createElement("img",{src:_.a,className:w.a.image,alt:"spinner",style:{transform:"rotate(".concat(a,"deg)")}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.bottomAngle,n=e.topAngle,l=t.bottomAngle,r=t.topAngle;return{bottomAngle:L(l,a),topAngle:L(r,n)}}}]),t}(n.Component),j=a(30),z=function(e){return{0:[!0,!1,!0],45:[!0,!0,!0],90:[!1,!1,!1],135:[!1,!0,!1],180:[!0,!1,!1],225:[!0,!0,!1],270:[!1,!1,!0],315:[!1,!0,!0]}[e]},R=function(e,t,a,n,l){var r=n?"all ":"(some) ",i=l?"":" not ";return"".concat(a?"All ":"Some"," ").concat(e," are ").concat(i).concat(r," ").concat(t,".")},O=function(e,t,a,n,l,r,i,o,c){if(!a&&!r)return"Invalid proposition.";if(!t&&!n)return"Invalid proposition.";var s=e,m=l;return a&&e&&t&&r&&l&&(s=!1),a&&e&&t&&r&&!n&&!l&&(s=!1),r&&n&&l&&a&&e&&(m=!1),r&&n&&l&&a&&!e&&!t&&(m=!1),r&&n&&l&&!a&&!t&&(m=!1),R(c,i,m,s,a&&r)},I=function(e){var t=e.x,a=e.y,n=e.z,r=e.bottomAngle,i=e.topAngle,o=z(r),c=Object(j.a)(o,3),s=c[0],m=c[1],u=c[2],h=z(i),p=Object(j.a)(h,3),d=p[0],b=p[1],E=p[2];return l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"If"),l.a.createElement("th",null,"And"),l.a.createElement("th",null,"Then")),l.a.createElement("tr",null,l.a.createElement("td",null,R(a,t,s,m,u)),l.a.createElement("td",null,R(n,a,d,b,E)),l.a.createElement("td",null,O(m,s,u,b,d,E,t,0,n))),l.a.createElement("tr",null,l.a.createElement("td",null,R(t,a,s,m,u)),l.a.createElement("td",null,R(n,a,d,b,E)),l.a.createElement("td",null,O(s,m,u,b,d,E,t,0,n))),l.a.createElement("tr",null,l.a.createElement("td",null,R(a,t,s,m,u)),l.a.createElement("td",null,R(a,n,d,b,E)),l.a.createElement("td",null,O(m,s,u,d,b,E,t,0,n)))))},q=a(11),Y=a.n(q),C=function(e){var t=e%360;return t<0?t+360:t},S=function(e){var t=v.a.parse(e),a=t.x,n=void 0===a?"X":a,l=t.y,r=void 0===l?"Y":l,i=t.z,o=void 0===i?"Z":i,c=t.ba,s=void 0===c?0:c,m=t.sa,u=void 0===m?0:m;return{x:n,y:r,z:o,ba:Number(s),sa:Number(u)}},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).rotateBottomLink=a.rotateBottomLink.bind(Object(f.a)(a)),a.rotateTopLink=a.rotateTopLink.bind(Object(f.a)(a)),a.updateInput=a.updateInput.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"rotateBottomLink",value:function(e){var t=this.props.location.search,a=S(t);return a.ba=C(a.ba+e),"./?".concat(v.a.stringify(a))}},{key:"rotateTopLink",value:function(e){var t=this.props.location.search,a=S(t);return a.sa=C(a.sa+e),"./?".concat(v.a.stringify(a))}},{key:"updateInput",value:function(e){var t=this.props,a=t.history,n=t.location.search,l=e.target,r=l.value,i=l.name,o=S(n);o[i]=r,a.push({search:v.a.stringify(o)})}},{key:"render",value:function(){var e=this.props.location.search,t=S(e),a=t.x,n=void 0===a?"X":a,r=t.y,o=void 0===r?"Y":r,c=t.z,s=void 0===c?"Z":c,m=t.ba,u=void 0===m?0:m,h=t.sa,p=void 0===h?0:h,d=this.rotateBottomLink,b=this.rotateTopLink,E=this.updateInput;return l.a.createElement("div",{className:"container pt-4 ".concat(Y.a.text)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",{className:"text-center mb-3"},"D'Arcy Thompson's Reasoning Machine"))),l.a.createElement("div",{className:"form-row text-center"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h5",null,"Rotate spinner")),l.a.createElement("div",{className:"col-6"},l.a.createElement("h5",null,"Rotate base-board"))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"".concat(Y.a.buttonContainer," col-3 col-md-2 offset-md-1")},l.a.createElement(i.b,{className:"btn btn-secondary btn-block",to:b(-45)},"\u27f2")),l.a.createElement("div",{className:"".concat(Y.a.buttonContainer," col-3 col-md-2")},l.a.createElement(i.b,{className:"btn btn-secondary btn-block",to:b(45)},"\u27f3")),l.a.createElement("div",{className:"".concat(Y.a.buttonContainer," col-3 col-md-2 offset-md-2")},l.a.createElement(i.b,{className:"btn btn-secondary btn-block",to:d(-45)},"\u27f2")),l.a.createElement("div",{className:"".concat(Y.a.buttonContainer," col-3 col-md-2")},l.a.createElement(i.b,{className:"btn btn-secondary btn-block",to:d(45)},"\u27f3"))),l.a.createElement("div",{className:"row"},l.a.createElement(T,{bottomAngle:u,topAngle:p}),l.a.createElement("div",{className:"col-12 col-lg-6 text-center ".concat(Y.a.wrapper)},l.a.createElement("div",{className:Y.a.inputTable},l.a.createElement("div",{className:"input-group mb-1"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"X")),l.a.createElement("input",{type:"text",className:"form-control","aria-label":"X","aria-describedby":"input x",name:"x",value:n,onChange:E})),l.a.createElement("div",{className:"input-group mb-1"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"Y")),l.a.createElement("input",{type:"text",className:"form-control","aria-label":"Y","aria-describedby":"input y",name:"y",value:o,onChange:E})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},"Z")),l.a.createElement("input",{type:"text",className:"form-control","aria-label":"Z","aria-describedby":"input z",name:"z",value:s,onChange:E})),l.a.createElement(I,{x:n,y:o,z:s,bottomAngle:u,topAngle:p})))))}}]),t}(n.Component),U=a(24),D=a.n(U),F=a(42),W=a.n(F),B=a(43),H=a.n(B),X=function(){return l.a.createElement("div",{className:"container pt-4 ".concat(D.a.text)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",{className:"text-center mb-3"},"D'Arcy Thompson's Reasoning Machine"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/D%27Arcy_Wentworth_Thompson"},"Sir D'Arcy Wentworth Thompson")," ","(1860 - 1948) was a Scottish biologist, mathematician, and classics scholar. He wrote on a wide variety of topics and is most well-known for his book"," ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/On_Growth_and_Form"},"On Growth and Form"),", first published in 1917."),l.a.createElement("p",null,"Around 1897, he invented a device that he called"," ",l.a.createElement(i.b,{to:"/"},'"A Very Simple Reasoning Machine."')," ","This device consists of two pieces of cardboard with one placed on top of the other. The top piece has a number of holes punched in it and the bottom piece has sections marked with colored tape. The two pieces are attached with a pin, which allows the top piece to spin, and as it spins, it shows different combinations of figures and colors."),l.a.createElement("p",{className:"text-center"},l.a.createElement("img",{src:W.a,className:"rounded ".concat(D.a.image),alt:"photograph of reasoning machine"}),l.a.createElement("img",{src:H.a,className:"rounded ".concat(D.a.image),alt:"photograph of reasoning machine with spinner at different angle"})),l.a.createElement("p",null,"The machine still works and can be seen in the archives of"," ",l.a.createElement("a",{href:"https://www.st-andrews.ac.uk/library/specialcollections/collections/archives/themanuscriptcollections/personal/thompsondarcywentworth1860-1948/"},"the University of St. Andrews")," ","(the university where D'Arcy Thompson taught)."),l.a.createElement("p",null,"Fortunately, along with the machine itself, D'Arcy left behind"," ",l.a.createElement(i.b,{to:"/instructions"},"instructions")," ","explaining how it works."),l.a.createElement("p",null,"The machine is based on a logic system created by the Scottish philosopher"," ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Sir_William_Hamilton,_9th_Baronet"},"Sir William Hamilton")," ","(1788 - 1856) . Hamilton's system itself builds off of Aristotle's"," ",l.a.createElement("a",{href:"https://plato.stanford.edu/entries/aristotle-logic/#Syl"},"syllogistic"),", but it doubles the number of terms by adding quantification (i.e."," ",l.a.createElement("em",null,"all of"),", ",l.a.createElement("em",null,"some of"),'). For example, where Aristotle might say "all humans are animals," Hamilton sees two different statements: "all humans are ',l.a.createElement("em",null,"some"),' animals," and "all humans are ',l.a.createElement("em",null,"all"),' animals."'),l.a.createElement("p",null,"D'Arcy's machine is designed to produce valid syllogisms in Hamilton's system and identify invalid ones. For example, aligning the basedboard to A and the spinner to A produces the syllogism:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"If")," ","all Y are (some) X."),l.a.createElement("li",null,l.a.createElement("strong",null,"And")," ","all Z are (some) Y."),l.a.createElement("li",null,l.a.createElement("strong",null,"Then")," ","all Z are (some) X.")),l.a.createElement("p",null,"Replacing X, Y, and Z with more familiar terms makes it clear that this syllogism is valid:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"If")," ","all ",l.a.createElement("em",null,"birds")," are ",l.a.createElement("em",null,"animals"),"."),l.a.createElement("li",null,l.a.createElement("strong",null,"And")," ","all ",l.a.createElement("em",null,"parrots")," are ",l.a.createElement("em",null,"birds"),"."),l.a.createElement("li",null,l.a.createElement("strong",null,"Then")," ","all ",l.a.createElement("em",null,"parrots")," are ",l.a.createElement("em",null,"animals"),".")),l.a.createElement("p",null,l.a.createElement(i.b,{to:"/"},"Try it out!")))))},Z=a(9),G=a.n(Z),P=a(25),Q=a.n(P),J=function(e){var t=e.base,a=e.left,n=e.right,r=e.aboveLeft,i=e.aboveRight;return l.a.createElement("table",{className:Q.a.multichar},l.a.createElement("tbody",null,(r||i)&&l.a.createElement("tr",{className:Q.a.multicharTop},l.a.createElement("td",null,l.a.createElement("small",null,r)),l.a.createElement("td",null,l.a.createElement("small",null,i))),l.a.createElement("tr",{className:Q.a.multicharTop},l.a.createElement("td",null,l.a.createElement("small",null,a)),l.a.createElement("td",null,l.a.createElement("small",null,n))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},t))))};J.defaultProps={aboveLeft:void 0,aboveRight:void 0};var V=J,K=function(){return l.a.createElement("div",{className:"container pt-4 ".concat(G.a.text)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",{className:"text-center mb-3"},"A very simple Reasoning Machine."),l.a.createElement("p",null,l.a.createElement("small",{className:"mb-3"},"[Written by Sir D'Arcy Wentworth Thompson. He probably wrote these instructions around 1897. The original copy of these instructions, correspondence about the machine, and the machine itself can be seen in the archives of the University of St. Andrews.]")),l.a.createElement("p",null,"In the propositions U, A, Y, I, we quantify respectively :- subject and predicate, subject alone, predicate alone, and lastly, neither. We may symbolize this fact by writing it :-"),l.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0",l.a.createElement(V,{base:"U",left:"s",right:"p"}),"\xa0 \xa0",l.a.createElement(V,{base:"A",left:"s",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"Y",left:"-",right:"p"}),"\xa0 \xa0",l.a.createElement(V,{base:"I",left:"-",right:"-"}),"\xa0 , \xa0 \xa0 \xa0 or, if we prefer it,"),l.a.createElement("br",null),l.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0",l.a.createElement(V,{base:"U",left:"+",right:"+"}),"\xa0 \xa0",l.a.createElement(V,{base:"A",left:"+",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"Y",left:"-",right:"+"}),"\xa0 \xa0",l.a.createElement(V,{base:"I",left:"-",right:"-"}),"\xa0 , \xa0 \xa0 \xa0 and, in like manner,"),l.a.createElement("br",null),l.a.createElement("p",null,"the corresponding negatives"),l.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0",l.a.createElement(V,{base:"E",left:"s",right:"p"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03b7",left:"s",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"o",left:"-",right:"p"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03c9",left:"-",right:"-"}),"\xa0 \xa0",l.a.createElement("u",null,"or"),"\xa0 \xa0",l.a.createElement(V,{base:"E",left:"+",right:"+"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03b7",left:"+",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"o",left:"-",right:"+"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03c9",left:"-",right:"-"})),l.a.createElement("br",null),l.a.createElement("p",null,"In the these figures, subject and predicate are, in each premise, respectively :-"),l.a.createElement("p",null,"\xa0 \xa0 \xa0 \xa0 yx, zy, zx ; xy, zy, zx ; yx, yz, zx."),l.a.createElement("p",null,"Now, by superimposing, one upon another, over these sets of symbols, \u2013 those, namely, for the propositions, for their unimplied qualifications, and for the figures, \u2013 we may ascertain the conclusion of any syllogism provided that we have in mind the following rules :-"),l.a.createElement("ol",{className:G.a.list},l.a.createElement("li",null,"That two negative premises are inadmissible"),l.a.createElement("li",null,"That if one premise be negative, the conclusion is negative."),l.a.createElement("li",null,"That the middle term must be quantified at least once."),l.a.createElement("li",null,"That nothing may be quantified in the conclusion that has not been quantified in the premises."),l.a.createElement("li",null,"That everything must be quantified in the conclusion that has been quantified in the premises :-",l.a.createElement("br",null),"Except that, when the double-quantified affirmation proposition U occurs in conjunction with a less quantified proposition [viz. with A, Y, I, \u03b7, \u03bf or \u03c9] then the quantification of the former (other than its quantification of the middle term y) shall be neglected in the conclusion.")),l.a.createElement("p",null,l.a.createElement("strong",null,"Note.")," ","This apparent exception simply depends upon the fact that in such cases the proposition U quantifies, or states, more than is required for the argument."," ",l.a.createElement("u",null,"All y\u2019s are all x\u2019s"),", when followed by the major proposition"," ",l.a.createElement("u",null,"all z\u2019s are some y\u2019s"),", has stated more than is necessary, for the same conclusion, viz. that"," ",l.a.createElement("u",null,"all z\u2019s are some x\u2019s"),", would follow equally from the major premise"," ",l.a.createElement("u",null,"all z\u2019s are some x\u2019s"),". In other words, in the 1",l.a.createElement("sup",null,"st")," ","figure, UA leads only to the same result as AA, and in the 2",l.a.createElement("sup",null,"nd")," ","and 3",l.a.createElement("sup",null,"rd")," ","figures only to the same result as YA. In point of fact, the proposition U is only of real utility when used in conjunction with another doubly quantified proposition, viz. in UU, UE, perhaps even in the former case alone."),l.a.createElement("p",null,"The method of superposition, indicated above, may be employed by itself, or used in the construction of a Reasoning Machine. The following examples illustrate the matter by itself."),l.a.createElement("ol",null,l.a.createElement("li",null,"Given the combination AY",l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:G.a.exampleLine,width:"250"},"Then we have in the first figure,"),l.a.createElement("td",null,"\xa0",l.a.createElement(V,{base:"A",aboveLeft:"y",left:"+",aboveRight:"x",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"Y",aboveLeft:"z",left:"-",aboveRight:"y",right:"+"}),"\xa0 = \xa0",l.a.createElement(V,{base:"\xa0",aboveLeft:"-",left:"z",aboveRight:"-",right:"x"}),"\xa0 = \xa0 I")))),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:G.a.exampleLine,width:"250"},".. .. .. .. 2",l.a.createElement("sup",null,"nd")," ","..,"),l.a.createElement("td",null,"\xa0",l.a.createElement(V,{base:"A",aboveLeft:"x",left:"+",aboveRight:"y",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"Y",aboveLeft:"z",left:"-",aboveRight:"y",right:"+"}),"\xa0 = \xa0",l.a.createElement(V,{base:"\xa0",aboveLeft:"-",left:"z",aboveRight:"+",right:"x"}),"\xa0 = \xa0 Y")))),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:G.a.exampleLine,width:"250"},".. .. .. .. 3",l.a.createElement("sup",null,"rd")," ","..,"),l.a.createElement("td",null,"\xa0",l.a.createElement(V,{base:"A",aboveLeft:"y",left:"+",aboveRight:"x",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"Y",aboveLeft:"y",left:"-",aboveRight:"z",right:"+"}),"\xa0 = \xa0",l.a.createElement(V,{base:"\xa0",aboveLeft:"+",left:"z",aboveRight:"-",right:"x"}),"\xa0 = \xa0 A")))),l.a.createElement("br",null)),l.a.createElement("li",null,"Given the combination A\u03c9",l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:G.a.exampleLine,width:"250"},"We have in the first figure,"),l.a.createElement("td",null,"\xa0",l.a.createElement(V,{base:"A",aboveLeft:"y",left:"+",aboveRight:"x",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03c9",aboveLeft:"z",left:"-",aboveRight:"y",right:"-"}),"\xa0 = \xa0",l.a.createElement(V,{base:"\xa0",aboveLeft:"-",left:"z",aboveRight:"-",right:"x"}),"\xa0",l.a.createElement("small",null,"(neg.)"),"\xa0 = \xa0 \u03c9")))),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:G.a.exampleLine,width:"250"},".. .. .. .. 2",l.a.createElement("sup",null,"nd")," ",".."),l.a.createElement("td",null,"\xa0",l.a.createElement(V,{base:"A",aboveLeft:"x",left:"+",aboveRight:"y",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03c9",aboveLeft:"z",left:"-",aboveRight:"y",right:"-"}),"\xa0 - \xa0 Invalid,"," ",l.a.createElement("u",null,"y unquantified."))))),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:G.a.exampleLine,width:"250"},".. .. .. .. 3",l.a.createElement("sup",null,"rd")," ",".."),l.a.createElement("td",null,"\xa0",l.a.createElement(V,{base:"A",aboveLeft:"y",left:"+",aboveRight:"x",right:"-"}),"\xa0 \xa0",l.a.createElement(V,{base:"\u03c9",aboveLeft:"y",left:"-",aboveRight:"z",right:"-"}),"\xa0 = \xa0",l.a.createElement(V,{base:"\xa0",aboveLeft:"-",left:"z",aboveRight:"-",right:"x"}),"\xa0",l.a.createElement("small",null,"(neg.)"),"\xa0 = \xa0 \u03c9")))),l.a.createElement("br",null))),l.a.createElement("h2",{className:"text-center mb-3"},"Rules of the use of the Reasoning Machine."),l.a.createElement("p",null,"Place the cards representing the propositions in their place and order on the base-board. The terms that are quantified will then appear through the holes."),l.a.createElement("ol",null,l.a.createElement("li",null,"A red danger-signal in the first or lowest compartment shows the whole combination to be invalid (double negative)."),l.a.createElement("li",null,"A red danger-signal in the compartment assigned to any figure shows that figure to be invalid (unquantified middle)."),l.a.createElement("li",null,"Quantify in the conclusion anything that is shown to be quantified in the premises [In other words, transfer to the zx of the conclusion the symbols (+ or -) that the z and x bear in the premises.], unless, a green signal of caution directs [according to the preceding tule V, EXC.] that the quantification of U is to be disregarded in the conclusion.")))))};var $=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{path:"/",component:E}),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:M}),l.a.createElement(o.a,{exact:!0,path:"/about",component:X}),l.a.createElement(o.a,{exact:!0,path:"/instructions",component:K})),l.a.createElement(c.PerseidsFooter,{report:"https://github.com/perseids-project/reasoning-machine",github:"https://github.com/perseids-project/reasoning-machine/issues"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(71),a(72),a(73),a(74),a(75);var ee=document.getElementById("root"),te=l.a.createElement(i.a,{basename:"/reasoning-machine"},l.a.createElement($,null));ee.hasChildNodes()?Object(r.hydrate)(te,ee):Object(r.render)(te,ee),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={text:"Instructions_text__2l89D",list:"Instructions_list__37Lzo",exampleLine:"Instructions_exampleLine__MwiB-"}}},[[44,1,2]]]);
//# sourceMappingURL=main.abf0c89d.chunk.js.map