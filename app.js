const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = formControl.querySelector("small");
	small.innerText = message;
}

//show success outline
function showSucces(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

//check Email is valid
function checkEmail(input) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSucces(input);
	} else {
		showError(input, "Emain is not valid");
	}
}

//check required fileds
function checkRequired(inputArr) {
	inputArr.forEach((input) => {
		if (input.value.trim() === "") {
			showError(input, `${input.id} is required`);
		} else {
			showSucces(input);
		}
	});
}

//ckeck length input
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${input.id} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${input.id} must be at least ${max} characters`);
	} else {
		showSucces(input);
	}
}

//check passwords match
function checkPasswords(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, "passwords don't match ");
	}
}

//event Listenners
form.addEventListener("submit", function(e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 12);
	checkLength(password, 6, 30);
	checkEmail(email);
	checkPasswords(password, password2);
});
