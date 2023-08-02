'use client';

import React, { SyntheticEvent } from 'react';

import { FormOtherAction, FormRadioProps } from '@/types/build';

export default function FormRadio({ arg, dispatch }: FormRadioProps) {
  const handleChange = (event: SyntheticEvent): void => {
    const action: FormOtherAction = { type: 'UPDATE_FORM_OTHER', event };

    dispatch(action);
  };

  return (
    <>
      {arg.input.options.map((option: string) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={arg.name}
            onChange={handleChange}
            value={option}
            // Custom
            defaultChecked
            disabled={!arg.isChecked}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
}
