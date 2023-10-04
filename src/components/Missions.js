import React from 'react';
import '../styles/Missions.css';

function Missions() {
  return (
    <>
      <table className="missions">
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th className="button">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {((mission) => (
            <tr
              key={mission.id}
            >
              <td className="td-mission">{mission.name}</td>
              <td className="description td-description">
                {mission.description}
              </td>
              <td className="status" />
              <td className="button" />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Missions;
