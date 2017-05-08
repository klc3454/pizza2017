

//this Array will get the info from Node
let pizzas=[
{name:"Pepperoni" , img:"peppizza.jpg" ,price: 6.99},
{name: "Works", img:"supremepizza.jpg", price: 9.99},
{name: "Chicken Alfredo",img:"alfredopizza.jpg",  price: 7.99},
{name: "Cheese",img:"cheese.jpg",  price: 5.99},
{name: "Meat Lover's",img:"meatPizza.jpg",  price: 10.99},
{name: "Hawaiian",img:"hPizza.jpg",  price: 7.99},
{name: "Cheese Sticks",img:"cheese Sticks.jpg",  price: 6.99},
{name: "Bacon Cheese Sticks",img:"baconCheese.jpg",  price: 8.99},
{name: "Coke",img:"coke.jpg",  price: 1.99},
{name: "Cookie Pie",img:"cookie.jpeg",  price: 4.99}
];


function registerButtonEvent()
{

	let buttons=document.getElementsByTagName('button');
	for (let i=0; i<buttons.length-1; i++)
	{
		buttons[i].addEventListener("click", function(){addToCart(i);

		});
	}
	let number=localStorage.getItem("number");
	if(number===null)
		number=0;
	document.getElementById('numItem').innerHTML=number;
}

function registerRemoveButton()
{
	let removeButtons=document.getElementsByTagName('button');
	for(let i=0; i<removeButtons.length-1; i++)
	{
		removeButtons[i].addEventListener("click", function(){removeFromCart(i);
		});
	}
}

function addToCart(pId)
{
	let cartJ=localStorage.getItem("cart");
	let cart;
	if(cartJ===null)
	{
		cart=[];	
	}
	else
	{
		cart=cartJ.split(",");
	}
	cart.push(pId);
	let number=localStorage.getItem("number");
	if(number===null)
		number=0;
	document.getElementById('numItem').innerHTML=`${++number}`;
	localStorage.setItem("cart", cart.toString());
	localStorage.setItem("number", number);


}

function removeFromCart(pizzaId)
{
	cartJ=localStorage.getItem("cart");
	let cart=[];
	cart=cartJ.split(",");
	cart.splice(pizzaId,1);
	if(cart.length==0)// No item in Cart
	{
		localStorage.removeItem("cart");
		localStorage.removeItem("number");
	}
	else
	{
		localStorage.setItem("cart", cart.toString());
		localStorage.setItem("number", localStorage.getItem("number")-1);
	}

	showCart();
}
function clearCart()
{
	localStorage.removeItem("cart");
	localStorage.removeItem("number");
}


function showCart()
{
	let cartJ=localStorage.getItem("cart");
	let cart=[];
	let info="";
	let total=0;
	let pizzaId=0;
	if(cartJ===null)
		info="<h2> You have no items in the cart </h2>";
	else
	{
		cart=cartJ.split(",");
		for(let i of cart)
		{
			let item=pizzas[i];
			total=total+item.price;
			info+=
			` <div class="row">
			<div class="col-md-3 text-center">
			<h3>${item.name}</h3>

			</div>
			<div class="col-md-3">
			<img class="pizza" src="./Images/${item.img}" alt="pepperoni">

			</div>
			<div class="col-md-3 text-center">
			<h3>${item.price}</h3>

			</div>

			<button type="button" onClick="removeFromCart(${pizzaId})" class="btn btn-danger ">Remove Item</button>

			</div>  `;
			pizzaId++;
		}// end of loop

		info=info+ "<p> The total is "+total;

		

	}//end of else

	document.getElementById("myCart").innerHTML=info;
}