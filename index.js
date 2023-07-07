var addToCartButtons = document.querySelectorAll("button");
for (var i = 0; i < addToCartButtons.length; i++) 
	addToCartButtons[i].addEventListener("click", function() {
		alert("Order!");
	}); //button function