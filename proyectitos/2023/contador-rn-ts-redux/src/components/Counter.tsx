import * as React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from 'src/hooks/useCustomizeReduxHooks';

const Counter = (): JSX.Element => {
  const {value} = useAppSelector(state => state.counter);

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Contador</Text>
      <Text style={{fontSize: 62, color: 'green', fontWeight: 'bold'}}>
        {value}
      </Text>
    </View>
  );
};
export default Counter;
