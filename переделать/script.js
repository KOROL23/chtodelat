let phrases = [
  { text: 'сходить в мак', image: 'https://cdn-icons-png.flaticon.com/512/732/732060.png' },
  { text: 'купить Apple технику', image: 'https://cdn-icons-png.flaticon.com/512/731/731985.png' },
  { text: 'посмотреть фильм', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968617.png' },
  { text: 'чекнуть инсту', image: 'https://cdn-icons-png.flaticon.com/512/1384/1384089.png' },
  { text: 'дунуть', image: 'https://cdn-icons-png.flaticon.com/512/770/770971.png' },
  { text: 'писать код', image: 'https://cdn-icons-png.flaticon.com/512/584/584863.png' },
  { text: 'послушать музыку', image: 'https://cdn-icons.flaticon.com/png/512/2402/premium/2402461.png?token=exp=1647108606~hmac=75495b3dc5235e512c5b50c6efd42436' },
  { text: 'убраться дома', image: 'https://cdn-icons.flaticon.com/png/512/2946/premium/2946701.png?token=exp=1647108733~hmac=6d633a6000138b2e2c5ca268508b7738' },
  { text: 'погонять в приставку с другом', image: 'https://cdn-icons-png.flaticon.com/512/686/686589.png' },
  { text: 'поспать', image: 'https://cdn-icons-png.flaticon.com/512/835/835503.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 