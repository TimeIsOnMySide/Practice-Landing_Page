//Watch the button. Wait for a click
document.querySelector('#show-hide-textbox').addEventListener('click', showForm)

//Hide element on page load
document.getElementById('email-form').hidden = true;
//document.getElementById('show-hide-textbox').hidden = true;

//When the button is clicked, hide the button and show the form
function showForm() {
    document.getElementById('email-form').hidden = false;
    document.getElementById('show-hide-textbox').hidden = true;
}