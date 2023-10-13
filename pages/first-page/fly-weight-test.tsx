import React, { Component } from 'react';

const sharedLetters: { [key: string]: JSX.Element } = {};

interface LetterProps {
    letter: string;
}

class Letter extends Component<LetterProps> {
    constructor(props: LetterProps) {
        super(props);
    }

    public getSharedLetter(letter: string) {
        if (!sharedLetters[letter]) {
            sharedLetters[letter] = this.createLetter(letter);
        }

        return sharedLetters[letter];
    }

    public createLetter(letter: string) {
        console.log(`Creating a new letter object for "${letter}"`);

        return (
            <div key={letter} style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>
                {letter}
            </div>
        );
    }

    render() {
        const letterElement = this.getSharedLetter(this.props.letter);

        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {letterElement}
            </div>
        );
    }
}

class LettersPage extends Component {
    render() {
        const letters = ['A', 'B', 'A', 'C', 'B', 'A'];

        return (
            <div>
                <h1>List of Letters</h1>
                <div style={{ display: 'flex' }}>
                    {letters.map((letter, index) => (
                        <Letter key={index} letter={letter} />
                    ))}
                </div>
            </div>
        );
    }
}

export default LettersPage;
