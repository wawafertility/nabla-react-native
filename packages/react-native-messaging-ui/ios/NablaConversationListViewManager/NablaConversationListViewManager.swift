import Foundation
import NablaMessagingCoreFork
import NablaMessagingUIFork

@objc(NablaConversationListViewManager)
class NablaConversationListViewManager: RCTViewManager {

    override func view() -> UIView! {
        ConversationListViewWrapper()
    }
    
    override class func requiresMainQueueSetup() -> Bool {
        false
    }
}


