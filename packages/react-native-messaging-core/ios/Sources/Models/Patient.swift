import Foundation
import NablaMessagingCoreFork

extension Patient {
    var dictionaryRepresentation: [String: Any] {
        [
            "id": id.uuidString,
            "displayName": displayName
        ]
    }
}
