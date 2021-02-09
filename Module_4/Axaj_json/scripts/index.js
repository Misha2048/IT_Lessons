let apiUrlBase = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";

$("#calculate").click(function (event){
	let sum = $("#sum").val();
	let currencyCode = $("#currency").val();
	let url = apiUrlBase + "?valcode=" + currencyCode + "&json";

	$.get(url, function (data) {
		console.log("Request success", data);

		let rate = data[0].rate;
		$("#result").val(rate*sum);
		}
	);
	console.log("jQuery get call OK.");
});