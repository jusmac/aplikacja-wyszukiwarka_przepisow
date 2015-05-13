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
        $('.add-ingredient').click(function(){
            $('form').append('<input class="ingredient" type="search" placeholder="dodaj skladnik">');
            return(false);
        });
};

var removeInput = function(){
    $('.remove-ingredient').click(function(){
        var inputs = $('input');
        if(inputs.length > 1) {
            inputs.last().remove();
        }
    });
};

var slideShow = function() {
}

var downloadBook = function(){
    $('.download-book').click(function(){
        $.ajax({
            type: 'GET',
            url: 'book.txt',
             success: function(data){
                 console.log(data);
             }
        });
    });
};
               
               
$(function(){
    menu();
    panel();
    addInput();
    removeInput();
    slideShow();
    downloadBook();
});