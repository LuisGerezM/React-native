import {deposit, reset, withdraw} from 'src/redux/states/balanceSlice';

interface ActionsButtons {
  text: string;
  buttonStyles: string;
  [key: string]: any;
}

export const actionsButtons: ActionsButtons[] = [
  {text: 'Depositar $10', buttonStyles: 'add', onPress: deposit(10)},
  {
    text: 'Retirar 10$',
    buttonStyles: 'btnWithdraw',
    onPress: withdraw(10),
  },
  {
    text: 'Retirar Todo',
    buttonStyles: 'reset',
    onPress: reset(0),
  },
];
