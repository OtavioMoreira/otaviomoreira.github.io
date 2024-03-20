$('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
});

// $('.price').attr('data-currency', 'RUB');

$('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html($(this).html());

    if ($(this).data("item") == "BR") {
        console.log('entrou', 'BR')
        loadAndExecuteScript('renderDataBR.js');
        console.log('terminou', 'BR')
    } else if ($(this).data("item") == "US") {
        console.log('entrou', 'US')
        loadAndExecuteScript('renderDataUS.js');
        console.log('terminou', 'US')
    } else if ($(this).data("item") == "PT") {
        console.log('entrou', 'PT')
        loadAndExecuteScript('renderDataBR.js');
        console.log('terminou', 'PT')
    }
});

// Function to load and execute the JavaScript file
function loadAndExecuteScript(url) {
    // Load the JavaScript file content using fetch
    fetch(url)
    .then(response => {
        // Check if the request response was successful
        if (!response.ok) {
            throw new Error('Error loading JavaScript file');
        }
        // Return the response body as text
        return response.text();
    })
    .then(script => {
        // Execute the loaded JavaScript code
        eval(script);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}

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