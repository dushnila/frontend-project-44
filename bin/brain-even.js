import readlineSync from 'readline-sync';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default (name) => {
  let numberOfrounds = 3;
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(task);
  while (numberOfrounds > 0) {
    const randomNumber = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (answer === isEven(randomNumber)) {
      console.log('Correct!');
      numberOfrounds -= 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(randomNumber)}".
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
