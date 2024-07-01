document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('MPButton');
    button.addEventListener('click', () => {
        // Perform an action here, e.g., make an AJAX request
        fetch('/button-action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Button clicked!' })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Optionally update the DOM based on the response
        })
        .catch(error => console.error('Error:', error));
    });
});
