const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let total = 0;
	let totalPrice = document.querySelectorAll('.price');
	totalPrice.forEach(p => {
		let value = parseFloat(p.textContent);
		if(!isNaN(value)){
			total += value;
		}
        
	});
    console.log(total);
	let totalrow = document.createElement('tr');
	let totalcells = document.createElement('td');
	totalcells.setAttribute('colspan','2');
	totalcells.style.fontWeight='bold';
	totalcells.style.textAlign='right';
	totalcells.textContent = `RS ${total}`;
    //console.log(totalcells.textContent = `Total = RS ${total}`);

	totalrow.appendChild(totalcells);
    //console.log(totalrow.appendChild(totalcells));

	let table = document.querySelector('table');
    //console.log(table);
	table.appendChild(totalrow);
    //console.log(table.appendChild(totalrow));
};

getSumBtn.addEventListener("click", getSum);

