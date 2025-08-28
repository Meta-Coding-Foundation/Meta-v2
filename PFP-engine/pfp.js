const pfpImage = document.getElementById("pfpImage");
const pfpInput = document.getElementById("pfpInput");
const uploadBtn = document.getElementById("uploadBtn");

// Load saved image if available
const savedPFP = localStorage.getItem("userPFP");
pfpImage.src = savedPFP || "";

// Open file picker when button is clicked
uploadBtn.addEventListener("click", () => {
  pfpInput.click();
});

// Preview and save image
pfpInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    pfpImage.src = e.target.result;
    localStorage.setItem("userPFP", e.target.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});
