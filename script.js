// Boot animation progress (6s)
(function(){
  const boot = document.getElementById('boot-screen');
  const bar = document.getElementById('boot-progress');
  let progress = 0;
  const total = 6000; // ms
  const step = 100;
  const steps = total / step;
  const per = 100 / steps;
  const t = setInterval(()=> {
    progress += per;
    if(progress >= 100){
      progress = 100;
      clearInterval(t);
      setTimeout(()=> {
        if(boot) boot.style.display = 'none';
        boot.setAttribute('aria-hidden','true');
      }, 200);
    }
    if(bar) bar.style.width = progress + '%';
  }, step);
})();

// Popup logic:
// - Use localStorage 'equations_rc_last_seen' timestamp (ms).
// - Show modal if no timestamp OR last seen > 24 hours.
// - Use sessionStorage 'equations_rc_session_shown' to avoid showing multiple times during navigation in same tab.
(function(){
  const MODAL_KEY = 'equations_rc_last_seen_v1';
  const SESSION_KEY = 'equations_rc_session_shown_v1';
  const DAY = 1000 * 60 * 60 * 24;

  const modal = document.getElementById('welcome-modal');
  const closeBtn = document.getElementById('modal-close');
  const backdrop = document.getElementById('modal-backdrop');

  function showModal(){
    if(!modal) return;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
    try {
      sessionStorage.setItem(SESSION_KEY, '1'); // mark shown for this session
      localStorage.setItem(MODAL_KEY, String(Date.now())); // update last seen
    } catch(e){}
  }
  function hideModal(){
    if(!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
  }

  try {
    const sessionShown = sessionStorage.getItem(SESSION_KEY);
    const lastSeen = parseInt(localStorage.getItem(MODAL_KEY) || '0', 10);
    const now = Date.now();

    // If already shown in this session, do nothing.
    if(sessionShown) {
      // nothing
    } else {
      // Show if never seen OR older than a day
      if(!lastSeen || (now - lastSeen) > DAY) {
        // wait until boot animation finishes to show modal (optional)
        const boot = document.getElementById('boot-screen');
        if(boot && boot.style.display !== 'none') {
          // boot still running; show after boot ends (use 6s as safeguard)
          setTimeout(showModal, 6200);
        } else {
          showModal();
        }
      }
    }
  } catch(e) {
    // on error, show once
    showModal();
  }

  if(closeBtn) closeBtn.addEventListener('click', hideModal);
  if(backdrop) backdrop.addEventListener('click', hideModal);

})();

// Feature bubbles open a side panel with details (no repeated popup behavior)
(function(){
  const bubbles = document.querySelectorAll('.bubble');
  const panel = document.getElementById('feature-panel');
  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  const panelClose = document.getElementById('panel-close');

  const details = {
    'govt': {
      title: 'Government News',
      body: 'Policy updates, local governance, punctual briefings from official sources, laws and civic notices. Soon: filtered alerts and summarized policy impacts.'
    },
    'world': {
      title: 'World Affairs',
      body: 'High-signal coverage on geopolitics, diplomacy, conflict reporting, and global institutions. Timelines and explainer threads will land in the app.'
    },
    'economy': {
      title: 'Economy Affairs',
      body: 'Markets, macroeconomic indicators, fiscal & monetary policy analysis, and actionable summaries for quick reading.'
    },
    'sports': {
      title: 'Sports',
      body: 'Scores, match recaps, athlete features, and short-form analytics. We will include live tickers in the app.'
    },
    'tech': {
      title: 'Tech',
      body: 'Product launches, startup news, platform policy, and hands-on explainers. Expect deeper reviews in the full app.'
    },
    'science': {
      title: 'Science',
      body: 'Research highlights, accessible explainers, and verified summaries of new findings.'
    }
  };

  bubbles.forEach(b => {
    b.addEventListener('click', ()=> {
      const key = b.getAttribute('data-key');
      const d = details[key] || { title: b.querySelector('.bubble-title')?.textContent || 'Feature', body: b.querySelector('.bubble-desc')?.textContent || '' };
      panelTitle.textContent = d.title;
      panelBody.textContent = d.body;
      panel.classList.remove('hidden');
      panel.setAttribute('aria-hidden','false');
      panel.style.boxShadow = '0 30px 80px rgba(0,0,0,0.8), 0 0 24px rgba(155,89,255,0.08)';
    });
  });

  if(panelClose) panelClose.addEventListener('click', ()=> {
    panel.classList.add('hidden');
    panel.setAttribute('aria-hidden','true');
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && panel && !panel.classList.contains('hidden')){
      panel.classList.add('hidden');
      panel.setAttribute('aria-hidden','true');
    }
  });

})();
