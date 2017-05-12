/**
 * Example React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import AdyenCSE from 'react-native-adyen-cse';

const card = {
  number: '5555 4444 3333 1111',
  cvc: '737',
  holderName: 'John Doe',
  expiryMonth: '10',
  expiryYear: '2020',
  generationtime: new Date().toISOString()
};

const publicKey = '10001|D46B036B361EEB86B49968E065BEA2EF325DA2118BB38858B56B4FD56641EB8F32B0DB34166F36D11B9FDCBFF138B96C1C1B999FAA1C054DAD9DA4CC086A44D5D7C8EB0D799776617B8DE856DEE2D1D74DD621FB2B8B9FA3B8763E22506D02C87C846498E1E82D93B9B69AD8E7F844E601608B2A58C2191DFAF6C227D40F4673AAB829B4E7936ED6AED913CF5522C164CAD9D547344B7929DADA7B2F9DA868F194B6C80FC9BC6190C8AD8735BEF5FD6C8342F2C229E13B0119B972D0B70F68BA23EAAA048A65F338C4E3742C07102049E10F04FE33510FB264A1E589D7B5D970BBBEC0343EB6CEC7CD9E68DB560CD263CDF36D56E09F6F937A3E8DE1B6CD6005';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encryptedCardData: ''
    };
  }

  testCardEncryption() {
    AdyenCSE.encryptCardData(card, publicKey)
    .then(encryptedCardData => {
      console.log('encryptedCardData', encryptedCardData);
      this.setState({ encryptedCardData });
    })
    .catch(error => {
      console.error('encryptCardData:error', error)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-around' }}>
          <Button
            title='Test Card Encryption'
            onPress={() => this.testCardEncryption()}
          />
        </View>
        <Text style={{ color: 'black', fontSize: 16 }}>{this.state.encryptedCardData}</Text>
      </View>
    );
  }
}
