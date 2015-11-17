
	//create the client objects
	var client = {fname:"John", lname:"Smith", number:"1-415-629-7453"};
	var client0 = {fname:"Bob", lname:"Hope", number:"223-456-7890"};
	var client1 = {fname:"Joe", lname:"Doe", number:"323-456-7890"};

	//add clients to the list
	var clientList = [client,client0,client1];
	var x;
	var y;
function printClients(clientObj){
	console.log(clientObj.fname + " " + clientObj.lname + " " + clientObj.number); 
	x = clientObj.fname + " " + clientObj.lname;
	y = clientObj.number;


	for(var i=0; i < clientList.length; i++){
	var name = "name" + [i];
	document.getElementById(name).innerHTML = clientList[i].fname + " " + clientList[i].lname;
	}

	for(var i=0; i < clientList.length; i++){
		var number = "number" + [i];
		var link = document.getElementById(number);
		link.innerHTML = clientList[i].number;
		link.setAttribute('href',"tel:"+clientList[i].number);
	}


};

function listClients(){
var clientListLength = clientList.length;
	for(var i=0; i < clientListLength; i++){
		//add each object and its properties to the carousel
		printClients(clientList[i]);
	}
};
window.onload = listClients();


/*
Maybe user jQuery to add the objects to the carousel elements?
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/