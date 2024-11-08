import React from "react";

const MissionFilter = ({ onFilterChange }) => {

    return (
        <div className="mission-filter">
            {/* when clicked sets button filter to corresponding filter using onFilterChange function */}
            <button onClick={() => onFilterChange("All")}>

                All
            </button>
            <button onClick={() => onFilterChange("Planned")}>
                Planned
            </button>
            <button onClick={() => onFilterChange("Active")}>
                Active
            </button>
            <button onClick={() => onFilterChange("Completed")}>
                Completed
            </button>
        </div>
    )
}

export default MissionFilter