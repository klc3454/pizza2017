class Validation
{
	constructor(id, re, errMsg)
	{
		this.id=id;
		this.re=re;
		this.errMsg=errMsg;
		this.nodeMsg=null;
	}


	validate()
	{
		let input=this.id.value;
		let validResult=this.re.test(input);

		if(!validResult)
		{
			if(this.nodeMsg==null)
			{

				this.id.style.backgroundColor="red";
			//use Dom to add a node to HTML 
			//Node is <p> element containing error msg. 
			this.nodeMsg=document.createElement("p");
			//p is HTML tag
			this.nodeMsg.textContent=this.errMsg;
			let parent=document.getElementById("signup");
			parent.insertBefore(this.nodeMsg, this.id);
			}
		}
	else
	{
		if(this.nodeMsg!==null)
		{
			let parent=document.getElementById("signup");
			parent.removeChild(this.nodeMsg);
			this.id.style.backgroundColor="white";
		}
	}
	return validResult;

	}
}


function validateEmail()
{
	let id=document.getElementById("email");

	// \S means anything that is not whitespace 
	// + means the letter must appear at least once
	
	let re=/\S+@\S+.\S+/;
	let v=new Validation(id,re, "Invalid Email");
	//blur: when the element loses the focus
	id.addEventListener("blur", function(){

		return v.validate();


		//closure: inside function can use any variables defined in its parent func.
	});

}

function validatePwd()
{
	let id=document.getElementById("pwd");

	// \S means anything that is not whitespace 
	// + means the letter must appear at least once
	
	let re=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	let v=new Validation(id,re, "Invalid Password");
	//blur: when the element loses the focus
	id.addEventListener("blur", function(){

		return v.validate();


		//closure: inside function can use any variables defined in its parent func.
	});


}