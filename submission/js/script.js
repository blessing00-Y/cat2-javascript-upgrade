const specialsArray = [
    { 
        name: "Breakfast Combo", 
        desc: "(Nduma, Ngwashe, Tea, Eggs, Fruitsalad)" 
    },
    { 
        name: "Special Platter", 
        desc: "(Wings, Roasted potatoes, Sausage, Beef)" 
    },
    { 
        name: "Chef's Nyama Choma Special", 
        desc: "(Goat meat, Kachumbari, Ugali)" 
    }
];

const specialsContainer = document.getElementById('specials-container');

if (specialsContainer) {
    specialsArray.forEach(special => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="item-name">${special.name}</span>
            <small class="item-description">${special.desc}</small>
        `;
        
        specialsContainer.appendChild(li);
    });
}