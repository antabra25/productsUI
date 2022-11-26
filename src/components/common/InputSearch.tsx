import {useState} from "react";
import {ChangeEvent} from "react";
import {MagnifyingGlass} from "phosphor-react"

const InputSearch = () => {

    const [query, setQuery] = useState<string>('')

    const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)

    }

    return (
        <div className="input-search-container">
            <div className="input-search">
                <input type="text" value={query} onChange={handleChangeQuery}/>
                <div className="search-logo">
                    <MagnifyingGlass size={24} weight="bold"/>
                </div>
            </div>

        </div>
    )

}
export default InputSearch;