function createCalendar(year, month) {

    // Create the table
    let table = document.createElement("table");

    // Create the header
    let header = document.createElement("tr");

    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    for (let i = 0; i < days.length; i++) {
        let th = document.createElement("th");
        th.textContent = days[i];
        header.appendChild(th);
    }

    table.appendChild(header);

    // Get the first day of the month
    let firstDay = new Date(year, month - 1, 1).getDay();

    // Convert Sunday (0) to 7, so Monday is 1
    if (firstDay === 0) {
        firstDay = 7;
    }

    // Get the number of days in the month
    let daysInMonth = new Date(year, month, 0).getDate();

    // Create the first row
    let row = document.createElement("tr");

    // Add empty cells before the first day
    for (let i = 1; i < firstDay; i++) {
    let td = document.createElement("td");
    td.textContent = ".";
    row.appendChild(td);
}

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {

        let td = document.createElement("td");
        td.textContent = day;

        row.appendChild(td);

        // Every 7 days, create a new row
        if ((firstDay + day - 1) % 7 === 0) {
            table.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // Add the last row if it contains days
    if (row.children.length > 0) {
        table.appendChild(row);
    }

    // Display the calendar
    document.getElementById("calendar").appendChild(table);
}

// Test
createCalendar(2012, 9);