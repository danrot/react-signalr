import React, {useEffect, useState} from 'react';
import {HubConnectionBuilder} from '@microsoft/signalr';

const connection = new HubConnectionBuilder().withUrl('/RandomHub').build()
connection.start();

export default function App() {
    const [randomNumber, setRandomNumber] = useState();

    useEffect(function() {
        connection.on('ReceiveNumber', function(number) {
            setRandomNumber(number);
        });

        return function() {
            connection.off('ReceiveNumber');
        }
    }, []);

    function handleClick() {
        connection.invoke('GenerateNumber');
    }

    return (
        <>
            <p>Random number: {randomNumber}</p>
            <button onClick={handleClick}>Update random number</button>
        </>
    );
}
