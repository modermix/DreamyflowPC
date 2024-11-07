function takevalue() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    document.write("<center><h3>Thank you for registering for this event," + name + ". The email and phone you entered is " + email + " & " + phone + ". We will get back to you with more of the event details and payment.</h3> <h1>Please reload the page to get back to the website.</h1></center>")
}