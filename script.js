document.addEventListener("DOMContentLoaded", () => {
    let FirstName;
    let email;
    let message;

    const inputElement = document.getElementById("name");
    inputElement.addEventListener("input", (e) => {
        FirstName = e.target.value;
    });

    const emailInputElement = document.getElementById("email");
    emailInputElement.addEventListener("input", (e) => {
        email = e.target.value;
    });

    const messageInputElement = document.getElementById("message");
    messageInputElement.addEventListener("input", (e) => {
        message = e.target.value;
    });

    const buttonInputElement = document.getElementById("btn_send");
    buttonInputElement.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(FirstName, email, message);

        const outputElement = document.getElementById("output");
        outputElement.innerHTML = `
            <h2>Message Details</h2>
            <p>Name: ${FirstName}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `;
        alert("Message sent!");
    });
});
