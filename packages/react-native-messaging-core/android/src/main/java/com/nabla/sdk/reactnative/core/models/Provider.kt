package com.nabla.sdk.reactnative.core.models

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap
import com.nabla.sdk.core.domain.entity.Provider

fun Provider.toMap(): ReadableMap {
    return Arguments.createMap().apply {
        putString("id", id.toString())
        putString("prefix", prefix)
        putString("firstName", firstName)
        putString("lastName", lastName)
        putString("avatarUrl", avatar?.url.toString())
    }
}
