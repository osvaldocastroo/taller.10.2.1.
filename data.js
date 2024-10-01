document.addEventListener("DOMContentLoaded", () => {
    const dataElement = document.getElementById("data");
    const storedData = localStorage.getItem("storedData");
  
    if (storedData) {
      dataElement.textContent = storedData;
    } else {
      dataElement.textContent = "No hay datos almacenados.";
    }
  });
  