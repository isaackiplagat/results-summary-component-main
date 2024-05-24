"use strict";
const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const figure2 = document.querySelector(".result--container");
figure2.innerHTML = "";
const displaydata = function (arr) {
  arr.map(function (d, i) {
    const html = `  <div class="card card--1"><img src="${d.icon}" /><div class="category--1">${d.category}</div><div>${d.score}/100</div>
  </div>
 
  </div>`;
    figure2.insertAdjacentHTML("afterbegin", html);
  });
};

displaydata(data);
