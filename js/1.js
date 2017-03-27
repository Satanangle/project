//添加ul到div里
window.onload=function(){

    var h=document.getElementById("d1");
     ul=document.createElement("ul");
     ul.setAttribute("id", "ul1");
    h.appendChild(ul);
}

function cj(){
    //获取文本框的内容
      var txt1= document.getElementById("text").value;
      //console.log(txt1);
      var uls=document.getElementById("ul1");
      //创建li
      var li=document.createElement("li");
      li.innerHTML=txt1;
      //创建a
      var a=document.createElement("a");
      a.innerHTML= "删除";

      //a添加到li中
      li.appendChild(a);
      
      //li添加到ul中
      uls.appendChild(li);
      //给a标签添加标签内容
      a.setAttribute("href", "#");
      //li.setAttribute("class", "li")
     
      var as=document.getElementById("ul1");

       var asn=document.getElementsByTagName("a");

       for(i=0;i<asn.length;i++){

         asn[i].onclick=function(){
            //alert("message");
            as.removeChild(this.parentNode);
         }
        }

}

