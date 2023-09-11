import { NablaError } from '@nabla/react-native-core';
import { Conversation, ConversationId, ConversationItem, MessageId, MessageInput, NablaEventSubscription, PaginatedList, Response } from '../types';
/**
 * Main entry-point for Messaging SDK features.
 *
 * Mandatory: before any interaction with messaging features make sure you
 * - called `NablaMessagingClient.initializeMessagingModule`
 * - successfully authenticated your user by calling `NablaClient.getInstance().authenticate`.
 */
export declare class NablaMessagingClient {
    private static instance;
    private constructor();
    /**
     * Shared Instance to use for all interactions with the messaging SDK.
     */
    static getInstance(): NablaMessagingClient;
    /**
     * Initializes the Messaging module and register it on `NablaClient`
     * Must be called before `NablaClient.getInstance().initialize()`
     */
    static initializeMessagingModule(): Promise<void>;
    /**
     * Watch the list of conversations the current user is involved in.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when new items are received.
     * @return A `ConversationsEventSubscription` to unsubscribe from the event.
     */
    watchConversations(errorCallback: (error: NablaError) => void, successCallback: (response: Response<PaginatedList<Conversation>, NablaError>) => void): NablaEventSubscription;
    /**
     * Load more conversations.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when loading succeeds.
     */
    loadMoreConversations(errorCallback: (error: NablaError) => void, successCallback: () => void): void;
    /**
     * Start a new conversation on behalf of the current user.
     * This conversation will not be created server-side nor visible from the console until a first message is sent in it.
     * @param successCallback The callback called when conversation creation succeeds.
     * @param title optional title for the conversation.
     * @param providerIds optional providers ids list that will participate in the conversation. Make sure the specified providers have enough rights to participate in a conversation. See [Roles and Permissions](https://docs.nabla.com/docs/roles-and-permissions).
     */
    startConversation(successCallback: (conversationId: ConversationId) => void, title?: string, providerIds?: string[]): void;
    /**
     * Create a new conversation on behalf of the current user.
     * This conversation will not be created server-side nor visible from the console until a first message is sent in it.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when conversation creation succeeds.
     * @param message initial message to be sent in the conversation.
     * @param title optional title for the conversation.
     * @param providerIds optional providers ids list that will participate in the conversation. Make sure the specified providers have enough rights to participate in a conversation. See [Roles and Permissions](https://docs.nabla.com/docs/roles-and-permissions).
     */
    createConversationWithMessage(errorCallback: (error: NablaError) => void, successCallback: (conversationId: ConversationId) => void, message: MessageInput, title?: string, providerIds?: string[]): void;
    /**
     * Watch the conversation referenced by its identifier.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when the conversation is updated.
     */
    watchConversation(conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: (response: Response<Conversation, NablaError>) => void): Promise<NablaEventSubscription>;
    /**
     * Watch the list of items in the conversation referenced by its identifier.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when new items are received.
     */
    watchItemsOfConversation(conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: (response: Response<PaginatedList<ConversationItem>, NablaError>) => void): Promise<NablaEventSubscription>;
    /**
     * Load more items in the conversation.
     * Needs to be called with active subscription from `watchItemsOfConversation`.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when loading succeeds.
     */
    loadMoreItemsInConversation(conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: () => void): void;
    /**
     * Send a new message in the conversation referenced by its identifier.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when message sending succeeds.
     * @param input The `MessageInput` to send.
     * @param conversationId The id of the `Conversation`.
     * @param replyTo optional id of the message to reply to.
     */
    sendMessage(errorCallback: (error: NablaError) => void, successCallback: () => void, input: MessageInput, conversationId: ConversationId, replyTo?: MessageId): void;
    /**
     * Retries sending a failed message in the conversation referenced by its identifier.
     * @param messageId The id of the `Message`.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when the retry sending succeeds.
     */
    retrySendingMessage(messageId: MessageId, conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: () => void): void;
    /**
     * Delete a message in the conversation referenced by its identifier.
     * @param messageId The id of the `Message`.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when message deletion succeeds.
     */
    deleteMessage(messageId: MessageId, conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: () => void): void;
    /**
     * Notify the server that the patient has seen the conversation.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when call succeeds.
     */
    markConversationAsSeen(conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: () => void): void;
    /**
     * Notify the server that the patient is typing in the conversation.
     * @param isTyping Whether the patient is typing.
     * @param conversationId The id of the `Conversation`.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when call succeeds.
     */
    setIsTyping(isTyping: boolean, conversationId: ConversationId, errorCallback: (error: NablaError) => void, successCallback: () => void): void;
}
