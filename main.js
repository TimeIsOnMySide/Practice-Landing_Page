document.querySelector('#show-hide-textbox').addEventListener('click', showForm)

//Hide element on page load
document.getElementById('email-form').hidden = true;


function showForm() {
    document.getElementById('email-form').hidden = false;
    document.getElementById('show-hide-textbox').hidden = true;
}