var LoveActually={
    Switch:(function(){
        $('.LoveActually_a').click(function(){
            $('#Registration').css({'height':$('body').height(),top:0});
            $('#regForm').css({'margin-top':($(window).height()-$('#regForm').height())/2});
            if($('#name').val()==''){
                $('#name').focus();
            }
        });
        $('.close').click(function(){
            $('#Registration').css({top:-9999});
        });
    })(),
    Select:(function(){
        var clicked=true,clicked2=true;

        $(document).click(function(){
            $('.regForm_dateUl li div').css('left',-9999);
        });
        $('.regForm_dateUl li').click(function(e){
            e.stopPropagation();
            $('.regForm_dateUl li').find('div').css('left',-9999);
            $(this).find('div').css('left',-1);
            if($('.regForm_dateUl li').index($(this))==1 && clicked){
                for(var i=1; i<13; i++){
                    $(this).find('div').append('<p>'+i+'</p>');
                    clicked=false;
                }
            }
            if($('.regForm_dateUl li').index($(this))==2 && clicked2){
                for(var i=1; i<LoveActually.GetMonthDays()+1; i++){
                    $(this).find('div').append('<p>'+i+'</p>');
                    clicked2=false;
                }
            }
        });
        $('.regForm_dateUl li').on('click','p',function(e){
            e.stopPropagation();
            $(this).parent().css('left','-9999px').prev().text($(this).text())
        });

    })(),
    add:(function(){
        var timer, two= 0, three=0;
        function Addnum(one){
            return function(){
                one++;
                if(one<10){
                    $('.num s:last-child').text(one);
                }else if(one==10)
                {
                    one=0;
                    $('.num s:last-child').text(one);
                    if(two==0 && $('.num s').size()<3){
                        $('.num').append('<s></s>');
                        $('.num s:last-child').text(0);
                        $('.num s').eq(1).text(two);
                    }

                    if(two==9){
                        two=0;
                        three++;
                        $('.num s').eq(1).text(two);
                        if($('.num s').size()==2){
                            $('.num').append('<s></s>');
                        }else if ($('.num s').size()==3){
                            $('.num s').eq(1).text(0);
                        }
                        $('.num s:first-child').text(three);
                    }else{
                        two++;
                        if($('.num s').size()==2){
                            $('.num s:first-child').text(two);
                        }else if($('.num s').size()==3){
                            $('.num s:last-child').text(one);
                            $('.num s:first-child').text(three);
                            $('.num s').eq(1).text(two);
                        }
                    }
                }
            }
        }
        var Initialize=new Addnum(0);
        timer=setInterval(Initialize,500);
    }),
    add2:(function(){
        var timer, Append= 4, num=0;
        function Addnum(one){
            return function(){
                one++;
                $('.num s:last-child').text(one);
                if($('.num s:last-child').text().length==2)
                {
                    $('.num s').eq($('.num s').length-2).text($('.num s:last-child').text().substr(0,1));
                    $('.num s:last-child').text($('.num s:last-child').text().charAt($('.num s:last-child').text().length - 1))
                }
                if($('.num s:last-child').text().length==3)
                {
                    $('.num s').eq($('.num s').length-3).text($('.num s:last-child').text().substr(0,1));
                    $('.num s').eq($('.num s').length-2).text($('.num s:last-child').text().substr(1,1));
                    $('.num s:last-child').text($('.num s:last-child').text().charAt($('.num s:last-child').text().length - 1))
                }

                if($('.num s:last-child').text().length>=3){
                    if($('.num s:last-child').text().length==$('.num s:last-child').text().length){
                        if(Append==$('.num s:last-child').text().length){
                            $('.num').prepend('<s>0</s>');
                            Append=$('.num s:last-child').text().length+1;
                        }else{
                            $('.num s').eq($('.num s').length-$('.num s:last-child').text().length).text($('.num s:last-child').text().substr(0,1));
                            $('.num s').eq($('.num s').length-($('.num s:last-child').text().length-1)).text($('.num s:last-child').text().substr(1,1));
                            $('.num s').eq($('.num s').length-($('.num s:last-child').text().length-2)).text($('.num s:last-child').text().substr(2,1));
                            $('.num s').eq($('.num s').length-($('.num s:last-child').text().length-3)).text($('.num s:last-child').text().substr(3,1));
                            $('.num s').eq($('.num s').length-($('.num s:last-child').text().length-4)).text($('.num s:last-child').text().substr(4,1));
                            $('.num s').eq($('.num s').length-($('.num s:last-child').text().length-5)).text($('.num s:last-child').text().substr(5,1));
                            $('.num s').eq($('.num s').length-($('.num s:last-child').text().length-6)).text($('.num s:last-child').text().substr(6,1));
                            $('.num s:last-child').text($('.num s:last-child').text().charAt($('.num s:last-child').text().length - 1));
                        }
                    }
                }
            }
        }
        var Initialize=new Addnum(0);
        //timer=setInterval(Initialize,1);
    })(),
    GetMonthDays:(function(){
        var days;
        var year=new Date().getFullYear();
        var month=new Date().getMonth()+1;
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: days=31; break;
            case 4:
            case 6:
            case 9:
            case 11: days=30; break;
            case 2: year % 4==0 ? days= 29 : days=28; break;
        }
        return days;
    })
};