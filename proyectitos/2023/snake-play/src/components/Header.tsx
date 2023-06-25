import * as React from 'react';

import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  isGameOver: boolean;
  isPaused: boolean;
  children: JSX.Element;
}

interface Props {
  isPressed: boolean;
}

export default function Header({
  children,
  reloadGame,
  pauseGame,
  isPaused,
  isGameOver,
}: HeaderProps): JSX.Element {
  console.log({isGameOver});
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame}>
        <Ionicons name="md-reload-circle" size={30} />
      </TouchableOpacity>
        <Ionicons
          name={isPaused ? 'md-play-circle' : 'md-pause-circle'}
          size={30}
        />
      </Pressable>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 12,
    borderColor: Colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomWidth: 0,
    padding: 15,
    backgroundColor: Colors.background,
  },
});
