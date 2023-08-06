const clockfunc= ()=>{
  var date= new Date();
  var hours= date.getHours();
  var mintue=date.getMinutes();
  var seconds=date.getSeconds();


  if (hours>=12){
    document.getElementById("am-to-pm").innerHTML="PM";
  }
  
  else{
    document.getElementById("am-to-pm").innerHTML="AM";
  }
  if (hours>12){
    hours=hours-12;
  }
  document.getElementById("Hours").innerHTML=hours;
  document.getElementById("mintue").innerHTML=mintue;
  document.getElementById("second").innerHTML=seconds;

}

setInterval(clockfunc,1000)