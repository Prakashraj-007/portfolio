function showSection(id) {
  document.querySelectorAll(".page-section").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

function goHome() {
  showSection("home");
}

/* PROJECT DATA */
const projects = {
  swift: {
    title: "SWIFT-Care",
    desc: "Healthcare assistance platform for quick medical access.",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/Prakashraj-007/SWIFT_care"
  },
  subscription: {
    title: "Subscription Management",
    desc: "Track and manage recurring subscriptions.",
    tech: "JavaFX, MySQL, JDBC",
    link: "https://github.com/Prakashraj-007/SUBSCRIPTION_TRACKER22"
  },
  air: {
    title: "Air Quality Predictor",
    desc: "ML-based air quality prediction system.",
    tech: "Python, ML",
    link: "https://github.com/Prakashraj-007/AIR_QUALITY_PREDICTOR_FDS"
  }
};

function openProject(key) {
  const p = projects[key];
  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDesc").innerText = p.desc;
  document.getElementById("modalTech").innerText = p.tech;
  document.getElementById("modalLink").href = p.link;
  document.getElementById("projectModal").classList.add("show");
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("show");
}

/* TYPING */
const text = "Hi, I'm Prakash R";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i++);
    setTimeout(typeEffect, 90);
  }
}

window.onload = typeEffect;
