
document.getElementById("registerButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const apiUrl = "http://localhost:5000/register";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "User created") {
            document.getElementById("resultMessage").innerHTML = `<p>Registration successful!</p>`;
        } else {
            document.getElementById("resultMessage").innerHTML = `<p>Something went wrong!</p>`;
        }
    })
    .catch(error => {
        document.getElementById("resultMessage").innerHTML = `<p>Error during registration</p>`;
    });
});
