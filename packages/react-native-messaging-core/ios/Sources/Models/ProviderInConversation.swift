import Foundation
import NablaMessagingCoreFork

extension ProviderInConversation {
    var dictionaryRepresentation: [String: Any] {
        var result = [String: Any]()
        result["provider"] = provider.dictionaryRepresentation
        result["typingAt"] = typingAt?.iso8601String
        result["seenUntil"] = seenUntil?.iso8601String
        return result
    }
}
