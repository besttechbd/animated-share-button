$(document).ready(function () {
    $(".btn").click(function(){
        $(".share-content").slideDown(function(){
            $(".list").toggle(333);
            $(".box").toggle(333);
        });
        $(".close").css("display","block");
        $(".btn").css("marginLeft","5px");
        $(".btn").css("fontSize","22px");
        $(".btn").css("color","#aaa");
       
    });

    $(".close").click(function(){
        $(".share-content").slideUp(function(){
            $(".list").toggle();
            $(".box").slideUp(111);
        });
        $(".close").css("display","none");
        $(".btn").css("marginLeft","30%");
        $(".btn").css("fontSize","30px");
        $(".btn").css("color","#333");      
    });
});