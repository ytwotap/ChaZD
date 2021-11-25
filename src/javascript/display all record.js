// 单词管理js
// 请求单词 

//文档加载完成. 
$(function () {
    // get all data is json arry;
    var alldata;
    /*验证码*/
    var getverify = "asdfhdk45764215,./47";
    tp(0); //start file open
    $("#next").click(function () {
        tp(1) /*翻页*/
    })
    $("#pre").click(function () {
        tp(2) /*翻页*/
    })
    /*delete 一条记录*/
    $(".test222").click(function () {
        var id = $(".test222").attr("id")
        location.reload();
    })

    /*删除操作*/
    function del(id) {
        $.ajax({ //get 請求
            url: 'http://localhost:8083/displayAllWord/somepage',
            type: 'get',
            dataType: 'json',
            async: false, //请求是否为异步 默认为 异步（true）。false 为同步。
            data: {
                verify: getverify,
                numberjudge: numberjudge,
            },
            success: function (data) { //請求成功 返回 回調函數

                traverse(data.content); //生成表格
            }
        });
    }

    /*请求队列信息*/
    function tp(numberjudge) {
        $.ajax({ //get 請求
            url: 'http://localhost:8083/displayAllWord/somepage',
            type: 'get',
            dataType: 'json',
            async: false, //请求是否为异步 默认为 异步（true）。false 为同步。
            data: {
                verify: getverify,
                numberjudge: numberjudge,
            },
            success: function (data) { //請求成功 返回 回調函數

                traverse(data.content); //生成表格
            }
        });
    }

//清除以前的表格
    //遍历对象 并 调用table 函数.
    function traverse(alldata) {
        //delet
        $("tbody").remove()
        var x;
        for (x in alldata) {
            //get single json obj
            wordobj = alldata[x];
            autoTable(wordobj);
        }
    }

// 处理生成new 表格
    function autoTable(wordobj) {

        var x = 0;
        for (x; x < 5; x++) { //get attr
            switch (x) {
                case 0:
                    // id
                    $("#threadTable").after("<tbody><tr id='tableTbody" + wordobj.id + "'><td data-label='id'>" + wordobj.id + "</td></tr></tbody>");
                    break;
                case 1:
                    // word
                    $("#tableTbody" + wordobj.id).append("<td data-label='word'   >" + wordobj.word + "</td>")
                    break;
                case 2:
                    // mean
                    $("#tableTbody" + wordobj.id).append("<td data-label='means'>" + wordobj.meaning + "</td>")
                    break;
                case 3:
                    // times
                    $("#tableTbody" + wordobj.id).append("<td data-label='times'>" + wordobj.recodeOfTime + "</td>")
                    break;
                case 4:
                    //delete
                    $("#tableTbody" + wordobj.id).append("<td >" + "<button id=" + wordobj.id + " class=\"ui basic primary button test222\">\n" +
                        "  delete\n" +
                        "</button>" + "</td>")
                default:

            }
        }
    }


//key control next and  pre
    $(document).keydown(function (event) {
        var keyNum = event.which;//get keyvalue;
        switch (keyNum) { //KEY CHOOSE
            case 39: //pre
            {
                // alert("pres")
                tp(1);
            }
                break;

            case 37: //next{
            {
                tp(2);
                // alert("next")
            }
                break;
        }

    });

});

