import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import AddItem from "../screens/AddItem";
import UpdateItem from "../screens/UpdateItem";
import OrderScreen from "../screens/OrderScreen";
import SideBar from "../components/SideBar";
import { Feather } from "@expo/vector-icons";
import { Provider } from "../Context/AmzContext";

const Drawer = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        animationEnabled: false,
        headerShown: false,
        title: "Home",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      },
    },
    AddItem: {
      screen: AddItem,
      navigationOptions: {
        animationEnabled: false,
        headerShown: false,
        drawerLabel: () => null,
      },
    },
    UpdateItem: {
      screen: UpdateItem,
      navigationOptions: {
        animationEnabled: false,
        headerShown: false,
        drawerLabel: () => null,
      },
    },
    OrderScreen: {
      headerShown: false,
      screen: OrderScreen,
      navigationOptions: {
        animationEnabled: false,
        headerShown: false,
        title: "Orders",
        drawerIcon: ({ tintColor }) => (
          <Feather name="shopping-cart" size={16} color={tintColor} />
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

// const DrawerNavigator = createDrawerNavigator(
//   {
//     MainScreen: {
//       screen: StackNavigator,
//     },
//   },
//   {
//     contentComponent: (props) => <SideBar {...props} />,
//     contentOptions: {
//       activeBackgroundColor: null,
//       activeTintColor: "#ffa502",
//       itemsContainerStyle: {
//         marginTop: 15,
//       },
//     },
//   }
// );

const App = createAppContainer(Drawer);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
