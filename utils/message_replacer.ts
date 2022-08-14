export class MessageReplacer {
  constructor(private match: string) {}

  replace(message: string, replaceWith: string) {
    return message.replaceAll(this.match, replaceWith);
  }
}
