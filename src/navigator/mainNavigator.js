import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile63263Navigator from '../features/UserProfile63263/navigator';
import Tutorial63262Navigator from '../features/Tutorial63262/navigator';
import NotificationList63234Navigator from '../features/NotificationList63234/navigator';
import Settings63233Navigator from '../features/Settings63233/navigator';
import Settings63225Navigator from '../features/Settings63225/navigator';
import UserProfile63223Navigator from '../features/UserProfile63223/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile63263: { screen: UserProfile63263Navigator },
Tutorial63262: { screen: Tutorial63262Navigator },
NotificationList63234: { screen: NotificationList63234Navigator },
Settings63233: { screen: Settings63233Navigator },
Settings63225: { screen: Settings63225Navigator },
UserProfile63223: { screen: UserProfile63223Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
