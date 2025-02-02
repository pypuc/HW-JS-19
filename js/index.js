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

// 4

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const validationInput = document.getElementById("validation-input");
nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
        nameOutput.textContent = "незнайомець";
    } else {
        nameOutput.textContent = nameInput.value;
    }
});
validationInput.addEventListener("blur", () => {
    const requiredLength = Number(validationInput.dataset.length);
    if (validationInput.value.length === requiredLength) {
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }
});

// 5 

const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");
fontSizeControl.addEventListener("input", () => {
    text.style.fontSize = fontSizeControl.value + "px";
});







