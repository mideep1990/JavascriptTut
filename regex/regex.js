const input = document.querySelector("[data-input]");
const regexE = document.querySelector("[data-textar]");
const _Dtext = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
// Indexes: 01234
window.addEventListener('load', function(){
    if(localStorage.getItem("regex")){
        regexE.innerText = localStorage.getItem("regex");
    }
    if(localStorage.getItem("text")){
        input.innerText = localStorage.getItem("text");
    }
  });
checkButton.addEventListener('click',test);
defaulttext.addEventListener('click',function(){
    if(defaulttext.checked)
    {
        input.innerText = _Dtext;
    }
    else {
        if(input.innerText === _Dtext){
            input.innerText = "";
        }
    }
})
function test(){
    const regex = regexE.innerText;
    console.log(typeof regex)
    let str = input.innerText;
    localStorage.setItem("regex",regex);
    localStorage.setItem("text",str);
    if(str && regex){
        try {
            let regObj = new RegExp(regex);
            msg.innerText = "Checking for Valid Regex "+regex
            console.log(str)
            console.log(regex)
            let arr = regObj.exec(str)
            console.log(arr)
            //input.innerHTML = str.replace(str,'<span style="color:red;font-weight:bold">'+str.match(/test/g)[0]+'</span>');
            input.innerHTML = str.replace(str,'<span style="color:red;font-weight:bold">'+regex.exec(str)+'</span>');
        } catch(e) {
            console.log(e)
            msg.innerHTML = "<i style='color:red;'>Please Enter a valid Regex. "+regex+" is invalid.</i>"
        }
    }
    else{
        alert("Please enter both Regular expression and target text on which it would be matched!!!");
    }
}
