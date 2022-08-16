#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NablaMessagingClientModule, NSObject)

RCT_EXTERN_METHOD(createConversation: (NSString *)title
                         providerIds: (NSArray<NSString *> *)providerIds
                            callback: (RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(sendMessage: (id)input
               conversationId: (id)conversationIdMap
                      replyTo: (id)replyToMap
                     callback: (RCTResponseSenderBlock)callback)

@end
