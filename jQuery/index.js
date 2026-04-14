$(document).ready(function(){
    // $('#navsub .nsub > li').hide();
    $('#navsub .nsub > li').hide();
    

    $('#nav .nav li').mouseenter(function(e){
        e.preventDefault();
        var i = $(this).index();
        $('#navsub .nsub > li').hide();
        $('#navsub .nsub > li').eq(i).fadeIn(200);
        // console.log(i)
    });
    
    $('#navsub .nsub > li > ul > li > a').hover(
        function(){
            $(this)
            .addClass('on');
        },
        function(){
            $(this)
            .removeClass('on');
        }
    );
    
    $('#navsub .nsub > li').mouseleave(function(e){
        e.preventDefault();
        var i = $(this).index();
        $('#navsub .nsub > li').eq(i).fadeOut();
        // console.log(i)
    });
});