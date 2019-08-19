import React from 'react';

export default class FuzzBuss extends React.Component {
  createTable = () => {
    const table = [];
    for (let i = 1; i <= 100; i++) {
      table.push(
        <tr>
          <td>{i}</td>
          <td>{this.createWort(i)}</td>
        </tr>
      );
    }
    return table;
  };

  createWort = i => {
    let answer = '';
    if (i % 3 === 0) {
      answer += 'Fizz';
    }
    if (i % 5 === 0) {
      answer += 'Buzz';
    }
    return answer;
  };

  render() {
    return (
      <>
        <h1>This is the FizzBuzz</h1>
        <div>
          <p>
            Create the numbers 1 to 100. If the number is divided by 3, write
            Fizz, if it\'s divided by 5 write Buzz.
          </p>
        </div>
        <table>{this.createTable()}</table>
      </>
    );
  }
}
