const pfpImage = document.getElementById("pfpImage");
const pfpInput = document.getElementById("pfpInput");

// Load saved PFP if available
const savedPFP = localStorage.getItem("userPFP");
if (savedPFP) {
  pfpImage.src = savedPFP;
} else {
  pfpImage.src = ""; // This will show the broken icon intentionally
}

// Click image to open file picker
pfpImage.addEventListener("click", () => {
  pfpInput.click();
});

// When a file is selected, preview and save it
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
