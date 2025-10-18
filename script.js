setTimeout(() => {
  document.getElementById("boot-screen").style.display = "none";
}, 6000);

document.querySelectorAll(".expand-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

window.addEventListener("load", () => {
  const visited = localStorage.getItem("visited");
  if (visited) {
    document.getElementById("welcome-popup").classList.remove("hidden");
  } else {
    localStorage.setItem("visited", "true");
  }
});

document.getElementById("continue-btn").addEventListener("click", () => {
  document.getElementById("welcome-popup").classList.add("hidden");
});