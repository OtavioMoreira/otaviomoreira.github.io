$('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
});

// $('.price').attr('data-currency', 'RUB');

$('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html($(this).html());

    if ($(this).data("item") == "RUB") {
        console.log('RUB');
    } else if ($(this).data("item") == "UAH") {
        console.log('UAH');
    } else {
        console.log('USD');
    }
//         if ($(this).data("item") == "RUB") {
//             $('.price').attr('data-currency', 'RUB');
//             $('.currency').text('руб.');

//         } else if ($(this).data("item") == "UAH") {
//             $('.price').attr('data-currency', 'UAH');
//             $('.currency').text('грн.');

//         } else {
//             $('.price').attr('data-currency', 'USD');
//             $('.currency').text('долл.');
//         }
  

  
});

$(document).on('keyup', function(evt) {
    if ((evt.keyCode || evt.which) === 27) {
        $('.dropdown').removeClass('open');
    }
});

$(document).on('click', function(evt) {
    if ($(evt.target).closest(".dropdown > .caption").length === 0) {
        $('.dropdown').removeClass('open');
    }
});