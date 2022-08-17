const course = document.getElementById("selected-course");
const spot = document.getElementById("selected-spot");

const url = window.location.href;

if (url.includes("course")) {
  course.style.fontWeight = "bold";
}

if (url.includes("spot")) {
  spot.style.fontWeight = "bold";
}
