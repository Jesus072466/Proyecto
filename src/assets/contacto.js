function Enviar(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Introduce tu nombre completo";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Introduzca un teléfono válido";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Introduzca un correo válido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 50){
      text = "Introduce más de 50 caracteres";
      error_message.innerHTML = text;
      return false;
    }
    alert("¡Enviado correctamente!");
    document.forms["myform"].submit();
    return true;
  }