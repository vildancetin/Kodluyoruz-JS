let name=prompt("What's your name?")
let myName=document.querySelector("#myName")
myName.innerHTML=`${name}`

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let dayNumber=new Date().getDay()
let day=weekday[dayNumber]

function clock(){
    const date=new Date()
    let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
    minute=checkSecond(minute);
    second=checkSecond(second);	
	document.querySelector("#myClock").innerHTML=hour+":"+minute+":"+second+ "  " + day;
    setTimeout(clock,1000)
}

function checkSecond(i){
    if(i<10){
    i="0"+i
    }
    return i;
    
}

clock()