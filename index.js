window.onload = function () {
  initIframe();
};

// events available
const EVENT_MODULE = {
  PROCESS_INIT: "PROCESS_INIT",
  PROCESS_COMPLETED: "PROCESS_COMPLETED",
}

// subscribe to message event to recive the events from the iframe
window.addEventListener("message", (message) => {
  // IMPORTANT: check the origin of the data!
  if (message.origin.includes("firmaautografa.com")) {
    if (message.data.event === EVENT_MODULE.PROCESS_INIT) {
      // only informative
      console.log("Process init");
    } else if (message.data.event === EVENT_MODULE.PROCESS_COMPLETED) {
      // end of the process
      console.log("Process completed");
      console.log(message.data.data);
      alert(JSON.stringify(message.data.data))
    } 
  } else return;
});

function initIframe() {
  // get iframe 
  const iframe = document.getElementById("fad-fna-iframe");
  // url 
  const url = 'https://fna.firmaautografa.com/'
  // set src to iframe
  iframe.src = url;
  // show loader - optional
  iframe.onload = () => {
    // hide loader - optional
  };
}