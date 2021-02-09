import React, {useCallback, useEffect, useMemo} from 'react';
import {set, get, has, includes, isArray} from 'lodash';
import {Field as Ffield} from 'react-final-form';
import {CheckBox} from 'react-native-elements';

/**
 * Primitive Component that extends forms
 * @type React Component
 */
const FormField = ({
  formComponent,
  meta,
  input,
  onChange: onChangeExternal,
  checkValue,
  id,
  ...props
}) => {
  const Component = formComponent;
  const isCheckbox = useMemo(() => Component == CheckBox, [Component]);
  const errorMessage =
    meta.touched || meta.submitFailed ? get(meta, 'error[0]') : '';

  const changeMiddleware = useCallback(
    (event, data) => {
      if (data) {
        if (isCheckbox) {
          set(event, 'target.type', 'checkbox');
          set(event, 'target.checked', data.checked);
        }
        if (!has(event, 'target.value') || !has(event, 'target.name')) {
          set(event, 'target.name', data.name);
          set(event, 'target.value', data.value);
          set(event, 'target.type', data.type);
        }
      }

      input.onChange(event, data);
    },
    [isCheckbox],
  );

  if (onChangeExternal) {
    useEffect(() => {
      onChangeExternal(input);
    }, [input.value, input.checked]);
  }

  const {value} = input;
  const checked = useMemo(
    () => (isArray(value) ? includes(value, checkValue) : value),
    [value],
  );
  const inputProps = useMemo(
    () => ({
      ...props,
      ...input,
      value: !isCheckbox ? value : undefined,
      checked: isCheckbox ? checked : undefined,
      errorMessage,
      onChange: changeMiddleware,
    }),
    [isCheckbox, input, props, errorMessage],
  );

  return <Component {...inputProps} id={id} />;
};
export const Field = ({
  defaultValue,
  component,
  value,
  name,
  parse,
  format,
  id,
  ...props
}) => {
  return (
    <Ffield
      value={value}
      defaultValue={defaultValue}
      name={name}
      parse={parse}
      format={format}
      render={fieldProps => (
        <FormField
          formComponent={component}
          {...fieldProps}
          checkValue={value}
          {...props}
          id={id}
        />
      )}
    />
  );
};

export default Field;
