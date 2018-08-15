
var arrAllMyEmails = { "myMails": [{}] }; //Almacena información volátil de todos los correos

var xhr = new XMLHttpRequest();
var objMail = {}; //Objeto del email
var blIsValidated = false; //Checkea si el formulario es válido
var nuErr = 0; //Lleva la cuenta de errores en el formulario

function sendMail() {
    const elForm = document.getElementById("email-form"); //El formulario

    for (let i = 0; i < elForm.length; i++) {
        elForm[i].value == "" ? nuErr++ : nuErr = nuErr;
    }

    objMail = {
        "name": elForm[0].value,
        "mail": elForm[1].value,
        "country": elForm[2].value,
        "text": elForm[3].value,
    }

    nuErr == 0 ? blIsValidated = true : blIsValidated = false;
    !blIsValidated ? alertError("Todos los campos son obligatorios") : concatEmails(objMail);
}

function alertError(strError) {
    console.log("Error", strError);
}

function concatEmails(objMail) {
    arrAllMyEmails.myMails.push(objMail); //concatena los correos 

    //Envía correo
    xhr.open("POST", 'https://us-central1-cvproject-213318.cloudfunctions.net/sendEmail', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + "" + objMail.name + "" + "&" + "mail=" + "" + objMail.mail + "" + "&" + "country=" + "" + objMail.country + "" + "&" + "text=" + "" + objMail.text + "");

    console.log("Todos mis correos enviados", arrAllMyEmails);
    closeModal();
}

function closeModal() {
    window.location.href = "#";
}

