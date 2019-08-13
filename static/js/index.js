$(function () {
    //利用列表方法
    /*var banner_list = [1,2,3,4,5];
    var banner_arr = [];
    for(var i=0;i<banner_list.length;i++){
        var path = "../images/index/index_banner" + banner_list[i] + ".jpg";
        banner_arr.push(path);
    }
    timer = setInterval(autoPlay, 3000);
    var autoPlay = function () {
        var banner = banner_arr.pop();
        $(".banner").prop("src", banner);
        banner_arr.unshift(banner);
    };
    $(".banner").mouseover(function () {
        window.clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoPlay, 3000);
    })*/

    //利用找img下标,更换元素属性
    var imgIndex = 0;
    var timer;
    function autoPlay() {
        //隐藏图片元素属性
        $("#banner").find("img").eq(imgIndex).css("display", "none");
        //图片下面圆圈与图片联动
        $("#banner li").eq(imgIndex).css("background", "#fff");
        //下标增加
        imgIndex ++;
        if (imgIndex === $("#banner img").length) {
            imgIndex = 0;
        }
        $("#banner").find("img").eq(imgIndex).css("display", "block");
        $("#banner li").eq(imgIndex).css("background", "gray");
    }
    timer = setInterval(autoPlay,3000);
    $("#banner").mouseover(function () {
        clearInterval(timer);
    });
    $("#banner").mouseout(function () {
        timer = setInterval(autoPlay,3000);
    });


    //手动点击左右按钮滚动轮播图
    //下一个按钮
    $("#banner .next").click(function () {
        //隐藏图片元素属性
        $("#banner").find("img").eq(imgIndex).css("display", "none");
        //图片下面圆圈与图片联动
        $("#banner li").eq(imgIndex).css("background", "#fff");
        //下标增加
        imgIndex ++;
        if (imgIndex === $("#banner img").length) {
            imgIndex = 0;
        }
        $("#banner").find("img").eq(imgIndex).css("display", "block");
        $("#banner li").eq(imgIndex).css("background", "gray");
    });


    //上一个按钮
    $("#banner .prev").click(function () {
        //隐藏图片元素属性
        $("#banner").find("img").eq(imgIndex).css("display", "none");
        //图片下面圆圈与图片联动
        $("#banner li").eq(imgIndex).css("background", "#fff");
        //下标减少
        imgIndex --;
        if(imgIndex===-1){ //如果0减到-1的时候,让imgIndex变成数字末尾的下标
            imgIndex = $("#banner img").length - 1;
        }
        $("#banner").find("img").eq(imgIndex).css("display", "block");
        $("#banner li").eq(imgIndex).css("background", "gray");
    });


















});