var rowData;
function handsontable(){
    var myData = [
        ["", "Kia", "Nissan", "Toyota", "Honda"],
        ["2008", 10, 11, 12, 13],
        ["2009", 20, 11, 14, 13],
        ["2010", 30, 15, 12, 13]
        ],
        container = document.querySelector('#exampleGrid');

    var hot = new Handsontable(container, {
        //data: myData,
        startRows: 5,
        startCols: 5,
        minSpareCols: 1,
        //always keep at least 1 spare row at the right
        minSpareRows: 1,
        //always keep at least 1 spare row at the bottom,
        rowHeaders: true,
        colHeaders: true,
        contextMenu: true
        
    });
    rowData = hot.getDataAtRow(2);
    document.getElementById("testRowData").innerHTML = rowData;
}
window.onload = handsontable();