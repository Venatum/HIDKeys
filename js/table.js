let tab = document.createElement("table");

/* Head */
let thead = tab.createTHead();
let theadRow = thead.insertRow(0);

for (let data in rel[0]) {
    let th = document.createElement("th");
    th.innerHTML = data;
    theadRow.appendChild(th);
}

/* Body */
let tbody = tab.createTBody();

for (let obj in rel) {
    let row = tbody.insertRow(0);
    for (let data in rel[obj]) {
        let cell = row.insertCell();
        cell.innerHTML = rel[obj][data];
    }
}
document.getElementById("tab").appendChild(tab);