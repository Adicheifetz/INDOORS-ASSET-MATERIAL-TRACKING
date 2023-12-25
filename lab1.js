  // Get the canvas element and 2D context
  var canvas = document.getElementById('uwb-canvas');
  var ctx = canvas.getContext('2d');

  // Function to update the tag position on the canvas
  function updateTagPosition(x, y) {
      // Clear the previous content of the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw anchor points
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(38, 40, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(243, 40, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(53, 141, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Draw the updated tag position
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
  }

  // Simulate an update of the tag position (replace this with real data)
  function simulateUpdate() {
      // Generate random coordinates for simulation
      var newX = Math.random() * canvas.width;
      var newY = Math.random() * canvas.height;

      // Update the tag position on the canvas
      updateTagPosition(newX, newY);

      // Set a timer for the next update (every 1000 milliseconds / 1 second)
      setTimeout(simulateUpdate, 1000);
  }

  // Start the simulation
  simulateUpdate();