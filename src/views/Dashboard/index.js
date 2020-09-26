import React, { useContext } from 'react';
// Providers
import { StateContext } from '../../providers/stateProvider';
import { ActionContext } from '../../providers/actionProvider';
// Components
import Resource from '../../components/Resource';
// Constants
import { CREW, RESOURCES } from '../../constants';
// Styles
import './styles.css';

export default function Dashboard() {
  const { state, dispatch } = useContext(StateContext);
  const { startTask, endTask, width, delay } = useContext(ActionContext);

  return (
    <div className="dashboard-container">
      <p style={{ color: 'white' }}>{JSON.stringify(state.inventory)}</p>
      <div className="resource-grid">
        {Object.keys(RESOURCES).map((resource) => {
          const active =
            state.task &&
            state.task.crew === CREW.miner.key &&
            state.task.resource === resource;
          return (
            <Resource
              key={resource}
              crew={CREW.miner.key}
              resource={resource}
              xp={RESOURCES[resource].xp}
              onClick={() =>
                active ? endTask() : startTask(CREW.miner.key, resource)
              }
              width={active ? width : undefined}
              delay={active ? delay : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
