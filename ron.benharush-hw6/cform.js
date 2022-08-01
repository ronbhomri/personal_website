function ValidateEmail(inputText)
{
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)) {
        document.getElementById("sent").innerHTML="Messege sent!";
        return true;

    } else {
        alert("You have entered an invalid email address");
        document.con.email.focus();
        return false;
    }
}
function resetM(){
    document.getElementById("sent").innerHTML="";
}