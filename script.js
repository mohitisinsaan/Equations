
// Boot animation: hide after 6 seconds reliably
(function(){
  const boot = document.getElementById('boot-screen');
  setTimeout(()=> {
    if(boot) boot.classList.add('hidden');
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
