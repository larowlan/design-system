'use strict';

/**
 * NewHeader module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 * TODO: make this class configurable
 */

class newHeader {
  constructor() {
    this.init();
  }

  init() {

    
    this.body = document.querySelector('body');
    // this.toggle = document.querySelector('.uq-header__search-toggle-button');
    // this.search = document.querySelector('.uq-header__search');

    this.menuToggle = document.querySelector('.nav-primary__menu-toggle');
    this.searchToggle = document.querySelector('.nav-primary__search-toggle');
    this.searchLabel = document.querySelector('.search-toggle__label');
    
    this.searchBlock = document.querySelector('.new-header__search');


    this.searchInput = document.querySelector('.new-header__search-query-input');
    // this.meta = document.querySelector('meta.uq-header__mq--desktop');
    // this.navigation = document.querySelector('.uq-header__navigation');

    // if (this.meta == null) {
    //   this.meta = document.createElement('meta');
    //   this.meta.classList.add('uq-header__mq--desktop');
    //   document.head.appendChild(this.meta);
    // };

    // this.mqLarge = window.getComputedStyle(this.meta).getPropertyValue('font-family');
    // this.mqLarge = this.mqLarge.trim().slice(1, -1); // browsers re-quote string style values
    // this.mqLargeList = window.matchMedia(this.mqLarge);

    // REFACTOR

    this.menuToggle.addEventListener('click', () => {
      this.body.classList.toggle('no-scroll');
      this.menuToggle.classList.toggle('nav-primary__menu-toggle--is-open');
      this.searchToggle.classList.remove('nav-primary__search-toggle--is-open');
      this.searchBlock.classList.remove('new-header__search--is-open');
    });

    this.searchToggle.addEventListener('click', () => {
      this.searchToggle.classList.toggle('nav-primary__search-toggle--is-open');
      this.searchBlock.classList.toggle('new-header__search--is-open');
      this.menuToggle.classList.remove('nav-primary__menu-toggle--is-open');
      if (this.searchBlock.classList.contains('new-header__search--is-open')) {
        window.setTimeout(() => this.searchInput.focus(), 50);
      } else {
        window.setTimeout(() => this.searchInput.blur(), 50);
        this.searchToggle.blur();
      }
      if ( this.searchLabel.innerHTML === "Search") {
        this.searchLabel.innerHTML = "Close";
      } else {
        this.searchLabel.innerHTML = "Search";
      }
    });
  }

  // handleToggle() {
  //   this.search.classList.toggle('uq-header__search--open');
  //   this.navigation.classList.toggle('uq-header__navigation--open');


  // }
};

export {newHeader as default};
