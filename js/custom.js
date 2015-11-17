function test(){
	alert("Hello World");

	//create the client objects
	var client = {fname:"John", lname:"Smith", number:"123-456-7890"};
	var client0 = {fname:"Bob", lname:"Hope", number:"123-456-7890"};
	var client1 = {fname:"Joe", lname:"Doe", number:"123-456-7890"};

	//add clients to the list
	var clientList = [client,client0,client1];
};

function printClients(clientObj){
	console.log(clientObj.fname + " " + clientObj.lname);
	//var x = getElementById("something");
};

function listClients(){
var clientListLength = clientListLength.length;
	for(var i=0; i < clientListLength; i++){
		//add each object and its properties to the carousel
		printClients(clientList[i]);
	}
};
window.onload = listClients();