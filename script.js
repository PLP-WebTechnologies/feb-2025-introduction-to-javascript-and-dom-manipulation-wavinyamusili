// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("description").textContent = "Text has been changed!";
  document.getElementById("main-title").style.color = "teal"; // Modify CSS via JS
});

// Add or remove a box dynamically
document.getElementById("toggleElementBtn").addEventListener("click", function () {
  const container = document.getElementById("box-container");
  const existingBox = document.getElementById("dynamicBox");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.id = "dynamicBox";
    newBox.textContent = "I'm a new box!";
    newBox.style.backgroundColor = "lightblue";
    newBox.style.padding = "10px";
    newBox.style.marginTop = "10px";
    container.appendChild(newBox);
  }
});
