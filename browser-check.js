// Browser detection for Internet Explorer 11
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if (isIE11) {
    window.location.href = 'unsupported.html'; // Redirect to the unsupported page
}

