const data = [
  { name: "Green PG", location: "Bangalore", price: 8000 },
  { name: "City PG", location: "Mysore", price: 6000 },
  { name: "Comfort PG", location: "Bangalore", price: 9000 }
];

function displayPG(list) {
  const container = document.getElementById("pg-list");
  container.innerHTML = "";

  list.forEach(pg => {
    container.innerHTML += `
      <div class="card">
        <h3>${pg.name}</h3>
        <p>${pg.location}</p>
        <p>Rs. ${pg.price}</p>
      </div>
    `;
  });
}

function searchPG() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = data.filter(pg => pg.location.toLowerCase().includes(value));
  displayPG(filtered);
}

displayPG(data);