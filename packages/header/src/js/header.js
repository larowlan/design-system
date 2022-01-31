'use strict';

/**
 * Header module
 * @file Handles interaction behaviour for the Header. Does not output any
 * HTML elements.
 * TODO: make this class configurable
 */

class header {
  constructor() {
    this.init();
  }

  init() {
    this.toggle = document.querySelector('.uq-header__search-toggle-button');
    this.search = document.querySelector('.uq-header__search');
    this.searchInput = document.querySelector('.uq-header__search-query-input');
    this.meta = document.querySelector('meta.uq-header__mq--desktop');
    this.navigation = document.querySelector('.uq-header__navigation');

    if (this.meta == null) {
      this.meta = document.createElement('meta');
      this.meta.classList.add('uq-header__mq--desktop');
      document.head.appendChild(this.meta);
    };

    this.mqLarge = window.getComputedStyle(this.meta).getPropertyValue('font-family');
    this.mqLarge = this.mqLarge.trim().slice(1, -1); // browsers re-quote string style values
    this.mqLargeList = window.matchMedia(this.mqLarge);

    // TODO: REFACTOR SEARCH

    this.menuToggle = document.querySelector('.main-nav__menu-toggle');
    this.body = document.querySelector('body');

    this.menuToggle.addEventListener('click', () => {
      this.body.classList.toggle('no-scroll');

    });

    // TODO: REFACTOR

    this.searchToggle = document.querySelector('.main-nav__search-toggle');
    this.searchBlock = document.querySelector('.new-header__search');

    this.searchToggle.addEventListener('click', () => {
      this.searchToggle.classList.toggle('main-nav__search-toggle--is-open');
      this.searchBlock.classList.toggle('new-header__search--is-open');

    });




  }

  handleToggle() {
    this.search.classList.toggle('uq-header__search--open');
    this.navigation.classList.toggle('uq-header__navigation--open');

    if (this.search.classList.contains('uq-header__search--open')) {
      if (this.mqLargeList.matches) {
        this.searchInput.focus();
      } else {
        this.toggle.blur();
      }
    } else {
      this.toggle.blur();
    }
  }
};

export {header as default};
