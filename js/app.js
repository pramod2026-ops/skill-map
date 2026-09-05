"use strict";

const skills = [
  { name: "HTML", status: "done" },
  { name: "CSS", status: "done" },
  { name: "JavaScript", status: "learning" },
  { name: "Git & GitHub", status: "learning" },
  { name: "REST APIs", status: "not-started" },
  { name: "HTML", status: "not-started" },
  { name: "HTML", status: "not-started" },
  { name: "HTML", status: "not-started" },
];

const skillList = document.querySelector("#skill-list");

skillList.innerHTML = "";

skills.forEach(function (skill) {
  const li = document.createElement("li");

  li.textContent = skill.name + " - " + skill.status;
  li.classList.add(skill.status);

  skillList.appendChild(li);
});
