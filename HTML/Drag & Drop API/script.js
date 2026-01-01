let draggedCard = null;

// When dragging starts
document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("card")) {
    draggedCard = e.target;
  }
});

// Allow drop on columns
document.querySelectorAll(".column").forEach(column => {

  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // REQUIRED
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();

    column.appendChild(draggedCard);

    // Log which column the task moved to
    console.log(
      draggedCard.id,
      "moved to",
      column.getAttribute("data-status")
    );
  });

});
