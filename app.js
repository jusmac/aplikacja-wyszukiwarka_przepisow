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
        $('.add-quantity.first').after('<input class="add-quantity" type="number"  min="1" placeholder="ilosc">');
        $('.add-unit.first').after('<select class="add-unit"></select>');
        return(false);
    });
};

var removeInputRecipe = function() {
    $('.remove-ingredient-recipe').click(function() {
        var inputs = $('.add');
        if (inputs.length > 1) {
            inputs.last().remove();
            var inputs = $('.add-quantity');
        }
        ;
        if (inputs.length > 1) {
            inputs.last().remove();
            var inputs = $('.add-unit');
        }
        ;
        if (inputs.length > 1) {
            inputs.last().remove();
        }
        ;
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
                alert('B³¹d')
            }
        });
    });
};

var sendRecipe = function() {
    $('.send-recipe').click(function() {
        var ingredients = [];
        var inputs = $('.add');
        for (i = 0; i < inputs.length; i++) {
            ingredients.push(
                    $(inputs[i]).val()
                    );
        }
        recipe = {
            description: $('.add-recipe').val(),
            ingredients: ingredients,
            name: $('.add_recipe_name').val(),
        };
        $.ajax({
            type: 'POST',
            url: 'new-recipe.php',
            data: recipe,
            success: function(data) {
                console.log(data);
            },
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
    sendRecipe();
});