const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const documentList = document.querySelector('#ingredients')
const makeList = (ingredients) => {
  const items = [];
  for (let i = 0; i < ingredients.length; i++) {
    const item = document.createElement('li');
    item.textContent = ingredients[i];
    items.push(item);    
  }
  documentList.append(...items);
}
makeList(ingredients);