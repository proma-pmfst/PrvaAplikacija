window.onload = function(){
  document.getElementById("klik").addEventListener("click",posalji);
}

function posalji(){
  var zahtjev = new XMLHttpRequest();
  zahtjev.onreadystatechange = function () {
    if (zahtjev.readyState == 4 && zahtjev.status == 200){
      console.log(zahtjev.responseText);
      document.getElementById("rez").innerHTML = zahtjev.responseText;
    }
  }
  zahtjev.open("GET","http://192.168.5.16:4000",true);
  zahtjev.send();
}
