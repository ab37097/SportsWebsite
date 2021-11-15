var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
var b1=document.getElementById('b1');
var b2=document.getElementById('b2');

function register()
{
	x.style.left='-400px';
	y.style.left='50px';
	z.style.left='110px';
	b2.style.color='white';
	b1.style.color='black';
}
function login()
{
	x.style.left='50px';
	y.style.left='450px';
	z.style.left='0px';
	b1.style.color='white'
	b2.style.color='black';
}
	
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}

function four() {
	for (i = 0; i < elements.length; i++) {
	  elements[i].style.flex = "25%";
	}
  }