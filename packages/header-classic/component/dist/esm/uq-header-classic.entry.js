import { h, r as registerInstance, H as Host } from './core-6472e3d3.js';

const GlobalMenuLinkClassic = ({ name, keyboardAccess, href }) => (h("li", { class: "global-menu__item" },
    h("a", { class: "global-menu__link", accessKey: keyboardAccess, href: href }, name)));

const Header = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchPlaceholder = "Search this site";
        this.value = this.searchPlaceholder;
    }
    handleSearchOnBlur(e) {
        if (e.target.value == '') {
            this.value = this.searchPlaceholder;
        }
        else {
            this.value = e.target.value;
        }
    }
    handleSearchOnFocus(e) {
        if (e.target.value == this.searchPlaceholder) {
            this.value = "";
        }
        else {
            this.value = e.target.value;
        }
    }
    render() {
        return (h(Host, null, h("a", { href: "#main-content", class: "show-on-focus" }, "Skip to main content"), h("div", { class: this.showGlobalMenu ? "site-header" : "site-header has-no-global-menu" }, this.showGlobalMenu ? (h("uq-global-menu-classic", null, h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/", keyboardAccess: "1", name: "UQ Home" }), h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/contacts/", keyboardAccess: "2", name: "Contacts" }), h(GlobalMenuLinkClassic, { href: "https://future-students.uq.edu.au/", keyboardAccess: "3", name: "Study" }), h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/maps/", keyboardAccess: "4", name: "Maps" }), h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/news/", keyboardAccess: "5", name: "News" }), h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/events/", keyboardAccess: "6", name: "Events" }), h(GlobalMenuLinkClassic, { href: "http://www.library.uq.edu.au/", keyboardAccess: "7", name: "Library" }), h(GlobalMenuLinkClassic, { href: "http://my.uq.edu.au/", keyboardAccess: "8", name: "my.UQ" }))) : "", h("div", { class: "site-header__content" }, h("div", { class: "columns large-8" }, h("a", { href: "http://www.uq.edu.au/", title: "The University of Queensland", class: "uq-logo" }, "The University of Queensland"), h("div", { class: "site-title" }, h("slot", null))), this.showSearch ? (h("div", { class: "site-header__site-search" }, h("form", { action: "//www.uq.edu.au/search", method: "get", class: "search__form site-search__form" }, h("fieldset", { class: "site-search__fieldset" }, h("legend", { class: "site-search__legend" }, "Site search"), h("label", { class: "search__title site-search__title", htmlFor: "site-search__query" }, "Search"), h("input", { type: "text", tabindex: "1", onBlur: (e) => { this.handleSearchOnBlur(e); }, onFocus: (e) => { this.handleSearchOnFocus(e); }, placeholder: this.searchPlaceholder, name: "q", value: this.value, class: "site-search__input site-search__query" }), h("input", { type: "submit", title: "Search this site", class: "site-search__input site-search__submit", value: "\uF002", name: "submit" }), h("input", { type: "hidden", value: "xml_no_dtd", name: "output" }), h("input", { type: "hidden", value: "ws", name: "client" }), h("input", { type: "hidden", value: "ws", name: "proxystylesheet" }), h("input", { type: "hidden", value: "http://uq.edu.au", name: "as_sitesearch" }))))) : ""))));
    }
    static get style() { return ":host{display:block}"; }
};

export { Header as uq_header_classic };
