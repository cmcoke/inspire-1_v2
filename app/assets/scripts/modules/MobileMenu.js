import $ from 'jquery';

class MobileMenu{
  constructor(){
    this.menuToggle = $(".site-header__menu-toggle");
    this.overlayMenu = $(".overlay");
    this.menuIcon = $(".site-header__menu-hamburger");
    this.events();
  }

  events(){
    this.menuToggle.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    this.overlayMenu.toggleClass("overlay--is-open");
    this.menuIcon.toggleClass("overlay--is-open");
  }
}

export default MobileMenu;
