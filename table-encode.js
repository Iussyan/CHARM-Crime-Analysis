// Open the Add Crime Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").classList.add("show");
}

// Close the Add Crime Form
function closeForm() {
    document.getElementById("myForm").classList.remove("show");
    setTimeout(function() {
        document.getElementById("myForm").style.display = "none";
    }, 300); // Delay for the animation to complete
}

// Optional: Handle form submission
document.getElementById("addCrimeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission (you can change this if submitting to server)

    // Collect the data from the form
    const crimeData = {
        crime: document.getElementById("crime").value,
        address: document.getElementById("address").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        description: document.getElementById("description").value,
    };

    // Debug output
    console.log("Crime submitted:", crimeData);

    // Close the form after submission
    closeForm();

    // Optional: Provide feedback to the user
    alert("Crime record added!");
});

// Attach the openForm function to the ADD button
document.getElementById("pop-add").addEventListener("click", openForm);

// Attach the closeForm function to the Cancel button
document.getElementById("pop-add-close").addEventListener("click", closeForm);




// table row click action
function closeEditForm() {
    document.getElementById("editForm").style.display = "none";
  }
  
  function openEditForm(data) {
    document.getElementById("editId").value = data.id;
    document.getElementById("editCrime").value = data.crime;
    document.getElementById("editAddress").value = data.address;
    document.getElementById("editDate").value = data.date;
    document.getElementById("editTime").value = data.time;
    document.getElementById("editDescription").value = data.description;
  
    document.getElementById("editForm").style.display = "block";
  }
  
  // Get table rows and attach click listener
  document.querySelectorAll("#dataTable tbody tr").forEach(row => {
    row.addEventListener("click", function () {
      const data = {
        id: row.cells[0].textContent,
        crime: row.cells[1].textContent,
        address: row.cells[2].textContent,
        date: row.cells[3].textContent,
        time: row.cells[4].textContent,
        description: row.cells[5].textContent
      };
      openEditForm(data);
    });
  });
  
  // Handle form submit
  document.getElementById("editCrimeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Data saved!");
    closeEditForm();
  });
  