
// Boot animation: hide after 6 seconds reliably
(function(){
  const boot = document.getElementById('boot-screen');
  setTimeout(()=> {
    if(boot) boot.classList.add('hidden');
    // After boot is hidden, trigger popup logic
    triggerPopup();
  }, 6000);
})();

// Expandable feature buttons
document.querySelectorAll('.expand-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isOpen = content.style.display === 'block';
    document.querySelectorAll('.expand-content').forEach(c => c.style.display = 'none');
    content.style.display = isOpen ? 'none' : 'block';
  });
});

// Popup logic: show only after boot
function triggerPopup(){
  const popup = document.getElementById('welcome-popup');
  const continueBtn = document.getElementById('continue-btn');
  const STORAGE_KEY = 'equations_seen_v1';
  
  try {
    const seen = localStorage.getItem(STORAGE_KEY);
    if(!seen){
      // first ever visit
      popup.classList.remove('hidden');
      localStorage.setItem(STORAGE_KEY,'1');
    }
  } catch(e){
    popup.classList.remove('hidden'); // fallback
  }

  if(continueBtn){
    continueBtn.addEventListener('click', ()=>{
      popup.classList.add('hidden');
    });
  }
}
