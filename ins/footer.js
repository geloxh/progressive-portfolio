/**
 * Progressive Portfolio - Footer Manager
 * - Consistency
 * - Copyright
 * 
 */

function footerManager() {
    const footer = document.querySelector('.footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} geloxh. Self-taught developer.</p>
            <div class="social-links">
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="mailto:contact@geloxh.dev" aria-label="Email">Email</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', footerManager);