import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import styled from 'styled-components/native'

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
  }

  componentDidMount () {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()

    Animated.spring(width, { toValue: 300, speed: 5 }).start()

    Animated.spring(height, { toValue: 300, speed: 5 }).start()
  }

  render () {
    const { opacity, width, height } = this.state
    
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, { opacity, width, height }]}
          source={{ uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png' }}
        />
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