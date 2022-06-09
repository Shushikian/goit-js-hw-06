const listItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItem.length}`);

for (const item of listItem) {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
}