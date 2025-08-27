const thumbnail = document.getElementById("thumbnail-001");

// Define a color theme based on project type
const projectType = "motion"; // Could be "looks", "sound", etc.

const colorThemes = {
  motion: {
    border: "#4C97FF",
    background: "#E0F0FF",
    text: "#003366"
  },
  looks: {
    border: "#9966FF",
    background: "#F3E8FF",
    text: "#330066"
  },
  sound: {
    border: "#CF63CF",
    background: "#FDEBFD",
    text: "#660066"
  }
};

// Apply the theme
const theme = colorThemes[projectType];
thumbnail.style.borderColor = theme.border;
thumbnail.style.backgroundColor = theme.background;
thumbnail.querySelector(".project-title").style.color = theme.text;

// Click to open project
thumbnail.addEventListener("click", () => {
  const projectId = "jumping-cat";
  window.location.href = `editor.html?project=${projectId}`;
});

const themes = [
  { border: "#4C97FF", bg: "#E3F2FD" },
  { border: "#9966FF", bg: "#F3E8FF" },
  { border: "#CF63CF", bg: "#FDEBFD" }
];

const thumbnail = document.getElementById("thumbnail-001");
const randomTheme = themes[Math.floor(Math.random() * themes.length)];

thumbnail.style.borderColor = randomTheme.border;
thumbnail.style.background = `linear-gradient(135deg, ${randomTheme.bg}, #ffffff)`;
