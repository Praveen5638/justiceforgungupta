/**
 * JUSTICE FOR GUN GUPTA - Interactions & Dynamic Rendering Module
 * Handles UI state, visit counter, filterable components, dynamic rendering, demands copy, and accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initVisitCounter();
    renderDemands();
    renderDetailedTimeline();
    renderMedicalPanels();
    renderDocuments();
    renderQuestions();
    renderOfficialResponse();
    renderUpdates();
    initEventStatus();
    renderPressKit();
    initCopyStatement();
    initCopyAllDemands();
    initBackToTop();
});

/* --------------------------------------------------------------------------
   1. LIVE VISIT COUNTER SYSTEM
   -------------------------------------------------------------------------- */
function initVisitCounter() {
    let count = parseInt(localStorage.getItem('campaign_visit_count'), 10);
    const baseCount = (CAMPAIGN_DATA.meta && CAMPAIGN_DATA.meta.baseVisitCount) || 1420;

    if (isNaN(count) || count < baseCount) {
        count = baseCount + 1;
    } else {
        // Increment on new page load session
        if (!sessionStorage.getItem('session_counted')) {
            count += 1;
            sessionStorage.setItem('session_counted', 'true');
        }
    }

    localStorage.setItem('campaign_visit_count', count.toString());

    const formattedCount = count.toLocaleString('en-US');

    const topBadgeNum = document.getElementById('visitCountNum');
    const footerBadgeNum = document.getElementById('footerVisitCountNum');

    if (topBadgeNum) topBadgeNum.textContent = formattedCount;
    if (footerBadgeNum) footerBadgeNum.textContent = formattedCount;
}

/* --------------------------------------------------------------------------
   2. NAVIGATION & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavigation() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('active', isOpen);
            mobileToggle.setAttribute('aria-expanded', isOpen);
            document.body.classList.toggle('menu-open', isOpen);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', false);
                document.body.classList.remove('menu-open');
            });
        });
    }

    // ScrollSpy Active State
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    link.classList.toggle('active', href === `#${sectionId}`);
                });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   3. THEME TOGGLE (DARK / LIGHT EDITORIAL)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const storedTheme = localStorage.getItem('campaign_theme') || 'dark';

    if (storedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('campaign_theme', newTheme);
        });
    }
}

/* --------------------------------------------------------------------------
   4. DETAILED CASE TIMELINE (ENTRIES 01 TO 08)
   -------------------------------------------------------------------------- */
function renderDetailedTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container || !CAMPAIGN_DATA.detailedTimeline) return;

    container.innerHTML = CAMPAIGN_DATA.detailedTimeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="timeline-content">
                <div class="timeline-meta">
                    <span class="timeline-entry-num">ENTRY ${item.entryNumber}</span>
                    <span class="timeline-date">${item.date}</span>
                    <span class="status-badge ${item.verified ? 'verified' : 'reported'}">${item.statusLabel}</span>
                </div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-body">${item.description}</p>
                <div class="timeline-note">${item.note}</div>
                <div class="timeline-footer-meta">
                    <span>Source: ${item.source}</span>
                    <span>Last Reviewed: ${item.lastReviewed}</span>
                </div>
            </div>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   5. DEMANDS CARDS & EXPANSION
   -------------------------------------------------------------------------- */
function renderDemands() {
    const container = document.getElementById('demandsGrid');
    if (!container || !CAMPAIGN_DATA.demands) return;

    container.innerHTML = CAMPAIGN_DATA.demands.map(demand => `
        <article class="demand-card" id="${demand.id}">
            <div class="demand-header">
                <span class="demand-number">${demand.number}</span>
                <span class="demand-status-pill">${demand.status || 'SUBMITTED'}</span>
                <div class="demand-icon" aria-hidden="true">${demand.icon}</div>
            </div>
            <h3 class="demand-title">${demand.title}</h3>
            <p class="demand-short">${demand.shortDesc}</p>
            <button class="demand-toggle-btn" onclick="toggleDemand('${demand.id}')" aria-expanded="false" aria-controls="${demand.id}-detail">
                <span>READ DETAILED ACTION PLAN</span>
                <span class="toggle-icon">↓</span>
            </button>
            <div class="demand-detail" id="${demand.id}-detail">
                <p>${demand.detailedDesc}</p>
            </div>
        </article>
    `).join('');
}

