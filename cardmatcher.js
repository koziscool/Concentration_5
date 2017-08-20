
$(document).ready( function() {
    $('#grid-size').focus();
    $('input[type=submit]').click( function(e) {
        e.preventDefault();
        var size = $('#grid-size').val();
        matcherController.init(size);
        $(this).closest('form').hide();
        matcherView.updateGameView();
    });
});