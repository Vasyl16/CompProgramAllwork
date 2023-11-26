// Створення об'єкта, що описує час
const timeObject = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  // 1.1. Функція виведення часу на екран
  displayTime: function () {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },

  // 1.2. Функція зміни часу на передану кількість секунд
  changeTimeBySeconds: function (seconds) {
    this.seconds += seconds;
    this.adjustTime();
    this.displayTime();
  },

  // 1.3. Функція зміни часу на передану кількість хвилин
  changeTimeByMinutes: function (minutes) {
    this.minutes += minutes;
    this.adjustTime();
    this.displayTime();
  },

  // 1.4. Функція зміни часу на передану кількість годин
  changeTimeByHours: function (hours) {
    this.hours += hours;
    this.adjustTime();
    this.displayTime();
  },

  // Внутрішня функція для корекції часу
  adjustTime: function () {
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }

    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }

    // Забезпечення, що всі значення часу будуть цілими числами
    this.seconds = Math.floor(this.seconds);
    this.minutes = Math.floor(this.minutes);
    this.hours = Math.floor(this.hours);
  },
};

// Приклад використання функцій
timeObject.displayTime(); // Виведе "0:0:0"

timeObject.changeTimeBySeconds(30); // Додає 30 секунд
// Виведе, наприклад, "0:0:30"

timeObject.changeTimeByMinutes(5); // Додає 5 хвилин
// Виведе, наприклад, "0:5:30"

timeObject.changeTimeByHours(2); // Додає 2 години
// Виведе, наприклад, "2:5:30"
