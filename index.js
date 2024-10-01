document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
  
    buttonText.addEventListener("click", () => {
      const text = inputText.value;
      localStorage.setItem("storedData", text);
      inputText.value = ""; // Limpiar el campo de entrada después de guardar
    });
  });
  