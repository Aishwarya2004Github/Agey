const calculateButton = document.getElementById("calculateBtn");

calculateButton.addEventListener("click", function() {
    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;

    if (startDateInput && endDateInput) {
        const startDate = new Date(startDateInput);
        const endDate = new Date(endDateInput);

        if (startDate >= endDate) {
            alert("End date must be after the start date.");
            return;
        }

        // Calculate the difference in years
        let diffYears = endDate.getFullYear() - startDate.getFullYear();

        // Calculate the difference in months
        let diffMonths = endDate.getMonth() - startDate.getMonth();

        // Calculate the difference in days
        let diffDays = endDate.getDate() - startDate.getDate();

        // Adjust for negative days
        if (diffDays < 0) {
            const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
            diffDays += lastMonth.getDate();
            diffMonths--;
        }

        // Adjust for negative months
        if (diffMonths < 0) {
            diffMonths += 12;
            diffYears--;
        }

        // Update the HTML elements with the calculated values
        document.getElementById("years").textContent = diffYears;
        document.getElementById("months").textContent = diffMonths;
        document.getElementById("days").textContent = diffDays;
    } else {
        alert("Please select both start and end dates.");
    }
});
