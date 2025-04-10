const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const chas = document.getElementById('MonthlyCrime');

  new Chart(chas, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [15, 12, 10, 20, 8, 6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const cha = document.getElementById('FrequentCrime');

  new Chart(cha, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [15, 12, 10, 20, 8, 6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const chs = document.getElementById('CrimeHotspot');

  new Chart(chs, {
    type: 'donut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [15, 12, 10, 20, 8, 6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Open the first form and close the second
function openForm() {
  // Close the second form if it's open
  const formB = document.getElementById("myForm-b");
  formB.style.display = "none";  // Hide it
  formB.classList.remove("show"); // Remove the animation
  
  // Open the first form
  const form = document.getElementById("myForm");
  
  // Reset the animation by removing and re-adding the class
  form.classList.remove("show");
  form.style.display = "block"; // make it visible before animation
  
  // Add the animation class with a small delay to trigger the animation
  setTimeout(() => {
    form.classList.add("show");
  }, 10);
}

// Close the first form
function closeForm() {
  const form = document.getElementById("myForm");
  
  // Remove the animation class to stop the animation
  form.classList.remove("show");
  
  // Optional: use a fade/slide out animation first, then hide it
  setTimeout(() => {
    form.style.display = "none";
  }, 500); // Match animation duration
}

// Open the second form and close the first
function openFormb() {
  // Close the first form if it's open
  const form = document.getElementById("myForm");
  form.style.display = "none";  // Hide it
  form.classList.remove("show"); // Remove the animation
  
  // Open the second form
  const formB = document.getElementById("myForm-b");
  
  // Reset the animation by removing and re-adding the class
  formB.classList.remove("show");
  formB.style.display = "block"; // make it visible before animation
  
  // Add the animation class with a small delay to trigger the animation
  setTimeout(() => {
    formB.classList.add("show");
  }, 10);
}

// Close the second form
function closeFormb() {
  const formB = document.getElementById("myForm-b");
  
  // Remove the animation class to stop the animation
  formB.classList.remove("show");
  
  // Optional: use a fade/slide out animation first, then hide it
  setTimeout(() => {
    formB.style.display = "none";
  }, 500); // Match animation duration
}
