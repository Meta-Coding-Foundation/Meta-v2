document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "Guest";
  const rank = localStorage.getItem("rank") || "New User";

  document.getElementById("profileUsername").textContent = username;
  const rankElement = document.getElementById("profileRank");
  rankElement.textContent = `Rank: ${rank}`;

  if (rank === "Meta Team") {
    rankElement.classList.add("rank-meta");
  } else if (rank === "User") {
    rankElement.classList.add("rank-user");
  } else {
    rankElement.classList.add("rank-new");
  }

  const savedPFP = localStorage.getItem("userPFP");
  const profilePic = document.getElementById("profilePic");

  profilePic.src = savedPFP || "";
  profilePic.style.width = "20px";
  profilePic.style.height = "20px";
  profilePic.style.borderRadius = "50%";
  profilePic.style.objectFit = "cover";

  profilePic.addEventListener("click", () => {
    window.location.href = "pfp-engine/index.html";
  });
});
