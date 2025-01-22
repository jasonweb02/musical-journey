// Chart.js - Live Forex Candle Chart
const ctx = document.getElementById('forexChart').getContext('2d');

// Example data for the forex chart (you can replace with real data)
const forexChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
        datasets: [{
            label: 'Profit Trend',
            data: [120, 190, 300, 500, 200, 300], // Example profit data
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Line area color
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Ensure chart is responsive in size
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Profit ($)'
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }
});

// Form submission handling (basic example)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Display a simple alert with the form data (you can replace this with an actual email sending service)
    alert(`Form Submitted! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
    
    // Clear the form after submission
    event.target.reset();
});
