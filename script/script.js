function changePage(pageName) {

    var iframeSRC = parent.document.getElementById("myIframe");

    iframeSRC.src = pageName;
}

function sendHeightToParent() {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ type: 'resizeIframe', height: height }, '*');
  }

// Send height on load and whenever content changes if necessary
window.onload = sendHeightToParent;
// Optionally, call sendHeightToParent() on specific events, like form inputs, button