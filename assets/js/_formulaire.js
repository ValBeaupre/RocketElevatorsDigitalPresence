$(document).ready(function() {
  var hash = window.location.hash;

  $(hash).addClass("show active");
  $(hash + "-tab-button").addClass("show active");
});

/* 
$(document).ready(function() {
  var hash = window.location.hash;
  
  $(hash).addClass("show active");
  $(hash + "-tab-button").addClass("show active");
  

  if (hash === "#commercial") {
    console.log("je suis sur commercial");
    $("#commercial").addClass("show active");
    $("#commercial-tab-button").addClass("show active");
  }
  if (hash === "#residential") {
    $("#residential").addClass("show active");
    $("#residential-tab-button").addClass("show active");
  } 
} */

/* function resQuote() {
  var nbApart = parseInt($("#resNbApartments").val()) || 0;
  var nbFloors = parseInt($("#resNbFloors").val()) || 0;
  var nbBsmtFloors = parseInt($("#resNbBsmtFloors").val()) || 0;
  console.log(nbApart, nbFloors, nbBsmtFloors);
}
*/
/* function getQuantity() {
  //Assume form with id="theform"
  var theForm = document.forms["cakeform"];
  //Get a reference to the TextBox
  var quantity = theForm.elements["quantity"];
  var howmany = 0;
  //If the textbox is not blank
  if (quantity.value != "") {
    howmany = parseInt(quantity.value);
  }
    return howmany;
  }
  */

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
  console.log("Toto"); //parseInt($("#commNbElevShafts")
}

function corpQuote() {
  Number(document.getElementById("corpNbOccupants").value) *
    (Number(document.getElementById("corpNbFloors").value) +
      Number(document.getElementById("corpNbBsmtFloors").value));
}

/*   if (
    $("#resNbAppartments").val() && $("#resNbFloors").val() && $("#resNbBsmtFloors").val()
  ) {     else {
      $("#resElev").val("");
      $("#resPrice").val("");
  }
 */

/*     var nbApart = parseInt($("#resNbApartments").val()) || 0;
    var nbFloors = parseInt($("#resNbFloors").val()) || 0;
    var nbBsmtFloors = parseInt($("#resNbBsmtFloors").val()) || 0;
    var rdoStd = getElementById("resStandard").value().checked;
    var rdoPrem = getElementById("resPremium").value().checked;
    var rdoExc = getElementById("resExcelium").value().checked;
    consol.log(nbApart, nbFloors, nbBsmtFloors);
 */
/*     var resElev = nbApart() / nbFloors() / 6 (Math.ceil(resElev));
    
    var resPriceStd = resElev() * 7565 * 1.1);
    var resPricePrem = resElev() * 12345 * 1.13;
    var resPriceExc = resElev() * 15400 * 1.16;
 */

/*     if $("#resNbFloors").val() > 20 

    if (rdoStd === true) {
        $("#resPrice") = var(totalStd).val(resPriceStd);
    }

    if (rdoPrem === true) {}

    if (rdoExc === true) {}
    
  }
}

function commQuote() {
    var nbTenants = parseInt($("comNbTenants").val()) || 0; */
