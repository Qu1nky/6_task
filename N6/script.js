function URL(url) {
    const urlRegex = /^(https?|ftp):\/\/(www\.)?([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)+([a-zA-Z0-9\/\?=#&_-]*)?$/;
    return urlRegex.test(url);
  }
  
  
  function validVariableName(name) {
    const variableNameRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return variableNameRegex.test(name);
  }
  
  
  function letAnDigOnly(str) {
    const lettersAndDigitsRegex = /^[a-zA-Z0-9]+$/;
    return lettersAndDigitsRegex.test(str);
  }
  
  
  function onlyLetters10(str) {
    const onlyLettersLengthRegex = /^[a-zA-Z]{10,}$/;
    return onlyLettersLengthRegex.test(str);
  }
  
  
  function countLettersAndDigits(str) {
    let letterCount = 0;
    let digitCount = 0;
    if (typeof str !== 'string') {
      return { letters: 0, digits: 0 }; // Обработка нестроковых значений
    }
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        letterCount++;
      } else if (/[0-9]/.test(char)) {
        digitCount++;
      }
    }
    return { letters: letterCount, digits: digitCount };
  }
  
  
  
  
  // Примеры использования:
  console.log("Задание 6-1");
  console.log("https://www.example.com", URL("https://www.example.com")); // true
  console.log("example.com", URL("example.com")); // false

  user_var = prompt("Введите имя переменной:");
  console.log("\nЗадание 6-2");
  console.log(validVariableName(user_var));

  console.log("\nЗадание 6-3");
  console.log("abc123XYZ", letAnDigOnly("abc123XYZ")); // true
  console.log("abc_123", letAnDigOnly("abc_123")); // false
  
  console.log("\nЗадание 6-4");
  console.log("aBcDeFgHiJkLmNo", onlyLetters10("aBcDeFgHiJkLmNo")); // true
  console.log("abcde", onlyLetters10("abcde")); // false
  console.log("abc_def1ghi", onlyLetters10("abc_def1ghi")); // false
  
  
  console.log("\nЗадание 6-5");
  const testString = "abc123XYZ456";
  const counts = countLettersAndDigits(testString);
  console.log(testString);
  console.log("Букв:", counts.letters); // Вывод: Букв: 6
  console.log("Цифр:", counts.digits); // Вывод: Цифр: 6
  
  
  const testString2 = "1234_html_";
  const counts3 = countLettersAndDigits(testString2);
  console.log(testString2);
  console.log("Букв:", counts3.letters); // Вывод: Букв: 0
  console.log("Цифр:", counts3.digits); // Вывод: Цифр: 0