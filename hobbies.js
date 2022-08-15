function poper(){
    var bb = document.querySelector('#basketb').checked; 
    var mb = document.querySelector('#musicb').checked;
    var fb = document.querySelector('#friendsb').checked;
    var cb = document.querySelector('#carsb').checked;

    alert("hola");
}



function showme(){
    var bb = document.querySelector('#basketb').checked; 
    var mb = document.querySelector('#musicb').checked;
    var fb = document.querySelector('#friendsb').checked;
    var cb = document.querySelector('#carsb').checked;
  
    console.log(bb,mb,fb,cb);

    // poper();
    // document.querySelectorAll('.label1').style.display="none";

    if(!bb && !mb && !fb && !cb){
        alert("No checkbox selected.");
        return;
    }

    function bba(){
        if(bb){
            return " Basketball ";
        }
        else {
            return "\0";
        }
    }

    function mba(){
        if(mb){
            return " Music ";
        }
        else {
            return "\0";
        }
    }
    function fba(){
        if(fb){
            return " Friends ";
        }
        else {
            return "\0";
        }
    }
    function cba(){
        if(cb){
            return " Cars ";
        }
        else {
            return "\0";
        }
    }

    var text="You have selected "+bba()+mba()+fba()+cba();

    console.log(text);
    // window.confirm("sometext");
    if (confirm(text)) {
        txt = "You pressed OK!";
    } 
    else {
        txt = "You pressed Cancel!";
        return;
    } 

    document.querySelector('.hobby1').style.display="inherit";
    document.querySelector('.hobby3').style.display="none";
    if(bb){
      document.querySelector('.basketball1').style.display="inherit";
    }
    else{
      document.querySelector('.basketball1').style.display="none";
      document.querySelector('.basketball').style.display="none";
    }
  
    if(mb){
      document.querySelector('.music1').style.display="inherit";
    }
    else{
      document.querySelector('.music1').style.display="none";
      document.querySelector('.music').style.display="none";
    }
  
    if(fb){
      document.querySelector('.friends1').style.display="inherit";
    }
    else{
      document.querySelector('.friends1').style.display="none";
      document.querySelector('.friends').style.display="none";
    }
  
    if(cb){
      document.querySelector('.cars1').style.display="inherit";
    }
    else{
      document.querySelector('.cars1').style.display="none";
      document.querySelector('.cars').style.display="none";
    }
    
  }