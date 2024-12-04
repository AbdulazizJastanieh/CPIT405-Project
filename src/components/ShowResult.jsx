import React from "react";

const ShowResult = ({ payload }) => {
    return (
        <div
            id="ShowResult"
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "50px", // Increased spacing between components
                padding: "40px", // Added padding around the container
            }}
        >
            {payload.map((song) => (
                <div
                    key={song.trackId}
                    style={{
                        width: "400px", // Larger card width
                        padding: "30px", // Increased padding inside each card
                        border: "1px solid #ccc",
                        borderRadius: "15px", // Softer rounded corners
                        backgroundColor: "#f9f9f9",
                        textAlign: "center",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Stronger shadow
                        transition: "transform 0.2s", // Smooth scaling on hover
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    <a
                        href={song.trackViewUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "#333", // Darker text color for better contrast
                        }}
                    >
                        <img
                            src={song.artworkUrl100}
                            alt={`${song.trackName} Album Art`}
                            style={{
                                width: "100%", // Image spans the card width
                                height: "auto",
                                borderRadius: "12px", // Rounded image corners
                                marginBottom: "20px", // Space below image
                            }}
                        />
                        <h2
                            style={{
                                fontSize: "1.8rem", // Larger font size for the title
                                margin: "15px 0",
                            }}
                        >
                            {song.trackName}
                        </h2>
                        <p
                            style={{
                                margin: "10px 0",
                                fontSize: "1.2rem", // Larger text for artist and album
                                color: "#555",
                            }}
                        >
                            <strong>Artist:</strong> {song.artistName}
                        </p>
                        <p
                            style={{
                                margin: "10px 0",
                                fontSize: "1.2rem",
                                color: "#555",
                            }}
                        >
                            <strong>Album:</strong> {song.collectionName}
                        </p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ShowResult;
