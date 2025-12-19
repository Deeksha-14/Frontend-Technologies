//Before using ||
let user = { address: null };

// Using logical OR to provide fallback for missing address
let city = user.address || "Unknown city";

console.log(city);  // Output: "Unknown city"

// user.address is null, so the logical OR (||) provides the fallback "Unknown city". This is fine, but what if the user.address was an empty string ("")? We don’t want that to trigger the fallback!


//Now
let user2 = { address2: null };

// Using Nullish Coalescing (??) to provide fallback for missing address
let city2 = user2.address2 ?? "Unknown city";

console.log(city2);  // Output: "Unknown city"

// ?? ensures the fallback value is used only if the value is null or undefined. If user.address was an empty string (""), ?? would not use the fallback.
