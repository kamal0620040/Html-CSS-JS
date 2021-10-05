const myPieChart = new Chart(document.getElementById("chartjs"), {
    type: "pie",
    data: {
        labels: ["Approved", "Accepted", "Rejected", "Pending", "Apporoved"],
        datasets: [{ data: [30, 10, 20, 15, 25], fill: false, backgroundColor: [" #312E81", " #4338CA", " #4F46E5", " #4338CA","grey"] }]
    },
    options: {
        ledgend: {
            position: false,
        },
    },
});