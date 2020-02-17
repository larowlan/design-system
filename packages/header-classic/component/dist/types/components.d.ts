/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface UqGlobalMenuClassic {}
  interface UqHeaderClassic {
    'showGlobalMenu': boolean;
    'showSearch': boolean;
  }
}

declare global {


  interface HTMLUqGlobalMenuClassicElement extends Components.UqGlobalMenuClassic, HTMLStencilElement {}
  var HTMLUqGlobalMenuClassicElement: {
    prototype: HTMLUqGlobalMenuClassicElement;
    new (): HTMLUqGlobalMenuClassicElement;
  };

  interface HTMLUqHeaderClassicElement extends Components.UqHeaderClassic, HTMLStencilElement {}
  var HTMLUqHeaderClassicElement: {
    prototype: HTMLUqHeaderClassicElement;
    new (): HTMLUqHeaderClassicElement;
  };
  interface HTMLElementTagNameMap {
    'uq-global-menu-classic': HTMLUqGlobalMenuClassicElement;
    'uq-header-classic': HTMLUqHeaderClassicElement;
  }
}

declare namespace LocalJSX {
  interface UqGlobalMenuClassic {}
  interface UqHeaderClassic {
    'showGlobalMenu'?: boolean;
    'showSearch'?: boolean;
  }

  interface IntrinsicElements {
    'uq-global-menu-classic': UqGlobalMenuClassic;
    'uq-header-classic': UqHeaderClassic;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'uq-global-menu-classic': LocalJSX.UqGlobalMenuClassic & JSXBase.HTMLAttributes<HTMLUqGlobalMenuClassicElement>;
      'uq-header-classic': LocalJSX.UqHeaderClassic & JSXBase.HTMLAttributes<HTMLUqHeaderClassicElement>;
    }
  }
}


