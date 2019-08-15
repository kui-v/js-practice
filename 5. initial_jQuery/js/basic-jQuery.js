$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function() {
    $(this).remove();
});

// line 1: selects all of <h1> - <h6> headings
//      adds value of headline to their class attributes
// line 2: selects first three list itmes and performs actions
//      1. elements hidden
//      2. elements fade into view
// line 3-5: set event listener on each <li> elements
//      user clicks on one, triggers and anon function to remove elem from page