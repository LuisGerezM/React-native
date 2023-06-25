import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actionsButtons} from 'src/schemas/actionsButtons.schema';

export const SeeBalanceMovement = () => {
  const balance = useSelector(state => state.balance.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Toolkit - Persist</Text>
      <View style={{marginVertical: 40}}>
        {actionsButtons.map((button, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              dispatch(button.onPress);
            }}
            style={[styles.appButtonContainer, styles[button.buttonStyles]]}>
            <Text style={styles.appButtonText}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20}}>Saldo actual: {balance}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  add: {
    backgroundColor: '#215db8',
  },
  btnWithdraw: {
    backgroundColor: '#960000',
    marginTop: 15,
    marginBottom: 15,
  },
  reset: {
    backgroundColor: '#dbd806',
  },
});
