import { TextStyle, ViewStyle } from 'react-native';
import { setTheme } from './theme';

export const menuBar: ViewStyle = {
    position:'absolute',
    width: '100%',
    height: '10%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
}
export const menuItem: ViewStyle = {
    position: 'relative',
    minWidth: '20%',
    marginLeft: '5%',
    marginRight: '5%',
    height: '60%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: setTheme.surface,
    borderTopEndRadius: 80,
    borderTopStartRadius: 80,
    borderColor: setTheme.outline,
    borderWidth: 5,
    borderBottomWidth: 0
}
export const menuItemFocused: ViewStyle = {
    position: 'relative',
    minWidth: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: setTheme.surfaceVariant,
    borderTopEndRadius: 80,
    borderTopStartRadius: 80,
    borderColor: setTheme.onSurfaceVariant,
    borderWidth: 9,
    borderBottomWidth: 0
    
}
export const menuItemDisabled: ViewStyle = {
    position: 'relative',
    minWidth: '20%',
    marginLeft: '5%',
    marginRight: '5%',
    height: '60%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: setTheme.surface,
    borderTopEndRadius: 80,
    borderTopStartRadius: 80,
    borderColor: setTheme.surfaceVariant,
    borderWidth:3,
    opacity: 0.3,
    borderBottomWidth: 0
}
export const menuText: TextStyle = {
    color: setTheme.onPrimaryContainer,
    fontWeight: 'normal',
    fontSize: 10,
}
export const menuTextFocused: TextStyle = {
    color: setTheme.onSurfaceVariant,
    fontWeight: 'normal',
    fontSize: 16
}
export const menuTextDisabled: TextStyle = {opacity: 0, height: 0}