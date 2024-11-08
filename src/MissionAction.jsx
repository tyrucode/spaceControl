import React from "react";

const MissionAction = ({ currentStatus, onStatusChange }) => {
    return (
        <div className="mission-action">
            <button
                //when clicked statuses are changed to the corresponding button
                onClick={() => onStatusChange("Launch")}
                //greys out or 'disables' button when it is clicked
                disabled={currentStatus === "Launch"}>
                Launch
            </button>
            <button
                onClick={() => onStatusChange("Complete")}
                disabled={currentStatus === "Complete"}>
                Complete
            </button>
        </div>
    );
}

export default MissionAction;