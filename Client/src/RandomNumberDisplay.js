import React, {useEffect, useState} from 'react';

export default function RandomNumberDisplay({connection}) {
    const [randomNumber, setRandomNumber] = useState();

    useEffect(function() {
        const handleReceiveNumber = function(number) {
            setRandomNumber(number);
        };

        connection.on('ReceiveNumber', handleReceiveNumber);

        return function() {
            connection.off('ReceiveNumber', handleReceiveNumber);
        }
    }, []);

    return <p>Random number: {randomNumber}</p>;
}