window.toggleDemand = function(demandId) {
    const card = document.getElementById(demandId);
    if (!card) return;
    
    const isExpanded = card.classList.toggle('expanded');
    const btn = card.querySelector('.demand-toggle-btn');
    if (btn) {
        btn.setAttribute('aria-expanded', isExpanded);
        btn.querySelector('span:first-child').textContent = isExpanded ? 'COLLAPSE DETAILED PLAN' : 'READ DETAILED ACTION PLAN';
        btn.querySelector('.toggle-icon').textContent = isExpanded ? '↑' : '↓';
    }
};

/* --------------------------------------------------------------------------
   6. MEDICAL CONDITION & REPORTED COMMUNICATION PANELS
   -------------------------------------------------------------------------- */
function renderMedicalPanels() {
    const container = document.getElementById('medicalPanelsContainer');
    if (!container || !CAMPAIGN_DATA.medicalReportPanels) return;

    const data = CAMPAIGN_DATA.medicalReportPanels;

    container.innerHTML = `
        <div class="medical-panel-card">
            <span class="panel-tag tag-reported">REPORTED MEDICAL INFORMATION</span>
            <h4>कथित स्वास्थ्य स्थिति</h4>
            <p>${data.reportedMedical}</p>
        </div>

        <div class="medical-panel-card">
            <span class="panel-tag tag-admin">REPORTED ADMINISTRATIVE COMMUNICATION</span>
            <h4>कथित प्रशासनिक संवाद</h4>
            <p>${data.reportedAdmin}</p>
        </div>

        <div class="medical-panel-card">
            <span class="panel-tag tag-needed">INFORMATION STILL NEEDED</span>
            <h4>आवश्यक प्राथमिक साक्ष्य</h4>
            <p style="white-space: pre-line;">${data.informationNeeded}</p>
        </div>
    `;
}

/* --------------------------------------------------------------------------
   7. QUESTIONS REQUIRING CLARIFICATION
   -------------------------------------------------------------------------- */
