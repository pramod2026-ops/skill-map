"use strict";

const skills = [
  { name: "HTML", status: "done" },
  { name: "CSS", status: "done" },
  { name: "JavaScript", status: "learning" },
  { name: "Git & GitHub", status: "not-started" },
  { name: "REST APIs", status: "not-started" },
  { name: "React", status: "not-started" },
  { name: "TypeScript", status: "not-started" },
  { name: "Next.js", status: "not-started" },
];

const skillList = document.querySelector("#skill-list");
const progressText = document.querySelector("#progress-text");
const progressFill = document.querySelector("#progress-fill");
const nextSkill = document.querySelector("#next-skill");
const startLearningButton = document.querySelector("#startlearning");

function renderSkills() {
  skillList.innerHTML = "";

  skills.forEach(function (skill) {
    const li = document.createElement("li");

    li.textContent = skill.name + " - " + skill.status;
    li.classList.add(skill.status);

    skillList.appendChild(li);
  });
}

function updateProgress() {
  const completedSkills = skills.filter(function (skill) {
    return skill.status === "done";
  });

  const progress = (completedSkills.length / skills.length) * 100;
  progressText.textContent = "Progress:  " + progress + "%";
  progressFill.style.width = progress + "%";
}

function updateNextSkill() {
  const learningSkill = skills.find(function (skill) {
    return skill.status === "learning";
  });

  if (learningSkill) {
    nextSkill.textContent = learningSkill.name;
  } else {
    nextSkill.textContent = "All Skills completed!";
  }
}

startLearningButton.addEventListener("click", function () {
  const learningSkill = skills.find(function (skill) {
    return skill.status === "learning";
  });

  if (learningSkill) {
    learningSkill.status = "done";
  }
  renderSkills();
  updateProgress();
});

renderSkills();
updateProgress();
updateNextSkill();
