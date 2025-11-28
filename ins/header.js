/**
 * Progressive Portfolio - Header Manager
 * - Navigations
 * - Consistency
 */

function headerManager() {
    const headerDiv = document.getElementById('HeaderManager');
    headerDiv.innerHTML = `
        <ul class="nav-menu">
            <li><a href="">Home</a></li>
            <li><a href="">Background</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            <li><<a href="">Blogs</a></li>
        </ul>
    `;

    // Mobile Navigation Styles
    const style = document.createElement('style');
    style.textContent = `
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        @media (max-width: 768px) {
            .mobile-toggle { display: block; }
            .nav-menu {
                position: absolute;
                top: 100%;
                right: 0;
                background: rgba(0, 0, 0, 0.95);
                flex-direction: column;
                width: 200px;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .nav-menu.active { transform: translateX(0); }
            .nav-menu li {
                padding: 1rem;
                border-bottom: 1px solid #333;
            }
        }
    `;
    document.head.appendChild(style);

    // Mobile Navigation Functionality
    const toggle = headerDiv.querySelector('.mobile-toggle');
    const menu = headerDiv.querySelector('.nav-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', headerManager);