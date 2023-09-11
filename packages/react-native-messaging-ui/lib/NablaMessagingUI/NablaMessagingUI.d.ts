import { ConversationId } from '@nabla/react-native-messaging-core';
import { NablaError } from '@nabla/react-native-core';
/**
 * Main entry-point for Messaging UI features.
 *
 * Mandatory: before any interaction with messaging features make sure you
 * successfully authenticated your user by calling `NablaClient.getInstance().authenticate`.
 */
export declare class NablaMessagingUI {
    /**
     * Launches the Inbox Screen.
     * @param dismissCallback optional callback called when screen is dismissed.
     */
    static navigateToInbox(dismissCallback?: () => void): void;
    /**
     * Launches the Conversation Screen.
     * @param conversationId the id of the conversation to display.
     * @param errorCallback optional callback called in case of error. (Bad conversationId)
     * @param dismissCallback optional callback called when screen is dismissed.
     */
    static navigateToConversation(conversationId: ConversationId, errorCallback?: (error: NablaError) => void, dismissCallback?: () => void): void;
}
