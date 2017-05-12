//
//  RNAdyenCSE.m
//  RNAdyenCSE
//
//  Created by Juri Saltbacka on 11/05/2017.
//  Copyright © 2017 Food To Home Ltd Oy. All rights reserved.
//

#import "RNAdyenCSE.h"
#import <AdyenCSE.h>
#import <ADYCard.h>
#import <ADYEncrypter.h>

@implementation RNAdyenCSE

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(encryptCardData:(NSDictionary*)params
                         resolver:(RCTPromiseResolveBlock)resolve
                         rejecter:(RCTPromiseRejectBlock)reject)
{
  NSDictionary* cardParams = params[@"card"];
  NSString* publicKey = params[@"publicKey"];

  ADYCard *card = [ADYCard new];
  card.generationtime = [NSDate new];
  card.number = cardParams[@"number"];
  card.holderName = cardParams[@"holderName"];
  card.cvc = cardParams[@"cvc"];
  card.expiryMonth = cardParams[@"expiryMonth"];
  card.expiryYear = cardParams[@"expiryYear"];

  NSData *cardData = [card encode];
  NSString *encryptedData = [ADYEncrypter encrypt:cardData publicKeyInHex:publicKey];
  if(encryptedData) {
    resolve(encryptedData);
  } else {
    reject(@"-1", @"Encryption failed", nil);
  }
}

@end