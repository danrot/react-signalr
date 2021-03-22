import React from 'react';

export default function UpdateButton({connection}) {
    function handleClick() {
        connection.invoke('GenerateNumber');
    }

    return <button onClick={handleClick}>Update random number</button>;
}
