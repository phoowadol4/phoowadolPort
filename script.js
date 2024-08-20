function al(){
    alert("view1");
 }


 function al2(){
    alert("view2");
 }

document.querySelectorAll('.tosction, a').forEach(function(link){
   link.addEventListener('click', function(){
      document.getElementById('check').checked = false;
   });
});
 
document.getElementById("copyright").innerHTML = new Date().getFullYear();
