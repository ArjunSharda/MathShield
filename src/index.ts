class mathshield {
  digits: number;
  callback: () => void;
  problem: string;
  answer: number;

  constructor(digits: number, callback: () => void) {
    this.digits = digits;
    this.callback = callback;
    this.problem = this.generateProblem();
    this.answer = this.calculateAnswer();
  }

  generateProblem(): string {
    const num1 = Math.floor(Math.random() * Math.pow(10, this.digits));
    const num2 = Math.floor(Math.random() * Math.pow(10, this.digits));
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    return `${num1} ${operation} ${num2}`;
  }

  calculateAnswer(): number {
    return eval(this.problem);
  }

  checkAnswer(userAnswer: string): boolean {
    if (parseFloat(userAnswer) === this.answer) {
      this.callback();
      return true;
    }
    return false;
  }
}

export default mathshield;
