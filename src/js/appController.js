/**
* Copyright (c) 2014, 2017, Oracle and/or its affiliates.
* The Universal Permissive License (UPL), Version 1.0
*/
/*
* Your application specific code will go here
*/
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource'],
function(oj, ko) {
  function ControllerViewModel() {
    var self = this;

    // Media queries for repsonsive layouts
    var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
    self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    // Router setup
    self.router = oj.Router.rootInstance;
    self.router.configure({
      'empty': {label: 'BeforeLogin', isDefault: true},
      'dashboard': {label: '나의예약'},
      'incidents': {label: '예약하기'},
      //  'customers': {label: '예약취소'},
      'about': {label: 'Chat'}
    });

    oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

    // Navigation setup
    var navData = [
      {name: '예약하기', id: 'dashboard',
      iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-home-icon-24'}
      ,
      {name: '히스토리', id: 'incidents',
      iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'},
      // {name: '예약취소', id: 'customers',
      //  iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-garbage-icon-24'},
      {name: 'Chat', id: 'about',
      iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-person-icon-24'}
    ];
    self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});
    //
    self.showDetails =ko.observable([]);
    // Header
    // Application Name used in Branding Area
    self.appName = ko.observable("찜!딱!");
    self.router.go('dashboard');
    self.userLogin = ko.observable("sung.hye.jeon@oracle.com");
  //  self.router.go('dashboard');


    // Footer
    function footerLink(name, id, linkTarget) {
      this.name = name;
      this.linkId = id;
      this.linkTarget = linkTarget;
    }
    self.footerLinks = ko.observableArray([
      new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
      new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
      new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
      new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
      new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
    ]);
  }

  return new ControllerViewModel();
}
);
