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
                alert('Wystapil blad. Prosze sprobowac za chwile');
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

var listClick = function() {
    $('.list-recipe-cell').click(function() {

    });
};

var login = function() {
    $(".button-login").click(function() {
        var login = $('.login-input').val();
        var password = $('.password-input').val();
        var dataString = 'login=' + login + '&password=' + password;

        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: dataString,
            success: function(data) {
                if (data == '0')
                    alert('Blad logowania. Sprobuj jeszcze raz');
                else
                    window.location = window.location;
            }
        });
    });
};

var registrationButton = function(){
    $('.registration-button').click(function(){
        loginData = {
            login: $('.login-registration-input').val(),
            password: $('.password-registration-input').val(),
            email: $('.email-registration-input').val()
        };
        $.ajax({
            type:'POST',
            url: 'login.php',
            data: loginData,
           success: function(data) {
                alert('Dziekuje za rejestracje');
                consol.log(data);
            },
            error: function(data) {
                alert('Wystapil blad. Prosze sprobowac za chwile');
            }  
    });
    
});
};


$(function() {
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
    listClick();
    login();
    registrationButton();
});