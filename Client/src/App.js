import React, {useState} from 'react';
import {HubConnectionBuilder} from '@microsoft/signalr';
import RandomNumberDisplay from './RandomNumberDisplay';
import UpdateButton from './UpdateButton';

const connection = new HubConnectionBuilder().withUrl('/RandomHub').build()
connection.start();

export default function App() {
    const [showRandomNumber, setShowRandomNumber] = useState(true);

    function handleRandomNumberToggle() {
        setShowRandomNumber((showRandomNumber) => !showRandomNumber);
    }

    return (
        <>
            {showRandomNumber && <RandomNumberDisplay connection={connection} />}
            <UpdateButton connection={connection} />
            <button onClick={handleRandomNumberToggle}>Toggle random number</button>
        </>
    );
}
