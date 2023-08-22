/* eslint-disable import/prefer-default-export */

import { TestExecCmd } from '@/types/metadata';

export const testExecCmd: TestExecCmd = {
  name: '/cvmfs/alice.cern.ch/containers/bin/apptainer/current/bin/apptainer',
  args: [
    'exec',
    '-C',
    '-B',
    `/cvmfs:/cvmfs,/tmp:/tmp,${process.env.WORK_PATH}:${process.env.WORK_PATH}`,
    '--pwd',
    `${process.env.WORK_PATH}`,
    '/cvmfs/alice.cern.ch/containers/fs/singularity/rel8-alice-20220503',
    '/bin/bash',
    '-c'],
};
