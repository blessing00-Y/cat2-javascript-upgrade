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

const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        
        const nameValue = nameInput ? nameInput.value.trim() : '';
        const emailValue = emailInput ? emailInput.value.trim() : '';

        if (nameValue === '' || emailValue === '') {
            formFeedback.textContent = "Please fill out all required fields!";
            formFeedback.style.backgroundColor = "#ffe3e3";
            formFeedback.style.color = "#d93838";
            formFeedback.style.border = "1px solid #d93838";
            formFeedback.style.display = "block";
        } else {
            formFeedback.textContent = `Thank you, ${nameValue}! Your message has been sent successfully.`;
            formFeedback.style.backgroundColor = "#e3fcef";
            formFeedback.style.color = "#24b263";
            formFeedback.style.border = "1px solid #24b263";
            formFeedback.style.display = "block";

            contactForm.reset(); 
        }

        setTimeout(() => {
            formFeedback.style.display = "none";
        }, 4000);
    });
}