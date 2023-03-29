import { createHash } from 'crypto';

class MathShield {
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

  checkAnswer(userAnswer: string, session: string): boolean {
    const hash = createHash('sha256');
    hash.update(userAnswer + session);
    const hashedAnswer = hash.digest('hex');
    if (hashedAnswer === this.answer.toString()) {
      this.callback();
      return true;
    }
    return false;
  }

  getSession(): string {
    return Math.random().toString(36).substring(2);
  }
}

export default MathShield;
