/**
 * Representation of a message to give to ``NablaMessagingClient.sendMessage``
 */
export interface MessageInput {
    serialize(): any;
}
export interface MediaMessageInput extends MessageInput {
    uri: string;
    filename: string;
}
/**
 * Input for a text message, containing only the text to send.
 */
export declare class TextMessageInput implements MessageInput {
    text: string;
    constructor(text: string);
    serialize(): any;
}
export declare enum ImageMimeType {
    jpeg = "jpeg",
    png = "png",
    heic = "heic",
    heif = "heif",
    other = "other"
}
/**
 * Input for an image message, containing the image uri to send.
 */
export declare class ImageMessageInput implements MediaMessageInput {
    uri: string;
    filename: string;
    mimetype: ImageMimeType;
    constructor(uri: string, mimetype: ImageMimeType, filename: string);
    serialize(): any;
}
export declare enum VideoMimeType {
    mp4 = "mp4",
    mov = "mov",
    other = "other"
}
/**
 * Input for a video message, containing the video uri to send.
 */
export declare class VideoMessageInput implements MediaMessageInput {
    uri: string;
    filename: string;
    mimetype: VideoMimeType;
    constructor(uri: string, mimetype: VideoMimeType, filename: string);
    serialize(): any;
}
export declare enum DocumentMimeType {
    pdf = "pdf",
    other = "other"
}
/**
 * Input for a document message, containing the document uri to send.
 */
export declare class DocumentMessageInput implements MediaMessageInput {
    uri: string;
    filename: string;
    mimetype: DocumentMimeType;
    constructor(uri: string, mimetype: DocumentMimeType, filename: string);
    serialize(): any;
}
export declare enum AudioMimeType {
    mpeg = "mpeg",
    other = "other"
}
/**
 * Input for an audio message, containing the audio uri to send.
 */
export declare class AudioMessageInput implements MediaMessageInput {
    uri: string;
    filename: string;
    mimetype: AudioMimeType;
    estimatedDurationMs: number;
    constructor(uri: string, mimetype: AudioMimeType, estimatedDurationMs: number, filename: string);
    serialize(): any;
}
