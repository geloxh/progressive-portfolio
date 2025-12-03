/**
 * Progressive Portfolio - Header Manager
 * - Navigations
 * - Consistency
 */


class headerManager {
    constructor() {
        this.init();
    }

    init() {
        this.headerCSS();
        this.headerHTML();
    }

    headerCSS() {
        const css = `
            .main-header {
                position: fixed;
                top: 0;
                width: 100%;
                background: #fff;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 2rem;
                height: 70px;
            }
            .logo a {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: #333;
            }
            .logo img {
                height: 40px;
                margin-right: 10px;
            }
            .logo h1 {
                font-size: 1.5rem;
                margin: 0;
            }
            .main-nav ul {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                gap: 2rem;
            }
            .main-nav a {
                text-decoration: none;
                color: #333;
                font-weight: 500;
                transition: color 0.3s;
            }
            .main-nav a:hover,
            .main-nav a.active {
                color: #007bff;
            }
            .nav-toggle {
                display: none;
                cursor: pointer;
            }
            .mobile-nav {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .mobile-nav span {
                width: 25px;
                height: 3px;
                background: #333;
                transition: 0.3s;
            }
            @media (max-width: 768px) {
                .nav-toggle { display: block; }
                .main-nav {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s;
                }
                .main-nav.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                .main-nav ul {
                    flex-direction: column;
                    padding: 1rem;
                    gap: 1rem;
                }
            }
        `;

        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    headerHTML() {
        const html = `
            <header class="main-header">
                <div class="logo">
                    <a href="../index.html#home">
                        <img src="../images/logo.png" alt="geloxh">
                        <h1>geloxh</h1>
                    </a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="/index.html" data-page="home">Home</a></li>
                        <li><a href="/ps/about.html" data-page="about">About Us</a></li>
                        <li><a href="/ps/solutions.html" data-page="solutions">Solutions</a></li>
                        <li><a href="/ps/contact.html" data-page="contact">Contact Us</a></li>
                        <li><a href="/ps/project.html" data-page="project">Use Cases</a></li>
                    </ul>
                </nav>
                <div class="nav-toggle">
                    <div class="mobile-nav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        `;

        document.body.insertAdjacentHTML('afterbegin', html);
    }
}

document.addEventListener('DOMContentLoaded', () => new headerManager());