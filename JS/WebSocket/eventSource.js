//used for server-side communication - notifications, live dashboards
const eventSource = new EventSource('/api/live-updates');

// Receive updates from server
eventSource.addEventListener('message', (event) => {
  console.log('Update:', event.data);
});

// Real example: Live sports scores
eventSource.addEventListener('score-update', (event) => {
  const score = JSON.parse(event.data);
  updateScoreboard(score);
});
