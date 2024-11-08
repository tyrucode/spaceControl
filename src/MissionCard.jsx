import React from "react";

const MissionCard = ({ name, status, crew }) => {

    return (
        <div className="mission-card">
            <h3> Name: {name}</h3 >
            <p>Status: {status}</p>
            <p>Crew: {crew}</p>
        </div>
    )
}
export default MissionCard;