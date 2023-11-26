// 2.1. Порівняння довжини двох рядків.
function compareLength(str1, str2) {
  if (str1.length > str2.length) {
    return 1;
  } else if (str1.length < str2.length) {
    return -1;
  } else {
    return 0;
  }
}

// Приклад використання:
const result1 = compareLength('abc', 'def'); // Поверне 1
const result2 = compareLength('hello', 'world'); // Поверне 0
const result3 = compareLength('apple', 'banana'); // Поверне -1
console.log(result1, result2, result3);

// 2.2. Знаходження індексів та кількості зустрічань символу у рядку.
function findIndexesAndCount(str, char) {
  const indexes = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      indexes.push(i);
      count++;
    }
  }

  return { indexes, count };
}

// Приклад використання:
const result4 = findIndexesAndCount('hello world', 'o');
console.log(result4.indexes); // Виведе [4, 7]
console.log(result4.count); // Виведе 2

// 2.3. Переведення у верхній регістр першого символу рядка.
function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Приклад використання:
const result5 = capitalizeFirstChar('example');
console.log(result5); // Виведе "Example"

// 2.4. Підрахунок кількості голосних літер у рядку.
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Приклад використання:
const result6 = countVowels('Hello World');
console.log(result6); // Виведе 3

// 2.5. Перевірка наявності спаму у рядку.
function containsSpam(str) {
  const spamWords = [
    '100% безкоштовно',
    'збільшення продажів',
    'тільки сьогодні',
    'не видаляйте',
  ];

  for (let spamWord of spamWords) {
    if (str.includes(spamWord)) {
      return true;
    }
  }

  return false;
}

// Приклад використання:
const result7 = containsSpam('Збільшення продажів тільки сьогодні!');
console.log(result7); // Виведе true

// 2.6. Скорочення рядка з додаванням трьох крапок.
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

// Приклад використання:
const result8 = truncate('Hello, world!', 8);
console.log(result8); // Виведе "Hello..."
