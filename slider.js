$(function() {
    $(".card-paragraph").click(function() {

        $(this).next(".card-text").slideToggle();
    });
});
