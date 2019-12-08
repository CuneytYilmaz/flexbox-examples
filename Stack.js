import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

function Home ({ navigation }) {
    return (
        <View>
            <Text>HOME VIEW</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Dashboard')} >
                <Text>To Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}

function Dashboard () {
    return (
        <View>
            <Text>Dashboard</Text>
        </View>
    )
}

const Stack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard',
            headerTintColor: 'red',
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    }
})

export default Tabs;