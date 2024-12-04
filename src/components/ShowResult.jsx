import React from "react";

const ShowResult = ({ payload }) => {
    return (
        <div id="ShowResult">
            {payload?.map((song) => (
                <div key={song.trackId} style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}>
                    <a href={song.trackViewUrl} target="_blank" rel="noreferrer">
                        <h2>{song.trackName}</h2> {/* Song title */}
                    </a>
                    <h3>Artist: {song.artistName}</h3> {/* Artist name */}
                    <p>Album: {song.collectionName}</p> {/* Album name */}
                    <img 
                        src={song.artworkUrl100} 
                        alt={`${song.trackName} Album Art`} 
                        style={{ width: "100px", height: "100px", borderRadius: "8px" }} 
                    />
                </div>
            ))}
        </div>
    );
};

export default ShowResult;
