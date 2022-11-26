import React from "react";
import { ChangeEvent } from "react"


interface InputSelectProps {
    label: string;
    name: string;
    id: string;
    options: string[];
    value: string,
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect = ({label, name, value, id, options, handleChange}: InputSelectProps) => {
    return (

        <div className="input-select-container">
            <div className="input-select">
                <label htmlFor={id}>{label}:</label>
                <select name={name} id={id} value={value} onChange={handleChange}>
                    {
                        options.map((option, index) => <option key={index} value={option}>{option}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default InputSelect;