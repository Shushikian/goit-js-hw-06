const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

input.addEventListener('input', inputInSpan);

function inputInSpan({ currentTarget: { value }}) {
    output.textContent = !value
        ? 'Anonymous'
        : value;
}