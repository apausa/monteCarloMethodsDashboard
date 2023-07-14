'use client';

import React from 'react';
import getSimulation from '@/services/run';

export default async function Build() {
  return (
    <div className="pt-20 pl-4 h-screen border-l-2">
      <h2 className="font-bold">Build</h2>
      <button
        type="button"
        className="button"
        onClick={() => getSimulation()}
      >
        Run simulation

      </button>
    </div>
  );
}