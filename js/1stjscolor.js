var heading=document.querySelector('#heading');
    var name=prompt("너 누군데?");
    document.write("<b><big>"+name+"</b></big>, 어서와.");
    heading.onclick=function(){
    heading.style.color="red";
    alert("누르지 말라고 했잖아?")
    confirm("'Devil.apk'(을)를 실행하시겠습니까?")
}
