// Do something ONCE after delay
setTimeout(() => {
  console.log('3 seconds passed!');
}, 3000);

// Do something REPEATEDLY
const intervalId = setInterval(() => {
  console.log('Checking every 2 seconds...');
}, 2000);

// Stop the interval
clearInterval(intervalId);

// Auto-logout after inactivity
let inactivityTimer;
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    alert('Logged out due to inactivity');
    logout();
  }, 15 * 60 * 1000); // 15 minutes
}

document.addEventListener('mousemove', resetInactivityTimer);
