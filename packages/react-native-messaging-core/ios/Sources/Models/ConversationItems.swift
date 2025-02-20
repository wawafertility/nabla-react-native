import Foundation
import NablaCoreFork
import NablaMessagingCoreFork

extension PaginatedList where Element == ConversationItem {
    var dictionaryRepresentation: [String: Any] {
        var result = [String: Any]()
        result["hasMore"] = hasMore
        result["items"] = elements.map(\.dictionaryRepresentation)
        return result
    }
}
