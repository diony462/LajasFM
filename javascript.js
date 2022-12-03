document.addEventListener('DOMContentLoaded', function() {
    var frame = document.getElementById("frame"),
    frameDoc = frame.contentDocument || frame.contentWindow.document;
    frameDoc.documentElement.innerHTML = "";
})
