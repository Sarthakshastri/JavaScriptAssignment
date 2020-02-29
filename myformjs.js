// function qualification()
	var select = document.getElementById("Qualification");
	var q =["Post graduation", "Under graduation","Diploma","12th Passed"];

	for(var i=0;i<q.length;i++)
	{
		var opt=q[i];
		var qual=document.createElement("option");
		qual.textContent=opt;
		qual.value=opt;
		select.appendChild(qual);

	}

	var select = document.getElementById("Experience");
	var e =["fresher", "1-2 Years", "2-3 Years", "3-4 Years","4-5 Years","5+ Years"];

	for(var i=0;i<e.length;i++)
	{
		var opt1=e[i];
		var exp=document.createElement("option");
		exp.textContent=opt1;
		exp.value=opt1;
		select.appendChild(exp);

	}
	var check= document.getElementById("code");

  var codinglang=[{language:"C/C++",status: false},{language:"Java",status: true},{language:"C#",status: true},
	{language:"PHP",status: false},{language:"Python",status: false}];
 
 	for(var i=0;i<codinglang.length;i++)
 	{
 		var cb= document.createElement("input");
 		cb.setAttribute("type","checkbox");
 		var L= document.createElement('label');
 		L.htmlFor = codinglang[i].language;
 		L.appendChild(document.createTextNode(codinglang[i].language));
 		if(codinglang[i].status==true)
 		{
 			cb.checked=true;
 			document.body.appendChild(cb);
 			check.appendChild(cb);
 		}
 		else
 		{
 			cb.checked=false;
 			document.body.appendChild(cb);
 			check.appendChild(cb);
 		}
 		check.appendChild(L);

 		check.appendChild(document.createElement("br"));
 		
 	}

 	function save()
 	{
 		var data={};
 		data.fname=document.getElementById("fname").value;
 	    data.lname=document.getElementById("lname").value;
 		data.email=document.getElementById("emailid").value;
 		data.contact=document.getElementById("contactno").value;
 		data.address=document.getElementById("address").value;
 		data.username=document.getElementById("uname").value;
 		data.password=document.getElementById("password").value;
 		data.gender=document.getElementById("gender").value;
 		data.qualification=document.getElementById("Qualification").value;
 		data.experience= document.getElementById("Experience").value;

 		console.log(data.fname);
 		console.log(data.lname);
 		console.log(data.email);	
 		console.log(data.contact);
 		console.log(data.address);
 		console.log(data.username);
 		console.log(data.password);
 		console.log(data.gender);
 		console.log(data.qualification);
 		console.log(data.experience);
 	};

