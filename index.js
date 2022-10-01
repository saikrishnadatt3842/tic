let n = document.querySelector('#sai');
let output = document.querySelector('#output');

function randomnumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = math.floor(step2) + min;
    
    return result;
}

n.addEventListener('click', () => {
    output.innerHTML = randomnumber(5,10);
})

console.log("ss");

var bdy = document.getElementById('bdy');

var dark = document.getElementById('dk');

var restart = document.getElementById('btn');

var normal = document.getElementById('a');

var squres = document.querySelectorAll('td');

dark.addEventListener('click',function(){
    bdy.style.background= "black";
})
console.log("dkdk");

normal.addEventListener('click',function(){
    bdy.style.background = "white";
})

function clearbord(){
for(var i = 0; i<squres.length; i++){
    squres[i].textContent = "";
 }
}

restart.addEventListener('click',clearbord);

function changemarker(){
    if(this.textContent  == ''){
       this.textContent = 'x';
       this.style,color = "blue";
    }else if(this.textContent == 'x'){
        this.textContent = "o";
        this.style.color = "blue";
    }else{
        this.textContent = "";
    }
}

for(var i = 0; i<squres.length; i++){
    squres[i].addEventListener('click',changemarker)
}

var td1 = document.getElementById("td1");
var td2 = document.getElementById("td1");
var td3 = document.getElementById("td1");
var td4 = document.getElementById("td1");
var td5 = document.getElementById("td1");
var td6 = document.getElementById("td1");
var td7 = document.getElementById("td1");
var td8 = document.getElementById("td1");
var td9 = document.getElementById("td1");
 
var icon = document.getElementById("icon");

icon.addEventListener('click',function(){
    bdy.style.background = "rgb(100, 237, 162)";
})