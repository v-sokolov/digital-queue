import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { Input } from '@nextui-org/react';
import { FieldValues } from 'react-hook-form/dist/types';

export const PasswordController = <T extends FieldValues>(
  props: UseControllerProps<T> & { label: string }
): JSX.Element => {
  const { label, control, name, defaultValue } = props;

  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    name,
    defaultValue
  });

  return <Input.Password label={label} status={error != null ? 'error' : 'default'} {...field} />;
};
