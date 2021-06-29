let characterOneName="Sasuke"
let characterOnePoints=100;
let characterTwoName="Naruto"
let characterTwoPoints=100;
function displayCharacter(){
    document.getElementById("info-c1").innerHTML=`<p><b>Name:</b> ${characterOneName}</p>
    <p><b>Points:</b> ${characterOnePoints}</p>`;
   

}
displayCharacter();
function attack2(){
    document.getElementById("console").innerHTML=`<p>Naruto is Attacking...</p>`;
    //discount points from the character
   var newPoints=characterOnePoints-20;
   //var newPoints2=characterTwoPoints-20;
    //conditional statement
    if(newPoints<=0){
        document.getElementById("console").innerHTML=`<p> GAME OVER`;document.getElementById("btn-attack").style.display="none";
    }/*else if(newPoints2<=0){
        document.getElementById("console").innerHTML=`<p> GAME OVER`;document.getElementById("btn-attack2").style.display="none";
    }*/else{

    }
    //update the variable
    characterOnePoints=newPoints;
   
    //update the display
    
    displayCharacter();
    
}
function attack(){
    document.getElementById("console").innerHTML=`<p>Sasuke is Attacking...</p>`;
    var newPoints2=characterTwoPoints-20;
    if(newPoints2<=0){
        document.getElementById("console").innerHTML=`<p> GAME OVER`;document.getElementById("btn-attack2").style.display="none";
    }else{

    }
    characterTwoPoints=newPoints2;
    displayCharacter2();
}
function displayCharacter2(){
document.getElementById("info-c2").innerHTML=`<p><b>Name:</b> ${characterTwoName}</p>
<p><b>Points:</b> ${characterTwoPoints}</p>`
}
displayCharacter2();
while(document.getElementById("console")=" GAME OVER"){
    characterTwoPoints=0;
    characterOnePoints=0
}