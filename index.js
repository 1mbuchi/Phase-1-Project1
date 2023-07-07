var addToCartButtons = document.querySelectorAll("button");
for (var i = 0; i < addToCartButtons.length; i++) 
	addToCartButtons[i].addEventListener("click", function() {
		alert("Order!");
	}); //button function
    //featured data fetched from js server 
    var featured = [
        {
          name: "Garlic Bread",
          description: "Toasted ciabatta bread with garlic butter.",
          price: 4.99,
        },
        {
           name: "Caprese Salad",
           description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze.",
           price: 7.99,
        },
        {
            name: "Fried Calamari",
            description: "Lightly breaded and fried, served with marinara sauce.",
            price: 9.99,
        }];