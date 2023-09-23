import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Main = () => {
    /*USESTATES*/
  const [main, setmain] = useState(false);
  const [flashlight, setflashlight] = useState(false);
  const [counter, setcounter] = useState(false);
  const [back, setBack] = useState(false);
  const tomain = () => {
    /*TOGGLE BCK BTTN*/
    main ? setmain(false) : setmain(true);
    flashlight ? setflashlight(false) : setflashlight(false);
    counter ? setcounter(false) : setcounter(false);
    back ? setBack(false) : setBack(false);
  };
  const toflashlight = () => {
    /*TOGGLE FL BTTN*/
    flashlight ? setflashlight(false) : setflashlight(true);
    counter ? setcounter(false) : setcounter(false);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };
  const tocounter = () => {
    /*TOGGLE COUNTER BTTN*/
    flashlight ? setflashlight(false) : setflashlight(false);
    counter ? setcounter(false) : setcounter(true);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };

  return (
    /*main view*/
    <View style={styles.mainView}>
      <View style={styles.buttons}>
        <Button title="FLASHLIGHT" disabled={main} onPress={toflashlight} />
        <Button title="COUNTER" disabled={main} onPress={tocounter} />
      </View>
      <View style={styles.body}>
        {flashlight && <FlashLight />}

        {counter && <Counter />}
      </View>
      <View style={styles.btn}>
        {back && <Button title="BACK" onPress={tomain} />}
      </View>
    </View>
  );
};
/*FL conditions*/
const FlashLight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    image ? setimage(false) : setimage(true);
    if (text === 'ON') {
      setText('OFF');
    } else {
      setText('ON');
    }
  };

  return (
    <View>
      {image &&  <Image
            source={require("./image/on.png")}
            style={{ width: 150, height: 250, resizeMode: "stretch" , marginVertical: 20}}
          />
          }
        {!image &&  <Image
            source={require("./image/off.png")}
            style={{ width: 150, height: 250, resizeMode: "stretch" ,  marginVertical: 20}}
          />
          }
     <Button title= {text} onPress={toImage} />
    </View>
  );
};
/*Counter conditions*/
const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.main}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.Mainbttn}>
        <Button
          title="-1"
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1"
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttons: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    paddingVertical: 20,
  },
  mainView: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 100,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  Mainbttn: {
    flexDirection: "row",
    gap: 20,
  },
  btn: {
    width: 100,
    paddingVertical: 20
  },
});