import React from "react";
import { useState } from "react";
import SearchButton from "./SearchButton";
const Search = ()=>{
    const [userInput,setUserInput]= useState("")
    return(
        <div id="Search">
            <input type="text" name="" id="" placeholder="eg. beef"onChange={(e)=>setUserInput(e.target.value)} />
            <SearchButton userInput={userInput}/>
        </div>
    )
}

export default Search