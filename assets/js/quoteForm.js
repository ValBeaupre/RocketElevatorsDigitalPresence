$(document).ready(function() {
  var hash = window.location.hash;

  $(hash).addClass("show active");
  $(hash + "-tab-button").addClass("show active");
});

function resQuote() {
  var resFloors = Number(document.getElementById("resNbFloors").value);
  var div =
    Number(document.getElementById("resNbApartments").value) /
    Number(document.getElementById("resNbFloors").value);

  /* Division = Elevators  */
  var elvtrs = Math.ceil(div / 6);

  elvtrs *= Math.ceil(resFloors / 20);

  document.getElementById("resElev").value = elvtrs;

  var rdoStd = document.getElementById("resStandard").checked;
  var rdoPrem = document.getElementById("resPremium").checked;
  var rdoExc = document.getElementById("resExcelium").checked;
  var resPriceStd = elvtrs * 7565 * 1.1;
  var resPricePrem = elvtrs * 12345 * 1.13;
  var resPriceExc = elvtrs * 15400 * 1.16;

  if (rdoStd === true) {
    $("#resPrice").val(Math.ceil(resPriceStd));
  }
  if (rdoPrem === true) {
    $("#resPrice").val(Math.ceil(resPricePrem));
  }
  if (rdoExc === true) {
    $("#resPrice").val(Math.ceil(resPriceExc));
  }
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
