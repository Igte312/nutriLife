import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSUbmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={onSUbmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar receta"
                value={inputValue}
                onChange={ onInputChange }

            />
        </form>
    )
}
