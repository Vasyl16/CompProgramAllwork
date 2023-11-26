// 1.1. Функція для виведення заданої послідовності чисел в оберненому порядку (split).
function reverseSequence(sequence) {
  return sequence.split('').reverse().join('');
}

// Приклад використання:
const originalSequence = '12345';
const reversedSequence = reverseSequence(originalSequence);
console.log(reversedSequence); // Виведе "54321"

// 1.2. Функція no_zeros(), яка видаляє нульові значення з масиву чисел.
function no_zeros(numbersArray) {
  return numbersArray.filter((number) => number !== 0);
}

// Приклад використання:
const numbers = [1, 0, 2, 0, 3, 4, 0, 5];
const modifiedNumbers = no_zeros(numbers);
console.log(modifiedNumbers); // Виведе [1, 2, 3, 4, 5]

// 1.3. Функція reverser(), яка відображає вхідний текстовий рядок у протилежному порядку.
function reverser(text) {
  return text.split('').reverse().join('');
}

// Приклад використання:
const originalText = 'Hello, World!';
const reversedText = reverser(originalText);
console.log(reversedText); // Виведе "!dlroW ,olleH"

// 1.4. Функція replace(), яка здійснює певні заміни у текстовому рядку.
function replaceText(originalText) {
  // a) друге і третє слово поміняти місцями;
  const words = originalText.split(' ');
  const temp = words[1];
  words[1] = words[2];
  words[2] = temp;

  // b) пропуски замінені на коми.
  const resultText = words.join(', ');

  return resultText;
}

// Приклад використання:
const originalSentence = 'Я не люблю морозиво';
const modifiedSentence = replaceText(originalSentence);
console.log(modifiedSentence); // Виведе "Я люблю не, морозиво"
