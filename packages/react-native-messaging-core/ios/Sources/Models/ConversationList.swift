import Foundation
import NablaCoreFork
import NablaMessagingCoreFork

extension PaginatedList where Element == Conversation {
    var dictionaryRepresentation: [String: Any] {
        [
            "conversations": elements.map(\.dictionaryRepresentation),
            "hasMore": hasMore
        ]
    }
}
