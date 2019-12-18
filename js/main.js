var $ = function (id) {
    return document.getElementById(id);
}
var calculate_click = function() {
	var height = parseFloat( $("height").value );
	var weight = parseFloat( $("weight").value );
	
	$("calculatedBMI").value = "";
	
	
	calculatedBMI =(Math.round((weight * 703) / (height * height)));
		
	$("calculatedBMI").value = calculatedBMI.toFixed(2);
}



window.onload = function () {
    $("calculate").onclick = calculate_click;
	
}


