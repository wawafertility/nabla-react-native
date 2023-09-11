import Foundation
import NablaMessagingCoreFork

public typealias ConversationId = UUID

public extension ConversationId {
    var dictionaryRepresentation: [String: Any] {
        ["type": "Remote", "remoteId": uuidString]
    }
}
