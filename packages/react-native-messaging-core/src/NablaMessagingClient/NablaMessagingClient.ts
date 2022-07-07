import { ConversationList, NablaError } from '../types';
import { ConversationsEventSubscription } from './types/ConversationsEventSubscription';
import { NativeError } from './types/NativeError';
import { mapError } from './types/ErrorMapper';
import { NativeEventEmitter } from 'react-native';
import { nablaMessagingClientModule } from './NablaMessagingClientModule';
import {
  mapConversationList,
  NativeConversationList,
} from './types/NativeConversationList';

const emitter = new NativeEventEmitter(nablaMessagingClientModule);

export class NablaMessagingClient {
  private static instance: NablaMessagingClient;

  private constructor() {}

  public static getInstance(): NablaMessagingClient {
    if (!NablaMessagingClient.instance) {
      NablaMessagingClient.instance = new NablaMessagingClient();
    }

    return NablaMessagingClient.instance;
  }

  public watchConversations(
    errorCallback: (error: NablaError) => void,
    successCallback: (conversationsList: ConversationList) => void,
  ): ConversationsEventSubscription {
    return new ConversationsEventSubscription(
      emitter.addListener('watchConversationsError', (error: NativeError) => {
        errorCallback(mapError(error));
      }),
      emitter.addListener(
        'watchConversationsUpdated',
        (data: NativeConversationList) => {
          successCallback(mapConversationList(data));
        },
      ),
    );
  }

  public loadMoreConversations(
    errorCallback: (error: NablaError) => void,
    successCallback: () => void,
  ): void {
    nablaMessagingClientModule.loadMoreConversations((error) => {
      if (error) {
        errorCallback(mapError(error));
      } else {
        successCallback();
      }
    });
  }

  public createConversation(
    errorCallback: (error: NablaError) => void,
    successCallback: (conversationId: string) => void,
    title?: string,
    providerIds?: string[],
  ) {
    nablaMessagingClientModule.createConversation(
      title,
      providerIds,
      (error, conversationId) => {
        if (error) {
          errorCallback(mapError(error));
        } else if (conversationId) {
          successCallback(conversationId);
        }
      },
    );
  }
}
