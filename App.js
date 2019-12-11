import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, ImageEditor } from 'react-native'
import styled from 'styled-components/native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

// decay - initial velocity and slow to a stop
// spring - spring physics model
// timing - animated a value over time

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`

const WelcomeText = styled.Text`
  color: white;
  font-size: 20;
`

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export default class App extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
    image: null,
  }

  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowEditing: true,
      aspect: [2,1]
    }).then((result) => {
      if (result.cancelled) {
        return
      }

      ImageEditor.cropImage(result.uri, {
        offset: { x:0, y:0 },
        size: { width: result.width, height: result.height },
        displaySize: { width: 200, height: 100 },
        resizeMode: 'contain',
      }, 
      (uri) => this.setState(() => ({ image: uri })),
      () => console.log('Error'))
    })
  }

  componentDidMount () {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()

    Animated.spring(width, { toValue: 300, speed: 5 }).start()

    Animated.spring(height, { toValue: 300, speed: 5 }).start()

    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  render () {
    const { opacity, width, height, image } = this.state
    
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Animated.Image
            style={[styles.img, { opacity, width, height }]}
            source={{ uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png' }}
          />
        </View>
        <View style={styles.container}>
            <TouchableOpacity onPress={this.pickImage}>
              <Text>Open Camera Roll</Text>
            </TouchableOpacity>

            {image && (
              <Image style={styles.img} source={{ uri: image }} />
            )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  }
})

// export default class App extends Component {
//   render () {
//     return (
//       <CenterView>
//         <WelcomeText>
//           Different!
//         </WelcomeText>
//         <WelcomeBtn onPress={() => alert('Hello!')}>
//           <WelcomeText>
//             Push Me!
//           </WelcomeText>
//         </WelcomeBtn>
//       </CenterView>
//     )
//   }
// }

// class FlexboxExamples extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, {flex: 1}]}/>
//         <View style={[styles.box, {flex: 1}, {alignSelf: 'flex-end'}]}/>
//         <View style={[styles.box, {flex: 1}]}/>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row'
//   },
//   box: {
//     height: 50,
//     width: 50,
//     backgroundColor: '#e76e63',
//     margin: 10,
//   }
// })

//export default FlexboxExamples;