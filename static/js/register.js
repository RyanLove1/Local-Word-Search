$(function () {
    //点击查单词输入框,自动清空里面内容
    $("[name=word]").focus(function () {
        if($(this).val() !== ""){  //如果二次输入时,输入框内容不为空
            $(this).val("");　// 清空输入框内容
        }
    });


    //查询单词为空时不允许提交
    $("form").submit(function () {
        if ($("[name=word]").val() === "") {
            alert("查询单词不能为空！")
        }
    });
});