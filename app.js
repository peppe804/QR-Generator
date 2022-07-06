function generateQR(){
    document.querySelector("#qr-image").style.display ="block";
    let QRtext= document.querySelector("#text").value;
    if(QRtext.trim().length==0){
        document.querySelector("#qr-image .error").innerHTML="Por favor ingrese texto";
        document.querySelector("#img").style.display="none";

    } else{
        document.querySelector("#img").style.display="block";
        document.querySelector("#qr-image .error").innerHTML="";
        document.querySelector("#img").
        src="https://api.qrserver.com/v1/create-qr-code/?size=240*240&data="
        +QRtext;
    }
}