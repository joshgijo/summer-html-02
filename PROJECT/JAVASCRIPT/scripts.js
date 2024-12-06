document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    const header = document.getElementById("global-header");
    if (header) {
        header.innerHTML = `
            <nav class="navbar">
                <a href ="#" class="photo"><img src="../images/logo.jpeg" alt="logo"></a>
                <a href="index.html" class="logo">RETRO CLASSIC PRODUCTS</a>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
    }

    // Load Footer
    const footer = document.getElementById("global-footer");
    if (footer) {
        footer.innerHTML = `
            <div class="footer-content">
                <p>&copy; 2024 Classic Products. All Rights Reserved.</p>
                <ul class="social-links">
                    <li><a href="#"><img src="../images/facebook.jpeg" alt="Facebook"></a></li>
                    <li><a href="#"><img src="../images/twitter.jpeg" alt="Twitter"></a></li>
                    <li><a href="#"><img src="../images/instagram.jpeg" alt="Instagram"></a></li>
                </ul>
            </div>
        `;
    }
});
