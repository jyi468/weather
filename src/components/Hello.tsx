import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number; // optional number type
    onIncrement?: () => void;
    onDecrement?: () => void;
}


/**
 * Functional component that gives name and exclamation marks depending on enthusiasm level.
 * The function takes in arguments of type Props
 *
 * @param {string} name
 * @param {number} enthusiasmLevel - optional parameter that defaults to 1
 * @returns {any}
 * @constructor
 */

// Container component and redux
function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;

// helpers

/**
 *
 * @param {number} numChars - optional numbe r parameter
 * @returns {string}
 */
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}


