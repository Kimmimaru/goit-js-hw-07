const categories = document.querySelectorAll('#categories > li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const heading = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul > li').length;
  
  console.log(`Category: ${heading}`);
  console.log(`Elements: ${elements}`);
});
