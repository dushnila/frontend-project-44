// Максимальное число не входит в диапазон генерации
// randomiser(0, 5) генерирует случайные целые числа от 0 до 4!

const randomiser = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const makeMathRow = (firstValue, ratio, rowLength) => {
  const arr = [];
  let accum = firstValue;
  for (let i = 0; i < rowLength; i += 1) {
    accum += ratio;
    arr.push(accum);
  }
  return arr;
};

export default randomiser;
