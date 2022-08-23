window.onload = function () {
  initIframe();
};

// events available
const EVENT_MODULE = {
  PROCESS_INIT: "PROCESS_INIT",
  PROCESS_ERROR: "PROCESS_ERROR",
  PROCESS_COMPLETED: "PROCESS_COMPLETED",
  ENTRY_PATH: "ENTRY_PATH"
}

// subscribe to message event to recive the events from the iframe
window.addEventListener("message", (message) => {
  // IMPORTANT: check the origin of the data!
  if (message.origin.includes("firmaautografa.com")) {

  } else return;
});

function initIframe() {
  // get iframe 
  const iframe = document.getElementById("fad-fna-iframe");
  // url of fad, uat - uatwebfad4.firmaautografa.com, prod - mobile.firmaautografa.com
  const url = 'https://devfna.firmaautografa.com/'
  // set src to iframe
  iframe.src = url;
  // show loader - optional
  iframe.onload = () => {
    // hide loader - optional
  };
}