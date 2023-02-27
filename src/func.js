// Максимальное число не входит в диапазон генерации
// randomiser(0, 5) генерирует случайные целые числа от 0 до 4!

const randomiser = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default randomiser;
