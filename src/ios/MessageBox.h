//
//  MessageBox.h
//
// Created by Olivier Louvignes on 2011-11-26
// Updated on 2012-08-04 for Cordova ARC-2.1+
//
// Copyright 2011 Olivier Louvignes. All rights reserved.
// MIT Licensed

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface MessageBox : CDVPlugin {
}

#pragma mark - Properties

@property (nonatomic, copy) NSString* callbackId;

#pragma mark - Instance methods

- (void)prompt:(CDVInvokedUrlCommand*)command;

@end
