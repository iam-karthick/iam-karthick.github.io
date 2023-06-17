function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profileDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profileDetails */
    "./src/app/profileDetails.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_123_ul_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var details_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r3.des);
      }
    }

    function AppComponent_div_123_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_123_ul_12_Template, 3, 1, "ul", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profile_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.Organization);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.Duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r1.Role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", profile_r1.Description);
      }
    }

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'karthickProfile';
      this.link = '';
      this.profileDetails = _profileDetails__WEBPACK_IMPORTED_MODULE_1__["profileService"];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 419,
      vars: 1,
      consts: [["id", "top", "data-position", "center center", 1, "jumbotron", 2, "height", "730px"], [1, "container"], [1, "lead"], [1, "overlay"], ["href", "#profile", 1, "scroll-down"], ["aria-hidden", "true", 1, "fa", "fa-angle-down", "fa-4x"], ["id", "navbar-example", "role", "navigation", 1, "navbar", "navbar-default"], [1, "collapse", "navbar-collapse", "navbar-ex1-collapse"], [1, "nav", "navbar-nav"], [1, "active"], ["href", "#profile"], [1, ""], ["href", "#experiences"], ["href", "#abilities"], ["href", "#projects"], ["href", "#contact"], [1, "background-white"], ["id", "profile", 1, "container"], [1, "lead", "clr-gold"], [1, "row"], [1, "col-md-4"], [1, "clr-gold"], [1, "col-md-4", "text-center"], ["src", "./assets/images/profile.jpg", "alt", "Karthick D", "width", "246", "height", "246", 1, "profile_pic"], ["id", "bg-gray"], ["id", "experiences", 1, "container"], [1, "lead2"], [1, "experiences"], [1, "experience", "row"], [1, "col-md-8"], [1, "experience-period"], [1, "hidden-phone"], [1, "experience-details"], [1, "location"], [1, "glyphicon", "glyphicon-map-marker"], ["class", "experiences", 4, "ngFor", "ngForOf"], ["id", "abilities", 1, "container"], [1, "col-md-6"], [1, "no-bullets"], [1, "ability-title"], [1, "ability-score"], ["aria-hidden", "true", 1, "fa", "fa-star"], ["aria-hidden", "true", 1, "fa", "fa-star-o"], [1, "text-center", "project-referal"], ["href", "https://github.com/iam-karthick", "target", "_blank", 1, "btn", "btn-primary"], [1, "col-md-12"], [1, "background-gray"], ["id", "contact", 1, "container"], ["href", "https://www.linkedin.com/in/karthick-d-6042a613a/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin-square", "fa-lg"], ["href", "mailto:karthickd94@outlook.com"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "fa-lg"], [1, "style-light", "footer-scroll-top"], ["href", "#", 1, "scroll-top"], [1, "fa", "fa-angle-up", "fa-stack", "fa-rounded", "btn-default", "btn-hover-nobg"], ["class", "no-bullets", 4, "ngFor", "ngForOf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Karthick Duraikkannu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Abilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " I'm a creative web and Mobile application Full Stack developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " I\u2019m a Full stack Developer, experience driving complex projects. technical support as well passionate about enhancing user experience and maximizing user interface utilizing my experience in developing and delivering high standard back-end and front-end applications. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Karthick Duraikkannu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "28 years");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Chennai,Tamil Nadu,India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u201CProtons give an atom its identity, electrons its personality.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "- Bill Bryson, A short history of nearly everything ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Educations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "M.A.M College of Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "2012 - 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Bacholer of Engineering(EEE)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Trichy,Tamil Nadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "A.K.T Academy Matric Higher Secondary School");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "2011 - 2012");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Higher Secondary Certificate (HSC) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " KallakuruchiI,Tamil Nadu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Thanthai Hans Rover Matric Higher Secondary School");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2009 - 2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Secondary School Leaving Certificate (SSLC) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Perambalur, Tamil Nadu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Careers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, AppComponent_div_123_Template, 13, 4, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Abilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u201CLife without knowledge is death in disguise.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "- Talib Kweli ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "SpringBoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Spring MVC, Hibernate, JPA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "HTML5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "CSS3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "JUnit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "SASS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "ReactJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "SCSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Agile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Command line Inteface");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "NodeJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "AWS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "This project is build on angular framework.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "See my projects on Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Tamil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "English ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Firefox (6+ years)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Windows");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "MS Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Visual Studio Code (6+ years)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Git / Git Flow (6+ years)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Chrome (6+ years)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Atlassian / Jira (6 years)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Mac");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " \u201CIf I had asked people what they wanted, they would have said faster horses. \u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "- Henry Ford ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " https://www.linkedin.com/in/karthick-d-6042a613a/ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, " karthickd94@outlook.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".profile_pic[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    max-width: 246px;\r\n    height: auto;\r\n    border: 10px solid #FBD7BD;\r\n}\r\n.background-white[_ngcontent-%COMP%]{\r\n    padding: 40px 0;\r\n    background:#495057;\r\n    color:#fff;\r\n}\r\n.clr-gold[_ngcontent-%COMP%]{\r\n    color: #FABC56;\r\n}\r\n.fa[_ngcontent-%COMP%]{\r\n    padding: 0 2px;\r\n    color: #FABC56;\r\n}\r\n.no-bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n#bg-gray[_ngcontent-%COMP%]{\r\n    background: #DBDBDB;\r\n    padding-bottom: 20px;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: no-repeat center right fixed url('bg.jpg');\r\n    background-size: 100%;\r\n    background-size: cover;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]::before{\r\n\tbox-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);\r\n    -webkit-filter: blur(10px);\r\n            filter: blur(10px);\r\n}\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding-bottom: 20px;\r\n    color: #FBD7BD;\r\n    border-bottom: 1px solid #000;\r\n    border-bottom-color: rgba(255,255,255,0.85);\r\n    display: inline-block;\r\n}\r\n.lead2[_ngcontent-%COMP%]{\r\n\ttext-align: center;\r\n    color: #34A8A5;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 28%;\r\n    z-index: 4;\r\n    text-align: left;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\r\n    font-size: 28px!important;\r\n    color: #FBD7BD;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    color: #000;\r\n}\r\n@media screen and (min-width: 768px){\r\n    .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .jumbotron[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%] {\r\n        font-size: 63px;\r\n    }\r\n    .lead[_ngcontent-%COMP%] {\r\n        font-size: 21px;\r\n    }\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 54px;\r\n    text-align: center;\r\n    font-family: 'Open Sans', sans-serif !important;\r\n    margin-bottom: 20px;\r\n}\r\np.lead[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #727878;\r\n}\r\n.background-gray[_ngcontent-%COMP%]{\r\n    background: rgba(0,0,0,0.8);\r\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\r\n    backdrop-filter: saturate(180%) blur(20px);\r\n    color: #fff;\r\n}\r\n.ability-title[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    float: left;\r\n}\r\n.ability-score[_ngcontent-%COMP%]{\r\n    float: left;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    width: 110px;\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    right: 5%;\r\n    background-color: #222222;\r\n    text-align: center;\r\n    z-index: 6;\r\n}\r\n.navbar[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    background-color: #222222;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 5%;\r\n    width: 110px;\r\n    z-index: 999;\r\n}\r\n.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n    background: #22A39F;\r\n    color: #FFFFFF;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { color: #434242; font-family: 'Open Sans', sans-serif !important; height: 100%; }\r\nbody[_ngcontent-%COMP%] { background: #F3EFE0; font-size: 15px; line-height: 1.64; }\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], b[_ngcontent-%COMP%] { font-family: 'Open Sans', sans-serif !important; margin-bottom: 20px; }\r\nh1[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] { font-weight: 700; margin-bottom: 10px; }\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] { font-weight: 300; color: #22A39F; }\r\nh2[_ngcontent-%COMP%] { font-size: 54px; text-align: center; }\r\nh3[_ngcontent-%COMP%] { font-size: 28px; }\r\np.lead[_ngcontent-%COMP%] { text-align: center; color: #FBD7BD; }\r\np.lead[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: #FFFFFF; text-decoration: underline; }\r\np.lead[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { text-decoration: none; }\r\nul.no-bullets[_ngcontent-%COMP%] { list-style-type: none; margin: 0px; padding: 0px; }\r\nhr[_ngcontent-%COMP%] { margin: 40px 0px; border-color: #727878; opacity: 0.2; filter:alpha(opacity=20); }\r\n.project-referal[_ngcontent-%COMP%] { margin-top: 40px; }\r\n.project-referal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-style: italic; color: #999999; }\r\n.btn-primary[_ngcontent-%COMP%] { background-color: #22A39F; border-color: #1c8784; }\r\n\r\n\r\n.icon.icon-twitter[_ngcontent-%COMP%] { background-position: 0px 0px; }\r\n.icon.icon-linkedin[_ngcontent-%COMP%] { background-position: 0px -32px; }\r\n.icon.icon-skype[_ngcontent-%COMP%] { background-position: 0px -64px; }\r\n.icon.icon-email[_ngcontent-%COMP%] { background-position: 0px -96px; }\r\n.jumbotron[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] { background-color: #22A39F; position: absolute; top: 0px;     bottom: 60px; left: 0px; right: 0px; opacity: 0.75; filter:alpha(opacity=75); z-index: 2; }\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] { position: relative; top: 28%; z-index: 4; text-align: center; }\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { text-align: center; color: #FFFFFF; }\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { padding-bottom: 20px; border-bottom: 1px solid #FFFFFF; border-bottom-color: rgba(255,255,255,0.35); display: inline-block; }\r\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] { font-size: 28px; }\r\n.jumbotron[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%] { height: 80px; width: 110px; display: block; position: absolute; bottom: 0px; right: 5%; background-color: #222222; text-align: center; z-index: 6; }\r\n.jumbotron[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] { \r\n\tcolor: #FFFFFF; \r\n\tfont-size: 30px; \r\n\tpadding-right: 2px; \r\n\tpadding-top: 20px; \r\n\t\r\n\t-webkit-animation-name: wiggle; \r\n\t\r\n\t        animation-name: wiggle;\r\n\t-webkit-animation-duration: 1.2s;\r\n\t        animation-duration: 1.2s;\r\n\t-webkit-animation-timing-function: linear;\r\n\t        animation-timing-function: linear;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-direction: normal;\r\n\t        animation-direction: normal;\r\n}\r\n.jumbotron[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%]:hover   .glyphicon[_ngcontent-%COMP%] { padding-top: 25px; }\r\n.navbar[_ngcontent-%COMP%]  { border: 0px; background-color: #222222; position: absolute; top: 100%; right: 5%; width: 110px; z-index: 999; }\r\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] { padding: 0px; max-height: none; }\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] { float: none; }\r\n.navbar-nav[_ngcontent-%COMP%] { margin: 0px; }\r\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] { display: block; float: none; height: 80px; }\r\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { display: block;  height: 80px; text-align: center; padding-top: 30px; font-weight: 600; color: #FFFFFF; }\r\n.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus { color: #999999; }\r\n.navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus { background: #22A39F; color: #FFFFFF; }\r\n.navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover   .icon-bar[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus   .icon-bar[_ngcontent-%COMP%] { background: #222222; }\r\n.fixed[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]  { position: fixed; top: 60px; }\r\n.background-gray[_ngcontent-%COMP%] { background: #434242; }\r\n.container[_ngcontent-%COMP%] { max-width: 1280px; padding: 40px 180px; }\r\n#profile[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { margin-bottom: 20px; }\r\n#profile[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; max-width: 246px; height: auto; }\r\n#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%] { margin-bottom: 20px; }\r\n#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { display: block; padding-top: 8px; margin-bottom: 10px; }\r\n#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%] { display: block; margin-top: 6px; }\r\n#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { color: #22A39F; }\r\n#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .seperator[_ngcontent-%COMP%] { color: #BCBCBC; }\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] { min-height: 30px; padding: 3px 0px; }\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover { background: transparent; }\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .ability-title[_ngcontent-%COMP%] { display: inline-block; width: 60%; }\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .ability-score[_ngcontent-%COMP%] { float: right; }\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .ability-score[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] { \r\n\tcolor: #DFE0E0; \r\n\tfont-size: 14px;\r\n transition: all 0.3s;\r\n}\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .ability-score[_ngcontent-%COMP%]   .glyphicon.filled[_ngcontent-%COMP%] { color: #22A39F; }\r\n#abilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   .ability-score[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] { margin-left: 2px; }\r\n#interests[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] { float: left; }\r\n#interests[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] { float: right; }\r\n#interests[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 80%; height: auto; }\r\n#interests[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { float: right; }\r\n#interests[_ngcontent-%COMP%]   .interest-content[_ngcontent-%COMP%] { padding: 40px 0px; }\r\n#interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t-webkit-transform: rotate(-12deg);\r\n\t-moz-transform: rotate(-12deg);\r\n\t-ms-transform: rotate(-12deg);\r\n\t-o-transform: rotate(-12deg);\r\n}\r\n#interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t-webkit-transform: rotate(12deg);\r\n\t-moz-transform: rotate(12deg);\r\n\t-ms-transform: rotate(12deg);\r\n\t-o-transform: rotate(12deg);\r\n}\r\n\r\n#projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { margin-bottom: 30px; }\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { position: relative; overflow: hidden; }\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { color: #FFF; font-weight: 600; margin-bottom: 5px; }\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { width: 60px; display: inline-block; margin: 0px; }\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 110%; }\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n    padding: 20px 30px;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tz-index: 1000;\r\n\ttext-indent: 200%;\r\n\twhite-space: nowrap;\r\n\tfont-size: 0;\r\n\topacity: 0;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] { \r\n\tbackground: #22A39F;\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tright: 0px;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n}\r\n#projects[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tline-height: 18px;\r\n\tpadding: 15px;\r\n}\r\n#contact[_ngcontent-%COMP%] { padding-bottom: 200px; }\r\n#contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { color: #FFFFFF; }\r\n#contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { display: block; line-height: 32px; margin-bottom: 20px; opacity: 0.6; filter:alpha(opacity=60);  }\r\n#contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] { float: left; margin-right: 20px; }\r\n#contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { opacity: 1; filter:alpha(opacity=100); text-decoration: none; }\r\n.opl[_ngcontent-%COMP%] {\r\n\tposition:absolute;\r\n\ttop:100px;\r\n\tleft:0px;\r\n\tz-index:99999;\r\n}\r\n.opl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\twidth:73px;\r\n\theight:56px;\r\n\ttext-indent:-9999px;\r\n\tdisplay:block;\r\n}\r\n@media (max-width: 1200px) { \r\n\t#interests[_ngcontent-%COMP%]   .interest-content[_ngcontent-%COMP%] { padding: 20px 0px; }\r\n}\r\n@media (max-width: 767px) { \r\n\t.jumbotron[_ngcontent-%COMP%]:before {\r\n\t\tbottom: 100px;\r\n\t\tleft: 20px;\r\n\t\tright: 20px;\r\n\t\ttop: 20px;\t\t\r\n\t}\r\n\t.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] { top: 20%; padding-top: 0px; }\r\n\t.jumbotron[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%] { width: 100%; right: 0px; }\r\n\t\r\n\t.navbar[_ngcontent-%COMP%]  { left: 0px; width: 100%; }\r\n\t.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] { height: 60px; }\r\n\t.navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { height: 60px; text-align: center; padding-top: 20px; font-weight: 600; color: #FFFFFF; }\r\n\t\r\n\t.fixed[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] { top: 0px; }\r\n\t\r\n\t.container[_ngcontent-%COMP%] { padding: 60px 20px; min-width: 280px; }\r\n\t.hidden-phone[_ngcontent-%COMP%] { display: none; }\r\n\t\r\n\t#profile[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] { text-align: center; }\r\n\t\r\n\t#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: block; margin-bottom: 6px; }\r\n\t#experiences[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .seperator[_ngcontent-%COMP%] { display: none; }\r\n\t\r\n\t#interests[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] { float: none; }\r\n\t#interests[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] { float: none; }\r\n\t\r\n\t#interests[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { text-align: center; }\r\n\t#interests[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 50%; height: auto; float: none !important; } \r\n\t#interests[_ngcontent-%COMP%]   .interest-content[_ngcontent-%COMP%] { padding: 20px 0px; }\r\n\t\r\n\t#contact[_ngcontent-%COMP%] { padding-bottom: 60px; }\r\n\t#contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] { float: left; margin-right: 10px; }\r\n}\r\n@media only screen and (orientation: portrait) and (max-width: 767px)  {\r\n    .jumbotron[_ngcontent-%COMP%] {\r\n      -webkit-background-size: auto 150%;\r\n      background-attachment: scroll;\r\n    }\r\n}\r\n@media only screen and (orientation: portrait) and (max-width: 420px)  {\r\n\t.jumbotron[_ngcontent-%COMP%] {\t-webkit-background-size: auto 100%;     \r\n\t}\r\n}\r\n@media only screen and (orientation: landscape) and (max-width: 767px)  {\r\n\r\n    .jumbotron[_ngcontent-%COMP%] {\r\n      -webkit-background-size: 150% auto;\r\n      background-attachment: scroll;\r\n    }\r\n\t\r\n\t.jumbotron[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] { display: none; }\r\n}\r\n@-webkit-keyframes wiggle {\r\n\t0% {\r\n\t\tpadding-top: 20px;\r\n\t}\r\n\r\n\t50% {\r\n\t\tpadding-top: 28px;\r\n\t}\r\n\r\n\t100% {\r\n\t\tpadding-top: 20px;\r\n\t}\r\n}\r\n@keyframes wiggle {\r\n\t0% {\r\n\t\tpadding-top: 20px;\r\n\t}\r\n\r\n\t50% {\r\n\t\tpadding-top: 28px;\r\n\t}\r\n\r\n\t100% {\r\n\t\tpadding-top: 20px;\r\n\t}\r\n}\r\n\r\n\r\n\r\nfigure.effect[_ngcontent-%COMP%] {\r\n\tbackground: #22A39F;\r\n\tcolor: #FFF;\r\n}\r\nfigure.effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: calc(100% + 20px);\r\n\ttransition: opacity 0.35s, transform 0.35s;\r\n\ttransform: translate3d(-10px,0,0);\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\nfigure.effect[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n\topacity: 0.2;\r\n\ttransform: translate3d(0,0,0);\r\n}\r\nfigure.effect[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n\ttext-align: left;\r\n}\r\nfigure.effect[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding-bottom: 20px;\r\n\topacity: 0;\r\n\ttransition: opacity 0.35s, transform 0.35s;\r\n}\r\nfigure.effect[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\nfigure.effect[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\ttransition: transform 0.35s;\r\n\ttransform: translate3d(-100%,0,0);\r\n}\r\nfigure.effect[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]::after {\r\n\ttransform: translate3d(0,0,0);\r\n}\r\nfigure.effect[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tpadding-top: 10px;\r\n\topacity: 0;\r\n\ttransition: opacity 0.35s, transform 0.35s;\r\n\ttransform: translate3d(100%,0,0);\r\n}\r\nfigure.effect[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n.window-scrolled[_ngcontent-%COMP%]   .footer-scroll-top[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    display: block;\r\n    -webkit-animation-name: alpha-in;\r\n    animation-name: alpha-in;\r\n    -webkit-animation-duration: .5s;\r\n    animation-duration: .5s;\r\n}\r\n.footer-scroll-top[_ngcontent-%COMP%] {\r\n    z-index: 100;\r\n    display: none;\r\n    position: fixed;\r\n    right: 22px;\r\n    bottom: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksc0RBQXFFO0lBSXJFLHFCQUFxQjtJQUlyQixzQkFBc0I7QUFDMUI7QUFDQTtDQUNDLG9EQUFvRDtJQUNqRCwwQkFBa0I7WUFBbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QiwyQ0FBMkM7SUFDM0MscUJBQXFCO0FBQ3pCO0FBQ0E7Q0FDQyxrQkFBa0I7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtEQUFrRDtJQUNsRCwwQ0FBMEM7SUFDMUMsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixZ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RTFDLGlDQUFpQztDQUNqQyxtQ0FBbUM7Q0FDbkMsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyxZQUFZO0NBRVosNkJBQTZCO0FBQzlCO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLFVBQVU7Q0FFViwwQ0FBMEM7QUFDM0M7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsV0FBVztDQUNYLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsV0FBVztDQUVYLDJCQUEyQjtDQUUzQixpQ0FBaUM7QUFDbEM7QUFFQTtDQUVDLDZCQUE2QjtBQUM5QjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FFViwwQ0FBMEM7Q0FFMUMsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxVQUFVO0NBRVYsNkJBQTZCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdDQUFnQztJQUdoQyx3QkFBd0I7SUFDeEIsK0JBQStCO0lBRy9CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX3BpY3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNDZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjRkJEN0JEO1xyXG59XHJcbi5iYWNrZ3JvdW5kLXdoaXRle1xyXG4gICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgYmFja2dyb3VuZDojNDk1MDU3O1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4uY2xyLWdvbGR7XHJcbiAgICBjb2xvcjogI0ZBQkM1NjtcclxufVxyXG4uZmF7XHJcbiAgICBwYWRkaW5nOiAwIDJweDtcclxuICAgIGNvbG9yOiAjRkFCQzU2O1xyXG59XHJcblxyXG4ubm8tYnVsbGV0cyBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuI2JnLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREJEQkRCO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHJpZ2h0IGZpeGVkIHVybCguLi9hc3NldHMvaW1hZ2VzL2JnLmpwZyk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmp1bWJvdHJvbjo6YmVmb3Jle1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuLmp1bWJvdHJvbiAuY29udGFpbmVyIGgxIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICNGQkQ3QkQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmxlYWQye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzRBOEE1O1xyXG59XHJcbi5qdW1ib3Ryb24gLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI4JTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5qdW1ib3Ryb24gLmNvbnRhaW5lciAubGVhZCB7XHJcbiAgICBmb250LXNpemU6IDI4cHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGQkQ3QkQ7XHJcbn1cclxuLmp1bWJvdHJvbiAuY29udGFpbmVyID4gKiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmp1bWJvdHJvbiBoMSwgLmp1bWJvdHJvbiAuaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjNweDtcclxuICAgIH1cclxuICAgIC5sZWFkIHtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiA1NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbnAubGVhZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcyNzg3ODtcclxufVxyXG4uYmFja2dyb3VuZC1ncmF5e1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYWJpbGl0eS10aXRsZXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYWJpbGl0eS1zY29yZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5qdW1ib3Ryb24gLnNjcm9sbC1kb3duIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogNjtcclxufVxyXG4ubmF2YmFyIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMkEzOUY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5odG1sLCBib2R5IHsgY29sb3I6ICM0MzQyNDI7IGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyBoZWlnaHQ6IDEwMCU7IH1cclxuYm9keSB7IGJhY2tncm91bmQ6ICNGM0VGRTA7IGZvbnQtc2l6ZTogMTVweDsgbGluZS1oZWlnaHQ6IDEuNjQ7IH1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsIHN0cm9uZywgYiB7IGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbmgxLGg0IHsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxyXG5oMixoMyB7IGZvbnQtd2VpZ2h0OiAzMDA7IGNvbG9yOiAjMjJBMzlGOyB9XHJcbmgyIHsgZm9udC1zaXplOiA1NHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuaDMgeyBmb250LXNpemU6IDI4cHg7IH1cclxuXHJcbnAubGVhZCB7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICNGQkQ3QkQ7IH1cclxucC5sZWFkIGEgeyBjb2xvcjogI0ZGRkZGRjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxucC5sZWFkIGE6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxudWwubm8tYnVsbGV0cyB7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgbWFyZ2luOiAwcHg7IHBhZGRpbmc6IDBweDsgfVxyXG5ociB7IG1hcmdpbjogNDBweCAwcHg7IGJvcmRlci1jb2xvcjogIzcyNzg3ODsgb3BhY2l0eTogMC4yOyBmaWx0ZXI6YWxwaGEob3BhY2l0eT0yMCk7IH1cclxuXHJcbi5wcm9qZWN0LXJlZmVyYWwgeyBtYXJnaW4tdG9wOiA0MHB4OyB9XHJcbi5wcm9qZWN0LXJlZmVyYWwgcCB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgY29sb3I6ICM5OTk5OTk7IH1cclxuXHJcbi5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQtY29sb3I6ICMyMkEzOUY7IGJvcmRlci1jb2xvcjogIzFjODc4NDsgfVxyXG4vKiAuYnRuLXByaW1hcnk6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4Nzg0OyAgYm9yZGVyLWNvbG9yOiAjMWM4Nzg0OyB9ICovXHJcblxyXG4vKiAuaWNvbiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZDogdXJsKGltYWdlcy9zbV9pY29uX3Nwcml0ZS5wbmcpIG5vLXJlcGVhdDsgaGVpZ2h0OiAzMnB4OyB3aWR0aDogMzJweDsgfSAqL1xyXG4uaWNvbi5pY29uLXR3aXR0ZXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4OyB9XHJcbi5pY29uLmljb24tbGlua2VkaW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTMycHg7IH1cclxuLmljb24uaWNvbi1za3lwZSB7IGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNjRweDsgfVxyXG4uaWNvbi5pY29uLWVtYWlsIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC05NnB4OyB9XHJcblxyXG4uanVtYm90cm9uIC5vdmVybGF5IHsgYmFja2dyb3VuZC1jb2xvcjogIzIyQTM5RjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgICAgIGJvdHRvbTogNjBweDsgbGVmdDogMHB4OyByaWdodDogMHB4OyBvcGFjaXR5OiAwLjc1OyBmaWx0ZXI6YWxwaGEob3BhY2l0eT03NSk7IHotaW5kZXg6IDI7IH1cclxuXHJcbi5qdW1ib3Ryb24gLmNvbnRhaW5lciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAyOCU7IHotaW5kZXg6IDQ7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uanVtYm90cm9uIC5jb250YWluZXIgPiAqIHsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogI0ZGRkZGRjsgfVxyXG4uanVtYm90cm9uIC5jb250YWluZXIgaDEgeyBwYWRkaW5nLWJvdHRvbTogMjBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkZGRkY7IGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uanVtYm90cm9uIC5jb250YWluZXIgLmxlYWQgeyBmb250LXNpemU6IDI4cHg7IH1cclxuLmp1bWJvdHJvbiAuc2Nyb2xsLWRvd24geyBoZWlnaHQ6IDgwcHg7IHdpZHRoOiAxMTBweDsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwcHg7IHJpZ2h0OiA1JTsgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjsgdGV4dC1hbGlnbjogY2VudGVyOyB6LWluZGV4OiA2OyB9XHJcbi5qdW1ib3Ryb24gLnNjcm9sbC1kb3duIC5nbHlwaGljb24geyBcclxuXHRjb2xvcjogI0ZGRkZGRjsgXHJcblx0Zm9udC1zaXplOiAzMHB4OyBcclxuXHRwYWRkaW5nLXJpZ2h0OiAycHg7IFxyXG5cdHBhZGRpbmctdG9wOiAyMHB4OyBcclxuXHRcclxuXHRhbmltYXRpb24tbmFtZTogd2lnZ2xlO1xyXG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcclxuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcblx0YW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xyXG59XHJcbi5qdW1ib3Ryb24gLnNjcm9sbC1kb3duOmhvdmVyIC5nbHlwaGljb24geyBwYWRkaW5nLXRvcDogMjVweDsgfVxyXG5cclxuLm5hdmJhciAgeyBib3JkZXI6IDBweDsgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMCU7IHJpZ2h0OiA1JTsgd2lkdGg6IDExMHB4OyB6LWluZGV4OiA5OTk7IH1cclxuLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHsgcGFkZGluZzogMHB4OyBtYXgtaGVpZ2h0OiBub25lOyB9XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgeyBmbG9hdDogbm9uZTsgfVxyXG4ubmF2YmFyLW5hdiB7IG1hcmdpbjogMHB4OyB9XHJcbi5uYXZiYXIgLm5hdiA+IGxpIHsgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBub25lOyBoZWlnaHQ6IDgwcHg7IH0gXHJcbi5uYXZiYXIgLm5hdiA+IGxpIGEgeyBkaXNwbGF5OiBibG9jazsgIGhlaWdodDogODBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMzBweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICNGRkZGRkY7IH1cclxuLm5hdmJhciAubmF2ID4gbGkgYTpob3ZlciwgLm5hdmJhciAubmF2ID4gbGkgYTpmb2N1cyB7IGNvbG9yOiAjOTk5OTk5OyB9XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMgeyBiYWNrZ3JvdW5kOiAjMjJBMzlGOyBjb2xvcjogI0ZGRkZGRjsgfVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6aG92ZXIgLmljb24tYmFyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMgLmljb24tYmFyIHsgYmFja2dyb3VuZDogIzIyMjIyMjsgfVxyXG5cclxuLmZpeGVkIC5uYXZiYXIgIHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDYwcHg7IH1cclxuXHJcbi5iYWNrZ3JvdW5kLWdyYXkgeyBiYWNrZ3JvdW5kOiAjNDM0MjQyOyB9XHJcbi5jb250YWluZXIgeyBtYXgtd2lkdGg6IDEyODBweDsgcGFkZGluZzogNDBweCAxODBweDsgfVxyXG5cclxuI3Byb2ZpbGUgLnJvdyA+IGRpdiB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxuI3Byb2ZpbGUgLnJvdyA+IGRpdiBpbWcgeyB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAyNDZweDsgaGVpZ2h0OiBhdXRvOyB9XHJcblx0XHJcbiNleHBlcmllbmNlcyAuZXhwZXJpZW5jZSB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cclxuI2V4cGVyaWVuY2VzIC5leHBlcmllbmNlIHAgPiBzdHJvbmcgeyBkaXNwbGF5OiBibG9jazsgcGFkZGluZy10b3A6IDhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxyXG4jZXhwZXJpZW5jZXMgLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtZGV0YWlscyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA2cHg7IH1cclxuI2V4cGVyaWVuY2VzIC5leHBlcmllbmNlIC5leHBlcmllbmNlLWRldGFpbHMgKiB7IGNvbG9yOiAjMjJBMzlGOyB9XHJcbiNleHBlcmllbmNlcyAuZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1kZXRhaWxzIC5zZXBlcmF0b3IgeyBjb2xvcjogI0JDQkNCQzsgfVxyXG5cclxuI2FiaWxpdGllcyB1bCA+IGxpIHsgbWluLWhlaWdodDogMzBweDsgcGFkZGluZzogM3B4IDBweDsgfVxyXG4jYWJpbGl0aWVzIHVsID4gbGk6aG92ZXIgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxyXG4jYWJpbGl0aWVzIHVsID4gbGkgLmFiaWxpdHktdGl0bGUgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA2MCU7IH1cclxuI2FiaWxpdGllcyB1bCA+IGxpIC5hYmlsaXR5LXNjb3JlIHsgZmxvYXQ6IHJpZ2h0OyB9XHJcbiNhYmlsaXRpZXMgdWwgPiBsaSAuYWJpbGl0eS1zY29yZSAuZ2x5cGhpY29uIHsgXHJcblx0Y29sb3I6ICNERkUwRTA7IFxyXG5cdGZvbnQtc2l6ZTogMTRweDsgXHJcblx0IFxyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4jYWJpbGl0aWVzIHVsID4gbGkgLmFiaWxpdHktc2NvcmUgLmdseXBoaWNvbi5maWxsZWQgeyBjb2xvcjogIzIyQTM5RjsgfVxyXG5cclxuI2FiaWxpdGllcyB1bCA+IGxpOmhvdmVyIC5hYmlsaXR5LXNjb3JlIC5nbHlwaGljb24geyBtYXJnaW4tbGVmdDogMnB4OyB9IFxyXG5cclxuI2ludGVyZXN0cyAubGVmdCB7IGZsb2F0OiBsZWZ0OyB9XHJcbiNpbnRlcmVzdHMgLnJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XHJcbiNpbnRlcmVzdHMgaW1nIHsgd2lkdGg6IDgwJTsgaGVpZ2h0OiBhdXRvOyB9XHJcbiNpbnRlcmVzdHMgLnJpZ2h0IGltZyB7IGZsb2F0OiByaWdodDsgfVxyXG4jaW50ZXJlc3RzIC5pbnRlcmVzdC1jb250ZW50IHsgcGFkZGluZzogNDBweCAwcHg7IH1cclxuXHJcbiNpbnRlcmVzdHMgLnJvdzpob3ZlciAubGVmdCBpbWcge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcclxuXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcclxufVxyXG5cclxuI2ludGVyZXN0cyAucm93OmhvdmVyIC5yaWdodCBpbWcge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xyXG59XHJcblxyXG4vKiAjcHJvamVjdHMgLnJvdyB7IG1hcmdpbjogMHB4OyB9IC8vIGJvb3RzdHJhcCAzLjEtIGhhY2sgKi9cclxuI3Byb2plY3RzIC5yb3cgPiBkaXYgeyBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XHJcbiNwcm9qZWN0cyBmaWd1cmUgeyBwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuI3Byb2plY3RzIGZpZ3VyZSBoMyB7IGNvbG9yOiAjRkZGOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiA1cHg7IH1cclxuI3Byb2plY3RzIGZpZ3VyZSBwID4gc3Ryb25nIHsgd2lkdGg6IDYwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHg7IH1cclxuI3Byb2plY3RzIGZpZ3VyZSBpbWcgeyB3aWR0aDogMTEwJTsgfVxyXG4jcHJvamVjdHMgZmlndXJlIGZpZ2NhcHRpb24ge1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jcHJvamVjdHMgZmlndXJlIGEge1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblx0dGV4dC1pbmRlbnQ6IDIwMCU7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRmb250LXNpemU6IDA7XHJcblx0b3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3Byb2plY3RzIGZpZ3VyZSAuaWNvbiB7IFxyXG5cdGJhY2tncm91bmQ6ICMyMkEzOUY7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMHB4O1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0d2lkdGg6IDQ4cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG59XHJcbiNwcm9qZWN0cyBmaWd1cmUgLmljb24gc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbiNjb250YWN0IHsgcGFkZGluZy1ib3R0b206IDIwMHB4OyB9XHJcbiNjb250YWN0IGgyLCAjY29udGFjdCAucm93ICogeyBjb2xvcjogI0ZGRkZGRjsgfVxyXG4jY29udGFjdCBhIHsgZGlzcGxheTogYmxvY2s7IGxpbmUtaGVpZ2h0OiAzMnB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyBvcGFjaXR5OiAwLjY7IGZpbHRlcjphbHBoYShvcGFjaXR5PTYwKTsgIH1cclxuI2NvbnRhY3QgYSAuaWNvbiB7IGZsb2F0OiBsZWZ0OyBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cclxuI2NvbnRhY3QgYTpob3ZlciB7IG9wYWNpdHk6IDE7IGZpbHRlcjphbHBoYShvcGFjaXR5PTEwMCk7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5cclxuLm9wbCB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjEwMHB4O1xyXG5cdGxlZnQ6MHB4O1xyXG5cdHotaW5kZXg6OTk5OTk7XHJcbn1cclxuXHJcbi5vcGwgYSB7XHJcblx0d2lkdGg6NzNweDtcclxuXHRoZWlnaHQ6NTZweDtcclxuXHR0ZXh0LWluZGVudDotOTk5OXB4O1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgXHJcblx0I2ludGVyZXN0cyAuaW50ZXJlc3QtY29udGVudCB7IHBhZGRpbmc6IDIwcHggMHB4OyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuXHQuanVtYm90cm9uOmJlZm9yZSB7XHJcblx0XHRib3R0b206IDEwMHB4O1xyXG5cdFx0bGVmdDogMjBweDtcclxuXHRcdHJpZ2h0OiAyMHB4O1xyXG5cdFx0dG9wOiAyMHB4O1x0XHRcclxuXHR9XHJcblx0Lmp1bWJvdHJvbiAuY29udGFpbmVyIHsgdG9wOiAyMCU7IHBhZGRpbmctdG9wOiAwcHg7IH1cclxuXHQuanVtYm90cm9uIC5zY3JvbGwtZG93biB7IHdpZHRoOiAxMDAlOyByaWdodDogMHB4OyB9XHJcblx0XHJcblx0Lm5hdmJhciAgeyBsZWZ0OiAwcHg7IHdpZHRoOiAxMDAlOyB9XHJcblx0Lm5hdmJhciAubmF2ID4gbGkgeyBoZWlnaHQ6IDYwcHg7IH1cclxuXHQubmF2YmFyIC5uYXYgPiBsaSBhIHsgaGVpZ2h0OiA2MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAyMHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI0ZGRkZGRjsgfVxyXG5cdFxyXG5cdC5maXhlZCAubmF2YmFyIHsgdG9wOiAwcHg7IH1cclxuXHRcclxuXHQuY29udGFpbmVyIHsgcGFkZGluZzogNjBweCAyMHB4OyBtaW4td2lkdGg6IDI4MHB4OyB9XHJcblx0LmhpZGRlbi1waG9uZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHRcclxuXHQjcHJvZmlsZSAucm93ICogeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuXHRcclxuXHQjZXhwZXJpZW5jZXMgLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtZGV0YWlscyA+IHNwYW4geyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XHJcblx0I2V4cGVyaWVuY2VzIC5leHBlcmllbmNlIC5leHBlcmllbmNlLWRldGFpbHMgLnNlcGVyYXRvciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHRcclxuXHQjaW50ZXJlc3RzIC5sZWZ0IHsgZmxvYXQ6IG5vbmU7IH1cclxuXHQjaW50ZXJlc3RzIC5yaWdodCB7IGZsb2F0OiBub25lOyB9XHJcblx0XHJcblx0I2ludGVyZXN0cyA+ICogeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuXHQjaW50ZXJlc3RzIGltZyB7IHdpZHRoOiA1MCU7IGhlaWdodDogYXV0bzsgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfSBcclxuXHQjaW50ZXJlc3RzIC5pbnRlcmVzdC1jb250ZW50IHsgcGFkZGluZzogMjBweCAwcHg7IH1cclxuXHRcclxuXHQjY29udGFjdCB7IHBhZGRpbmctYm90dG9tOiA2MHB4OyB9XHJcblx0I2NvbnRhY3QgYSAuaWNvbiB7IGZsb2F0OiBsZWZ0OyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxufSAgICBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSAge1xyXG4gICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBhdXRvIDE1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkgIHtcclxuXHQuanVtYm90cm9uIHtcdC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7ICAgICBcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgIHtcclxuXHJcbiAgICAuanVtYm90cm9uIHtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDE1MCUgYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICB9XHJcblx0XHJcblx0Lmp1bWJvdHJvbiAubGVhZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3aWdnbGUge1xyXG5cdDAlIHtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0NTAlIHtcclxuXHRcdHBhZGRpbmctdG9wOiAyOHB4O1xyXG5cdH1cclxuXHJcblx0MTAwJSB7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLSovXHJcbi8qKioqKiBFRkZFQ1QgKioqKiovXHJcbi8qLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmZpZ3VyZS5lZmZlY3Qge1xyXG5cdGJhY2tncm91bmQ6ICMyMkEzOUY7XHJcblx0Y29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmZpZ3VyZS5lZmZlY3QgaW1nIHtcclxuXHR3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgKyAyMHB4KTtcclxuXHR3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwwLDApO1xyXG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuZmlndXJlLmVmZmVjdDpob3ZlciBpbWcge1xyXG5cdG9wYWNpdHk6IDAuMjtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG59XHJcblxyXG5maWd1cmUuZWZmZWN0IGZpZ2NhcHRpb24ge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmZpZ3VyZS5lZmZlY3QgaDMge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcbn1cclxuXHJcbmZpZ3VyZS5lZmZlY3Q6aG92ZXIgaDMge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmZpZ3VyZS5lZmZlY3QgaDM6OmFmdGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb250ZW50OiAnJztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XHJcbn1cclxuXHJcbmZpZ3VyZS5lZmZlY3Q6aG92ZXIgaDM6OmFmdGVyIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG59XHJcblxyXG5maWd1cmUuZWZmZWN0IHAge1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcclxufVxyXG5cclxuZmlndXJlLmVmZmVjdDpob3ZlciBwIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbn1cclxuLndpbmRvdy1zY3JvbGxlZCAuZm9vdGVyLXNjcm9sbC10b3Age1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYWxwaGEtaW47XHJcbiAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbHBoYS1pbjtcclxuICAgIC1vLWFuaW1hdGlvbi1uYW1lOiBhbHBoYS1pbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbHBoYS1pbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcclxufVxyXG4uZm9vdGVyLXNjcm9sbC10b3Age1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgYm90dG9tOiAyMnB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/profileDetails.ts":
  /*!***********************************!*\
    !*** ./src/app/profileDetails.ts ***!
    \***********************************/

  /*! exports provided: profileService */

  /***/
  function srcAppProfileDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "profileService", function () {
      return profileService;
    });

    var profileService = [{
      "Organization": "Perficient",
      Duration: "July 2021 – Now",
      Role: "Senior Full Stack Developer",
      Description: [{
        des: 'Lead a team of 3 in the development and delivery of the SDK and java spring SPA back-end'
      }, {
        des: 'Creating Encrypted service with Typescript, Angular version 13 (HTTP/CORE) & NPM, the requests & responses are fully typed, and swagger generated it reduces the development time and the SDK Plugin as well as creating Global error handler can be used in web and Ionic apps'
      }, {
        des: 'Those service internal details are hidden to the front-end developer Integrated the SDK Plugin to the web and Mobile applications as well done the Jasmine, Karma Unit testing'
      }, {
        des: 'Designed and developed Micro-services based applications using Java framework Spring Boot and Spring Cloud, with Encrypted JSON web service it was Decrypted in the SDK'
      }, {
        des: 'Integrated applications with various third-party services and systems Restful Apis, SOAP as well configured Dockers'
      }, {
        des: 'Coordinate with DevOps team for the CI/CD pipeline and published as an NPM Package'
      }]
    }, {
      Organization: "National Technology Centre For Ports, Waterways And Coasts (NTCPWC)",
      Duration: "May 2020 - June 2021 ",
      Role: "Full Stack Engineer",
      Description: [{
        des: 'Developing IOT based Vessel Tracking application (configure with socket and serial    controller) for android, developed in React Native (Redux & React Hooks), and hardware: GPS Class-B as well admin dashboard with Angular version 11'
      }, {
        des: "Responsible for developing User Interaction screens using Material and F design. developing Rest Api's using NodeJS and MongoDB for file storage have use S3 bucket with AUTH0 authentication"
      }, {
        des: 'Implementing map layer based on synchronized bathymetry data.'
      }, {
        des: 'Configured automated App center code push for mobile app version controlling.'
      }, {
        des: 'Hosting web app and back-end in AWS.'
      }]
    }, {
      Organization: "Wekancode Technologies",
      Duration: "July 2019 - March 2020",
      Role: "Web Developer ",
      Description: [{
        des: ' Developed web apps using Java and Dynamic Dashboard with search and date filters. entirely build from scratch on ReactJS and jQuery'
      }, {
        des: " Building CI/CD pipeline in Azure"
      }, {
        des: 'Building Jasmine and karma unit testing.'
      }, {
        des: 'Analyzed the business requirement, Participated the technical design, development and Testing various Modules.'
      }, {
        des: 'Responsible for making and securing APIs Calls to Back-end written in NodeJS.'
      }]
    }, {
      Organization: "Venpep Solutions",
      Duration: "April 2018 - July 2019",
      Role: "Fulltime - Front end web Developer",
      Description: [{
        des: 'Developing and maintaining Angular(Version 5+) based front end tasks in project.'
      }, {
        des: "Converting web app based on Zeplin or Adobe XD designs using Flex-box and meterial UI."
      }, {
        des: ' developing a CUSTOM PDF generator module for angular app, to create a dynamic pdf file based on the Input form and attached pdf file, both are combined as a single pdf file, and the design elements are generated as a PDF file it can be viewable and downloadable.'
      }, {
        des: 'Developing and Design web applications components, directives, implementation NGRX on angular based project.'
      }, {
        des: 'AS well as configured CI/CD pipeline to the Azure cloud based on the git branch'
      }]
    }, {
      Organization: "Samudra Consultants Pvt} Ltd",
      Duration: "December 2016 – March 2018",
      Role: "UI Developer",
      Description: [{
        des: 'Integrated responsive UI designs into web app using ReactJS version 15+ and Angular v2+.'
      }, {
        des: "Collaborated with team on implementing new features and UX."
      }, {
        des: 'Developed working prototypes from UI designs for cross-platform devices building with flex-box CSS.'
      }, {
        des: 'Developing and Design web applications components, directives, implementation NGRX on angular based project.'
      }, {
        des: 'worked JavaScript technologies such as Nodejs and MongoDB/SQL.'
      }]
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\karth\OneDrive\Documents\dev\datatable-react-sdk\myProfile\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map