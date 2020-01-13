/* 
CREATE WEB PAGE
CREATE BUTTON
CREATE MAP
CREATE FUNCTION TO SELECT BUTTON
CREATE TABLE FOR SPOTS
CREATE SCORE
 */

var XElement = document.getElementById("X")
var OElement = document.getElementById("O")
function initializeGame()
{
    var tab = new Array(9);
    for (var i = 0 ; i < 9; i++)
    {
        document.getElementById('morpion_area').innerHTML += '<div onclick="choseSpot(id)" id="'+'div'+[i]+'">&nbsp;</div>'
        
    }
}

initializeGame()

var totalMoves = 0
var xMoves = 0
var oMoves = 0




/* choix du signe */
function choseSign(choseXorO){
    storedSign = choseXorO;


}
var tab_user= []

/* choix de l'emplacement du signe */
function choseSpot(id){
    
    if(tab_user[id]== 'X' || tab_user[id]== 'O')
    {
        
    }
    else{
        document.getElementById(id).innerHTML = storedSign;
        tab_user[id] = storedSign
    }
    if(storedSign == 'X')
    {
        storedSign = 'O'
        XElement.style.display = "none";
        OElement.style.display = "inline-block";

    }
    else if (storedSign == 'O')
    {
        storedSign = 'X'
        OElement.style.display = "none";
        XElement.style.display = "inline-block";
    }

    winner('div0','div1','div2');
    winner('div0','div3','div6');
    winner('div1','div4','div7');
    winner('div2','div5','div8');
    winner('div3','div4','div5');
    winner('div6','div7','div8');
    winner('div2','div4','div6');
    winner('div0','div4','div8');
}


//fonction winner
function winner(a,b,c){
    if(tab_user[a] == 'X' && tab_user[b] == 'X' && tab_user[c] == 'X')
    {
        document.getElementById('winnerArea').innerHTML = "X is the Winner";
        document.getElementById('winnerArea').style.color = "#1A8BF6";
        document.getElementById('winnerArea').style.animation = "bounce 5s infinite";
    }
    else if (tab_user[a] == 'O' && tab_user[b] == 'O' && tab_user[c] == 'O')
    {
        document.getElementById('winnerArea').innerHTML = "O is the Winner";
        document.getElementById('winnerArea').style.color = "#1A8BF6";
        document.getElementById('winnerArea').style.animation = "bounce 5s infinite";
    }
}

