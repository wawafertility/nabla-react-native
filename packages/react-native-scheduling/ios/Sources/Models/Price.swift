import Foundation
import NablaSchedulingFork

extension Price {
    var dictionaryRepresentation: [String: Any] {
        [
            "amount": amount,
            "currencyCode": currencyCode
        ]
    }
}
