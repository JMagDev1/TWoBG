function toggleMenu() {
    var navbar = document.querySelector(".nav-buttons");
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const reviewTable = document.getElementById("reviewTable").getElementsByTagName('tbody')[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const nameInput = document.getElementById("from_name");
        const reviewInput = document.getElementById("message");

        const name = nameInput.value;
        const review = reviewInput.value;

        if (name && review) {
            const newRow = reviewTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const reviewCell = newRow.insertCell(1);

            nameCell.textContent = name;
            reviewCell.textContent = review;

            // Clear input fields
            nameInput.value = "";
            reviewInput.value = "";
        }
    });
});

