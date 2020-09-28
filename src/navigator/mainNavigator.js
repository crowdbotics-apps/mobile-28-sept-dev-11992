import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen811288Navigator from '../features/BlankScreen811288/navigator';
import BlankScreen711287Navigator from '../features/BlankScreen711287/navigator';
import BlankScreen611286Navigator from '../features/BlankScreen611286/navigator';
import BlankScreen511278Navigator from '../features/BlankScreen511278/navigator';
import BlankScreen411273Navigator from '../features/BlankScreen411273/navigator';
import BlankScreen311271Navigator from '../features/BlankScreen311271/navigator';
import BlankScreen011270Navigator from '../features/BlankScreen011270/navigator';
import BlankScreen211269Navigator from '../features/BlankScreen211269/navigator';
import BlankScreen111268Navigator from '../features/BlankScreen111268/navigator';
import BlankScreen211267Navigator from '../features/BlankScreen211267/navigator';
import BlankScreen011265Navigator from '../features/BlankScreen011265/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen811288: { screen: BlankScreen811288Navigator },
BlankScreen711287: { screen: BlankScreen711287Navigator },
BlankScreen611286: { screen: BlankScreen611286Navigator },
BlankScreen511278: { screen: BlankScreen511278Navigator },
BlankScreen411273: { screen: BlankScreen411273Navigator },
BlankScreen311271: { screen: BlankScreen311271Navigator },
BlankScreen011270: { screen: BlankScreen011270Navigator },
BlankScreen211269: { screen: BlankScreen211269Navigator },
BlankScreen111268: { screen: BlankScreen111268Navigator },
BlankScreen211267: { screen: BlankScreen211267Navigator },
BlankScreen011265: { screen: BlankScreen011265Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
