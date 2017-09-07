/**
* Copyright (c) 2014, 2017, Oracle and/or its affiliates.
* The Universal Permissive License (UPL), Version 1.0
*/
/*
* Your dashboard ViewModel code goes here
*/
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdatetimepicker', 'ojs/ojpictochart', 'ojs/ojlegend'],
function(oj, ko, $) {

  function DashboardViewModel() {
    var self = this;

    //calender value
    this.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2017, 9, 5)));
    self.selectionValue = ko.observable('single');
    self.selectedItemsValue = ko.observableArray([]);
    self.legendSections = ko.observableArray([{items: [
      {text: "예약됨", color: "#fad55c", markerShape: "circle"},
      {text: "가능", color: "#267db3", markerShape: "circle"},
      {text: "불가능", color: "#9ccccc", markerShape: "circle"}
    ]}]);
    self.clickedButton = ko.observable("(None clicked yet)");
    self.buttonClick = function(data, event){
        self.clickedButton(event.currentTarget.id);
        return true;
    }
    var table1_1 =[];

    for ( var index=0; index<8; index++ ) {
      table1_1.push( {name: 'table1_1-'+index , color: '#267db3'} );

    }
    var table1_2 =[];

    for ( var index=0; index<8; index++ ) {
      table1_2.push( {name: 'table1_2-'+index, color: '#267db3'} );

    }
    var table2_1 =[];

    for ( var index=0; index<8; index++ ) {
      table2_1.push( {name: 'table2_1-'+index, color: '#267db3'} );

    }

    var table2_2 =[];

    for ( var index=0; index<8; index++ ) {
      table2_2.push( {name: 'table2_2-'+index, color: '#267db3' });

    }

    var table3_3 =[];

    for ( var index=0; index<3; index++ ) {
      table3_3.push( {name: 'table3_3-'+index, color: '#267db3'} );

    }

    self.pictoChartItems1_1 = ko.observableArray(table1_1);
    self.pictoChartItems1_2 = ko.observableArray(table1_2);
    self.pictoChartItems2_1 = ko.observableArray(table2_1);
    self.pictoChartItems2_2 = ko.observableArray(table2_2);
    self.pictoChartItems3_3 = ko.observableArray(table3_3);



    var selected = ['iPad'];
    self.selectedItemsValue(selected);
    $('#currentText').html("selected items: <br/>");
    $('#currentText2').html(selected);


    self.picto1Listener = function(event, ui) {
      if (ui['option'] == 'selection') {
        $('#currentText').html("selected items: <br/>");
        var items = "";
        if(ui['value']){
          for(var i = 0; i < ui['value'].length; i++){
            if(ui['value'][i])
            items += "    " + ui['value'][i] + "<br/>";
          }
          $('#currentText2').html(items);
          if (ui['value'].length == 0){$('#currentText').html("");$('#currentText2').html("");};
        }
      }
    }

    self.handleActivated = function(info) {
    };

    /**
    * Optional ViewModel method invoked after the View is inserted into the
    * document DOM.  The application can put logic that requires the DOM being
    * attached here.
    * @param {Object} info - An object with the following key-value pairs:
    * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
    * @param {Function} info.valueAccessor - The binding's value accessor.
    * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
    */
    self.handleAttached = function(info) {
      // Implement if needed
    };


    /**
    * Optional ViewModel method invoked after the bindings are applied on this View.
    * If the current View is retrieved from cache, the bindings will not be re-applied
    * and this callback will not be invoked.
    * @param {Object} info - An object with the following key-value pairs:
    * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
    * @param {Function} info.valueAccessor - The binding's value accessor.
    */
    self.handleBindingsApplied = function(info) {
      // Implement if needed
    };

    /*
    * Optional ViewModel method invoked after the View is removed from the
    * document DOM.
    * @param {Object} info - An object with the following key-value pairs:
    * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
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
  return new DashboardViewModel();
}
);
