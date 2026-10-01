/**
 * JUSTICE FOR GUN GUPTA - Main Entry Script
 * Global initialization, performance logging, and accessibility listeners.
 */

(function () {
    'use strict';

    console.log("%c JUSTICE FOR GUN GUPTA — STUDENT ADVOCACY & ACCOUNTABILITY INITIATIVE ", "background: #E3262E; color: #FFF; font-size: 12px; font-weight: bold; padding: 4px;");

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('navMenu');
            const mobileToggle = document.getElementById('mobileToggle');
            if (navMenu && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                if (mobileToggle) {
                    mobileToggle.classList.remove('active');
                    mobileToggle.focus();
                }
            }
        }
    });

    // Form submission handling override for static UI
    const contactForm = document.getElementById('campaignContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const alertBox = document.getElementById('formAlert');
            if (alertBox) {
                alertBox.style.display = 'block';
                alertBox.innerHTML = `
                    <div style="background-color: rgba(46, 204, 113, 0.15); border: 1px solid #2ecc71; color: #2ecc71; padding: 1rem; border-radius: 4px; font-size: 0.9rem;">
                        <strong>Notice:</strong> This campaign contact section is static and does not collect or store personal data. To reach the campaign organizers directly, please use the official email address: <strong>${CAMPAIGN_DATA.meta.contactEmail}</strong>
                    </div>
                `;
            }
        });
    }
})();
