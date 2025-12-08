

function sayHello() {
    alert('Hello from function!');
}

const btn1 = document.getElementById('btn1');
const output1 = document.getElementById('output1');

btn1.onclick = function() {
    output1.textContent = 'Button was clicked! 🎉';
};


const btn2 = document.getElementById('btn2');
const output2 = document.getElementById('output2');

// Syntax: element.addEventListener(event, function)
btn2.addEventListener('click', function() {
    output2.textContent = 'First handler executed!';
});

// Can add MULTIPLE handlers to same event!
btn2.addEventListener('click', function() {
    output2.textContent += ' Second handler too!';
});

const btn3 = document.getElementById('btn3');
const output3 = document.getElementById('output3');

btn3.addEventListener('click', function(event) {
    // 'event' (or 'e') contains all info about the event
    output3.innerHTML = `
        <strong>Event Type:</strong> ${event.type}<br>
        <strong>Target Element:</strong> ${event.target.tagName}<br>
        <strong>Mouse X:</strong> ${event.clientX}<br>
        <strong>Mouse Y:</strong> ${event.clientY}<br>
        <strong>Time:</strong> ${new Date(event.timeStamp).toLocaleTimeString()}
    `;
});



const mouseBox = document.getElementById('mouseBox');
const mouseOutput = document.getElementById('mouseOutput');

// CLICK - single click
mouseBox.addEventListener('click', function() {
    mouseOutput.textContent = '🖱️ Click!';
});

// DBLCLICK - double click
mouseBox.addEventListener('dblclick', function() {
    mouseOutput.textContent = '🖱️🖱️ Double Click!';
});

// MOUSEENTER - mouse enters element
mouseBox.addEventListener('mouseenter', function() {
    this.style.background = '#e74c3c';
    mouseOutput.textContent = '➡️ Mouse Entered!';
});

// MOUSELEAVE - mouse leaves element
mouseBox.addEventListener('mouseleave', function() {
    this.style.background = '#3498db';
    mouseOutput.textContent = '⬅️ Mouse Left!';
});

// MOUSEDOWN - mouse button pressed
mouseBox.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
});

// MOUSEUP - mouse button released
mouseBox.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});

// MOUSEMOVE - mouse moves over element
mouseBox.addEventListener('mousemove', function(e) {
    mouseOutput.textContent = `Position: X=${e.offsetX}, Y=${e.offsetY}`;
});

// CONTEXTMENU - right click
mouseBox.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevents default right-click menu
    mouseOutput.textContent = '🚫 Right-click disabled!';
});



// Keyboard
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');

// KEYDOWN - when key is pressed down
keyInput.addEventListener('keydown', function(e) {
    keyOutput.innerHTML = `
        <strong>Key Down:</strong> ${e.key}<br>
        <strong>Code:</strong> ${e.code}<br>
        <strong>Ctrl:</strong> ${e.ctrlKey}<br>
        <strong>Shift:</strong> ${e.shiftKey}<br>
        <strong>Alt:</strong> ${e.altKey}
    `;
});

// KEYUP - when key is released
keyInput.addEventListener('keyup', function(e) {
    console.log('Key released:', e.key);
});

// Detect specific keys
keyInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        alert('You pressed Enter!');
    }
    
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Prevent browser save dialog
        alert('Ctrl+S detected! (Custom save)');
    }
    
    if (e.key === 'Escape') {
        this.value = ''; // Clear input
        this.blur(); // Remove focus
    }
});



// Form Event
const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const country = document.getElementById('country');
const formOutput = document.getElementById('formOutput');

// FOCUS - when element gets focus
username.addEventListener('focus', function() {
    this.style.borderColor = 'blue';
    formOutput.textContent = '✏️ Editing username...';
});

// BLUR - when element loses focus
username.addEventListener('blur', function() {
    this.style.borderColor = '';
    if (this.value.length < 3) {
        formOutput.textContent = '❌ Username too short!';
        this.style.borderColor = 'red';
    } else {
        formOutput.textContent = '✅ Username OK!';
    }
});

// INPUT - fires on every keystroke
email.addEventListener('input', function() {
    formOutput.textContent = `Typing: ${this.value}`;
});

// CHANGE - fires when value changes AND element loses focus
country.addEventListener('change', function() {
    formOutput.textContent = `Country selected: ${this.value}`;
});

