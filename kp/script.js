function toggleFav(el) {
  el.classList.toggle('active');
  el.textContent = el.classList.contains('active') ? '♥' : '♡';
}

function addDish() {
  alert('Интерактив: добавление нового блюда');
}

document.getElementById('search').addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? 'flex'
      : 'none';
  });
});
