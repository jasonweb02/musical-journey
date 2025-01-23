// Chart.js - Live Forex Candle Chart with Static Data
const ctx = document.getElementById('forexChart').getContext('2d');

// Static data for the forex chart (you can update this manually)
const forexData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [{
        label: 'Profit Trend',
        data: [120, 190, 300, 500, 200, 300], // Example profit data
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Line area color
        borderWidth: 2
    }]
};

// Initialize Chart
const forexChart = new Chart(ctx, {
    type: 'line',
    data: forexData,
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
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Profit: $${tooltipItem.raw}`;
                    }
                }
            }
        },
    }
});

// Form submission handling (basic example)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Disable submit button to prevent multiple submissions
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Simulate form submission (you can replace this with actual backend logic)
    setTimeout(() => {
        alert('Form submitted successfully!');
        event.target.reset(); // Clear the form
        submitButton.disabled = false; // Re-enable the submit button
    }, 1000); // Simulate a 1-second delay before success
});
