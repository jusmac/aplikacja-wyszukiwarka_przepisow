var menu = function() {
    $('ul.menu li').on('mouseenter', function(event) {
        $(event.target).children('ul').slideDown('fast');
        $(event.target).addClass('menu-hover');
    });
    $('ul.menu li').on('mouseleave', function(event) {
        $(event.target).children('ul').slideUp('fast');
        $(event.target).removeClass('menu-hover');
    });
};

var panel = function() {
    $(".open").on("click", function() {
        $(".left-panel").animate({opacity: '+=1'}, 'slow');
        $(".open").animate({opacity: '-=1'}, 'slow');
    });
    $(".button-close").on("click", function() {
        $(".left-panel").animate({opacity: '-=1'}, 'slow');
        $(".open").animate({opacity: '+=1'}, 'slow');
    });
};

var addInput = function() {
    $('.add-ingredient').click(function() {
        $('.ingredient.first').after('<input class="ingredient" type="search" placeholder="dodaj skladnik">');
        return(false);
    });
};

var removeInput = function() {
    $('.remove-ingredient').click(function() {
        var inputs = $('.ingredient');
        if (inputs.length > 1) {
            inputs.last().remove();
        }
    });
};

var addInputRecipe = function() {
    $('.add-ingredient-recipe').click(function() {
        $('.add.first').after('<input class="add" type="text" placeholder="skladnik">');
        return(false);
    });
};

var removeInputRecipe = function() {
    $('.remove-ingredient-recipe').click(function() {
        var inputs = $('.add');
        if (inputs.length > 1) {
            inputs.last().remove();
        }
    });
};

var downloadBook = function() {
    $('.download-book').click(function() {
        $.ajax({
            type: 'GET',
            url: 'skladniki.php',
            success: function(data) {
                console.log(data);
            },
            error: function(data) {
                alert('B��d')
            }
        });
    });
};



$(function() {
    menu();
    panel();
    addInput();
    removeInput();
    downloadBook();
    addInputRecipe();
    removeInputRecipe();
});