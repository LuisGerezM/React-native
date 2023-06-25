import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from 'src/hooks/useCustomizeReduxHooks';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from 'src/redux/states/counter.slice';

interface ButtonsDetails {
  name: string;
  text: string;
  color: string;
  backgroundColor: string;
}

const buttons: ButtonsDetails[] = [
  {
    name: 'increment',
    text: 'Incrementar',
    backgroundColor: 'blue',
    color: 'white',
  },
  {
    name: 'decrement',
    text: 'Decrementar',
    backgroundColor: 'green',
    color: 'white',
  },
  {
    name: 'incrementByAmount',
    text: 'Incrementar por 10',
    backgroundColor: 'yellow',
    color: 'black',
  },
  {
    name: 'reset',
    text: 'Resetear',
    backgroundColor: 'red',
    color: 'white',
  },
];

interface ActionDispatch {
  [key: string]: any;
}

const actionDispatch: ActionDispatch = {
  increment: () => increment(),
  decrement: () => decrement(),
  incrementByAmount: () => incrementByAmount(10),
  reset: () => reset(),
};

export const ButtonRedux = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClickButton = (type: string) => {
    dispatch(actionDispatch[type]());
  };

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      }}>
      {buttons.map(({name, color, text, backgroundColor}: ButtonsDetails) => (
        <TouchableOpacity
          key={name}
          style={{
            backgroundColor,
            padding: 10,
            borderRadius: 5,
            margin: 10,
            width: '80%',
          }}
          onPress={() => handleClickButton(name)}>
          <Text
            style={{
              color,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
