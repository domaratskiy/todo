document.addEventListener("DOMContentLoaded", function () {
  const today = new Date(); // Текущая дата

  // Определяем индекс текущего дня недели
  const currentDayIndex = today.getDay();
  const targetIndex = 3; // Индекс элемента, куда нужно поместить текущую дату (4-й элемент)

  // Создаем массив с датами для всех дней недели
  const weekDates = [];

  // Заполняем массив дат
  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    // Рассчитываем дату для текущего дня с учетом смещения
    day.setDate(today.getDate() - currentDayIndex + i + targetIndex - 1);
    weekDates.push(day);
  }

  // Получаем контейнер и все элементы <li>
  const daysContainer = document.querySelector(".days");
  const dayElements = daysContainer.querySelectorAll("li");

  // Устанавливаем содержимое элементов <li>
  weekDates.forEach((date, index) => {
    const formattedDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
    });
    dayElements[index].innerHTML = formattedDate;
  });

  // Устанавливаем класс для текущего дня
  dayElements[targetIndex].classList.add("selected");
});
