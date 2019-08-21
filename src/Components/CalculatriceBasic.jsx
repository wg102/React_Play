import React from 'react';
import '../style/calculatrice.scss';
// What do I need:
/*
State with 
- First number
- Second number
- Operation


--Basic Operation:
1. Enter a number (0-9)
2. Select operator (+-x/)
3. Enter the secon number (0-9)
4. Press the equal to calculate

How about an component that takes in a function and adds it to the parent state?
How to fix the onClick of every function???
*/

export default class CalculatriceBasic extends React.Component {
    render() {
        const CalcBasic = () => (
            <table className="CalcTable">
                <tr>
                    <td colSpan="4" className="total">
                        0
          </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>+</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>*</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>Clear</td>
                    <td>=</td>
                    <td>/</td>
                </tr>
            </table>
        );
        return (
            <div className="calc">
                <CalcBasic />
            </div>
        );
    }
}
