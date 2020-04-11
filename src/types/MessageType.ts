export default interface MessageType {
    room: string;
    messageId: string;
    userId: string;
    username: string;
    content: string;
    timestamp: Date;
    //color: string // todo: custom type
}