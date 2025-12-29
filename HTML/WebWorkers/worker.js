onmessage = function (event) {
  if (event.data === "start") {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }

    // Send result back
    postMessage(sum);
  }
};
