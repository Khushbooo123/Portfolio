const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Built in Power BI with advanced DAX logic, filters, and visual storytelling.",
    image: "images/project1.jpg"
  },
  {
    title: "Automated HR Data Reporting",
    description: "Reduced report time by 40% using Python & Excel automation.",
    image: "images/project2.jpg"
  }
];

const container = document.getElementById("projects-container");

projects.forEach((proj) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}" />
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
  `;
  container.appendChild(card);
});
