const premiumCardContainer = document.getElementById('premium-container');
const featuredCardContainer = document.getElementById('featured-container');

const premiumCards = Array.from(document.querySelectorAll('.premium-card'));
const featuredCards = Array.from(document.querySelectorAll('.featured-card'));

function scrollCards() {
    const premiumFirstCard = premiumCards.shift();
    const featuredFirstCard = featuredCards.shift();
    premiumCards.push(premiumFirstCard);
    featuredCards.push(featuredFirstCard);
    premiumCards.forEach(card => card.style.transform = 'none');
    featuredCards.forEach(card => card.style.transform = 'none');
    setTimeout(() =>{
//         premium
        premiumCardContainer.removeChild(premiumFirstCard);
        premiumCardContainer.appendChild(premiumFirstCard);
//         featured
        featuredCardContainer.removeChild(featuredFirstCard);
        featuredCardContainer.appendChild(featuredFirstCard);
            }, 1500);
        }

// Scroll the cards every 2 seconds
setInterval(scrollCards, 3000);