import { Simulation, SimulationActionCreators } from '@/_private/types/components/simulationTypes';
import { getAllSimulations } from '@/_private/utils/localStorage';

const simulationActionCreators: SimulationActionCreators = {
  readAllSimulations: (dispatch) => {
    const simulations: Simulation[] | [] = getAllSimulations();

    dispatch({ type: 'READ_ALL_SIMULATIONS', simulations });
  },

  createSimulation: async (dispatch, form) => {
    const response: Response = await fetch(
      '/api/simulation',
      { method: 'POST', body: JSON.stringify(form) },
    );
    const simulation: Simulation | null = await response.json();

    if (simulation) dispatch({ type: 'CREATE_SIMULATION', simulation });
  },

  updateSimulationScriptStatus: (dispatch, simulation, script, status) => {
    const unresolvedSimulation: Simulation = {
      ...simulation,
      scripts: {
        ...simulation.scripts,
        [script]: { ...simulation.scripts[script], scriptStatus: status },
      },
    };

    dispatch({ type: 'UPDATE_SIMULATION', simulation: unresolvedSimulation });
  },

  runSimulationScript: async (dispatch, simulation, route) => {
    const unresolvedSimulation: Response = await fetch(
      route,
      { method: 'PUT', body: JSON.stringify(simulation) },
    );
    const resolvedSimulation: Simulation = await unresolvedSimulation.json();

    dispatch({ type: 'UPDATE_SIMULATION', simulation: resolvedSimulation });
  },
};

export default simulationActionCreators;
