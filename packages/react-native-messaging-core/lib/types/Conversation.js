export class Conversation {
    constructor(id, inboxPreviewTitle, lastModified, patientUnreadMessageCount, providers, isLocked, title, lastMessagePreview, pictureURL, lastMessage) {
        this.id = id;
        this.title = title;
        this.inboxPreviewTitle = inboxPreviewTitle;
        this.lastMessagePreview = lastMessagePreview;
        this.lastModified = lastModified;
        this.patientUnreadMessageCount = patientUnreadMessageCount;
        this.pictureURL = pictureURL;
        this.providers = providers;
        this.isLocked = isLocked;
        this.lastMessage = lastMessage;
    }
}
//# sourceMappingURL=Conversation.js.map