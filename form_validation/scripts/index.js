$(document).ready(function() {
	$("input[name='done']").bind("click", function() {
		//setup error fields
		let username_error = $("span[name='username_error']");
		let age_error = $("span[name='age_error']");
		let password_error = $("span[name='password_error']");
		let gender_error = $("span[name='gender_error']");
		let message_error = $("span[name='message_error']");
		username_error.text("");
		age_error.text("");
		password_error.text("");
		gender_error.text("");
		message_error.text("");


		//getting userdata
		let username = $("input[name='username']").val();
		let age = $("input[name='age']").val();
		let password = $("input[name='password']").val();
		let gender = $("input[name='gender']:checked").val();
		let remme = $("input[name='remember_me']");
		let town = $("select[name='town']").val();
		let message = $("textarea[name='message']").val();

		let data_block = $("div#userdata");

		let error = false; //to check form validation

		//form validation
		if(!username) {
			error = true;
			username_error.text("Enter username, please");
		}
		if(!age) {
			error = true;
			age_error.text("Enter your age, please");
		}
		if(!password) {
			error = true;
			password_error.text("Enter password, please");
		}
		if(!gender) {
			error = true;
			gender_error.text("Choose gender, please");
		}
		if(!message) {
			error = true;
			message_error.text("Enter message, please");
		}

		//if data validated
		if(!error) {
			data_block.empty();
			data_block.append("Data validated:<br/>Username: " + username + "<br/>Age: " + age + "<br/>Password " + password + "<br/>Gender: " + gender + "<br/>Remember me: " + remme.is(":checked") + "<br/>Town: " + town + "<br/>Message: " + message + "<br/>");
		}

	});
});