$(document).ready(function () {
    let a = $(".dropdown-button");
    a.dropdown();
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0,
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        $('.carousel').carousel();
      },
    });
    $('.parallax').parallax();
});