import askAndHello from './cli.js';

const genericLogic = (task, game) => {
  const name = askAndHello();
  let numberOfquestions = 3;
  console.log(task);
  while (numberOfquestions > 0) {
    const [answer, realAnswer] = game();
    if (answer === realAnswer) {
      console.log('Correct!');
      numberOfquestions -= 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${realAnswer}".
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default genericLogic;
