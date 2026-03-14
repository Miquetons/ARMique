// Diccionario de modelos disponibles
const modelosDisponibles = {
  lechuga: "assets/modelos/Lechuga.glb",
  platoN: "assets/modelos/plato_nuevo.glb",
  plato2: "assets/modelos/platoop.glb"
};

// Función para mostrar un modelo según el botón
function showModel(producto) {
  const modelo = document.getElementById("modelo");
  if (modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  } else {
    modelo.setAttribute("gltf-model", "assets/modelos/Lechuga.glb"); // default
  }
}