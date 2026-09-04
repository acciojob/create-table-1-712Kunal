function insert_Row() {
    //Write your code here
  
  let table=document.getElementById("sampleTable");
let row=document.createElement("tr");
	let data1=document.createElement("td");
	data1.innerText="New Cell1";

	let data2=document.createElement("td");
	data2.innerText="New Cell2";

	row.appendChild(data1);
	row.appendChild(data2);

	table.appendChild(row);
}
