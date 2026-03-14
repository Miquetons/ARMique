// Diccionario de modelos disponibles
const modelosDisponibles = {
  lechuga: "assets/Lechuga.glb",
  platoN: "assets/plato_nuevo.glb",
  plato2: "assets/platoop.glb"
};

// Función para mostrar un modelo según el botón
function showModel(producto) {
  const modelo = document.getElementById("modelo");
  if (modelosDisponibles[producto]) {
    modelo.setAttribute("gltf-model", modelosDisponibles[producto]);
  } else {
    modelo.setAttribute("gltf-model", "assets/Lechuga.glb"); // default
  }
}