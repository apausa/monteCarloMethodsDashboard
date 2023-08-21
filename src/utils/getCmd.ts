import { CmdObj } from '@/types/build';
import { ProdAlienvCmd } from '@/types/metadata';

export const getCmdStr = ({ name, args }: CmdObj): string => (
  [name, ...args.reduce((acc: (string | number)[], val: any): (string | number)[] => (
    acc.concat(val.selected ? [val.name, val.value] : [])), [])]).join(' ');

export const getProdAlienvCmd = (version: string): ProdAlienvCmd => ({
  name: '/cvmfs/alice.cern.ch/bin/alienv',
  args: ['enter', `O2sim/${version}`],
});

export const getProdExecCmd = (scriptPath: string): string => [
  '/home/papausac/work/grid_submit.sh', '--script', scriptPath, '--wait', '--fetch-output-files',
].join(' ');
