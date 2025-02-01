// 1-2
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');
function openModal() {
    document.body.classList.add('show-modal');
}
function closeModal() {
    document.body.classList.remove('show-modal');
}
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
        closeModal();
    }
});

// 3

const radios = document.querySelectorAll('input[name="color"]');
function changeBackground() {
    document.body.style.backgroundColor = this.value;
}
radios.forEach(radio => {
    radio.addEventListener('change', changeBackground);
});
document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;




