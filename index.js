function submitData(name, email) {
    //formData for stringify later on
    const formData = {
        name: name,
        email: email
    };
    //configurationObject for use in fetch later on
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
    };
    //fetch chain that sends data and handles responses and errors
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => {
            const id = data.id;
            document.body.innerHTML += `<p>New ID: ${id}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error}</p>`;
        });
} 