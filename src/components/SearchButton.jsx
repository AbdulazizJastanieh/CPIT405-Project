import React from "react";
import ShowResult from "./ShowResult";
import { useState } from "react";

const SearchButton = ({ userInput }) => {
    const [payload, setPayload] = useState([]);
    const handleAPI = async () => {
        const apiURL = "https://itunes.apple.com/search?term="; // iTunes API endpoint
        try {
            const response = await fetch(apiURL + encodeURIComponent(userInput) + "&limit=44&media=music");
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            const data = await response.json();
            setPayload(data.results || []); // 'results' contains the song data
        } catch (error) {
            console.error("Failed to fetch songs:", error);
            setPayload([]);
        }
    };

    return (
        <div id="SearchButton">
            <button id="SubmitSearch" onClick={handleAPI}>Search</button>
            <ShowResult payload={payload} />
        </div>
    );
};

export default SearchButton;
