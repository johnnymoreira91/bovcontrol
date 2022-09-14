import { IMailProvider, IMessage } from "../IMailProvider";

export class MailTrapProvider implements IMailProvider {
  constructor(

  ) {}
  
  async sendEmail(message: IMessage): Promise<void> {
    
  }
}