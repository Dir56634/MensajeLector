document.getElementById('validarTarjeta').addEventListener('click', function() {
    // Simula la validación de una tarjeta con chip
    var idTarjeta = Math.random() > 0.5 ? "12345678" : "87654321"; // Simulación de ID de tarjeta
    
    if (idTarjeta === "12345678") {
      // Simulación de una tarjeta válida
      document.getElementById('mensajeAcceso').innerText = "Acceso Correcto";
      document.getElementById('mensajeAcceso').style.color = "green";
    } else {
      // Simulación de una tarjeta inválida
      document.getElementById('mensajeAcceso').innerText = "Acceso Denegado, no cuentas con las credenciales necesarias para ingresar a la biblioteca";
      document.getElementById('mensajeAcceso').style.color = "red";
    }
  });
  
  