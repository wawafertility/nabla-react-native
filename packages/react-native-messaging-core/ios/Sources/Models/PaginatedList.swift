import Foundation
import NablaCoreFork

extension PaginatedList {
    func dictionaryRepresentation(
        _ elementDictionaryRepresentation: (Element) -> [String: Any]
    ) -> [String: Any] {
        [
            "elements": elements.map(elementDictionaryRepresentation),
            "hasMore": hasMore
        ]
    }
}
