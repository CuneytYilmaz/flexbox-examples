import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerActions } from 'react-navigation'

function Home ({ navigation }) {
    return (
        <View>
            <Text>HOME VIEW</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('DrawerOpen')} >
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </View>
    )
}

function Dashboard ({ navigation }) {
    return (
        <View>
            <Text>DASHBOARD VIEW</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('DrawerOpen')} >
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </View>
    )
}

const Drawer = DrawerActions({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => <FontAwesome name='home' size={20} color='red' />
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            drawerLabel: 'Dashboard',
            drawerIcon: () => <FontAwesome name='dashboard' size={20} color='red' />
        }
    }
})

export default Drawer;