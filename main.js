const button = document.getElementById('share-btn');
const tooltip = document.getElementById('share-tooltip');

button.addEventListener('click', () => {
    tooltip.classList.toggle('hidden');
});

const buttonMobile = document.getElementById('share-btn-mobile');
const tooltipMobile = document.getElementById('share-tooltip-mobile');

buttonMobile.addEventListener('click', () => {
    tooltipMobile.classList.toggle('hidden');
});
