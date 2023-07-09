import React, { useState } from 'react';
import '../styles/Search.scss';
import data from '../profiles.json';

const Search = () => {
    const [searchedResult, setSearchedResult] = useState(data);

    function handleOnChange(e) {
    
        let targetValue = e.target.value.toLowerCase()
        const result = data.filter((ele) =>ele.skill.toLowerCase().includes(targetValue))
        const arr = []
        arr.push(result)

         console.log(arr[0])
        setSearchedResult(arr[0])

    }

    return (
        <>
        <div className='search-box'>
            <input type="text" placeholder='Search for Jobs' onChange={(e) => handleOnChange(e)} />
            <div>
                {
                    searchedResult.map((e) => {
                        console.log(e)
                        return (
                            <div className='box'>
                                <h4 >{e?.name}</h4>
                                <h4>{e?.age}</h4>
                                <h4 className='skills'>{e?.skill}</h4>
                            </div>

                        )
                    })
                }
            </div>
        </div>
        <div className='white-box'></div>
        </>
    )
}

export default Search