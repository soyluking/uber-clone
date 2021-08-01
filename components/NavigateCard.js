import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import tw from 'tailwind-react-native-classnames';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, XXX</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <ScrollView keyboardShouldPersistTaps='always'>
          <GooglePlacesAutocomplete
            placeholder='Where from?'
            syles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: details.description,
                }),
              );

              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
