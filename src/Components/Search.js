import React, {useState, useEffect} from "react";

const Search=()=>{

    const [term,changeTerm]=useState('');

    useEffect(()=>{
        console.log('I Run after every render and at initial render');
    },[term])

    const handleChange=e=>{
        changeTerm(e.target.value);
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input type="text" onChange={handleChange}/>
                </div>
            </div>
        </div>
    );
};

export default Search;