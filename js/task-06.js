// const input = document.querySelector("#validation-input");
// console.log(input)
// const textLength = input.dataset.length;
// console.log(textLength)
// input.addEventListener('blur', (text) => {
//      if (text.currentTarget.value.length = textLength) {
//         input.classList.remove('invalid');
//         input.classList.add('valid');
//         console.log(text.currentTarget.value.length)
//     }
//     else {
//         input.classList.remove('valid');
//         input.classList.add('invalid');
//         console.log(text.currentTarget.value.length)
//     }
// }
// )



const input = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length]');
const textLength = inputLength.dataset.length;

input.addEventListener('blur', (text) => {

    if (text.currentTarget.value.length < textLength || text.currentTarget.value.length > textLength) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    else {
        input.classList.remove('invalid');
        input.classList.add('valid');
                console.log(
            'else', text.currentTarget.value.length
        )
                console.log(
            'else', textLength
        )
    }
}
)