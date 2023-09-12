import { Chip } from '@nextui-org/react';
import React, { Key } from 'react';

// Utils
import { getStatusColor, getStatusName } from '@/_private/utils/getStatus';
import { Simulation } from '@/_private/types/lib/simulationTypes';

export default function CellContent(
  {
    simulation, columnKey,
  }: {
    simulation: Simulation,
    columnKey: Key
  },
) {
  switch (columnKey) {
    case 'Title': return (<div>{simulation.form.title}</div>);
    case 'Number': return (<div>1</div>);
    case 'Local status': return (
      <Chip variant="flat" color={getStatusColor(simulation.scripts.localRunWorkflow.scriptStatus)}>
        {getStatusName(simulation.scripts.localRunWorkflow.scriptStatus)}
      </Chip>
    );
    case 'WLCG status': return (
      <Chip variant="flat" color={getStatusColor(simulation.scripts.gridRunWorkflow.scriptStatus)}>
        {getStatusName(simulation.scripts.gridRunWorkflow.scriptStatus)}
      </Chip>
    );
    case 'Date': return (<div>{simulation.date}</div>);
    default: return null;
  }
}
