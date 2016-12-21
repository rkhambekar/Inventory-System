	//creating module
    var inventory = angular.module("inventory", []);

    //create controller and bind objects in key-value pair
	inventory.controller('myController', function($scope) {
	  $scope.items = [{
	    'name': 'Acme Super Greased Cogwheel - Small',
	    'price': 1
	  }, {
	    'name': 'Acme Super Greased Cogwheel - Medium',
	    'price': 1.5
	  }, {
	    'name': 'Acme Super Greased Cogwheel - Large',
	    'price': 3
	  }, {
	    'name': ' Micro Sensor 3000',
	    'price': 12
	  }, {
	    'name': 'Twirly Whirly - Small',
	    'price': 10
	  }, {
	    'name': 'Twirly Whirly - Medium',
	    'price': 12.75
	  }];
      
      //define item quantity and make an empty array of cartItems to be updated later
	  $scope.itemQuantity = [1, 2, 3, 4, 5, 6,7,8,9,10];
	  $scope.cartItems = [];

      //dynamic function to update price
	  $scope.getPriceList = function(item) {
	    $scope.item.price = item.price;
	  }

      //add to cart
	  $scope.AddInCart = function() {
	    var itemName = $scope.item.name;
	    var itemPrice = parseFloat($scope.item.price);
	    var itemQuantity = parseInt($scope.quantity);
	    var totalPrice = parseFloat(itemPrice * itemQuantity);
	    var cartItemList = {
	      'name': itemName,
	      'price': itemPrice,
	      'quantity': itemQuantity,
	      'totalAmount': totalPrice
	    };
        //push the populated items to previously empty cartItems array
	    $scope.cartItems.push(cartItemList);
	  }
      
      //remove an item from the cart
	  $scope.removeCartItem = function(index) {
	    $scope.cartItems.splice(index, 1); //remove one at a time
	  }

      //calculating total bill
	  $scope.subTotalAmount = function() {
	    var cartItemsLength = $scope.cartItems.length;
	    var totalAmount = 0.0;
        
        //check if cart not empty
	    if (cartItemsLength > 0) {
	      for (var i = cartItemsLength - 1; i >= 0; i--) {
	        totalAmount += parseFloat($scope.cartItems[i].totalAmount); //looping through each item in the cart
	      }
	    }
	    return totalAmount; //total sum of all items in the cart
	  }
	});
