import createDataContext from "./CreateContext";
import axios from "axios";
import { Alert } from "react-native";
import { AsyncStorage } from "react-native";
import moment from "moment";

const date = moment(new Date()).format("DD/MM/YYYY");

var userId = null;
var username = null;
var email = null;

const AmzReducer = (state, action) => {
  switch (action.type) {
    case "delete_order":
      return state.filter((item) => item.orderNumber !== action.payload);
    case "get_orders":
      return action.payload;
    // case "get_user":
    //   return action.payload;
    case "cred_error":
      return { ...state, errorMessage: action.payload };
    case "add_order": {
      return [
        ...state,
        {
          orderNum: action.payload.orderNumber,
          itemName: action.payload.itemName,
          sellerName: action.payload.sellerName,
          sellerContact: action.payload.sellerContact,
        },
      ];
    }
    default:
      return state;
  }
};

const addOrder = () => {
  return async (order, item, sellerName, sellerContact, callback) => {
    try {
      fetch("http://amzrevs.herokuapp.com/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderNumber: order,
          itemName: item,
          sellerName: sellerName,
          sellerContact: sellerContact,
          orderStatus: "Ordered",
          userId: userId,
          orderDate: date,
        }),
      })
        .then((response) => {
          response.json();
          if (response.status == 200) {
            Alert.alert("Item added successfully");
            callback();
          } else if (response.status == 422) {
            Alert.alert("Please fill all fields");
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
          // return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
          Alert.alert("There was a problem adding the item");
        });
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteOrder = (dispatch) => {
  return async (order) => {
    try {
      await fetch("http://amzrevs.herokuapp.com/deleteproduct", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderNumber: order,
        }),
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "delete_order", payload: order });
  };
};

const getOrder = (dispatch) => {
  return async () => {
    const response = await axios.get(
      "http://amzrevs.herokuapp.com/products/" + userId
    );
    console.log(response.data);
    dispatch({
      type: "get_orders",
      payload: response.data,
    });
  };
};

const getUser = (dispatch) => {
  return async () => {
    const response = await axios.get(
      "http://amzrevs.herokuapp.com/user/" + userId
    );
    username = response.data[0].username;
    email = response.data[0].email;
    // dispatch({
    //   type: "get_user",
    //   payload: response.data,
    // });
    console.log(username + "  " + email);
  };
};

const signIn = (dispatch) => {
  return async (email, password, callback) => {
    try {
      await fetch("http://amzrevs.herokuapp.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          response.json();
          console.log(response.status);
          if (response.status == 200) {
            userId = email;
            callback();
          } else if (response.status >= 400) {
            dispatch({
              type: "cred_error",
              payload: "Invalid Email or Password",
            });
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      dispatch({
        type: "cred_error",
        payload: "Invalid Email or Password",
      });
    }
  };
};

const signUp = (dispatch) => {
  return async (email, username, password, callback) => {
    try {
      await fetch("http://amzrevs.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
      })
        .then((response) => {
          response.json();
          console.log(response.status);
          if (response.status == 200) {
            callback();
          } else if (response.status == 422) {
            Alert.alert("Email or Password incorrect");
          } else if (response.status == 404) {
            Alert.alert("Network Error");
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      await AsyncStorage;
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Invalid Email or Password",
      });
    }
  };
};

// const getOrder = (dispatch) => {
//   return async (data, setData) => {
//     await axios.get("http://192.168.0.34:3000/products").then(({ data }) => {
//       setData(data);
//       console.log(data);
//     });
//   };
// };
export const { Context, Provider } = createDataContext(
  AmzReducer,
  {
    addOrder,
    deleteOrder,
    getOrder,
    signIn,
    signUp,
    getUser,
  },
  { isSignedIn: false, errorMessage: "" },
  []
);

export { username };
export { email };