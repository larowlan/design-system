import{h as e,r as s,H as t}from"./p-9e5970ae.js";const a=({name:s,keyboardAccess:t,href:a})=>e("li",{class:"global-menu__item"},e("a",{class:"global-menu__link",accessKey:t,href:a},s)),i=class{constructor(e){s(this,e),this.searchPlaceholder="Search this site",this.value=this.searchPlaceholder}handleSearchOnBlur(e){this.value=""==e.target.value?this.searchPlaceholder:e.target.value}handleSearchOnFocus(e){this.value=e.target.value==this.searchPlaceholder?"":e.target.value}render(){return e(t,null,e("a",{href:"#main-content",class:"show-on-focus"},"Skip to main content"),e("div",{class:this.showGlobalMenu?"site-header":"site-header has-no-global-menu"},this.showGlobalMenu?e("uq-global-menu-classic",null,e(a,{href:"http://www.uq.edu.au/",keyboardAccess:"1",name:"UQ Home"}),e(a,{href:"http://www.uq.edu.au/contacts/",keyboardAccess:"2",name:"Contacts"}),e(a,{href:"https://future-students.uq.edu.au/",keyboardAccess:"3",name:"Study"}),e(a,{href:"http://www.uq.edu.au/maps/",keyboardAccess:"4",name:"Maps"}),e(a,{href:"http://www.uq.edu.au/news/",keyboardAccess:"5",name:"News"}),e(a,{href:"http://www.uq.edu.au/events/",keyboardAccess:"6",name:"Events"}),e(a,{href:"http://www.library.uq.edu.au/",keyboardAccess:"7",name:"Library"}),e(a,{href:"http://my.uq.edu.au/",keyboardAccess:"8",name:"my.UQ"})):"",e("div",{class:"site-header__content"},e("div",{class:"columns large-8"},e("a",{href:"http://www.uq.edu.au/",title:"The University of Queensland",class:"uq-logo"},"The University of Queensland"),e("div",{class:"site-title"},e("slot",null))),this.showSearch?e("div",{class:"site-header__site-search"},e("form",{action:"//www.uq.edu.au/search",method:"get",class:"search__form site-search__form"},e("fieldset",{class:"site-search__fieldset"},e("legend",{class:"site-search__legend"},"Site search"),e("label",{class:"search__title site-search__title",htmlFor:"site-search__query"},"Search"),e("input",{type:"text",tabindex:"1",onBlur:e=>{this.handleSearchOnBlur(e)},onFocus:e=>{this.handleSearchOnFocus(e)},placeholder:this.searchPlaceholder,name:"q",value:this.value,class:"site-search__input site-search__query"}),e("input",{type:"submit",title:"Search this site",class:"site-search__input site-search__submit",value:"",name:"submit"}),e("input",{type:"hidden",value:"xml_no_dtd",name:"output"}),e("input",{type:"hidden",value:"ws",name:"client"}),e("input",{type:"hidden",value:"ws",name:"proxystylesheet"}),e("input",{type:"hidden",value:"http://uq.edu.au",name:"as_sitesearch"})))):"")))}static get style(){return":host{display:block}"}};export{i as uq_header_classic};