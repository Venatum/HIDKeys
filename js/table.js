function isNumeric(n) { return !isNaN(parseFloat(n)) && isFinite(n); }

function sortMe(evt) {
    let table = this;
    let cell = evt.target;
    let col = cell.cellIndex;

    // let rowArray = Array.from(table.rows);
    let rows = table.getElementsByTagName("TR");
    let rowArray = [];
    for (let i = 1; i < rows.length; i++) {
        rowArray.push(rows[i])
    }
    rowArray.sort((a, b) => {

        // Get values of col to sort on
        a = a.cells[col].textContent;
        b = b.cells[col].textContent;

        // If numeric, sort as number
        if (isNumeric(a)) return a - b;
        // Other sort options here, e.g. as dates
        // Otherwise, sort as string
        return a.localeCompare(b);
    });

    // Put rows back in table in order
    let tbody = table.tBodies[0];
    rowArray.forEach((row) => {
        tbody.appendChild(row);
    })
}

window.onload = function () {
    let tab = document.createElement("table");
    tab.setAttribute("id", "myTable");

    /* Head */
    let thead = tab.createTHead();
    let theadRow = thead.insertRow(0);
    let i = 0;
    for (let data in rel[0]) {
        let th = document.createElement("th");
        th.innerHTML = data + "&#09;<i class=\"fas fa-sort\"></i>";
        // th.setAttribute("onclick", `sortTable(${i})`);
        theadRow.appendChild(th);
        i++;
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

    document.getElementById("myTable").addEventListener('click', sortMe, false);
};
