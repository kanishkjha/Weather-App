import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const LoadingState = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
}

const WeatherApp = ({ weather }) => {
  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  )
}

const App = () => {
  const { error, loading, weather } = useGetWeather()
  console.log(error, loading, weather)

  if (loading) {
    return <LoadingState />
  }

  if (weather && weather.list && !loading) {
    return <WeatherApp weather={weather} />
  }

  if (error) {
    return <ErrorItem />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default App
