import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (task, makeRound) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let i = 0; i < roundsCount; i += 1) {
    const [generateQuestion, realAnswer] = makeRound();
    const answer = readlineSync.question(`Question: ${generateQuestion}\nYour answer: `);
    if (answer === realAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${realAnswer}".
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
