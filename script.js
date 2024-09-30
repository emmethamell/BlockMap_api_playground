document.getElementById('method').addEventListener('change', function() {
    const method = this.value;
    const bodyInput = document.getElementById('body-input');
    bodyInput.style.display = (method === 'POST') ? 'block' : 'none';
});

document.getElementById('send').addEventListener('click', async () => {
    const endpoint = document.getElementById('endpoint').value;
    const method = document.getElementById('method').value;
    const params = method === 'POST' ? document.getElementById('params').value : null;
    print(endpoint)
    const url = `https://blockmap.onrender.com/${endpoint}`;

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: params && method === 'POST' ? params : null,
        });

        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('response').textContent = `Error: ${error}`;
    }
});
