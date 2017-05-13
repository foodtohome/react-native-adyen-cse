
# react-native-adyen-cse

Work in progress. Currently working in iOS.

## Getting started

1. Install AdyenCSE pod
2. `$ npm install react-native-adyen-cse --save`
3. `$ react-native link`

## Usage

```javascript
import AdyenCSE from 'react-native-adyen-cse';

const card = {
  holderName: '...',
  number: '...',
  cvc: '...',
  expiryMonth: '...',
  expiryYear: '...',
};

const publicKey = '...';

AdyenCSE.encryptCardData(card, publicKey).then(encryptedCardData => {
  console.log(encryptedCardData);
}).catch(error => {
  console.error(error);
});
```
  