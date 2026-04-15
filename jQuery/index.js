$(document).ready(function(){
    // $('#navsub .nsub > li').hide();
    $('#navsub .nsub > li').hide();
    

    $('#nav .nav li').mouseenter(function(){
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

    var check = $('#bgbtn > li');
    var vis = $('#bggroup > .bgimg > li');
    var current = 0;
    var setintervalId;

    check.click(function(e){
        e.preventDefault();

        var tg = $(this);
        var i = $(this).index();
        // var mo = i*(-100);

        check.removeClass('on');
        tg.addClass('on');

        move(i);
    });

    $('#bggroup .bgimg').on({
        mouseover:function(){
            clearInterval(setintervalId);
        },
        mouseout:function(){
            time();
        }
    });

    time();
    function time(){
        setintervalId = setInterval(function(){
            var n = current+1;
            if(n==4){
                n = 0;
            }
            check.removeClass('on');
            check.eq(n).addClass('on');
            move(n);
        }, 5000);
        }

        function move(i){
            if(current == i) return;

            var ce = vis.eq(current);
            var ne = vis.eq(i);

            ce.css({left:0}).stop().animate({left:'-100%'});
            ne.css({left:'100%'}).stop().animate({left:0});

            current = i;
        }
    
});