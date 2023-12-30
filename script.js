function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}
const fileInput = document.querySelector("#file-input");
const fileContentPre = document.querySelector("#file-content");
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  readFile(file)
    .then((content) => {
      fileContentPre.textContent = content; // Display the file content
    })
    .catch((error) => {
      console.error(error); // Handle any errors that occurred
    });
});
