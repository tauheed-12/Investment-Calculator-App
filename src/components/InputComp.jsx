import React from 'react';

export default function InputComp({ name, label, onSetDetails }) {
    function handleChange(event) {
        const { name, value } = event.target;
        onSetDetails(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    return (
        <div>
            <label>{label}</label>
            <input
                type="number"
                required
                onChange={handleChange}
                name={name}
            />
        </div>
    );
}
