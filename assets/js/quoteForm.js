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
  var resCommStd = shafts * 7565 * 1.1;
  var resCommPrem = shafts * 12345 * 1.13;
  var resCommExc = shafts * 15400 * 1.16;

  if (rdoStd === true) {
    $("#commPrice").val(Math.ceil(resCommStd));
  }
  if (rdoPrem === true) {
    $("#commPrice").val(Math.ceil(resCommPrem));
  }
  if (rdoExc === true) {
    $("#commPrice").val(Math.ceil(resCommExc));
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
  var resCorpStd = shafts * 7565 * 1.1;
  var resCorpPrem = shafts * 12345 * 1.13;
  var resCorpExc = shafts * 15400 * 1.16;

  if (rdoStd === true) {
    $("#corpPrice").val(Math.ceil(resCorpStd));
  }
  if (rdoPrem === true) {
    $("#corpPrice").val(Math.ceil(resCorpPrem));
  }
  if (rdoExc === true) {
    $("#corpPrice").val(Math.ceil(resCorpExc));
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
  var elevReq = Math.ceil(elvtrs / shafts);

  document.getElementById("hybNbElevReq").value = elevReq;

  var rdoStd = document.getElementById("hybStandard").checked;
  var rdoPrem = document.getElementById("hybPremium").checked;
  var rdoExc = document.getElementById("hybExcelium").checked;
  var resHybpStd = shafts * 7565 * 1.1;
  var resHybPrem = shafts * 12345 * 1.13;
  var resHybExc = shafts * 15400 * 1.16;

  if (rdoStd === true) {
    $("#corpPrice").val(Math.ceil(resCorpStd));
  }
  if (rdoPrem === true) {
    $("#corpPrice").val(Math.ceil(resCorpPrem));
  }
  if (rdoExc === true) {
    $("#corpPrice").val(Math.ceil(resCorpExc));
  }
}
