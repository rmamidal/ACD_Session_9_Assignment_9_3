
$(document).ready(function(){
	var user_data = "";
     
    // On Submit button click creat user data record. 
	$("#submitUser").on("click", function(e) {
		e.preventDefault();
		var first_name = $("#textFirstName").val(); // Get user first name.
		var last_name = $("#textLastName").val(); // Get user last name.
		var email_id = $("#emailEmailId").val(); // Get user email id.
		var password = $("#passPassword").val(); // Get user password.

		user_data = "<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + email_id + "</td><td>" + password + "</td></tr>";
		
		$(".table-row-header").after(user_data); // Append user data to table.
	})
});