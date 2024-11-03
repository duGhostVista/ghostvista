// browser-check.js
(function() {
    var isIE = false;

    // Check for IE versions
    if (window.attachEvent || (window.ActiveXObject && !window.XMLHttpRequest)) {
        isIE = true;
    }

    // If IE, redirect to unsupported browser page
    if (isIE) {
        window.location.href = 'unsupported.html'; // Change to the path of your unsupported page
    }
})();
