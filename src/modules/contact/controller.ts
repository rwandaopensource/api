import sendMessage from '../../helpers/contact';

export default class ContactController {
  static async contactMessage(req: any, res: any) {
    const { body: { from, subject, message } } = req;
    if (!(from && subject && message)) {
      res.status(400).json({});
    }
    const sent = await sendMessage(from, subject, message);
    if (sent) {
      res.send('ok');
      return;
    }
    res.status(500).json({});
  }
}
