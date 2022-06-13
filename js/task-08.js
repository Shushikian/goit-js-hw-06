const form = document.querySelector('.login-form');
const subButton = document.querySelector('button');
// const inputEmain = document.querySelector('input[type="email"]');
// const inputPassword = document.querySelector('input[type="password"]')

let user = {
    email: '',
    password: '',
};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value
  if (email === "" || password === "") {
    return alert('Please fill every field to continued!');
  } else {
    user.email = email;
    user.password = password;
    console.log(user);
    event.currentTarget.reset();
    return user;
  }
  // console.dir(event.currentTarget.elements);
  //   console.log(event.currentTarget.elements.email.value);
}


























// subButton.addEventListener('click', (event) => {
//     event.preventDefault();

//   if (inputEmain === '' || inputPassword === '') {
//     alert('Please fill every field to continued!');
//     console.log(`inputEmain: fail`,inputEmain);
//     console.log(`inputPassword: fail`,inputPassword);
//   } else {
//     user.email = inputEmain;
//     user.password = inputPassword;
//     console.log(`inputEmain: tru`,inputEmain);
//     console.log(`inputPassword: tru`,inputPassword);
//     console.log(`user:`,user);
//         event.querySelector('.login-form').reset();
//     return user;
//   }
// });