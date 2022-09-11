import {
  Button,
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const [accessToken, setAccessToken] = useState();
//   const [userInfo, setUserInfo] = useState();
//   const [request, response, promptAsync] = Google.useAuthRequest({
//   expoClientId:
//     "900205272924-j29gmd1gjnmdg8lv5ikeje6ut27t4r4h.apps.googleusercontent.com",
//   androidClientId:
//     "900205272924-e8gjn824f1ink10u8at5tg1uobo4fpr0.apps.googleusercontent.com",
//   iosClientId:
//     "900205272924-tapnfob3illdi6pgdd07rsm5qerd47j8.apps.googleusercontent.com",
//   webClientId:
//     "900205272924-apklg2ijsiuts5bnmq3919ofh7fu6c6c.apps.googleusercontent.com",
// });
//   useEffect(() => {
//     if (response?.type === "success") {
//       setAccessToken(response.authentication.accessToken);
//     }
//   }, [response]);
//   async function getUserData() {
//     let userInfoResponse = await fetch(
//       "https://www.googleapis.com/userinfo/v2/me",
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );

//     userInfoResponse.json().then((data) => {
//       setUserInfo(data);
//     });
//   }

//   function showUserInfo() {
//     if (userInfo) {
//       return (
//         <View>
//           <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
//           <Text>Welcome {userInfo.name}</Text>
//           <Text>{userInfo.email}</Text>
//         </View>
//       );
//     }
//   }

//   useEffect(() => {
//     if (response?.type === "success") {
//       setAccessToken(response.authentication.accessToken);
//     }
//   }, [response]);

//   async function getUserData() {
//     let userInfoResponse = await fetch(
//       "https://www.googleapis.com/userinfo/v2/me",
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );

//     userInfoResponse.json().then((data) => {
//       setUserInfo(data);
//     });
//   }

//   function showUserInfo() {
//     if (userInfo) {
//       return (
//         <View style={styles.userInfo}>
//           <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
//           <Text>Welcome {userInfo.name}</Text>
//           <Text>{userInfo.email}</Text>
//         </View>
//       );
//     }
//   }

//   return (
//     <View style={styles.container}>
//       {showUserInfo()}
//       <Button
//         title={accessToken ? "Get User Data" : "Login"}
//         onPress={
//           accessToken
//             ? getUserData
//             : () => {
//                 promptAsync({ useProxy: false, showInRecents: true });
//               }
//         }
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   userInfo: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   profilePic: {
//     width: 50,
//     height: 50,
//   },
// });
export default function App() {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [message, setMessage] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "900205272924-j29gmd1gjnmdg8lv5ikeje6ut27t4r4h.apps.googleusercontent.com",
    androidClientId:
      "900205272924-e8gjn824f1ink10u8at5tg1uobo4fpr0.apps.googleusercontent.com",
    iosClientId:
      "900205272924-tapnfob3illdi6pgdd07rsm5qerd47j8.apps.googleusercontent.com",
    webClientId:
      "900205272924-apklg2ijsiuts5bnmq3919ofh7fu6c6c.apps.googleusercontent.com",
  });
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {showUserInfo()}
      <Button
        title={accessToken ? "Get User Data" : "Login"}
        onPress={
          accessToken
            ? getUserData
            : () => {
                promptAsync({ useProxy: false, showInRecents: true });
              }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
  },
});
