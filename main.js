function sayhi()
{
    document.getElementById("name").firstChild.nodeValue="Hey, there!";
    
    return true;    
}
function undo()
{
    document.getElementById("name").firstChild.nodeValue="Abhijeet Kumar";
    return true;    
}

var str = "Engineer | Developer ";
var i=0;
var len = str.length;
function type()
{    
    if(i<len)
    {
        document.getElementById("bio").innerHTML += str.charAt(i);
        i++;
        setTimeout(type,75);
    }
}
