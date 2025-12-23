function showSection(id) {
  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  target.classList.add("active");

  /* 🔥 CRITICAL FIX */
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* PROJECT DATA */
const projects = {
  swift: {
    title: "SWIFT-Care",
    desc: "A healthcare assistance platform designed to provide quick access to medical help, emergency support, and patient-centric services.",
    tech: "Tech Stack: HTML, CSS, JavaScript, Backend APIs",
    link: "https://github.com/Prakashraj-007/SWIFT_care"
  },
  subscription: {
    title: "Subscription Management System",
    desc: "A smart system to track, manage, and analyze subscriptions efficiently.",
    tech: "Tech Stack: JavaFX, MySQL, JDBC",
    link: "https://github.com/Prakashraj-007/SUBSCRIPTION_TRACKER22"
  },
  air: {
    title: "Air Quality Predictor",
    desc: "A machine-learning based system that predicts air quality using environmental data.",
    tech: "Tech Stack: Python, Machine Learning, Data Analysis",
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

function goHome() {
  showSection("home");
}

/* ============================= */
/* Typing Effect (ONLY ONCE)     */
/* ============================= */

const text = "Hi, I'm Prakash R 👋";
const speed = 100;
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
