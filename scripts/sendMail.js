var strAllMyEmails = "";

function sendMail() {
    const elForm = document.getElementById("email-form");
    var strJsonForm = "{";
    var blIsValidated = false;
    var nuErr = 0;

    for (let i = 0; i < elForm.length; i++) {
        strJsonForm += "\"" + elForm[i].id + "\"" + ":" + "\"" + elForm[i].value + "\", ";
        elForm[i].value == "" ? nuErr ++ : nuErr = nuErr;
    }

    nuErr == 0 ? blIsValidated = true : blIsValidated = false;

    if (!blIsValidated) {
        alertError("Todos los campos son obligatorios")
    }
    else {
        strJsonForm += "}";
        concatEmails(strJsonForm);
    }
    //closeModal();
}

function alertError(strError) {
    console.log("Error", strError);
}

function concatEmails(strEmail) {
    strAllMyEmails += strEmail;
    console.log("Todos mis correos enviados", strAllMyEmails)
}

function closeModal() {
    window.location.href = "#";
}
