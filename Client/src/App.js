import React, {useEffect, useState} from 'react';
import {HubConnectionBuilder} from '@microsoft/signalr';
import RandomNumberDisplay from './RandomNumberDisplay';
import UpdateButton from './UpdateButton';

export default function App() {
	const [connection, setConnection] = useState();
    const [showRandomNumber, setShowRandomNumber] = useState(true);

	useEffect(function() {
		const connection = new HubConnectionBuilder().withUrl('/RandomHub').build();

		(async function() {
			await connection.start();
			setConnection(connection);
		})();

		return () => connection.stop();
	}, []);

    function handleRandomNumberToggle() {
        setShowRandomNumber((showRandomNumber) => !showRandomNumber);
    }

	if (!connection) {
		return <p>Establish connection...</p>;
	}

    return (
        <>
            {showRandomNumber && <RandomNumberDisplay connection={connection} />}
            <UpdateButton connection={connection} />
            <button onClick={handleRandomNumberToggle}>Toggle random number</button>
        </>
    );
}
