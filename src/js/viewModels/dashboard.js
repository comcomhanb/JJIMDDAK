/**
* Copyright (c) 2014, 2017, Oracle and/or its affiliates.
* The Universal Permissive License (UPL), Version 1.0
*/
/*
* Your dashboard ViewModel code goes here
*/
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojknockout', 'ojs/ojdatetimepicker', 'ojs/ojpictochart', 'ojs/ojlegend'],
function(oj, ko, $, app) {

  function DashboardViewModel() {
    var self = this;
    self.app = app;
    self.username = self.app.userLogin();
    var baseUrl = "https://msrapi-gse00013250.apaas.us6.oraclecloud.com/v1/";
    //  var reservationUrl = baseUrl+ "reservations/findAvailableSeats?startingTime=2017-09-07T00:01:42&endingTime=2017-09-07T00:01:42";

    var d = new Date();
    var startingTime =
    d.getFullYear() + "-" +
    ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
    ("00" + d.getDate()).slice(-2) +   "T09:00:00"

    var endingTime =
    d.getFullYear() + "-" +
    ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
    ("00" + d.getDate()).slice(-2) + "T18:01:42"

    var headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
    var reservationUrl = baseUrl+ "reservations/findAvailableSeats?startingTime="+ startingTime +"&endingTime=" + endingTime;
    self.availableSeat = [];


    //this.username = about.currentValue;
    //calender value
    self.ui = ko.observable('');
    this.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
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
      console.log(self.value());
      console.log(self.username);
      console.log(self.ui);

      return true;
    }
    self.table1_1 = [];
    self.table1_2 = [];
    self.table2_1 = [];
    self.table2_2 = [];
    self.table3_1 = [];
    self.table3_2 = [];
    self.table3_3 = [];
    self.table4_1 = [];
    self.table4_2 = [];
    self.table4_3 = [];
    self.table5_1 = [];
    self.table5_2 = [];
    self.fullTable= [self.table1_1 , self.table1_2, self.table2_1, self.table2_2, self.table3_1, self.table3_2, self.table3_3 ,self.table4_1, self.table4_2, self.table4_3,  self.table5_2, self.table5_1];

    self.fullSeat=[
      {seatNo: "12042", location: "12F South", id: 1},
      {seatNo: "12044", location: "12F South", id: 2},
      {seatNo: "12046", location: "12F South", id: 3},
      {seatNo: "12048", location: "12F South", id: 4},
      {seatNo: "12050", location: "12F South", id: 5},
      {seatNo: "12341", location: "12F South", id: 6},
      {seatNo: "12343", location: "12F South", id: 7},
      {seatNo: "12345", location: "12F South", id: 8},
      {seatNo: "12347", location: "12F South", id: 9},
      {seatNo: "12349", location: "12F South", id: 10},
      {seatNo: "12351", location: "12F South", id: 11},
      {seatNo: "12353", location: "12F South", id: 12},
      {seatNo: "12355", location: "12F South", id: 13},
      {seatNo: "12357", location: "12F South", id: 14},
      {seatNo: "12359", location: "12F South", id: 15},
      {seatNo: "12361", location: "12F South", id: 16},
      {seatNo: "12363", location: "12F South", id: 17},
      {seatNo: "12367", location: "12F South", id: 18},
      {seatNo: "12369", location: "12F South", id: 19},
      {seatNo: "12371", location: "12F South", id: 20},
      {seatNo: "12373", location: "12F South", id: 21},
      {seatNo: "12375", location: "12F South", id: 22},
      {seatNo: "12377", location: "12F South", id: 23},
      {seatNo: "12379", location: "12F South", id: 24},
      {seatNo: "12381", location: "12F South", id: 25},
      {seatNo: "12383", location: "12F South", id: 26},
      {seatNo: "12385", location: "12F South", id: 27},
      {seatNo: "12387", location: "12F South", id: 28},
      {seatNo: "12389", location: "12F South", id: 29},
      {seatNo: "12391", location: "12F South", id: 30},
      {seatNo: "12393", location: "12F South", id: 31},
      {seatNo: "12395", location: "12F South", id: 32},
      {seatNo: "12397", location: "12F South", id: 33},
      {seatNo: "12399", location: "12F South", id: 34},
      {seatNo: "12401", location: "12F South", id: 35},
      {seatNo: "12403", location: "12F South", id: 36},
      {seatNo: "12405", location: "12F South", id: 37},
      {seatNo: "12407", location: "12F South", id: 38},
      {seatNo: "12409", location: "12F South", id: 39},
      {seatNo: "12411", location: "12F South", id: 40},
      {seatNo: "12413", location: "12F South", id: 41},
      {seatNo: "12415", location: "12F South", id: 42},
      {seatNo: "12417", location: "12F South", id: 43},
      {seatNo: "12419", location: "12F South", id: 44},
      {seatNo: "12421", location: "12F South", id: 45},
      {seatNo: "12427", location: "12F South", id: 46},
      {seatNo: "12429", location: "12F South", id: 47},
      {seatNo: "12431", location: "12F South", id: 48},
      {seatNo: "12433", location: "12F South", id: 49},
      {seatNo: "12437", location: "12F South", id: 50},
      {seatNo: "12439", location: "12F South", id: 51},
      {seatNo: "12441", location: "12F South", id: 52},
      {seatNo: "12443", location: "12F South", id: 53},
      {seatNo: "12445", location: "12F South", id: 54},
      {seatNo: "12447", location: "12F South", id: 55},
      {seatNo: "12449", location: "12F South", id: 56},
      {seatNo: "12451", location: "12F South", id: 57},
      {seatNo: "12463", location: "12F South", id: 58},
      {seatNo: "12465", location: "12F South", id: 59},
      {seatNo: "12467", location: "12F South", id: 60},
      {seatNo: "12469", location: "12F South", id: 61},
      {seatNo: "12471", location: "12F South", id: 62},
      {seatNo: "12473", location: "12F South", id: 63},
      {seatNo: "12475", location: "12F South", id: 64},

      {seatNo: "12476", location: "12F South", id: 65},
      {seatNo: "12477", location: "12F South", id: 66},

      {seatNo: "12478", location: "12F South", id: 67},
      {seatNo: "12479", location: "12F South", id: 68},
      {seatNo: "12480", location: "12F South", id: 69},

      {seatNo: "12481", location: "12F South", id: "A-4"},
      {seatNo: "12482", location: "12F South", id: "A-3"},
      {seatNo: "12483", location: "12F South", id: "A-2"},
      {seatNo: "12484", location: "12F South", id: "A-1"}
    ]

    self.table1_1.size  = self.table1_2.size = self.table2_1.size = self.table2_2.size = self.table3_1.size = self.table3_2.size = 8;
    self.table3_3.size = self.table5_2.size = 4;
    self.table4_1.size = self.table4_2.size = 6;
    self.table4_3.size = 2;
    self.table5_1.size = 3;


    self.pictoChartItems1_1 = ko.observableArray(self.table1_1);
    self.pictoChartItems1_2 = ko.observableArray(self.table1_2);

    self.pictoChartItems2_1 = ko.observableArray(self.table2_1);
    self.pictoChartItems2_2 = ko.observableArray(self.table2_2);

    self.pictoChartItems3_1 = ko.observableArray(self.table3_1);
    self.pictoChartItems3_2 = ko.observableArray(self.table3_2);
    self.pictoChartItems3_3 = ko.observableArray(self.table3_3);

    self.pictoChartItems4_1 = ko.observableArray(self.table4_1);
    self.pictoChartItems4_2 = ko.observableArray(self.table4_2);
    self.pictoChartItems4_3 = ko.observableArray(self.table4_3);

    self.pictoChartItems5_1 = ko.observableArray(self.table5_1);
    self.pictoChartItems5_2 = ko.observableArray(self.table5_2);

    self.picto1Listener = function(event, ui) {

      if (ui['option'] == 'selection') {
        $('#currentText').html("선택한 좌석: <br/>");
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
    //  console.log("ui", ui)
       self.ui = ui.value;

    }

    function getAvailableSeat(){
      return new Promise( function (resolve, reject) {
        $.ajax({
          type:"GET",
          headers : headers,
          url: reservationUrl,
          data: "",
          processData: false,
          success: function(msg) {
            self.availableSeat = msg;
            for(var index = 0; index < self.availableSeat.length ; index++){
              self.availableSeat[index].color= '#267db3';
            }
            for(var i = 0; i < self.availableSeat.length; i ++){
              if(self.availableSeat[i].seatNo == self.fullSeat[i].seatNo){
                self.fullSeat[i] = self.availableSeat[i];
              }
            }
            console.log("yas!");
            resolve();
          }
        });
// fulfilled
      // } else {
      //   console.log("sad")
      //   reject();
      //   //  reject(reason); // reject
      // }

    }
  );
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
  getAvailableSeat().then(
    function(){

      var count = 0;
      var temp = [];
      for(var i = 11; i >= 0; i--){
        temp = [];
        for ( var index= (self.fullTable[i].size)-1; index >= 0; index-- ){
          self.fullTable[i].push(self.fullSeat[count]);

          count++;
        }
        self.fullTable[i] = temp;
      }
      console.log(  self.fullTable);
    }, function(){
      console.log("you failed ");

    }
  );
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
