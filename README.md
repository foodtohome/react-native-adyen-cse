
# react-native-adyen-cse

## Getting started

1. Install AdyenCSE pod
2. Run `$ npm install react-native-adyen-cse --save`

## Usage

```javascript
import RNAdyenCSE from 'react-native-adyen-cse';

const card = {
  holderName: '...',
  number: '...',
  cvc: '...',
  expiryMonth: '...',
  expiryYear: '...',
};

const publicKey = '...';

RNAdyenCSE.encrypt(card, publicKey).then(encryptedData => {
  console.log(encryptedData);
}).catch(error => {
  console.error(error);
});
```
  