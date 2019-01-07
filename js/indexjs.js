
/* event listener for menu bars*/

let navigation = document.getElementById("topNav");
document.getElementById("menuBars").addEventListener("click", function(){


navigation.style.width = "100%";

})
/* event listener for mobileview menu closebtn*/
document.getElementById("aboutLink").addEventListener("click", function() {
	navigation.style.width = "0%";
})
document.getElementById("contactLink").addEventListener("click", function() {
	if(window.innerWidth < 800 )
	{navigation.style.width = "0%";}
})
document.getElementById("closebtn").addEventListener("click", function() {
	navigation.style.width = "0%";
})

