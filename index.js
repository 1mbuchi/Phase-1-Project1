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
        //menu data fetched from json server 
        var menu = [
            {
                name: "Spaghetti and Meatballs",
                description: "Classic spaghetti with homemade meatballs in marinara sauce.",
                price: 12.99,
            },
            {
               name: "Chicken Parmesan",
               description: "Breaded chicken breast with marinara sauce and melted mozzarella.",
               price: 14.99,
            },
            {
               name: "Grilled Salmon",
               description: "Fresh salmon grilled to perfection, served with seasonal vegetables.",
               price: 16.99,
            },
            {
               name: "Soda",
               description: "Coca-Cola, Diet Coke, Sprite, or Fanta.",
               price: 2.99,
            },
            {
               name: "Beer",
               description: "Domestic or imported.",
               price: 4.99,
            },
            {
               name: "Wine",
               description: "Red or white, by the glass or by the bottle.",
               price: 7.99,
            },
            {
              name: "Tiramisu",
              description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
              price: 6.99,
            },
            {
              name: "Cannoli",
              description: "Crispy pastry tubes filled with sweetened ricotta cheese.",
              price: 5.99,
            },
            {
              name: "IceCream.",
              description: "Creamy Italian ice cream in a variety of flavors.",
              price: 4.99,
            } 
            //loop created in js
          ];

          for (var i = 0; i < menu.length; i++) {
        var menu= menu[i];
        var menuItemHTML = '<li class="menu"><h3>' + menuItem.name + '</h3><p class="description">' + menuItem.description + '</p><p class="price">$' + menuItem.price + '</p></li>';
        document.getElementById('menu').innerHTML += menuItemHTML;
      }