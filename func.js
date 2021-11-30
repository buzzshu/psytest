function onques(){
    // basic information: display:none
    document.getElementById("basicinfo").style.display="none"
    // question: display:block 
    document.getElementById("question").style.display="block"
}
function showFruit(){
    // check last question is selected
    if(document.querySelectorAll('input[class="ques"]:checked').length==4){
                    // hidden form
    document.getElementById("question").style.display="none"
    // show div.result
    document.getElementById("result").style.display="block"
    // show more info image
    document.getElementById("moreinfo").style.display="block"
    // querySelector
    // document.getElementById("result").innerHTML = document.querySelector('input[name="q4"]:checked').value
    let fruit = document.querySelector('input[name="q4"]:checked').value
    document.getElementById("result").innerHTML = "根據剛剛的心理測驗，你是個喜歡" + fruit + "的人。"



    }else{
        // warning
        window.alert("還沒作答完唷！")
    }
}
