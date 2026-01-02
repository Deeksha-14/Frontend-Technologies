CSS variables are like placeholders for values that you can define once and reuse anywhere in your stylesheet.

Why - 
Before CSS Variables, developers had to rely on hard-coded values in stylesheets.
Problems - Repetitive Code, Hard to Maintain, Limited Dynamic Changes

Before CSS variables -

code 1 - 
body {
    background-color: #333;
    color: white;
}

button {
    background-color: #333;
    color: white;
}

.header {
    background-color: #333;
    color: white;
}

If you later decided that #333 was not the right color and you wanted to change it to #444, you'd have to manually change every single instance of that color.


Working - 
/* Defining a variable */
:root {
    --primary-color: #333;
    --font-size: 16px;
}

/* Using the variable */
body {
    color: var(--primary-color);
    font-size: var(--font-size);
}

button {
    background-color: var(--primary-color);
}


