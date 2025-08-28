const e = require("express");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  const title = "Calculadora con Node.js";
  res.render("index", { title });
});

app.post("/calcular", (req, res) => {
  const { numero1, numero2, operacion } = req.body;
  let resultado;
  let error;

  const numA = parseFloat(numero1);
  const numB = parseFloat(numero2);
  
  if (isNaN(numA) || isNaN(numB)) {
    error = " por favor los valores deben ser numeros";
    return res.render("index", { error });
  }

  switch (operacion) {
    case "sumar":
      resultado = numA + numB;
      break;
    case "restar":
      resultado = numA - numB;
      break;
    case "multiplicar":
      resultado = numA * numB;
      break;
    case "dividir":
      resultado = numA / numB;
      break;
    default:
      error = "operacion no valida";
      return res.render("index", { error });
  }
  res.render("index", { resultado });
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log("el servidor esta corriendo en el puerto 3000");
});
