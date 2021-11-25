// taslate
//use api

//入口函數
$(document).ready(function(){
    var getword;
// 获取 bg对象
    var bg = chrome.extension.getBackgroundPage();
    // hide 
    $("#answercontainer").hide();
//？
    // $("#buttontranslet").click(function(){
    //     $("#answercontainer").show();
    //     getword=$("#inputworld").val();//捕獲文本
    //     // 调用函数
    //     bg.useapi(getword);
    //     printdata(bg.returntraslat)
    //   });

      //enter
      $("input").keypress(function(){
          if(event.keyCode==13){ //enter check
              $("#answercontainer").show();
              getword=$("#inputworld").val();//捕獲文本
              bg.useapi(getword);
              printdata(bg.translationanswer);
          }

        });
     //js 添加 data到 poup 中 显示翻译结果
    function printdata(data){

        if(data!=null){

            $("#newanswer").text(data); //   輸出
        }else{
        $("#newanswer").text("this is null , error"); //輸出
        }
    }

        
 });


 