// SUBMIT - when form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault(); // IMPORTANT: Prevents page refresh!
    
    const data = {
        username: username.value,
        email: email.value,
        country: country.value
    };
    
    formOutput.innerHTML = `
        <strong>Form Submitted!</strong><br>
        ${JSON.stringify(data, null, 2)}
    `;
});


// Event Bubbling
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const bubbleOutput = document.getElementById('bubbleOutput');

// All three will fire when clicking child (bubbling UP)
grandparent.addEventListener('click', function() {
    bubbleOutput.textContent += ' → Grandparent';
});

parent.addEventListener('click', function() {
    bubbleOutput.textContent += ' → Parent';
});

child.addEventListener('click', function(e) {
    bubbleOutput.textContent = 'Clicked: Child';
    
    // Uncomment to stop bubbling:
    // e.stopPropagation();
});

// Stop Propagation
child.addEventListener('click', function(e) {
    e.stopPropagation(); // Event stops here, won't reach parent/grandparent
    bubbleOutput.textContent = 'Clicked child only (stopped bubbling)';
});

// Capturing Phase
// Third parameter 'true' enables capturing (top-down)
grandparent.addEventListener('click', function() {
    console.log('Grandparent (capturing)');
}, true); // <-- true = capturing phase

//  Event Delegation
const todoList = document.getElementById('todoList');
const addTask = document.getElementById('addTask');
let taskCount = 3;

// ❌ BAD WAY: Adding handler to each button
// (Won't work for dynamically added items!)

// ✅ GOOD WAY: Event Delegation
todoList.addEventListener('click', function(e) {
    // Check if clicked element has 'delete' class
    if (e.target.classList.contains('delete')) {
        // Remove the parent <li>
        e.target.parentElement.remove();
    }
});

// Add new tasks dynamically
addTask.addEventListener('click', function() {
    taskCount++;
    const li = document.createElement('li');
    li.innerHTML = `Task ${taskCount} <button class="delete">❌</button>`;
    todoList.appendChild(li);
    // No need to add new event listener! Delegation handles it.
});



// Prevent Default Behavior
const myLink = document.getElementById('myLink');
const preventForm = document.getElementById('preventForm');
const preventOutput = document.getElementById('preventOutput');

// Prevent link navigation
myLink.addEventListener('click', function(e) {
    e.preventDefault(); // Link won't navigate!
    preventOutput.textContent = 'Link click prevented!';
});

// Prevent form submission (page refresh)
preventForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Page won't refresh!
    preventOutput.textContent = 'Form submission prevented!';
});

// Window/Document Events
const windowOutput = document.getElementById('windowOutput');

// LOAD - when page fully loads
window.addEventListener('load', function() {
    console.log('Page fully loaded (including images)');
});

// DOMCONTENTLOADED - when HTML is parsed (faster than load)
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
});

// RESIZE - when window is resized
window.addEventListener('resize', function() {
    windowOutput.textContent = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
});

// SCROLL - when page is scrolled
window.addEventListener('scroll', function() {
    windowOutput.textContent = `Scrolled: ${window.scrollY}px from top`;
});

// BEFOREUNLOAD - when leaving page
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = ''; // Shows confirmation dialog
});


// Remove Event Listeners
const oneTimeBtn = document.getElementById('oneTimeBtn');
const toggleBtn = document.getElementById('toggleBtn');
const targetBtn = document.getElementById('targetBtn');
const removeOutput = document.getElementById('removeOutput');

// Method 1: { once: true } option
oneTimeBtn.addEventListener('click', function() {
    removeOutput.textContent = 'This button only works once!';
    this.disabled = true;
}, { once: true }); // Automatically removes after first trigger

// Method 2: removeEventListener
// IMPORTANT: Must use named function (not anonymous)
function handleClick() {
    removeOutput.textContent = 'Target button clicked!';
}

targetBtn.addEventListener('click', handleClick);

let isActive = true;
toggleBtn.addEventListener('click', function() {
    if (isActive) {
        targetBtn.removeEventListener('click', handleClick);
        removeOutput.textContent = 'Handler removed!';
        this.textContent = 'Add Handler';
    } else {
        targetBtn.addEventListener('click', handleClick);
        removeOutput.textContent = 'Handler added!';
        this.textContent = 'Remove Handler';
    }
    isActive = !isActive;
});