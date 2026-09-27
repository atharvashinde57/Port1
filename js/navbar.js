document.addEventListener('DOMContentLoaded', () => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav class="navbar">
                <div class="logo">
                    <a href="index.html">ATHARVA</a>
                </div>
                <div class="nav-links">
                    <a href="index.html" class="nav-item">
                        <span class="nav-text">Info</span>
                    </a>
                    <a href="projects.html" class="nav-item">
                        <span class="nav-text">Projects</span>
                    </a>
                    <a href="skills.html" class="nav-item">
                        <span class="nav-text">Skills</span>
                    </a>
                    <a href="contact.html" class="nav-item">
                        <span class="nav-text">Contact</span>
                    </a>
                    <a href="pdf/Python_AI_Resume2026.pdf" target="_blank" class="nav-item" style="color: var(--accent-color);">
                        <span class="nav-text"><i class="fas fa-file-pdf" style="font-size: 0.85rem; margin-right: 0.3rem;"></i>Resume</span>
                    </a>
                </div>
            </nav>
        `;

        const navbar = document.querySelector('.navbar');

        // Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Highlight active link
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-item');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
});
