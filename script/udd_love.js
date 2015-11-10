var LoveActually={
    Switch:(function(){
        var $open=$('.LoveActually_a'),
            $close=$('.close');
        $open.click(function(){
            var $name=$('#name'),
                $registr=$('#Registration'),
                $regf=$('#regForm');

                $registr.css({'height':$('body').height(),top:0});
                $regf.css({'margin-top':($(window).height()-$regf.height())/2});
                if($name.val()==''){
                    $name.focus();
                }
        });
        $close.click(function(){
            var $registr=$('#Registration');
            $registr.css({top:-9999});
        });
    })(),
    Select:(function(){
        var clicked=true,clicked2=true,
        $toggleLi=$('.regForm_dateUl li');

        $(document).click(function(){
            var $divhide=$('.regForm_dateUl li div');
            $divhide.css('left',-9999);
        });
        $toggleLi.click(function(e){
            e.stopPropagation();
            $toggleLi.find('div').css('left',-9999);
            $(this).find('div').css('left',-1);
            if($toggleLi.index($(this))==1 && clicked){
                for(var i=1; i<13; i++){
                    $(this).find('div').append('<p>'+i+'</p>');
                    clicked=false;
                }
            }
            if($toggleLi.index($(this))==2 && clicked2){
                for(var i=1; i<LoveActually.GetMonthDays()+1; i++){
                    $(this).find('div').append('<p>'+i+'</p>');
                    clicked2=false;
                }
            }
        });
        $toggleLi.on('click','p',function(e){
            e.stopPropagation();
            $(this).parent().css('left','-9999px').prev().text($(this).text())
        });

    })(),
    add:(function(){
        var timer, Append= 4, num=0;
        function Addnum(Seconds){
            var $lastchildS=$('.num s:last-child');
            return function(){
                var $allS=$('.num s');
                Seconds++;
                $lastchildS.text(Seconds);
                if($lastchildS.text().length==2)
                {
                    $allS.eq($allS.length-2).text($lastchildS.text().substr(0,1));
                    $lastchildS.text($lastchildS.text().charAt($lastchildS.text().length - 1))
                }
                if($lastchildS.text().length==3)
                {
                    $allS.eq($allS.length-3).text($lastchildS.text().substr(0,1));
                    $allS.eq($allS.length-2).text($lastchildS.text().substr(1,1));
                    $lastchildS.text($lastchildS.text().substr($lastchildS.text().length-1,1));
                }

                if($lastchildS.text().length>=3){
                    if(Append==$lastchildS.text().length){
                        $('.num').prepend('<s>0</s>');
                        Append=$lastchildS.text().length+1;
                    }else{
                        $allS.eq(0).text($lastchildS.text().substr(0,1));
                        $allS.eq(1).text($lastchildS.text().substr(1,1));
                        $allS.eq(2).text($lastchildS.text().substr(2,1));
                        $allS.eq(3).text($lastchildS.text().substr(3,1));
                        $allS.eq(4).text($lastchildS.text().substr(4,1));
                        $allS.eq(5).text($lastchildS.text().substr(5,1));
                        $allS.eq(6).text($lastchildS.text().substr(6,1));
                        $lastchildS.text($lastchildS.text().substr($lastchildS.text().length-1,1));
                    }
                }
            }
        }
        var Initialize=new Addnum(0);
        timer=setInterval(Initialize,1);
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
