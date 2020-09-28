import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
