/**
* Copyright (c) 2014, 2017, Oracle and/or its affiliates.
* The Universal Permissive License (UPL), Version 1.0
*/
/*
* Your incidents ViewModel code goes here
*/
define(['ojs/ojcore', 'knockout', 'jquery', 'appController',
'hammerjs', 'ojs/ojknockout', 'ojs/ojjquery-hammer', 'ojs/ojswipetoreveal', 'ojs/ojlistview', 'ojs/ojdatacollection-common', 'ojs/ojbutton', 'ojs/ojmenu'],
function(oj, ko, $, app) {

  function IncidentsViewModel() {
    var self = this;
    self.app = app;

    // Below are a subset of the ViewModel methods invoked by the ojModule binding
    // Please reference the ojModule jsDoc for additionaly available methods.
    var baseUrl = "https://msrapi-gse00013250.apaas.us6.oraclecloud.com/v1/";
    var reservationUrl = baseUrl+ "reservations/findByUser/"+ self.app.userLogin();

    var headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
    console.log(reservationUrl);

    /**
    * Optional ViewModel method invoked when self ViewModel is about to be
    * used for the View transition.  The application can put data fetch logic
    * here that can return a Promise which will delay the handleAttached function
    * call below until the Promise is resolved.
    * @param {Object} info - An object with the following key-value pairs:
    * @param {Node} info.element - DOM element or where the binding is attached. self may be a 'virtual' element (comment node).
    * @param {Function} info.valueAccessor - The binding's value accessor.
    * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
    * the promise is resolved
    */

    self.allItems = ko.observableArray([{"id": "email_1", "title": "4월 10일 금요일", "from": "좌석번호 : 14230", "content": "이번주"},
    {"id": "email_2", "title": "4월 14일 수요일", "from": "좌석번호 : 14231", "content": "다음주"},
    {"id": "email_3", "title": "4월 16일 목요일", "from": "좌석번호 : 14214", "content": "다음주"},
    {"id": "email_4", "title": "4월 20일 금요일", "from": "좌석번호 : 14130", "content": "다음주"},
    {"id": "email_5", "title": "4월 36일 화요일", "from": "좌석번호 : 12230", "content": "다다음주"},
    {"id": "email_6", "title": "Friend looking for internship", "from": "좌석번호 : 14230", "content": "이번주"},
    {"id": "email_7", "title": "Re: Feedback from architecture dfsfreview", "from": "Nina Evans", "content": "이번주"},
    {"id": "email_8", "title": "Re: Customer success stories", "from": "Julia Chen", "content": "이번주"}
  ]);
  self.dataSource = new oj.ArrayTableDataSource(self.allItems, {idAttribute: "id"});

  self.action = ko.observable("");

  self.handleReady = function()
  {
    // register swipe to reveal for all new list items
    $("#listview").find(".item-marker").each(function(index)
    {
      var item = $(this);
      var id = item.prop("id");
      var startOffcanvas = item.find(".oj-offcanvas-start").first();
      var endOffcanvas = item.find(".oj-offcanvas-end").first();

      // setup swipe actions
      oj.SwipeToRevealUtils.setupSwipeActions(startOffcanvas);
      oj.SwipeToRevealUtils.setupSwipeActions(endOffcanvas);

      // make sure listener only registered once
      endOffcanvas.off("ojdefaultaction");
      endOffcanvas.on("ojdefaultaction", function()
      {
        self.handleDefaultAction(item);
      });
    });
    $.ajax({
      type:"GET",
      headers : headers,
      url: reservationUrl,
      data: "",
      processData: false,
      success: function(msg) {
        //    $("#results").append("The result =" + StringifyPretty(msg));
        console.log("msg ", msg);
      }
      // error: function(msg) {
      //     console.log("adfaf");
      // }
    });
    self.allItems =
    console.log();

  };

  self.handleDestroy = function()
  {
    // register swipe to reveal for all new list items
    $("#listview").find(".item-marker").each(function(index)
    {
      var startOffcanvas = $(this).find(".oj-offcanvas-start").first();
      var endOffcanvas = $(this).find(".oj-offcanvas-end").first();

      oj.SwipeToRevealUtils.tearDownSwipeActions(startOffcanvas);
      oj.SwipeToRevealUtils.tearDownSwipeActions(endOffcanvas);
    });
  };

  self.handleMenuBeforeOpen = function(event, ui)
  {
    var target = event.originalEvent.target;
    var context = $("#listview").ojListView("getContextByNode", target);
    if (context != null)
    {
      self.currentItem = $("#"+context['key']);
    }
    else
    {
      self.currentItem = null;
    }
  };

  self.handleMenuItemSelect = function(event, ui)
  {
    var id = ui.item.prop("id");
    if (id == "read")
    self.handleRead();
    else if (id == "more1" || id == "more2")
    self.handleMore();
    else if (id == "tag")
    self.handleFlag();
    else if (id == "delete")
    self.handleTrash();
  };

  self.closeToolbar = function(which, item)
  {
    var toolbarId = "#"+which+"_toolbar_"+item.prop("id");
    var drawer = {"displayMode": "push", "selector": toolbarId};

    oj.OffcanvasUtils.close(drawer);
  };

  self.handleAction = function(which, action, event)
  {
    if (event != null)
    {
      self.currentItem = $(event.target).closest(".item-marker");

      // offcanvas won't be open for default action case
      if (action != "default")
      self.closeToolbar(which, self.currentItem);
    }

    if (self.currentItem != null)
    self.action("Handle "+action+" action on: "+self.currentItem.prop("id"));
  };

  self.handleRead = function(data, event)
  {
    self.handleAction("first", "read", event);
  };

  self.handleMore = function(data, event)
  {
    self.handleAction("second", "more", event);
  };

  self.handleFlag = function(data, event)
  {
    self.handleAction("second", "flag", event);
  };

  self.handleTrash = function(data, event)
  {

    $.ajax({
      type:"GET",
      headers : headers,
      url: reservationUrl,
      data: "",
      processData: false,
      success: function(msg) {
        //    $("#results").append("The result =" + StringifyPretty(msg));
        console.log("msg ", msg);
      }

    });
    self.handleAction("second", "trash", event);

    //self.remove(self.currentItem);
  };

  self.handleDefaultAction = function(item)
  {
    self.currentItem = item;
    self.handleAction("second", "default");
    self.remove(item);
  };

  self.remove = function(item)
  {
    // unregister swipe to reveal for removed item
    var startOffcanvas = item.find(".oj-offcanvas-start").first();
    var endOffcanvas = item.find(".oj-offcanvas-end").first();

    oj.SwipeToRevealUtils.tearDownSwipeActions(startOffcanvas);
    oj.SwipeToRevealUtils.tearDownSwipeActions(endOffcanvas);

    self.allItems.remove(function(current)
    {
      return (current.id == item.prop("id"));
    });
  };
  self.handleActivated = function(info) {

  };

  /**
  * Optional ViewModel method invoked after the View is inserted into the
  * document DOM.  The application can put logic that requires the DOM being
  * attached here.
  * @param {Object} info - An object with the following key-value pairs:
  * @param {Node} info.element - DOM element or where the binding is attached.  may be a 'virtual' element (comment node).
  * @param {Function} info.valueAccessor - The binding's value accessor.
  * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
  */
  self.handleAttached = function(info) {
    //  $('#listview').ojListView('whenReady').then(model.handleReady);
  };


  /**
  * Optional ViewModel method invoked after the bindings are applied on self View.
  * If the current View is retrieved from cache, the bindings will not be re-applied
  * and self callback will not be invoked.
  * @param {Object} info - An object with the following key-value pairs:
  * @param {Node} info.element - DOM element or where the binding is attached. self may be a 'virtual' element (comment node).
  * @param {Function} info.valueAccessor - The binding's value accessor.
  */
  self.handleBindingsApplied = function(info) {
    $('#listview').ojListView('whenReady').then(self.handleReady);

  };

  /*
  * Optional ViewModel method invoked after the View is removed from the
  * document DOM.
  * @param {Object} info - An object with the following key-value pairs:
  * @param {Node} info.element - DOM element or where the binding is attached. self may be a 'virtual' element (comment node).
  * @param {Function} info.valueAccessor - The binding's value accessor.
  * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
  */
  self.handleDetached = function(info) {
    // Implement if needed
  };
}

/*
* Returns a constructor for the ViewModel so that the ViewModel is constrcuted
* each time the view is displayed.  Return an instance of the ViewModel if
* only one instance of the ViewModel is needed.
*/
return new IncidentsViewModel();
}
);
