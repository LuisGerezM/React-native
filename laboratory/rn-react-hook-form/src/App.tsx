/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
};

const msgValidation = {
  required: 'El campo es requerido',
};

export const validationFields = {
  firstName: {
    required: {value: true, message: msgValidation.required},
  },
  lastName: {
    required: {value: true, message: msgValidation.required},
  },
};

interface ErrorsValidationForm {
  [key: string]: any;
  errorKey: string;
}

export const ErrorsValidationForm = ({
  errors,
  errorKey,
}: ErrorsValidationForm): JSX.Element => {
  console.log('AQUI ESTOY -->>', errors[errorKey], {errorKey});
  return errors[errorKey] ? (
    <Text style={styles.textError}>{errors[errorKey].message}</Text>
  ) : (
    <></>
  );
};

const App = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (data: FormData) => console.log({data});

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={validationFields.firstName}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        <ErrorsValidationForm errors={errors} errorKey={'firstName'} />
      )}

      {console.log({errors})}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    paddingStart: 10,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    marginTop: 15,
  },
  textError: {
    color: 'red',
    fontWeight: 'bold',
  },
});

