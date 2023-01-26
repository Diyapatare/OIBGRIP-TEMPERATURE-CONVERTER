
function  f1()
{
    var x=document.getElementById("id1").value;
    var a=document.getElementById("id4").value;
    var z=document.getElementById("id3").value;
    if(z=="Celsius")
        {
            if(a=="Celsius")
                {
                    document.getElementById("id2").value=x;
                }
            else{
             var y=((9/5)*x)+32;
            document.getElementById("id2").value=y;
            }
        }
    else if(z="Farhenheit")
        {
            if(a=="Farhenheit")
                {
                    document.getElementById("id2").value=x;                            
                }
            else{
            var y=(x-32)*(5/9);
            document.getElementById("id2").value=y;
            }
            
        }
    
}
    
