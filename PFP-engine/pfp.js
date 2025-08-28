const pfpImage = document.getElementById("pfpImage");
const pfpInput = document.getElementById("pfpInput");

pfpImage.addEventListener("click", () => {
  pfpInput.click();
});

pfpInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    pfpImage.src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

reader.onload = function(e) {
  document.getElementById("pfpImage").src = e.target.result;
  localStorage.setItem("userPFP", e.target.result); // Save image data
};
