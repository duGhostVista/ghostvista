// Check if the user has visited before using localStorage
if (localStorage.getItem('hasVisited')) {
    // User has visited before
    document.getElementById('welcome-message').innerHTML = "<h2>Welcome Back!</h2>";
} else {
    // User is visiting for the first time
    document.getElementById('welcome-message').innerHTML = "<h2>Welcome to GhostVista.EXE!</h2>";

    // Set the flag in localStorage so we know the user has visited
    localStorage.setItem('hasVisited', 'true');
}

// Optional: Style the welcome message with CSS
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.style.position = 'absolute';
welcomeMessage.style.top = '20px'; // Position at the top
welcomeMessage.style.left = '50%';
welcomeMessage.style.transform = 'translateX(-50%)'; // Center it
welcomeMessage.style.color = 'white';
welcomeMessage.style.zIndex = '1'; // Ensure it's above other content
welcomeMessage.style.textAlign = 'center';
welcomeMessage.style.padding = '20px'; // Padding for spacing
welcomeMessage.style.width = '80%'; // Width of the welcome message box
welcomeMessage.style.fontSize = '2em'; // Larger text size
