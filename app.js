document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/paintings')
      .then(response => response.json())
      .then(paintings => {
        const container = document.getElementById('paintings-container');
        paintings.forEach(painting => {
          const paintingElement = document.createElement('div');
          paintingElement.className = 'painting';
          paintingElement.innerHTML = `
            <img src="${painting.imageUrl}" alt="${painting.title}">
            <h3>${painting.title}</h3>
            <p>Artist: ${painting.artist}</p>
            <p>Price: $${painting.price}</p>
            <p>${painting.description}</p>
          `;
          container.appendChild(paintingElement);
        });
      })
      .catch(error => console.error('Error fetching paintings:', error));
  });
  