
function errorNotFound(){
  const containerElement = document.querySelector(".main-changing-content");
  const errorElement = document.createElement("div");
  errorElement.style.cssText = "display: flex; justify-content: center; align-items: center;";
  const errorElementTitle = document.createElement("div");
  errorElementTitle.style.cssText = "font-size: 3rem; font-weight: bold;";
  errorElementTitle.textContent = "404 Not Found";
  containerElement.appendChild(errorElement);
  errorElement.appendChild(errorElementTitle);
}
export {errorNotFound}