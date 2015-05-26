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

var downloadRecipetoSlider = function() {
    recipe = {
        name: 'Nalesniki',
        ingredients: ['mleko ', 'jajka ', 'maka ', 'sol ', 'olej '],
        description: 'Wszystkie skladniki polaczyc, np. przy pomocy miksera do uzyskania konsystencji gestej smietany.\n\
                            Rozgrzac patelnie, wylewac niewielkie porcje ciasta, rozprowadzic na calej powierzchni patelni. \n\
                            Smazyc az nalesnik bedzie odchodzil od patelni, przewrocic na druga strone.'
    };
    var onSuccess = function(data) {
        $('.cd-caption').html(data.name).addClass('cd-caption-p');
        $('.cd-caption-ingredients').html(data.ingredients).addClass('cd-caption-ingredients-p');
        $('.cd-caption-description').html(data.description).addClass('cd-caption-description-p');
        ;
    };
    $.ajax({
        type: 'POST',
        data: recipe,
        //  url: 
        success: onSuccess,
        error: function() {
            alert.$('.cd-caption').html('Przepraszamy, blad pobierania');
        }
    });
    onSuccess(recipe);
};

var downloadRecipetoModalPage = function() {
    recipe = {
        name: 'Nalesniki',
        ingredients: ['mleko ', 'jajka ', 'maka ', 'sol ', 'olej '],
        description: 'Wszystkie skladniki polaczyc, np. przy pomocy miksera do uzyskania konsystencji gestej smietany.\n\
                            Rozgrzac patelnie, wylewac niewielkie porcje ciasta, rozprowadzic na calej powierzchni patelni. \n\
                            Smazyc az nalesnik bedzie odchodzil od patelni, przewrocic na druga strone.'
    };
    var onSuccess = function(data) {
        $('.cd-testimonials-recipe-name').html(data.name).css({fontSize: '20px'});
        $('.cd-testimonials-recipe-ingredients').html(data.ingredients).css({fontSize: '15px'});
        $('.cd-testimonials-recipe-description').html(data.description);
        ;
    };
    $.ajax({
        type: 'POST',
        data: recipe,
        //  url: 
        success: onSuccess,
        error: function() {
            alert.$('.cd-caption').html('Przepraszamy, blad pobierania');
        }
    });
    onSuccess(recipe);
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
        name: 'Nalesniki',
        ingredients: ['mleko ', 'jajka ', 'maka ', 'sol ', 'olej '],
        description: 'Wszystkie skladniki polaczyc, np. przy pomocy miksera do uzyskania konsystencji gestej smietany.\n\
                            Rozgrzac patelnie, wylewac niewielkie porcje ciasta, rozprowadzic na calej powierzchni patelni. \n\
                            Smazyc az nalesnik bedzie odchodzil od patelni, przewrocic na druga strone.'
    };
    var onSuccess = function(data) {
        $('.recipe-caption').html(data.name).addClass('recipe-caption-p');
        $('.recipe-ingredients').html(data.ingredients).addClass('recipe-ingredients-p');
        $('.recipe-how-to-do').html(data.description).addClass('recipe-how-to-do-p');
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

var cdTestimonialsItemVisible = function() {
    $(document).ready(function() {
        $('.cd-testimonials-item').fadeIn(2000);
    });
};

var addBorderWidthClone = function() {
    for (i = -1; i < 2; i++) {
        var stamp = $('.cd-bazylia.first').clone().css({left: ((i+1)*11) + '%'}).removeClass('first');
        $('.cd-bazylia.first').after(stamp);
    }
};

var addBorderHeightClone = function() {
    for (i = 0; i < 1; i++) {
        var stamp = $('.cd-bazylia2.first').clone().css({top: ((i+1)*65) + 'px'}).removeClass('first');
        $('.cd-bazylia2.first').after(stamp);
    }
};

var downloadList = function() {
    recipe = {
        name: 'Nalesniki',
        ingredients: ['mleko ', 'jajka ', 'maka ', 'sol ', 'olej '],
        description: 'Wszystkie sk³adniki po³¹czyæ, np. przy pomocy miksera do uzyskania konsystencji gêstej œmietany.\n\
                            Rozgrzaæ patelniê, wylewaæ niewielkie porcje ciasta, rozprowadziæ na ca³ej powierzchni patelni. \n\
                            Sma¿yæ a¿ naleœnik bêdzie odchodzi³ od patelni, przewróciæ na drug¹ stronê.'
    };
    var onSuccess = function(data) {
        $('.list-recipes-cell-a').html(data.name).css({fontSize: '17px'});
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

var fullPageScript = function(){
    $(document).ready(function() {
    $('.fullpage').fullpage({
        css3: true,
        scrollingSpeed: 1200,
        autoScrolling: true,
        fitToSection: true,
        easing: 'easeIn',
        anchors:['#index', '#add', '#search']
    });
});
};

$(function() {
    menu();
    downloadRecipetoSlider();
    downloadRecipetoModalPage();
    newSlider();
    downloadRecipe();
    cdTestimonialsItemVisible();
    addBorderWidthClone();
    addBorderHeightClone();
    downloadList();
    fullPageScript();
});



