// script.js
function getvalue() {
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById(
      "output"
    ).innerText = `Email: ${email}, Password: ${password}`;

    const response = await fetch("http://localhost:7001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      console.log(data);
      // You can redirect or store token if needed
    } else {
      alert("Login failed: " + data.message);
    }
  });
}