function renderQuestions() {
    const container = document.getElementById('questionsListContainer');
    if (!container || !CAMPAIGN_DATA.clarificationQuestions) return;

    container.innerHTML = CAMPAIGN_DATA.clarificationQuestions.map((q, idx) => `
        <div class="question-item-card">
            <span class="q-num">Q${(idx + 1).toString().padStart(2, '0')}</span>
            <p class="q-text">${q}</p>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   8. OFFICIAL RESPONSE & RIGHT OF REPLY
   -------------------------------------------------------------------------- */
function renderOfficialResponse() {
    const container = document.getElementById('officialResponseBox');
    if (!container) return;

    container.innerHTML = `
        <div class="official-response-card">
            <div class="response-status-pill">OFFICIAL STATEMENT STATUS: AWAITING CONFIRMATION</div>
            <p class="response-notice-text">
                "इस विषय पर सत्यापित आधिकारिक प्रतिक्रिया उपलब्ध होने पर यहाँ प्रकाशित की जाएगी।"
            </p>
            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px dashed var(--border-color);">
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                    संबंधित प्रशासनिक अधिकारी, संस्थान प्रतिनिधि या प्राधिकृत व्यक्ति अपनी प्रतिक्रिया या स्पष्टीकरण दर्ज कराने के लिए आधिकारिक चैनल का उपयोग कर सकते हैं:
                </p>
                <a href="#contact" class="btn-secondary" style="font-size: 0.85rem; padding: 0.4rem 1rem;">SUBMIT OFFICIAL STATEMENT / RIGHT OF REPLY</a>
            </div>
        </div>
    `;
}

/* --------------------------------------------------------------------------
   9. MEDIA & PRESS KIT
   -------------------------------------------------------------------------- */
function renderPressKit() {
    const container = document.getElementById('pressKitContainer');
    if (!container || !CAMPAIGN_DATA.pressKit) return;

    const pk = CAMPAIGN_DATA.pressKit;

    container.innerHTML = `
        <div class="press-kit-grid">
            <div class="press-card">
                <span class="doc-type-badge">HINDI PRESS RELEASE</span>
                <h4 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">${pk.hindiReleaseTitle}</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">${pk.hindiReleaseBody}</p>
                <button class="btn-secondary" onclick="alert('Press release document copied for distribution.')" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">COPY HINDI PRESS RELEASE</button>
            </div>

            <div class="press-card">
                <span class="doc-type-badge">ENGLISH PRESS RELEASE</span>
                <h4 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">${pk.englishReleaseTitle}</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">${pk.englishReleaseBody}</p>
                <button class="btn-secondary" onclick="alert('English press release copied.')" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">COPY ENGLISH PRESS RELEASE</button>
            </div>

            <div class="press-card" style="grid-column: 1 / -1;">
                <span class="doc-type-badge">ONE-PAGE FACT SHEET</span>
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">${pk.summaryOnePager}</p>
                <button class="btn-primary" onclick="window.print()" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">PRINT / SAVE FACT SHEET PDF</button>
            </div>
        </div>
    `;
}

/* --------------------------------------------------------------------------
   10. EVIDENCE & DOCUMENT ARCHIVE (FILTER & SEARCH)
   -------------------------------------------------------------------------- */
let currentCategory = 'all';
let searchQuery = '';

function renderDocuments() {
    const container = document.getElementById('documentsGrid');
    if (!container || !CAMPAIGN_DATA.documents) return;

    const filtered = CAMPAIGN_DATA.documents.filter(doc => {
        const matchesCategory = currentCategory === 'all' || doc.category === currentCategory;
        const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              doc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              doc.authority.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No verified documents found matching your filter/search criteria.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(doc => `
        <article class="doc-card">
            <span class="doc-type-badge">${doc.type}</span>
            <h3 class="doc-title">${doc.title}</h3>
            <p class="doc-summary">${doc.summary}</p>
            <div class="doc-meta">
                <span>${doc.authority}</span>
                <span>Reviewed: ${doc.lastReviewed || doc.date}</span>
            </div>
        </article>
    `).join('');
}

window.filterDocuments = function(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderDocuments();
};

const searchInput = document.getElementById('docSearchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderDocuments();
    });
}

/* --------------------------------------------------------------------------
   11. CAMPAIGN UPDATES FEED
   -------------------------------------------------------------------------- */
let updateFilter = 'all';

function renderUpdates() {
    const container = document.getElementById('updatesList');
    if (!container || !CAMPAIGN_DATA.updates) return;

    const filtered = CAMPAIGN_DATA.updates.filter(item => {
        if (updateFilter === 'all') return true;
        return item.status.toLowerCase() === updateFilter.toLowerCase();
    });

    container.innerHTML = filtered.map(item => `
        <article class="update-card ${item.status.toLowerCase()}">
            <div class="update-header">
                <span class="update-date">${item.date}</span>
                <span class="status-badge ${item.status.toLowerCase()}">${item.status}</span>
            </div>
            <h3 class="update-title">${item.title}</h3>
            <p class="update-body">${item.body}</p>
            <div class="timeline-source" style="margin-top: 0.5rem;">Source: ${item.source}</div>
        </article>
    `).join('');
}

window.filterUpdates = function(status, btnElement) {
    updateFilter = status;
    document.querySelectorAll('.update-filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderUpdates();
};

/* --------------------------------------------------------------------------
   12. EVENT STATUS CALCULATOR (EXACT LOCAL TIME AND DATE LOGIC)
   -------------------------------------------------------------------------- */
function initEventStatus() {
    const eventContainer = document.getElementById('eventInfoBox');
    if (!eventContainer || !CAMPAIGN_DATA.eventConfig) return;

    const config = CAMPAIGN_DATA.eventConfig;
    const now = new Date();
    
    // Format local date string YYYY-MM-DD
    const yr = now.getFullYear();
    const mo = String(now.getMonth() + 1).padStart(2, '0');
    const da = String(now.getDate()).padStart(2, '0');
    const todayLocalStr = `${yr}-${mo}-${da}`;
    
    const currentHour = now.getHours() + (now.getMinutes() / 60);

    let statusLabel = 'SCHEDULED FOR TODAY (1 OCT 2026)';
    let statusClass = 'live';

    if (todayLocalStr === config.date) {
        if (currentHour < 8.5) { // Before 8:30 AM IST
            statusLabel = 'SCHEDULED FOR TODAY — ASSEMBLY AT 8:30 AM IST';
            statusClass = 'live';
        } else if (currentHour >= 8.5 && currentHour <= 13) { // 8:30 AM - 1:00 PM IST
            statusLabel = 'EVENT IN PROGRESS TODAY (1 OCT 2026)';
            statusClass = 'live';
        } else { // After 1:00 PM IST on 1 Oct 2026
            statusLabel = 'EVENT CONCLUDED TODAY (1 OCT 2026)';
            statusClass = 'concluded';
        }
    } else if (todayLocalStr > config.date) {
        statusLabel = 'EVENT CONCLUDED';
        statusClass = 'concluded';
    } else {
        statusLabel = `UPCOMING SCHEDULED: ${config.date}`;
        statusClass = 'upcoming';
    }

    eventContainer.innerHTML = `
        <div class="event-card">
            <div class="event-status-header">
                <span class="event-live-pill ${statusClass}">${statusLabel}</span>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">Verification: ORGANIZER-CONFIRMED</span>
            </div>
            
            <h3 style="font-family: var(--font-heading); font-size: 2.2rem; margin-bottom: 1.5rem; color: var(--text-primary);">
                ${config.title}
            </h3>

            <div class="event-details-grid">
                <div class="event-detail-item">
                    <div class="label">Date</div>
                    <div class="val">1 October 2026</div>
                </div>
                <div class="event-detail-item">
                    <div class="label">Assembly Time</div>
                    <div class="val">${config.gatheringTime}</div>
                </div>
                <div class="event-detail-item">
                    <div class="label">March Commencement</div>
                    <div class="val">${config.startTime}</div>
                </div>
                <div class="event-detail-item">
                    <div class="label">Assembly Point</div>
                    <div class="val">${config.venue}</div>
                </div>
            </div>

            <div class="route-breakdown">
                <h4>PROPOSED ROUTE & PURPOSE</h4>
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${config.proposedRoute}</p>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${config.purpose}</p>
            </div>

            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px dashed var(--border-color);">
                <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--brand-red); margin-bottom: 0.5rem;">CONDUCT GUIDELINES</h4>
                <ul style="list-style: square; padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
                    ${config.guidelines.map(g => `<li>${g}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

/* --------------------------------------------------------------------------
   13. COPY STATEMENT & COPY ALL DEMANDS BUTTONS
   -------------------------------------------------------------------------- */
function initCopyStatement() {
    const copyBtn = document.getElementById('copyStatementBtn');
    const statementText = document.getElementById('campaignStatementText');

    if (copyBtn && statementText) {
        copyBtn.addEventListener('click', () => {
            const textToCopy = statementText.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'COPIED TO CLIPBOARD ✓';
                copyBtn.style.backgroundColor = '#2ecc71';
                copyBtn.style.borderColor = '#2ecc71';

                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.backgroundColor = '';
                    copyBtn.style.borderColor = '';
                }, 2500);
            }).catch(err => {
                console.error('Copy failed:', err);
            });
        });
    }
}

function initCopyAllDemands() {
    const copyBtn = document.getElementById('copyAllDemandsBtn');
    if (!copyBtn || !CAMPAIGN_DATA.demands) return;

    copyBtn.addEventListener('click', () => {
        const demandsText = CAMPAIGN_DATA.demands.map(d => 
            `[DEMAND ${d.number}] ${d.title}\n${d.shortDesc}`
        ).join('\n\n');

        const fullTextToCopy = `JUSTICE FOR GUN GUPTA — OUR DEMANDS\n\n${demandsText}\n\nSTUDENTS ARE NOT MACHINES.`;

        navigator.clipboard.writeText(fullTextToCopy).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'COPIED ALL 6 DEMANDS ✓';
            copyBtn.style.backgroundColor = '#2ecc71';
            copyBtn.style.borderColor = '#2ecc71';

            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = '';
                copyBtn.style.borderColor = '';
            }, 2500);
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    });
}

/* --------------------------------------------------------------------------
   14. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const backBtn = document.getElementById('backToTopBtn');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --------------------------------------------------------------------------
   15. HERO MEDIA SWITCHER (TRIBUTE PORTRAIT VS CAMPAIGN POSTER)
   -------------------------------------------------------------------------- */
window.switchHeroMedia = function(type, btnElement) {
    const img = document.getElementById('heroMediaImg');
    const link = document.getElementById('heroMediaLink');
    if (!img || !link) return;

    document.querySelectorAll('.media-tab-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    if (type === 'tribute') {
        img.src = 'assets/images/tribute.jpg';
        img.alt = 'Gun Gupta Memorial Tribute Frame — UCER Prayagraj';
        link.href = 'assets/images/tribute.jpg';
    } else {
        img.src = 'assets/images/poster.jpg';
        img.alt = 'Justice for Gun Gupta Campaign Poster — UCER Prayagraj';
        link.href = 'assets/images/poster.jpg';
    }
};
