// In your searchDomains function, replace the mock results with:
fetch('/search', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ keyword }),
})
.then(response => response.json())
.then(data => displayResults(data))
.catch(error => console.error('Error:', error));