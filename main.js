//Sign up button!

//Watch the button. Wait for a click
document.querySelector('#show-hide-textbox').addEventListener('click', showForm)

//Hide element on page load
document.getElementById('email-form').hidden = true;

//When the button is clicked, hide the button and show the form
function showForm() {
    document.getElementById('email-form').hidden = false;
    document.getElementById('show-hide-textbox').hidden = true;
}

//======================================================================

//Smooth Scrolling

function scrollFunction1() {
    let e = document.getElementById('section1');
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  function scrollFunction2() {
    let e = document.getElementById('section2');
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'center'
    });
  }