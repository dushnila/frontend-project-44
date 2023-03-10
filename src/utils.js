// Максимальное число входит в диапазон генерации
// getRandomInRange(0, 5) генерирует случайные целые числа от 0 до 5!

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInRange;
