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
  var shafts = Number(document.getElementById("commNbElevShafts").value);
  document.getElementById("commNbElevReq").value = shafts;

  var rdoStd = document.getElementById("commStandard").checked;
  var rdoPrem = document.getElementById("commPremium").checked;
  var rdoExc = document.getElementById("commExcelium").checked;
  var commPriceStd = shafts * 7565 * 1.1;
  var commPricePrem = shafts * 12345 * 1.13;
  var commPriceExc = shafts * 15400 * 1.16;

  if (rdoStd === true) {
    $("#commPrice").val(Math.ceil(commPriceStd));
  }
  if (rdoPrem === true) {
    $("#commPrice").val(Math.ceil(commPricePrem));
  }
  if (rdoExc === true) {
    $("#commPrice").val(Math.ceil(commPriceExc));
  }
}

function corpQuote() {
  var occup = Number(document.getElementById("corpNbOccupants").value);
  var floors = Number(document.getElementById("corpNbFloors").value);
  var bsmt = Number(document.getElementById("corpNbBsmtFloors").value);
  var building = floors + bsmt;
  var totalOccup = occup * building;
  var elvtrs = Math.ceil(totalOccup / 1000);
  var shafts = Math.ceil(building / 20);
  var elevShafts = Math.ceil(elvtrs / shafts);
  var elevReq = shafts * elevShafts;

  document.getElementById("corpNbElevReq").value = elevReq;

  var rdoStd = document.getElementById("corpStandard").checked;
  var rdoPrem = document.getElementById("corpPremium").checked;
  var rdoExc = document.getElementById("corpExcelium").checked;
  var corpPriceStd = shafts * 7565 * 1.1;
  var corpPricePrem = shafts * 12345 * 1.13;
  var corpPriceExc = shafts * 15400 * 1.16;

  if (rdoStd === true) {
    $("#corpPrice").val(Math.ceil(corpPriceStd));
  }
  if (rdoPrem === true) {
    $("#corpPrice").val(Math.ceil(corpPricePrem));
  }
  if (rdoExc === true) {
    $("#corpPrice").val(Math.ceil(corpPriceExc));
  }
}

function hybQuote() {
  var occup = Number(document.getElementById("hybNbOccupants").value);
  var floors = Number(document.getElementById("hybNbFloors").value);
  var bsmt = Number(document.getElementById("hybNbBsmtFloors").value);
  var building = floors + bsmt;
  var totalOccup = occup * building;
  var elvtrs = Math.ceil(totalOccup / 1000);
  var shafts = Math.ceil(building / 20);
  var elevShafts = Math.ceil(elvtrs / shafts);
  var elevReq = shafts * elevShafts;

  document.getElementById("hybNbElevReq").value = elevReq;

  var rdoStd = document.getElementById("hybStandard").checked;
  var rdoPrem = document.getElementById("hybPremium").checked;
  var rdoExc = document.getElementById("hybExcelium").checked;
  var hybPriceStd = shafts * 7565 * 1.1;
  var hybPricePrem = shafts * 12345 * 1.13;
  var hybPriceExc = shafts * 15400 * 1.16;

  if (rdoStd === true) {
    $("#hybPrice").val(Math.ceil(hybPriceStd));
  }
  if (rdoPrem === true) {
    $("#hybPrice").val(Math.ceil(hybPricePrem));
  }
  if (rdoExc === true) {
    $("#hybPrice").val(Math.ceil(hybPriceExc));
  }
}
