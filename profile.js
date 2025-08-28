document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Guest';
  const rank = localStorage.getItem('rank') || 'New User';

  document.getElementById('profileUsername').textContent = username;
  document.getElementById('profileRank').textContent = `Rank: ${rank}`;
});

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Guest';
  const rank = localStorage.getItem('rank') || 'New User';

  const rankElement = document.getElementById('profileRank');
  document.getElementById('profileUsername').textContent = username;
  rankElement.textContent = `Rank: ${rank}`;

  // Apply the correct CSS class
  if (rank === 'Meta Team') {
    rankElement.classList.add('rank-meta');
  } else if (rank === 'User') {
    rankElement.classList.add('rank-user');
  } else if (rank === 'New User') {
    rankElement.classList.add('rank-new');
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedPFP = localStorage.getItem("userPFP");
  if (savedPFP) {
    const profilePic = document.getElementById("profilePic");
    profilePic.src = savedPFP;
    profilePic.style.width = "20px";
    profilePic.style.height = "20px";
    profilePic.style.borderRadius = "50%";
    profilePic.style.objectFit = "cover";
  }
});
