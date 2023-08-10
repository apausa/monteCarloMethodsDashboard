import { ExecCmd } from '@/types/dashboard';

export const EXEC_CMD: ExecCmd = {
  name: '/cvmfs/alice.cern.ch/containers/bin/apptainer/current/bin/apptainer',
  args: [
    'exec',
    '-C',
    '-B',
    '/cvmfs:/cvmfs,/tmp:/tmp,/home/papausac/work:/home/papausac/work',
    '--pwd',
    '/home/papausac/work',
    '/cvmfs/alice.cern.ch/containers/fs/singularity/rel8-alice-20220503',
    '/bin/bash',
    '-c'],
};

export const ALIENV_CMD = {
  name: '/cvmfs/alice.cern.ch/bin/alienv',
  args: [
    { name: 'enter', value: 'O2sim/v20230703-1' },
  ],
};

export const submitCmd = {
  name: './grid_submit.sh',
  args: [
    { name: '--script', value: null },
    { name: '--ttl', value: '10' },
    { name: 'wait', value: null },
  ],
};
