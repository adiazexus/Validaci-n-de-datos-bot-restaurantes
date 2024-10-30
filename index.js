const express = require("express"); // En esta línea, se importa el módulo express para poder utilizarlo en nuestra aplicación. Express es un framework de Node.js que facilita la creación de servidores web.

const app = express(); // Se crea una instancia de la aplicación Express.

const port = 3000; // Se define el puerto en el cual el servidor estará escuchando las solicitudes.

app.use(express.json()); //Se indica a la aplicación Express que debe parsear los cuerpos de las solicitudes como JSON.

app.post("/", (req, res) => {
  //Se define una ruta POST en la raíz del servidor. Cuando se reciba una solicitud POST en esta ruta, se ejecutará la función definida.
  if (!req.body || !req.body.inputs) {
    res.status(400).json({ error: "No se proporcionaron datos" });
    return;
  }

  let data = req.body.inputs;
  const nombre = data.nombre.trim().toLowerCase();
  const celular = data.celular.replace(/[^\d]/g, ""); // Eliminar caracteres no numéricos
  let correo = data.email;
  let envio = data.envio;
  let ciudad = data.ciudad;
  let valor = data.valor;
  let producto = data.dinamicos.dinamico32P0O11.trim().toLowerCase();
  let bebida = data.dinamicos.dinamicoHpOQt12.trim().toLowerCase();
  let direccion = data.dinamicos.dinamicoR2Ic113.trim().toLowerCase();
  let acciones = [];

  //7. Se define un array vacío llamado acciones donde se almacenarán las acciones a realizar en respuesta a la solicitud.

  //En las líneas siguientes se extraen los datos enviados en el cuerpo de la solicitud (req.body) y se asignan a variables locales para su posterior uso.

  console.log("Los datos son: ", data);

  try {
    // Código que puede generar errores
    // ...
    return res.json({
      status: 1,
      status_message: "Ok",
      data: {
        actions: [
          {
            type: "sendText",
            text: `*Datos actualizados*: <br> 
            Nombre: ${nombre}<br>
            Celular: ${celular}<br>
            Ciudad: ${ciudad}<br>
            dirección: ${direccion}`,
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error interno del servidor: " + error.message });
  }

  console.log("fin");
}); // This is the missing closing curly brace

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
