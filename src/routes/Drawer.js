import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import AddItem from "../screens/AddItem";
import UpdateItem from "../screens/UpdateItem";
import OrderScreen from "../screens/OrderScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SideBar from "../components/SideBar";
import { Feather } from "@expo/vector-icons";
import { Provider } from "../Context/AmzContext";

const AppStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      // animationEnabled: false,
      headerShown: false,
    },
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  AddItem: {
    screen: AddItem,
    navigationOptions: {
      headerShown: false,
    },
  },
  UpdateItem: {
    screen: UpdateItem,
    navigationOptions: {
      headerShown: false,
    },
  },
  OrderScreen: {
    screen: OrderScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: AppStack,
      navigationOptions: {
        title: "Home",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      },
    },
    AddItem: {
      screen: AddItem,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    UpdateItem: {
      screen: UpdateItem,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    Logout: {
      screen: OrderScreen,
      navigationOptions: {
        title: "Log Out",
        drawerIcon: ({ tintColor }) => (
          <Feather name="power" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    contentOptions: {
      activeBackgroundColor: null,
      activeTintColor: "#ffa502",
      itemsContainerStyle: {
        marginTop: 15,
      },
    },
  }
);

const App = createAppContainer(DrawerNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
