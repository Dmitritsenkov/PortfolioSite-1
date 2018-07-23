import $ from 'jquery';


class MobileMenu{
	constructor(){
		this.menuIcon = $(".large-hero__menu-icon");
		this.sideHeader = $(".site-header");
		this.primaryNav = $(".primary-nav");
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){
		this.sideHeader.toggleClass("site-header--is-visible");
		this.primaryNav.toggleClass("primary-nav--is-visible");
		this.menuIcon.toggleClass("large-hero__menu-icon--close-x");
	}

}

export default MobileMenu;