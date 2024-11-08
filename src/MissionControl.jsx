import React from "react";
import { useState } from 'react';
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import MissionCard from "./MissionCard"


const MissionControl = ({ missions }) => {
    const [missionState, setMissionState] = useState(missions);
    const [statusFilter, setStatusFilter] = useState("All")

    //this happens when MissionAction changes the status
    function handleStatusChange(missionId, newStatus) {
        //takes the previous state and maps through each mission
        setMissionState(prevMissions =>
            //iterates over missionState array
            prevMissions.map(mission =>
                //if current mission matches mission ID it makes new object with same details but updates status, if not then it stays the same
                mission.id === missionId ? { ...mission, status: newStatus } : mission
            )
        )
    }

    //updates setStatusFilter when new filter is selected on MissionFilter
    function handleFilterChange(newFilter) {
        setStatusFilter(newFilter)
    }

    //stores filtered missions depending on current statusFilter
    //filters mission by iterating MissionState
    const filteredMissions = missionState.filter(mission =>
        //if filter is set to All then every mission is true to show the missions
        //if it doesnt match then it checks if the status matches the filter and only shows the matching statuses
        statusFilter === 'All' ? true : mission.status === statusFilter
    );

    return (
        <>
            <MissionFilter onFilterChange={handleFilterChange} />
            {filteredMissions.map(mission => (
                <div key={mission.id}>
                    <MissionCard name={mission.name} status={mission.status} crew={mission.crew} />

                    <MissionAction
                        currentStatus={mission.status}
                        onStatusChange={newStatus => handleStatusChange(mission.id, newStatus)}
                    />
                </div>
            ))}
        </>
    );
};

export default MissionControl