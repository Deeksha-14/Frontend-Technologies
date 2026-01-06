let draggedCard = null;

/* Drag start */
document.addEventListener("dragstart", e => {
  if (e.target.classList.contains("card")) {
    draggedCard = e.target;
  }
});

/* Allow drop + handle drop */
document.querySelectorAll(".column").forEach(col => {

  col.addEventListener("dragover", e => e.preventDefault());

  col.addEventListener("drop", e => {
    e.preventDefault();
    col.appendChild(draggedCard);
    saveState();
  });

});

/* SAVE CLASS / STATUS */
function saveState() {
  const state = {};

  document.querySelectorAll(".card").forEach(card => {
    const status = card.parentElement.getAttribute("data-status");
    state[card.id] = status;
  });

  localStorage.setItem("State", JSON.stringify(state));
}

/* RESTORE STATE */
function loadState() {
  const state = JSON.parse(localStorage.getItem("State"));
  if (!state) return;

  Object.keys(state).forEach(cardId => {
    const card = document.getElementById(cardId);
    const column = document.querySelector(
      `[data-status="${state[cardId]}"]`
    );
    if (card && column) column.appendChild(card);
  });
}

loadState();

/* REGISTER SERVICE WORKER */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered"));
}

