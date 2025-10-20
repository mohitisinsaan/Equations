function toggleDetail(element) {
  const detail = element.querySelector('.detail');
  detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
}

function closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
}

window.onload = function () {
  if (localStorage.getItem('visited')) {
    document.getElementById('welcomePopup').style.display = 'flex';
  } else {
    localStorage.setItem('visited', true);
  }
};
