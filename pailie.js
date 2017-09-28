var end=0;
var begin=-1;
function xiayibu()
{
  if(end<96)
  {
    quanpailie(1);
    begin++;
    end++;
    pailie()
  }
}
function shangyibu()
{
  if(begin>=-1)
  {
    begin--;
    end--;
    quanpailie(1);
  }
}
var end1=96;
var begin1=97;
function fanxiayibu()
{
  if(end1>0)
  {
    begin1--;
    end1--;
    quanpailie(0);
  //begin1--;
  //end1--;
  }
}
function fanshangyibu()
{
  if(begin1<=97)
  {
    //begin1++;
    //end1++;
    quanpailie(0);
    begin1++;
    end1++;
  }
}
var z;
function kaishipailie()
{
  var su=document.getElementById("speed").value;
  z=self.setInterval("xiayibu()",su);
}
function fanxiangyanshi()
{
  var su=document.getElementById("speed").value;
  z=self.setInterval("fanxiayibu()",su);
}
function zanting()
{
  z=window.clearInterval(z);
}
/*function show(arr)
{  
  var zhanshi=document.getElementById("content2");
  var xiaokuang=document.createElement("div");
  xiaokuang.className="box";
  zhanshi.appendChild(xiaokuang);
  xiaokuang.innerHTML=arr;
} */
function seek(index, n) 
{  
  if (n >= 0) //判断是否已回溯到了第一个位置之前，即已经找到了所有位置排列  
        if (index[n] < index.length - 1) { //还有下一个位置可选  
            index[n]++; //选择下一个位置  
            if ((function () { //该匿名函数判断该位置是否已经被选择过  
                for (var i = 0; i < n; i++)  
                    if (index[i] == index[n]) return true; //已选择  
                return false; //未选择  
            })())
                return seek(index, n); //重新找位置  
            else 
                return true; //找到  
        }
        else { //当前无位置可选，进行递归回溯  
            index[n] = -1; //取消当前位置  
            if (seek(index, n - 1)) //继续找上一个位置  
                return seek(index, n); //重新找当前位置  
            else 
                return false; //已无位置可选  
        }  
    else 
        return false;  
}   
var count=0;
var count1=97;
function quanpailie(id) 
{  
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    var c=document.getElementById("number3").value;
    var d=document.getElementById("number4").value;
    var arr=new Array(a,b,c,d);
    var index = new Array(arr.length);  
    for (var i = 0; i <index.length; i++)  
        index[i] = -1;  //四个位置初始化
    for (i = 0; i < index.length - 1; i++)  
        seek(index, i);  
   /* while (seek(index,index.length - 1)) {  
        var temp = [];  
        for (i = 0;i<index.length; i++)  
        {
            temp.push(arr[index[i]]);  
            show(temp[i]); 
        } 
    }  */
    var temp =new Array();
    var temp1=new Array();
    while (seek(index,index.length - 1)) {    
      for (i = 0;i<index.length; i++)  
      {
        temp.push(index[i]);  
        temp1.push(arr[index[i]]);
        //show(temp[i]); 
      } 
    }
   if(id==1)
   {
   for(var i=begin;i<end;i++)
    {
      count+=1;
      var box=document.getElementsByClassName("box");
      setTimeout(function(){box[temp[i]].style.background="#CC99FF";},10);
      setTimeout(function(){box[temp[i]].style.background="#FFFFCC";},1000);
      document.getElementById("step").innerHTML="第"+count+"步 :选择"+temp1[i+1]+"\n";
      var zhanshi=document.getElementById("content3");
      var xiaokuang=document.createElement("div");
      xiaokuang.className="box";
      zhanshi.appendChild(xiaokuang);
      xiaokuang.innerHTML=temp1[i+1];     
    }
   }
   if(id==0)
   {
    for(var i=begin1;i>end1;i--)
    {
      count1-=1;
      var box=document.getElementsByClassName("box");
      setTimeout(function(){box[temp[i]].style.background="#CC99FF";},10);
      setTimeout(function(){box[temp[i]].style.background="#FFFFCC";},1000);
      document.getElementById("step").innerHTML="第"+count1+"步 :选择"+temp1[i-1]+"\n";
      var zhanshi=document.getElementById("content3");
      var xiaokuang=document.createElement("div");
      xiaokuang.className="box";
      zhanshi.appendChild(xiaokuang);
      xiaokuang.innerHTML=temp1[i-1];       
    }
   }
}  
  
