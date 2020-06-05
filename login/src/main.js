qqq




fg
var allChar=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","@","%","&","$","*","/",":","?","-","_",".",","];
function submit(){
    var error=true;
    let inputs=document.getElementsByClassName("inps");
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value==0){
error=true;
inputs[i].style.border="3px solid #ff6f61";
        }else{
        	inputs[i].style.border="3px solid #bfbfbf";
        }
    }
    if(document.getElementById('pass').value.length<8){
    	error=true;
    	document.getElementById('pass').style.border="3px solid #ff6f61"
    }
    if(!error){
        for(let i=0;i<inputs.length;i++){
if(inputs[i].value.length>250){
    error=true;
}else{
    for(let j=0;j<inputs[i].value.length;j++){
        if(allChar.indexOf(inputs[i].value[j])==-1){
error=true;
break;
        }
    }
}
        }
    }
    if(error){
        errMessage("Ooopsie...! You made some mistakes in the form");
    }
}
function errMessage(msg){
    if(msg!=""){
        document.getElementById("modalText").innerHTML=msg;
        openModal();
    }
}
