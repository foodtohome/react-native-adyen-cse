import { NativeModules } from 'react-native';

const NativeAdyenCSE = NativeModules.RNAdyenCSE;

export default {
  encryptCardData(card, publicKey) {
    return NativeAdyenCSE.encryptCardData({ card, publicKey });
  }
}
