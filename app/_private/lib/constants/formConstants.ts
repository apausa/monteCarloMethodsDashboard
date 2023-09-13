/* eslint-disable no-template-curly-in-string */

import { CreateWorkflow, Form, RunWorkflow } from '@/_private/types/lib/formTypes';
import { getCurrentDate } from '@/_private/utils/getDate';

const INITIAL_BUILD_CMD: CreateWorkflow = {
  name: '${O2DPG_ROOT}/MC/bin/o2dpg_sim_workflow.py',
  args: [
    {
      name: '-run',
      input: { type: 'number' },
      description: 'Run number for this MC. See https://twiki.cern.ch/twiki/bin/view/ALICE/O2DPGMCSamplingSchema for possible pre-defined choices.',
      value: 310000,
      selected: true,
      disabled: false,
    },
    {
      name: '-productionTag',
      description: 'Production tag for this MC',
      value: 'alibi_O2DPG_pp_minbias',
      input: { type: 'string', options: ['alibi_O2DPG_pp_minbias'] },
      selected: false,
      disabled: false,
    },
    {
      name: '--timestamp',
      input: { type: 'number' },
      description: 'Anchoring timestamp (defaults to now)',
      value: 1,
      selected: false,
      disabled: false,
    },
    {
      name: '--condition-not-after',
      input: { type: 'number' },
      description: 'only consider CCDB objects not created after this timestamp (for TimeMachine)',
      value: 3385078236000,
      selected: false,
      disabled: false,
    },
    {
      name: '--orbitsPerTF',
      input: { type: 'number' },
      description: 'Timeframe size in number of LHC orbits',
      value: 128,
      selected: false,
      disabled: false,
    },
    {
      name: '--anchor-config',
      description: 'JSON file to contextualise workflow with external configs (config values etc.) for instance comping from data reco workflows.',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '--dump-config',
      description: 'Dump JSON file with all settings used in workflow',
      value: 'user_config.json',
      input: { type: 'string', options: ['user_config.json'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-ns',
      description: 'number of signal events / timeframe',
      value: 25,
      input: { type: 'number' },
      selected: true,
      disabled: false,
    },
    {
      name: '-gen',
      description: 'generator',
      value: 'pythia8',
      input: { type: 'string', options: ['pythia8', 'extgen'] },
      selected: true,
      disabled: false,
    },
    {
      name: '-proc',
      description: 'process type',
      value: '"heavy_ion"',
      input: { type: 'string', options: ['inel', 'dirgamma', 'jets', 'ccbar', 'cdiff', '"heavy_ion"'] },
      selected: true,
      disabled: false,
    },
    {
      name: '-trigger',
      description: 'event selection: particle, external',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-ini',
      description: 'generator init parameters file (full paths required), for example: ${O2DPG_ROOT},/MC/config/PWGHF/ini/GeneratorHF.ini',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-confKey',
      description: 'generator or trigger configuration key values, for example: "GeneratorPythia8.config=pythia8.cfg;A.x=y"',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-interactionRate',
      description: 'Interaction rate, used in digitization',
      value: 500000,
      input: { type: 'number' },
      selected: true,
      disabled: false,
    },
    {
      name: '-bcPatternFile',
      description: 'Bunch crossing pattern file, used in digitization (a file name or "ccdb")',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-meanVertexPerRunTxtFile',
      description: 'Txt file with mean vertex settings per run',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-eCM',
      description: 'CMS energy',
      value: 5020,
      input: { type: 'number' },
      selected: true,
      disabled: false,
    },
    {
      name: '-eA',
      description: 'Beam A energy',
      value: 1,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '-eB',
      description: 'Beam B energy',
      value: 1,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '-col',
      description: 'collision system: in case of embedding collision system of signal',
      value: 'PbPb',
      input: { type: 'string', options: ['pp', 'PbPb', 'pPb', 'Pbp'] },
      selected: true,
      disabled: false,
    },
    {
      name: '-field',
      description: 'L3 field rounded to kGauss, allowed values: +-2,+-5 and 0; +-5U for uniform field; or "ccdb" to take from conditions database',
      value: 'ccdb',
      input: { type: 'string', options: ['ccdb'] },
      selected: false,
      disabled: true,
    },
    {
      name: '--with-qed',
      value: null,
      input: { type: 'boolean' },
      description: 'Enable QED background contribution (for PbPb always included)',
      selected: false,
      disabled: false,
    },
    {
      name: '-ptHatMin',
      description: 'pT hard minimum when no bin requested',
      value: 0,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '-ptHatMax',
      description: 'pT hard maximum when no bin requested',
      value: 1,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '-weightPow',
      description: 'Flatten pT hard spectrum with power',
      value: 1,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '--embedding',
      description: 'With embedding into background',
      value: null,
      input: { type: 'boolean' },
      selected: false,
      disabled: false,
    },
    {
      name: '--embeddPattern',
      description: 'How signal is to be injected into background',
      value: '@0:e1',
      input: { type: 'string', options: ['@0:e1'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-nb',
      description: 'number of background events / timeframe',
      value: 20,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '-genBkg',
      description: 'embedding background generator',
      value: 'pythia8',
      input: { type: 'string', options: ['pythia8'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-procBkg',
      description: 'process type: inel, ..., do not set it for Pythia8 PbPb',
      value: 'heavy_ion',
      input: { type: 'string', options: ['heavy_ion'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-iniBkg',
      description: 'embedding background generator init parameters file (full path required)',
      value: '${O2DPG_ROOT},/MC/config/common/ini/basic.ini',
      input: { type: 'string', options: ['${O2DPG_ROOT},/MC/config/common/ini/basic.ini'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-confKeyBkg',
      description: 'embedding background configuration key values, for example: "GeneratorPythia8.config=pythia8bkg.cfg"',
      value: 'unknown',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-colBkg',
      description: 'embedding background collision system',
      value: 'PbPb',
      input: { type: 'string', options: ['PbPb'] },
      selected: false,
      disabled: true,
    },
    {
      name: '-e',
      description: 'simengine',
      value: 'TGeant4',
      input: { type: 'string', options: ['TGeant4', 'TGeant3'] },
      selected: true,
      disabled: false,
    },
    {
      name: '-tf',
      description: 'number of timeframes',
      value: 1,
      input: { type: 'number' },
      selected: true,
      disabled: false,
    },
    {
      name: '--production-offset',
      description: 'Offset determining bunch-crossing range within a (GRID) production. This number sets first orbit to Offset x Number of TimeFrames x OrbitsPerTimeframe (up for further sophistication)',
      value: 0,
      input: { type: 'number' },
      selected: false,
      disabled: false,
    },
    {
      name: '-j',
      description: 'number of workers (if applicable)',
      value: 8,
      input: { type: 'number' },
      selected: true,
      disabled: false,
    },
    {
      name: '-mod',
      description: 'Active modules (deprecated)',
      value: '--skipModules ZDC',
      input: { type: 'string', options: ['--skipModules ZDC'] },
      selected: false,
      disabled: true,
    },
    {
      name: '--with-ZDC',
      value: null,
      description: 'Enable ZDC in workflow',
      input: { type: 'boolean' },
      selected: false,
      disabled: false,
    },
    {
      name: '-seed',
      description: 'random seed number',
      value: 624,
      input: { type: 'number' },
      selected: true,
      disabled: false,
    },
    {
      name: '-o',
      description: 'output workflow file',
      value: 'workflow.json',
      input: { type: 'string', options: ['workflow.json'] },
      selected: false,
      disabled: true,
    },
    {
      name: '--noIPC',
      description: 'disable shared memory in DPL',
      input: { type: 'string', options: ['unknown'] },
      value: 'unknown',
      selected: false,
      disabled: true,
    },
    {
      name: '--upload-bkg-to',
      description: 'where to upload background event files (alien path)',
      input: { type: 'string', options: ['unknown'] },
      value: 'unknown',
      selected: false,
      disabled: true,
    },
    {
      name: '--use-bkg-from',
      description: 'take background event from given alien path',
      input: { type: 'string', options: ['unknown'] },
      value: 'unknown',
      selected: false,
      disabled: true,
    },
    {
      name: '--early-tf-cleanup',
      value: null,
      description: 'whether to cleanup intermediate artefacts after each timeframe is done',
      input: { type: 'boolean' },
      selected: false,
      disabled: false,
    },
    {
      name: '--pregenCollContext',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--no-combine-smaller-digi',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--no-combine-dpl-devices',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--no-mc-labels',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--no-tpc-digitchunking',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--no-strangeness-tracking',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--combine-tpc-clusterization',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--first-orbit',
      value: 0,
      input: { type: 'number' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--sor',
      value: 1,
      input: { type: 'number' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--run-anchored',
      value: null,
      input: { type: 'boolean' },
      description: 'argparse.SUPPRESS',
      selected: false,
      disabled: false,
    },
    {
      name: '--alternative-reco-software',
      value: 'unknown',
      description: 'argparse.SUPPRESS',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '--dpl-child-driver',
      value: 'unknown',
      description: 'Child driver to use in DPL processes (export mode)',
      input: { type: 'string', options: ['unknown'] },
      selected: false,
      disabled: true,
    },
    {
      name: '--include-qc',
      value: null,
      input: { type: 'boolean' },
      description: 'includes QC in the workflow, both per-tf processing and finalization',
      selected: true,
      disabled: false,
    },
    {
      name: '--include-full-qc',
      value: null,
      input: { type: 'boolean' },
      description: 'includes QC in the workflow, both per-tf processing and finalization',
      selected: false,
      disabled: false,
    },
    {
      name: '--include-local-qc',
      value: null,
      input: { type: 'boolean' },
      description: 'includes the per-tf QC, but skips the finalization (e.g. to allow for subjob merging first)',
      selected: false,
      disabled: false,
    },
    {
      name: '--include-analysis',
      value: null,
      input: { type: 'boolean' },
      description: 'a flag to include O2 analysis in the workflow',
      selected: false,
      disabled: false,
    },
    {
      name: '--mft-reco-full',
      value: null,
      input: { type: 'boolean' },
      description: 'enables complete mft reco instead of simplified misaligned version',
      selected: false,
      disabled: false,
    },
    {
      name: '--mft-assessment-full',
      value: null,
      input: { type: 'boolean' },
      description: 'enables complete assessment of mft reco',
      selected: false,
      disabled: false,
    },
    {
      name: '--fwdmatching-assessment-full',
      value: null,
      input: { type: 'boolean' },
      description: 'enables complete assessment of global forward reco',
      selected: false,
      disabled: false,
    },
    {
      name: '--fwdmatching-4-param',
      value: null,
      input: { type: 'boolean' },
      description: 'excludes q/pt from matching parameters',
      selected: false,
      disabled: false,
    },
    {
      name: '--fwdmatching-cut-4-param',
      value: null,
      input: { type: 'boolean' },
      description: 'apply selection cuts on position and angular parameters',
      selected: false,
      disabled: false,
    },
    {
      name: '--fwdmatching-save-trainingdata',
      value: null,
      input: { type: 'boolean' },
      description: 'enables saving parameters at plane for matching training with machine learning',
      selected: false,
      disabled: false,
    },
  ],
};

const INITIAL_RUN_CMD: RunWorkflow = {
  name: '${O2DPG_ROOT}/MC/bin/o2_dpg_workflow_runner.py',
  args: [
    {
      name: '-tt',
      input: { type: 'string', options: ['aod'] },
      description: null,
      value: 'aod',
      selected: true,
      disabled: false,
    },
    {
      name: '--list-tasks',
      input: { type: 'boolean' },
      description: null,
      value: null,
      selected: true,
      disabled: false,
    },
    {
      name: '-f',
      input: { type: 'string', options: ['workflow.json'] },
      description: null,
      value: 'workflow.json',
      selected: true,
      disabled: false,
    },
    {
      name: '--visualize-workflow',
      input: { type: 'boolean' },
      description: null,
      value: null,
      selected: true,
      disabled: false,
    },
  ],
};

const INITIAL_FORM: Form = {
  title: '',
  version: getCurrentDate(),
  script: '',
  createWorkflow: INITIAL_BUILD_CMD,
  runWorkflow: INITIAL_RUN_CMD,
  advanced: false,
};

export default INITIAL_FORM;
