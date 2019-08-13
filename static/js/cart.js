$(function () {
    //1.全选和取消全选
    $(".checkAll").click(function () {
        //如果当前元素为选中状态
        if ($(this).attr("checked")) {
            //修改取消选中
            $(this).removeAttr("checked").attr("src", "/static/images/cart/product_normal.png");
            $(".checkItem").removeAttr("checked").attr("src", "/static/images/cart/product_normal.png");
            //与底部全选联动
            $(".checkAll").removeAttr("checked").attr("src", "/static/images/cart/product_normal.png");

        } else {
            $(this).attr("checked", "true").attr("src", "/static/images/cart/product_true.png");
            $(".checkItem").attr("checked", "true").attr("src", "/static/images/cart/product_true.png");
            $(".checkAll").attr("checked", "true").attr("src", "/static/images/cart/product_true.png");
        }
        sum();
        /*
         1.为全选按钮添加点击事件,事件函数中,判断当前按钮是否是选中状态,（查看是否存在checked属性值）
         2.如果当前元素存在checked属性值,说明本身为选中状态,需要修改为取消选中.（移除checked属性.修改状态标识：
         更改图片路径）
         3.根据全选按钮的状态获取商品按钮,统一调整状态标识和图片路径
         */
    });

    //2.反选,只要有一个商品未选择,全选按钮取消
    $(".checkItem").click(function () {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked").attr("src", "/static/images/cart/product_normal.png");
        } else {
            $(this).attr("checked", "true").attr("src", "/static/images/cart/product_true.png");
        }
        //被选中的商品数量,等于商品元素的个数,视为全选
        if ($(".checkItem[checked]").length === $(".checkItem").length) {
            //当包含checked属性的数组长度等于所有商品数组长度视为全选
            $(".checkAll").attr("checked", "true").attr("src", "/static/images/cart/product_true.png");
        } else {
            $(".checkAll").removeAttr("checked").attr("src", "/static/images/cart/product_normal.png");
        }
        sum();
    });

    //3.数量增减
    $(".add").click(function () {
        //获取前一个兄弟元素（输入框）的值
        var value = $(this).prev().val();
        value++;
        $(this).prev().val(value);
        //价格的联动,单价*数量,修改总金额,根据this找到单价
        countPrice($(this), value);
        sum();
    });

    $(".minus").click(function () {
        //获取后一个兄弟元素（输入框）的值
        var value = $(this).next().val();
        if (value > 1) {
            value--;
        }
        $(this).next().val(value);
        //价格的联动,单价*数量,修改总金额,根据this找到单价
        countPrice($(this), value);
        sum();
    });

    //将价格联动封装成一个函数
    function countPrice(that, value) {
        //价格的联动,单价*数量,修改总金额,根据this找到单价
        var str = $(that).parents(".item").find(".gprice p").html(); // ￥　2299.00
        var price = str.substring(2);
        var sum = price * value;
        sum = sum.toFixed(2);
        $(that).parent().next().html("&yen " + sum);
    }

    //移除操作
    $(".item .action").click(function () {
        //移除整个商品记录
        $(this).parents(".item").remove();
        sum();
    });

    //底部移除选中商品
    $(".bottom-title .bottom-del").click(function () {
        //找到所有的商品前面的按钮标签
        var arr = $(this).parent().siblings().children().children().children().children(".checkItem");
        if(arr.length===0){
            $(".checkAll").removeAttr("checked").attr("src", "/static/images/cart/product_normal.png");
        }
        //循环判断如果按钮被选中则删除商品
        for(var i=0;i<arr.length;i++){
            if($(arr[i]).attr("checked")){
                //删除.item类标签
                $(arr[i].parentNode.parentNode).remove();
            }
        }
        sum();
    });

    //价格与总价联动,移除,加减,全选,选中都得调用
    function sum() {
        //获取被选中的商品,累加商品数量和总价
        var num = 0; //保存总数量
        var price = 0; //保存总价格
        //数据遍历,each(function(){})
        $(".checkItem[checked]").each(function () {
            //每取到一个元素就调用当前函数
            //指代函数的调用者
            var n = $(this).parents(".item").find(".gcount input").val();
            var p = $(this).parents(".item").find(".gsum").html();
            console.log(p);
            //转number
            n = Number(n);
            p = Number(p.substring(2));
            console.log(p);
            num += n;
            price += p;
        });
        $(".total-num").html(num);
        $(".total-price").html(price);
    }

    //导航栏鼠标移动变色
    $(".middle img").on("mouseover", function () {
        $(".middle img").prop("src", "/static/images/header/search2.png")
    });
    $(".middle img").on("mouseout", function () {
        $(".middle img").prop("src", "/static/images/header/search.png")
    });
    $(".search-nav ul li:first img").on("mouseover", function () {
        $(".search-nav ul li:first img").prop("src", "/static/images/header/care1.png")
    });
    $(".search-nav ul li:first img").on("mouseout", function () {
        $(".search-nav ul li:first img").prop("src", "/static/images/header/care.png")
    });
    $("#i1").on("mouseover", function () {
        $("#i1").prop("src", "/static/images/header/order1.png")
    });
    $("#i1").on("mouseout", function () {
        $("#i1").prop("src", "/static/images/header/order.png")
    });
    $("#i2").on("mouseover", function () {
        $("#i2").prop("src", "/static/images/header/shop_car1.png")
    });
    $("#i2").on("mouseout", function () {
        $("#i2").prop("src", "/static/images/header/shop_car.png")
    });
});

