
# react-native-adyen-cse

## Getting started

`$ npm install react-native-adyen-cse --save`

## Usage
```javascript
import RNAdyenCSE from 'react-native-adyen-cse';

RNAdyenCSE.encrypt({
  card: {
    holderName: '...',
    number: '...',
    cvc: '...',
    expiryMonth: '...',
    expiryYear: '...',
  },
  publicKey: '...'
}).then(encryptedData => {
  console.log(encryptedData);
}).catch(error => {
  console.error(error);
});
```
  