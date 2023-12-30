var canvas = document.getElementById('uwb-canvas');
var ctx = canvas.getContext('2d');

function updateTagPosition(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBluePoint(38, 40, 1);
    drawBluePoint(243, 40, 2);
    drawBluePoint(53, 141, 3);
    drawRedPoint(x, y);

    updateDistanceTable(x, y);
}

function drawBluePoint(x, y, number) {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Draw the point number inside the blue circle
    ctx.fillStyle = 'white'; // Set text color
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(number, x, y);
}

function drawRedPoint(x, y) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function updateDistanceTable(x, y) {
    var tableBody = document.getElementById('distance-table-body');
    tableBody.innerHTML = ''; // Clear existing table rows

    // Calculate and append distances to the table
    appendDistanceToTable('Blue Point 1', calculateDistance(x, y, 38, 40));
    appendDistanceToTable('Blue Point 2', calculateDistance(x, y, 243, 40));
    appendDistanceToTable('Blue Point 3', calculateDistance(x, y, 53, 141));
}

function appendDistanceToTable(anchorPoint, distance) {
    var tableBody = document.getElementById('distance-table-body');
    var row = tableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = anchorPoint;
    cell2.innerHTML = distance.toFixed(2); // Limit decimals to 2 places
}

function simulateUpdate() {
    var newX = Math.random() * canvas.width;
    var newY = Math.random() * canvas.height;

    updateTagPosition(newX, newY);

    //setTimeout(simulateUpdate, 2000);
}

simulateUpdate();
