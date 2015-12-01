//Voxxy Created by Jeremy Levy


/*
//create the client objects
var client = {fname:"John", lname:"Smith", number:"1-415-629-7453"};
var client0 = {fname:"Bob", lname:"Hope", number:"223-456-7890"};
var client1 = {fname:"Joe", lname:"Doe", number:"323-456-7890"};
*/


var clientList = [
	["Justin", "Levy", "1-515-858-0000"],
	["Ringo", "Star", "1-415-345-9597"],
	["John", "Doe", "1-123-456-9578"]
];

/*
//add clients to the list of objects
var clientList = [client,client0,client1];
var x;
var y;
*/
	
/* This function will print clinets to the carousel using object notation.
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
*/

//this function will print clients to the carousel using array notaction.
function printClientsToCarousel(){
	
	/* For Debugging uncomment to print to logs
	console.log(clientObj[0][0] + " " + clientObj[0][1] + " " + clientObj[0][2]); 
	x = clientObj[0][0] + " " + clientObj[0][1];
	y = clientObj[0][2];
	*/
try{
	//loop through client list array and set first & last name to carousel elements
	for(var i=0; i < clientList.length; i++){
		var name = "name" + [i];
		document.getElementById(name).innerHTML = clientList[i][0] + " " + clientList[i][1];
		var number = "number" + [i];
		var link = document.getElementById(number);
		link.innerHTML = clientList[i][2];
		link.setAttribute('href',"tel:"+clientList[i][2]);
	}
	/*
	//loop through client list array and print number to carousel element
	for(var z=0; z <= clientList.length-1; z++){
		var number = "number" + [z];
		var link = document.getElementById(number);
		link.innerHTML = clientList[z][2];
		link.setAttribute('href',"tel:"+clientList[z][2]);
	}*/
}catch(err){
		console.log("Uh Oh! Error! " + err);
	}
};
/*
function listClients(){
var clientListLength = clientList.length;
	for(var i=0; i < clientListLength; i++){
		//add each object and its properties to the carousel
		printClientsToCarousel(clientList[i]);
	}
};
window.onload = listClients();*/	

window.onload = printClientsToCarousel();


/*
Maybe use jQuery to add the objects to the carousel elements?
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/

/*
*************************************************************************************
|																					|																					|
|	start of handsontable js code													|
|																					|
*************************************************************************************
*/
var rowData;
var tableData;
var hot;
var rowCount;
function handsontable(){
    
    /*Dummy Data
    var myData = [
        ["", "Kia", "Nissan", "Toyota", "Honda"],
        ["2008", 10, 11, 12, 13],
        ["2009", 20, 11, 14, 13],
        ["2010", 30, 15, 12, 13]
        ],
        */
        container = document.querySelector('#exampleGrid');

		hot = new Handsontable(container, {
        
     	data: Handsontable.helper.createSpreadsheetData(50, 3), 

        //clientList, 

        //startRows: 100,
        //startCols: 100,
        //fixedRowsTop: 1,
        //minSpareCols: 1,
        //always keep at least 1 spare row at the right
        //minSpareRows: 1,
        //always keep at least 1 spare row at the bottom,
        rowHeaders: true,
        //colHeaders: true,
        colHeaders: ['First Name', 'Last Name', 'Number'],
        contextMenu: true
        //afterChange: 
    });
		//hot.clear();
}

//this function adds the row data to the client objects created above. 
function addRowDataToObj(rowCount){
	for(var i=0; i < rowCount; i++){
		rowData = hot.getDataAtRow(i);
  		document.getElementById("testRowData").innerHTML += rowData;
	}
}

//clone the carousel node for each number of rows the user inputs and increment the id by 1
function cloneCarousel(rowCount){
	if(rowCount > 1){
		var cloneId = 2;
		for (var i = 0; i < rowCount; i++) {
			//start clone ids at 2 to account for 3 (0,1,2) ids that exist for the demo
			//$("div.item:last").clone().insertAfter("div.item:last");
			//incrament the slide indicator for each
			//$("div.item:last").clone().appendTo("div.carousel-inner");
			$("div.item:last").clone().appendTo("div.carousel-inner");
			cloneId = cloneId + 1;
			$("div.carousel-caption:last").find("h1").attr("id", "name" + cloneId);
			$("div.carousel-caption:last").find("a").attr("id", "number" + cloneId);
			//incrament clone id
			
		}
	}
    	//set id of new name element in the carousel
    	//$("#name[i]").attr("id", "name"+[i]);
    	//set id of new number element in the carousel
    	//$("#number[i]").attr("id", "number"+[i]);
}
	
function Repeat(obj){
    var CurrentLi = $(obj).parent("li");
    CurrentLi.clone().insertAfter(CurrentLi);
  }

//count number of non empty rows in the table; Also subtract 3 from rowCount to account for 3 example carousels that load with page
function countNonEmptyRows(){
	var existingRows = 3;
  //var ht = $container.handsontable('getInstance');
  var totalrowCount = hot.countRows() - hot.countEmptyRows();
  rowCount = totalrowCount - existingRows;
  //console.log("totalrowCount"+totalrowCount);
  //console.log("rowCount"+rowCount);
  return rowCount;
}

function loadTable(){
	handsontable();
	hot.clear();
	//uncomment to hide table by default
	//$("#exampleGrid").hide();
}

function showHideTable(){
    $("#exampleGrid").toggle();
}


function saveTableData(){
	tableData = hot.getData();
	//document.getElementById("testRowData").innerHTML = tableData;
	
	//only add to clientList if tableData rows have data
	for(var i=0; i < tableData.length; i++){
		var tableDataZ = tableData[i];
		for(var j=0; j < tableDataZ.length; j++){
			if(tableDataZ[j] == ""){break;}
			console.log("table[" + i + "][" + j + "] = " + tableDataZ[j]);
			clientList[i]=tableDataZ;
		}
	}
	countNonEmptyRows();
	console.log(rowCount);
	console.log(clientList);
	cloneCarousel(rowCount);
	printClientsToCarousel();
}
/* use Ajax call to save the inputed data to json file on file on webserver's file system

Handsontable.Dom.addEvent(save, 'click', function() {
    // save all cell's data
    ajax('scripts/json/save.json', 'GET', JSON.stringify({data: hot.getData()}), function (res) {
      var response = JSON.parse(res.response);

      if (response.result === 'ok') {
        exampleConsole.innerText = 'Data saved';
      }
      else {
        exampleConsole.innerText = 'Save error';
      }
    });
  });
*/
window.onload = loadTable();