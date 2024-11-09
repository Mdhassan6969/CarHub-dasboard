let butt = document.getElementById('button');
butt.addEventListener("click",()=>{
    let carname = document.getElementById("Vname")
    let year = document.getElementById("Myear")
    let ccode = document.getElementById("CCC")
    console.log(carname.value);
    console.log(year.value);
    console.log(ccode.value);

    let dataspass = document.getElementById("datapass")
    console.log("Calculationcount",dataspass.rows.length);


    
    let rownumber = dataspass.insertRow(dataspass.rows.length)
    console.log("rowcheck",rownumber);
    let carnametd = rownumber.insertCell(0)           
    let yeartd = rownumber.insertCell(1)
    let ccodetd = rownumber.insertCell(2)
    let remove = rownumber.insertCell(3)
    carnametd.innerHTML = (carname.value)
    yeartd.innerHTML = (year.value)
    ccodetd.innerHTML = (ccode.value)
    remove.innerHTML = '<button class="buttremove" onclick={removefunction(this)}>Clear</button>'



})

function removefunction(params) {
    console.log(params);
    let datas_row = params.parentNode.parentNode;
    console.log(datas_row);
    let data_remove = datas_row.parentNode.removeChild(datas_row);
    console.log(data_remove);
    
    
    
}


let geneatebtn = document.getElementById("geneatebtn");
geneatebtn.addEventListener("click",function generatingpdf(e){
    e.preventDefault();
    let product_table = document.getElementById("tableclone").cloneNode(true)
    console.log(product_table);
    let allrows = product_table.getElementsByTagName('tr')
    console.log("allrows",allrows);
    for (let index = 0; index < allrows.length; index++) {
        const element = allrows[index].getElementsByTagName('td');
        console.log("element",element);
        if (element.length > 0) {
         allrows[index].deleteCell(element.length-1)   
        }
        
        
    }
    
    
    // var rows = product_table.getElementsByTagName('tr')
    // for (let index = 0; index < rows.length; index++) {
    //     const element = rows[index].getElementsByTagName('td');
    //     if (element.length > 0) {
    //         rows[index].deleteCell(element.length - 1)
    //     }
        
    // }
    let entire_table = product_table.outerHTML
    let newtab = window.open('','_blank');
    newtab.document.write('<head><style>');
        newtab.document.write('body { font-family: Arial, sans-serif; }');
        newtab.document.write('table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }');
        newtab.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
        newtab.document.write('th { background-color: #f2f2f2; }');
        newtab.document.write('#totalAmount { font-weight: bold; }');
        newtab.document.write('#invoiceTitle { text-align: center; font-size: 24px; margin-bottom: 20px; }');
        newtab.document.write('</style>');
        newtab.document.write('</head><body>');
            newtab.document.write('<h2 id="invoiceTitle">generate Bill</h2>');
            newtab.document.write(entire_table);
            newtab.document.close();
            newtab.print();

            
    
})

