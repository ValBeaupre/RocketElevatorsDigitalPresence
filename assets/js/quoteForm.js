$(document).ready(function() {
  var hash = window.location.hash;

  $(hash).addClass("show active");
  $(hash + "-tab-button").addClass("show active");
});

function resQuote() {
  var div =
    Number(document.getElementById("resNbApartments").value) /
    Number(document.getElementById("resNbFloors").value);

  /* Division = Elevators  */
  var elvtrs = Math.ceil(div / 6);

  /* Multipl = double */
  var mult = elvtrs * 2;

  var resFloors = document.getElementById("resNbFloors").value;
  var resBsmtFloors = document.getElementById("resNbBsmtFloors").value;
  var double;

  if (resFloors + resBsmtFloors > 20) {
    double = mult;
  } else {
    double = elvtrs;
  }

  document.getElementById("resElev").value = double;
}

function commQuote() {
  var shafts = document.getElementById("commNbElevShafts").value;
  document.getElementById("commNbElevReq").value = shafts;
}

function corpQuote() {
  var occup = document.getElementById("corpNbOccupants").value;
  var floors = document.getElementById("corpNbFloors").value;
  var bsmt = document.getElementById("corpNbBsmtFloors").value;
  var building = floors + bsmt;
  var totalOccup = occup * building;
  var elvtrs = Math.ceil(totalOccup / 1000);
  var shafts = Math.ceil(building / 20);
  var elevReq = Math.ceil(elvtrs / shafts);

  document.getElementById("corpNbElevReq").value = elevReq;
}

function hybQuote() {
  var occup = document.getElementById("hybNbOccupants").value;
  var floors = document.getElementById("hybNbFloors").value;
  var bsmt = document.getElementById("hybNbBsmtFloors").value;
  var building = floors + bsmt;
  var totalOccup = occup * building;
  var elvtrs = Math.ceil(totalOccup / 1000);
  var shafts = Math.ceil(building / 20);
  var elevReq = Math.ceil(elvtrs / shafts);

  document.getElementById("hybNbElevReq").value = elevReq;
}
