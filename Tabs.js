import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigation } from 'react-navigation'

function Home () {
    return (
        <View>
            <Text>HOME</Text>
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

const Tabs = TabNavigation({
    Home: {
        screen: Home,
    },
    Dashboard: {
        screen: Dashboard
    }
})

export default Tabs;