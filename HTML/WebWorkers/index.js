<button onclick="startWorker()">Start Task</button>
<p id="status">Idle</p>

<script>
let worker;

function startWorker() {
  document.getElementById("status").innerText = "Processing..";

  worker = new Worker("worker.js");

  // Send message to worker
  worker.postMessage("start");

  // Receive message from worker
  worker.onmessage = function (event) {
    document.getElementById("status").innerText =
      "Done! Result = " + event.data;
  };
}
</script>
