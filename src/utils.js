// Максимальное число не входит в диапазон генерации
// getRandomInRange(0, 5) генерирует случайные целые числа от 0 до 4!

const getRandomInRange = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export default getRandomInRange;
