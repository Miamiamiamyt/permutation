function text()
{
  var a=document.getElementById("number1").value;
  var b=document.getElementById("number2").value;
  var c=document.getElementById("number3").value;
  var d=document.getElementById("number4").value;
  var a1=document.createElement("div");
  a1.className="box";
  /*var a2=document.createElement("div");
  a2.className="box";
  var a3=document.createElement("div");
  a3.className="box";
  var a4=document.createElement("div");
  a4.className="box";*/
  var b1=document.createElement("div");
  b1.className="box";
 /* var b2=document.createElement("div");
  b2.className="box";
  var b3=document.createElement("div");
  b3.className="box";
  var b4=document.createElement("div");
  b4.className="box";*/
  var c1=document.createElement("div");
  c1.className="box";
  /*var c2=document.createElement("div");
  c2.className="box";
  var c3=document.createElement("div");
  c3.className="box";
  var c4=document.createElement("div");
  c4.className="box";*/
  var d1=document.createElement("div");
  d1.className="box";
  /*var d2=document.createElement("div");
  d2.className="box";
  var d3=document.createElement("div");
  d3.className="box";
  var d4=document.createElement("div");
  d4.className="box";*/
  var abox=document.getElementById("kuang");
  abox.appendChild(a1);
  /*abox.appendChild(a2);
  abox.appendChild(a3);
  abox.appendChild(a4);*/
  a1.innerHTML=a;
  /*a2.innerHTML=a;
  a3.innerHTML=a;
  a4.innerHTML=a;*/
  var bbox=document.getElementById("kuang");
  bbox.appendChild(b1);
  /*bbox.appendChild(b2);
  bbox.appendChild(b3);
  bbox.appendChild(b4);*/
  b1.innerHTML=b;
  /*b2.innerHTML=b;
  b3.innerHTML=b;
  b4.innerHTML=b;*/
  var cbox=document.getElementById("kuang");
  cbox.appendChild(c1);
  /*cbox.appendChild(c2);
  cbox.appendChild(c3);
  cbox.appendChild(c4);*/
  c1.innerHTML=c;
  /*c2.innerHTML=c;
  c3.innerHTML=c;
  c4.innerHTML=c;*/
  var dbox=document.getElementById("kuang");
  dbox.appendChild(d1);
  /*dbox.appendChild(d2);
  dbox.appendChild(d3);
  dbox.appendChild(d4);*/
  d1.innerHTML=d;
  /*d2.innerHTML=d;
  d3.innerHTML=d;
  d4.innerHTML=d;*/
}