$('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
});

$('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html($(this).html());
    $('html body .translateGeneral').hide()

    if ($(this).data("item") == "BR") {
        $('html body .translateBR').show()
        $('html body section#sobre .about.translateGeneral.translateBR').css('display', 'flex')
        $('html body section#projects .container h3.translateGeneral.translateBR').css('display', 'inline-block')
        
        loadAndExecuteScript('scripts/renderDataBR.js');
    } else if ($(this).data("item") == "US") {
        $('html body .translateUS').show()
        $('html body section#sobre .about.translateGeneral.translateUS').css('display', 'flex')
        $('html body section#projects .container h3.translateGeneral.translateBR').css('display', 'inline-block')
        loadAndExecuteScript('scripts/renderDataUS.js');
    } else if ($(this).data("item") == "PT") {
        $('html body .translateBR').show()
        $('html body section#sobre .about.translateGeneral.translateBR').css('display', 'flex')
        $('html body section#projects .container h3.translateGeneral.translateBR').css('display', 'inline-block')
        loadAndExecuteScript('scripts/renderDataBR.js');
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