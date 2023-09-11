import { NativeEventEmitter } from 'react-native';
import equal from 'fast-deep-equal/es6';
import { merge, mergeVoid, } from '@nabla/react-native-core/lib/internal';
import { conversationItemsWatcherModule, conversationListWatcherModule, conversationWatcherModule, nablaMessagingClientModule, } from './NativeModules';
import { NablaEventSubscription, } from '../types';
import { mapConversation, mapConversationItems, mapConversationList, mapError, } from './types';
import { mapResponse } from './types/ResponseMapper';
const conversationListEmitter = new NativeEventEmitter(conversationListWatcherModule);
const conversationItemsEmitter = new NativeEventEmitter(conversationItemsWatcherModule);
const conversationEmitter = new NativeEventEmitter(conversationWatcherModule);
/**
 * Main entry-point for Messaging SDK features.
 *
 * Mandatory: before any interaction with messaging features make sure you
 * - called `NablaMessagingClient.initializeMessagingModule`
 * - successfully authenticated your user by calling `NablaClient.getInstance().authenticate`.
 */
export class NablaMessagingClient {
    constructor() { }
    /**
     * Shared Instance to use for all interactions with the messaging SDK.
     */
    static getInstance() {
        if (!NablaMessagingClient.instance) {
            NablaMessagingClient.instance = new NablaMessagingClient();
        }
        return NablaMessagingClient.instance;
    }
    /**
     * Initializes the Messaging module and register it on `NablaClient`
     * Must be called before `NablaClient.getInstance().initialize()`
     */
    static async initializeMessagingModule() {
        await nablaMessagingClientModule.initializeMessagingModule();
    }
    /**
     * Watch the list of conversations the current user is involved in.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when new items are received.
     * @return A `ConversationsEventSubscription` to unsubscribe from the event.
     */
    watchConversations(errorCallback, successCallback) {
        return new NablaEventSubscription(conversationListEmitter.addListener('watchConversationsError', (error) => {
            errorCallback(mapError(error));
        }), conversationListEmitter.addListener('watchConversationsUpdated', (response) => {
            successCallback(mapResponse(response, mapConversationList));
        }));
    }
    /**
     * Load more conversations.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when loading succeeds.
     */
    loadMoreConversations(errorCallback, successCallback) {
        conversationListWatcherModule.loadMoreConversations(mergeVoid(mapError, errorCallback, successCallback));
    }
    /**
     * Start a new conversation on behalf of the current user.
     * This conversation will not be created server-side nor visible from the console until a first message is sent in it.
     * @param successCallback The callback called when conversation creation succeeds.
     * @param title optional title for the conversation.
     * @param providerIds optional providers ids list that will participate in the conversation. Make sure the specified providers have enough rights to participate in a conversation. See [Roles and Permissions](https://docs.nabla.com/docs/roles-and-permissions).
     */
    startConversation(successCallback, title, providerIds) {
        nablaMessagingClientModule.startConversation(title, providerIds, merge(mapError, () => { }, successCallback));
    }
    /**
     * Create a new conversation on behalf of the current user.
     * This conversation will not be created server-side nor visible from the console until a first message is sent in it.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when conversation creation succeeds.
     * @param message initial message to be sent in the conversation.
     * @param title optional title for the conversation.
     * @param providerIds optional providers ids list that will participate in the conversation. Make sure the specified providers have enough rights to participate in a conversation. See [Roles and Permissions](https://docs.nabla.com/docs/roles-and-permissions).
     */
    createConversationWithMessage(errorCallback, successCallback, message, title, providerIds) {
        nablaMessagingClientModule.createConversation(message.serialize(), title, providerIds, merge(mapError, errorCallback, successCallback));
    }
    /**
     * Watch the conversation referenced by its identifier.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when the conversation is updated.
     */
    async watchConversation(conversationId, errorCallback, successCallback) {
        return new Promise((resolve, reject) => {
            const subscription = new NablaEventSubscription(conversationEmitter.addListener('watchConversationError', (error) => {
                if (error.id === conversationId) {
                    errorCallback(mapError(error));
                }
            }), conversationEmitter.addListener('watchConversationUpdated', (response) => {
                if (equal(response.data.id, conversationId)) {
                    successCallback(mapResponse(response, mapConversation));
                }
            }), () => {
                conversationWatcherModule.unsubscribeFromConversation(conversationId);
            });
            conversationWatcherModule.watchConversation(conversationId, (error) => {
                if (error) {
                    subscription.remove();
                    reject(mapError(error));
                }
                else {
                    resolve(subscription);
                }
            });
        });
    }
    /**
     * Watch the list of items in the conversation referenced by its identifier.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when new items are received.
     */
    async watchItemsOfConversation(conversationId, errorCallback, successCallback) {
        return new Promise((resolve, reject) => {
            const subscription = new NablaEventSubscription(conversationItemsEmitter.addListener('watchConversationItemsError', (error) => {
                if (equal(error.id, conversationId)) {
                    errorCallback(mapError(error));
                }
            }), conversationItemsEmitter.addListener('watchConversationItemsUpdated', (response) => {
                if (equal(response.data.id, conversationId)) {
                    successCallback(mapResponse(response, mapConversationItems));
                }
            }), () => {
                conversationItemsWatcherModule.unsubscribeFromConversationItems(conversationId);
            });
            conversationItemsWatcherModule.watchConversationItems(conversationId, (error) => {
                if (error) {
                    subscription.remove();
                    reject(mapError(error));
                }
                else {
                    resolve(subscription);
                }
            });
        });
    }
    /**
     * Load more items in the conversation.
     * Needs to be called with active subscription from `watchItemsOfConversation`.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when loading succeeds.
     */
    loadMoreItemsInConversation(conversationId, errorCallback, successCallback) {
        conversationItemsWatcherModule.loadMoreItemsInConversation(conversationId, mergeVoid(mapError, errorCallback, successCallback));
    }
    /**
     * Send a new message in the conversation referenced by its identifier.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when message sending succeeds.
     * @param input The `MessageInput` to send.
     * @param conversationId The id of the `Conversation`.
     * @param replyTo optional id of the message to reply to.
     */
    sendMessage(errorCallback, successCallback, input, conversationId, replyTo) {
        nablaMessagingClientModule.sendMessage(input.serialize(), conversationId, replyTo, mergeVoid(mapError, errorCallback, successCallback));
    }
    /**
     * Retries sending a failed message in the conversation referenced by its identifier.
     * @param messageId The id of the `Message`.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when the retry sending succeeds.
     */
    retrySendingMessage(messageId, conversationId, errorCallback, successCallback) {
        nablaMessagingClientModule.retrySendingMessage(messageId, conversationId, mergeVoid(mapError, errorCallback, successCallback));
    }
    /**
     * Delete a message in the conversation referenced by its identifier.
     * @param messageId The id of the `Message`.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when message deletion succeeds.
     */
    deleteMessage(messageId, conversationId, errorCallback, successCallback) {
        nablaMessagingClientModule.deleteMessage(messageId, conversationId, mergeVoid(mapError, errorCallback, successCallback));
    }
    /**
     * Notify the server that the patient has seen the conversation.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when call succeeds.
     */
    markConversationAsSeen(conversationId, errorCallback, successCallback) {
        nablaMessagingClientModule.markConversationAsSeen(conversationId, mergeVoid(mapError, errorCallback, successCallback));
    }
    /**
     * Notify the server that the patient is typing in the conversation.
     * @param isTyping Whether the patient is typing.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when call succeeds.
     */
    setIsTyping(isTyping, conversationId, errorCallback, successCallback) {
        nablaMessagingClientModule.setIsTyping(isTyping, conversationId, mergeVoid(mapError, errorCallback, successCallback));
    }
}
//# sourceMappingURL=NablaMessagingClient.js.map