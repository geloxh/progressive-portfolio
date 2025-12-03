/**
 * Progressive Portfolio - Footer Manager
 * - Consistency
 * - Copyright
 * 
 */

class footerManager {
    constructor() {
        this.init();
    }

    init() {
        this.footerCSS();
        this.footerHTML();
    }

    headerCSS() {
        const css = `
            .footer{background:#f8f9fa;color:#6b7280;padding:1.5rem 0 2rem}
            .footer-container{max-width:1200px;margin:0 auto;padding:0 1rem}
            .footer-main{display:flex;justify-content:space-between;margin-bottom:1.5rem}
            .footer-brand{margin-bottom:1.5rem}
            .footer-brand img{height:1.75rem;margin-right:0.75rem}
            .footer-brand span{font-size:1.5rem;font-weight:600;color:#1f2937}
            .footer-links{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
            .footer-section h3{font-size:0.875rem;font-weight:600;color:#1f2937;text-transform:uppercase;margin-bottom:1.5rem}
            .footer-section ul{list-style:none;padding:0;margin:0}
            .footer-section li{margin-bottom:1rem}
            .footer-section a{color:#6b7280;text-decoration:none;font-weight:500}
            .footer-section a:hover{text-decoration:underline}
            .footer-divider{border:none;border-top:1px solid #e5e7eb;margin:1.5rem 0}
            .footer-bottom{display:flex;justify-content:space-between;align-items:center}
            .footer-copyright{font-size:0.875rem;color:#6b7280}
            .footer-social{display:flex;gap:1.25rem}
            .footer-social a{color:#6b7280;transition:color 0.3s}
            .footer-social a:hover{color:#1f2937}
            .footer-social svg{width:1.25rem;height:1.25rem}
            @media(max-width:768px){.footer-main{flex-direction:column}.footer-links{grid-template-columns:repeat(2,1fr);gap:1.5rem}.footer-bottom{flex-direction:column;gap:1rem;text-align:center}}
            @media(max-width:640px){.footer-links{grid-template-columns:1fr}}
        `;

        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    headerHTML() {
        const html = `
            <div class="footer-container">
                <div class="footer-main">
                    <div class="footer-brand">
                        <a href="/" style="display:flex;align-items:center">
                            <img src="" alt="" />
                            <span>geloxh</span>
                        </a>
                    </div>
                    <div class="footer-links">
                        <div class="footer-section">
                            <h3>Services</h3>
                            <ul>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Company</h3>
                            <ul>
                                <li><a href=""</a></li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="footer-divider" />
                <div class="footer-bottom">
                    <span class="footer-copyright"></span>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                            </svg>
                        </a>
                        <a href="mailto:sales@powernetglobal.net" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', html);
    }
}

document.addEventListener('DOMContentLoaded', () => new footerManager());