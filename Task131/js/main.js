function validate_form ( )
		{				
			$(".error").hide();
			valid = true;

			if ( document.contact_form.contact_name.value == "" )
			{
				$('[name="contact_name"]').parent().siblings().last().show();
				valid = false;
			}

			if ( ( document.contact_form.gender[0].checked == false ) && ( document.contact_form.gender[1].checked == false ) )
			{
				$('[name="gender"]').parent().siblings().last().show();
				valid = false;
			}

			if ( document.contact_form.age.selectedIndex == 0 )
			{
				$('[name="age"]').parent().siblings().last().show();
				valid = false;
			}

			if ( document.contact_form.terms.checked == false )
			{
				$('[name="terms"]').parent().siblings().last().show();
				valid = false;
			}
			if ( document.contact_form.textarea.value == "" )
			{
				$('[name="textarea"]').parent().siblings().last().show();
				valid = false;
			}
			var x=document.forms["contact_form"]["contact_name"].value;
			if (!/^[A-Z][a-z]+$/.test(x)){
				alert("Invalid Name. Please enter smth like'John'.");
				return false;
			}
			return valid;
		}
function validate(){
			var y=document.forms["form"]["email"].value;
			at=y.indexOf("@");
			dot=y.indexOf(".");
			if (at<1 || dot<1){
				alert("Invalid Email Address. Please use '@' and '.' symbols to write it correctly.");
				return false;
			}
			var x=document.forms["form"]["firstname"].value;
			if (!/^[A-Z][a-z]+$/.test(x)){
				alert("Invalid First Name. Please enter smth like'John'.");
				return false;
			}
			var x=document.forms["form"]["lastname"].value;
			if (!/^[A-Z][a-z]+$/.test(x)){
				alert("Invalid Last Name. Please enter smth like'John'.");
				return false;
			}
		}
	function validation(){
		var x=document.forms["form"]["firstname"].value;
			if (!/^[A-Z][a-z]+$/.test(x)){
				alert("Invalid First Name. Please enter smth like'John'.");
				return false;
			}
	}