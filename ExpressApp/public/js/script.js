// This is script.js file which aims to give your website more interaction by managing events.
document.getElementById('fetchDataBtn').addEventListener('click', fetchItems);

async function fetchItems() {
  try {
    const response = await fetch('/api/items');
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('dataContainer').innerHTML = '<p>Error loading books.</p>';
  }
}

function displayItems(items) {
  const container = document.getElementById('dataContainer');
  container.innerHTML = ''; // Empty the prior content
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Author:</strong> ${item.author}</p>
      <p>${item.description}</p>
      <p><strong>Genre:</strong> ${item.genre}</p>
      <p><strong>Pages:</strong> ${item.pages}</p>
    `;
    container.appendChild(itemDiv);
  });
}