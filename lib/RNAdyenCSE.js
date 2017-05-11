import React from 'react-native';

const NativeAdyenCSE = React.NativeModules.RNAdyenCSE;

let instance = null;

export default class RNAdyenCSE {
  constructor(props) {
    if(!instance){
      instance = this;
    }
    return instance;
  }

  encrypt(params) {
    return await NativeAdyenCSE(params);
  }
};
