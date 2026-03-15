async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.text();
    message.innerText = result;

    if (result === "login successful") {
      message.style.color = "green";
      // redirect example
      // window.location.href = "dashboard.html";
    } else {
      message.style.color = "red";
    }
  } catch (error) {
    console.error(error);
    message.innerText = "Server error";
    message.style.color = "red";
  }
}

module.exports=login