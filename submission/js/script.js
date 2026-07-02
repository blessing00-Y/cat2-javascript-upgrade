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

const wishlistInput = document.getElementById('wishlist-input');
const addWishlistBtn = document.getElementById('add-wishlist-btn');
const wishlistContainer = document.getElementById('wishlist-container');

if (addWishlistBtn && wishlistInput && wishlistContainer) {
    addWishlistBtn.addEventListener('click', () => {
        const itemText = wishlistInput.value.trim();
        if (itemText === '') return; 

        const li = document.createElement('li');
        li.innerHTML = `<span> ${itemText}</span>`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        
        removeBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(removeBtn);
        wishlistContainer.appendChild(li);
        wishlistInput.value = ''; 
    });
}