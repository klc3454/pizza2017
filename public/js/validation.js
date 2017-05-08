class Validation{
	constructor(re,input, id,err){
		this.re=re;
		this.input=input;
		this.id=id;
		this.vBefore=false;
		this.nodeMsg=null;
		this.errMsg=err;
	}

	validate(){
		let p=document.getElementById("signup");
		 let input=this.id.value;
		let validResult= this.re.test(input);
		if((!validResult)&&(!this.vBefore))
		{
 		this.id.style.backgroundColor="red";
 		this.nodeMsg=document.createElement('p');
 		this.nodeMsg.textContent=this.errMsg;
	 	p.insertBefore(this.nodeMsg,this.id);
	 	this.vBefore=true;
	 	}
	 	else if(validResult){
	 		if(this.vBefore)
	 		{
	 		   p.removeChild(this.nodeMsg);
	 		}
	 		this.vBefore=false;
	 	}
	 	return validResult;
	}
}


function test(){
	let result2=false;
	let result1=false;
this.validateEmail=function()
{    
	//let result1=false;
      let id= document.getElementById("email");
      let re=/\S+@\S+\.\S+/;
     let v=new Validation(re,id.value,id,"Invalid Email Address!");
    
	   id.addEventListener("blur",function(){
           result1= v.validate();
     		return result1;  
	});
	

     
}

this.validatePwd=function()
{    
	//let result2=false;
      let id= document.getElementById("pwd");
      let re=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
     let v=new Validation(re,id.value,id,"Invalid password!");
  	 id.addEventListener("blur",function(){
        result2= v.validate();
        if(!result2) document.getElementById("pwd").focus();
  	    return result2;
	});
    
}
this.validate=function(form) {
	
	if(!result1)
	{
			document.getElementById("email").focus(); 
			
	}
	else if(!result2)
	{
			document.getElementById("pwd").focus(); 
			
			
	}
	return result1&result2;
}
}