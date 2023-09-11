/**
 * Input for a text message, containing only the text to send.
 */
export class TextMessageInput {
    constructor(text) {
        this.text = text;
    }
    serialize() {
        return {
            type: 'text',
            value: this.text,
        };
    }
}
export var ImageMimeType;
(function (ImageMimeType) {
    ImageMimeType["jpeg"] = "jpeg";
    ImageMimeType["png"] = "png";
    ImageMimeType["heic"] = "heic";
    ImageMimeType["heif"] = "heif";
    ImageMimeType["other"] = "other";
})(ImageMimeType || (ImageMimeType = {}));
/**
 * Input for an image message, containing the image uri to send.
 */
export class ImageMessageInput {
    constructor(uri, mimetype, filename) {
        this.uri = uri;
        this.filename = filename;
        this.mimetype = mimetype;
    }
    serialize() {
        return {
            type: 'image',
            value: {
                uri: this.uri,
                mimetype: this.mimetype,
                filename: this.filename,
            },
        };
    }
}
export var VideoMimeType;
(function (VideoMimeType) {
    VideoMimeType["mp4"] = "mp4";
    VideoMimeType["mov"] = "mov";
    VideoMimeType["other"] = "other";
})(VideoMimeType || (VideoMimeType = {}));
/**
 * Input for a video message, containing the video uri to send.
 */
export class VideoMessageInput {
    constructor(uri, mimetype, filename) {
        this.uri = uri;
        this.filename = filename;
        this.mimetype = mimetype;
    }
    serialize() {
        return {
            type: 'video',
            value: {
                uri: this.uri,
                mimetype: this.mimetype,
                filename: this.filename,
            },
        };
    }
}
export var DocumentMimeType;
(function (DocumentMimeType) {
    DocumentMimeType["pdf"] = "pdf";
    DocumentMimeType["other"] = "other";
})(DocumentMimeType || (DocumentMimeType = {}));
/**
 * Input for a document message, containing the document uri to send.
 */
export class DocumentMessageInput {
    constructor(uri, mimetype, filename) {
        this.uri = uri;
        this.filename = filename;
        this.mimetype = mimetype;
    }
    serialize() {
        return {
            type: 'document',
            value: {
                uri: this.uri,
                mimetype: this.mimetype,
                filename: this.filename,
            },
        };
    }
}
export var AudioMimeType;
(function (AudioMimeType) {
    AudioMimeType["mpeg"] = "mpeg";
    AudioMimeType["other"] = "other";
})(AudioMimeType || (AudioMimeType = {}));
/**
 * Input for an audio message, containing the audio uri to send.
 */
export class AudioMessageInput {
    constructor(uri, mimetype, estimatedDurationMs, filename) {
        this.uri = uri;
        this.filename = filename;
        this.mimetype = mimetype;
        this.estimatedDurationMs = estimatedDurationMs;
    }
    serialize() {
        return {
            type: 'audio',
            value: {
                uri: this.uri,
                mimetype: this.mimetype,
                filename: this.filename,
                estimatedDurationMs: this.estimatedDurationMs,
            },
        };
    }
}
//# sourceMappingURL=MessageInput.js.map