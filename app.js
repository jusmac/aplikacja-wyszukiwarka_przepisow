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
        $(".shortcut").animate({opacity: '-=1'}, 'slow');
    });
    $(".button-close").on("click", function() {
        $(".left-panel").animate({opacity: '-=1'}, 'slow');
        $(".shortcut").animate({opacity: '+=1'}, 'slow');
    });
};

var addInput = function() {
    $('.add-ingredient').click(function() {
        $('.ingredient.first').after($('#newInput').html());
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

var searchRecipe = function() {
    $('.button-search').click(function() {
        $.ajax({
            type: 'GET',
            url: 'recipes.php',
            //data: ???
            error: function(data) {
                alert('Wystapil blad. Prosze sprobowac za chwile')
            }
        });
    });
};

var addInputRecipe = function() {
    $('.add-ingredient-recipe').click(function() {
        $('.add-new-ingredient.first').after($('#new-ingredient').html());
        return(false);
    });
};

var removeInputRecipe = function() {
    $('.remove-ingredient-recipe').click(function() {
        var inputs = $('.add');
        if (inputs.length > 1) {
            inputs.last().remove();
        }
        ;
        var inputs = $('.add-quantity');
        if (inputs.length > 1) {
            inputs.last().remove();
        }
        ;
        var inputs = $('.add-unit');
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
            name: $('.add-recipe-name').val(),
        };
        $.ajax({
            type: 'POST',
            url: 'new-recipe.php',
            data: recipe,
            success: function(data) {
                alert('Przepis zostal wyslany. Dziekuje za pomoc w tworzeniu bazy przepisow!');
            },
            error: function(data) {
                alert('Wystapil blad. Prosze sprobowac za chwile')
            }
        });
    });
};

var searchAddInput = function() {
    $('.search-add-ingredient').click(function() {
        $('.search-ingredient.first').after('<input class="search-ingredient" type="search" placeholder="dodaj skladnik">');
        return(false);
    });
};

var searchRemoveInput = function() {
    $('.search-remove-ingredient').click(function() {
        var inputs = $('.search-ingredient');
        if (inputs.length > 1) {
            inputs.last().remove();
        }
    });
};

var newSlider = function() {
    $('.cd-testimonials-wrapper').flexslider({
        //declare the slider items
        selector: ".cd-testimonials > li",
        animation: "slide",
        //do not add navigation for paging control of each slide
        controlNav: false,
        slideshow: false,
        //Allow height of the slider to animate smoothly in horizontal mode
        smoothHeight: true,
        start: function() {
            $('.cd-testimonials').children('li').css({
                'opacity': 1,
                'position': 'relative'
            });
        }
    });
};


var downloadRecipe = function() {
    recipe = {
        name: 'Naleœniki',
        ingredients: ['mleko ', 'jajka ', 'maka ', 'sol ', 'olej '],
        description: 'Wszystkie sk³adniki po³¹czyæ, np. przy pomocy miksera do uzyskania konsystencji gêstej œmietany.\n\
                            Rozgrzaæ patelniê, wylewaæ niewielkie porcje ciasta, rozprowadziæ na ca³ej powierzchni patelni. \n\
                            Sma¿yæ a¿ naleœnik bêdzie odchodzi³ od patelni, przewróciæ na drug¹ stronê.'
    };
    var onSuccess = function(data) {
        $('.recipe-caption').html(data.name);
        $('.recipe-ingredients').html(data.ingredients);
        $('.recipe-how-to-do').html(data.description);
        ;
    };
    $.ajax({
        type: 'POST',
        data: recipe,
        //  url: 
        success: onSuccess,
        error: function() {
            alert.$('.recipe-caption').html('Przepraszamy, blad pobierania');
        }
    });
    onSuccess(recipe);
};

var buttonToModalPage = function() {
    $('.see-all').click(function() {
        window.location = "modal-page.html";
    });
};
var closeModalPage = function() {
    $('.close-modal-page').click(function() {
        window.location = "index.html";
    });
};

var cdTestimonialsItemVisible = function() {
    $(document).ready(function() {
        $('.cd-testimonials-item').fadeIn(2000);
    });
};

var addBorderWidthClone = function() {
    for (i = -1; i < 3; i++) {
        var stamp = $('.cd-bazylia.first').clone().css({left: ((i+1)*11) + '%'}).removeClass('first');
        $('.cd-bazylia.first').after(stamp);
    }
};

var addBorderHeightClone = function() {
    for (i = 0; i < 2; i++) {
        var stamp = $('.cd-bazylia2.first').clone().css({top: ((i+1)*65) + 'px'}).removeClass('first');
        $('.cd-bazylia2.first').after(stamp);
    }
};

$(function() {
    menu();
    panel();
    addInput();
    removeInput();
    searchRecipe();
    downloadBook();
    addInputRecipe();
    removeInputRecipe();
    sendRecipe();
    searchAddInput();
    searchRemoveInput();
    newSlider();
    downloadRecipe();
    buttonToModalPage();
    closeModalPage();
    cdTestimonialsItemVisible();
    addBorderWidthClone();
    addBorderHeightClone();
});



