const screen=document.getElementById("calculatorScreen");
const Keys=document.querySelectorAll(".key");
function add(num1,num2){
return num1+num2;
}
function substract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function calculation(num1,num2,operator){
    let result;
    if(operator==="+"){
       result= add(num1,num2);
    }else if(operator==="-"){
      result= substract(num1,num2);
    }else if(operator==="*"){
        result= multiply(num1,num2);
    }else if(operator==="/"){
        result= divide(num1,num2);
    }
    return result;
}
function isNumber(num){
    return (!isNaN(num) && isFinite(num))
}
function formatNumber(num){
    return num%1==0?num.toString():num.toFixed(4);
}

let num1=``;let num2=``;let operator=null;

Keys.forEach(key=>{
    key.onclick=function(){
        
        const object=key.textContent;
        if(object==="+"|| object==="-" || object==="*"||object==="/"){
            if(num1!=``&&num2!=``&&operator!=null){
                num1=formatNumber(calculation(Number(num1),Number(num2),operator));
                num2=``;
                screen.children[0].textContent=num1;
            }
            operator=object;
            
        }

        else if(isNumber(object)&&operator===null){
            num1+=object;
            screen.children[0].textContent="";
            screen.children[0].textContent+=num1;
        }else if(isNumber(object)&&operator!=null){
            num2+=object;
            screen.children[0].textContent="";
            screen.children[0].textContent+=num2;
        } else if(object==="AC"){
            screen.children[0].textContent="0";
            num1=``;
            num2=``;
            operator=null;
        }else if(object==="="){
         if(num1!=``&&num2!=``&&operator!=``){
            num1=formatNumber(calculation(Number(num1),Number(num2),operator));
            num2=``;
            operator=null;
            if(isFinite(num1))
            screen.children[0].textContent=num1;
            else if(!isFinite(num1)){
               screen.children[0].textContent="ERROR";
            }
         }
        }
    }
})