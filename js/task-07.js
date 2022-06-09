const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontsize = input.addEventListener("input", (font) => {
    text.style.fontSize = font.currentTarget.value + 'px';
});