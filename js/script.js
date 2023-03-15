const cards = document.querySelectorAll('.cards');
const filterInput = document.getElementById('filter');

function hasWhiteSpace(text) {
  return /\s/g.test(text);
}

filterInput.addEventListener('input', () => {
  const filterText = filterInput.value.toLowerCase();

  if (hasWhiteSpace(filterText)) return;

  for (const card of cards) {
    let cardTitle = card.querySelector('p');
    cardTitle = cardTitle.textContent.toLowerCase();

    if (cardTitle.includes(filterText)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  }
});