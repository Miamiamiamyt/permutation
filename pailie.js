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
  if (n >= 0) //�ж��Ƿ��ѻ��ݵ��˵�һ��λ��֮ǰ�����Ѿ��ҵ�������λ������  
        if (index[n] < index.length - 1) { //������һ��λ�ÿ�ѡ  
            index[n]++; //ѡ����һ��λ��  
            if ((function () { //�����������жϸ�λ���Ƿ��Ѿ���ѡ���  
                for (var i = 0; i < n; i++)  
                    if (index[i] == index[n]) return true; //��ѡ��  
                return false; //δѡ��  
            })())
                return seek(index, n); //������λ��  
            else 
                return true; //�ҵ�  
        }
        else { //��ǰ��λ�ÿ�ѡ�����еݹ����  
            index[n] = -1; //ȡ����ǰλ��  
            if (seek(index, n - 1)) //��������һ��λ��  
                return seek(index, n); //�����ҵ�ǰλ��  
            else 
                return false; //����λ�ÿ�ѡ  
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
        index[i] = -1;  //�ĸ�λ�ó�ʼ��
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
      document.getElementById("step").innerHTML="��"+count+"�� :ѡ��"+temp1[i+1]+"\n";
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
      document.getElementById("step").innerHTML="��"+count1+"�� :ѡ��"+temp1[i-1]+"\n";
      var zhanshi=document.getElementById("content3");
      var xiaokuang=document.createElement("div");
      xiaokuang.className="box";
      zhanshi.appendChild(xiaokuang);
      xiaokuang.innerHTML=temp1[i-1];       
    }
   }
}  
  
