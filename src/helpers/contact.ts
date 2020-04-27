import axios from 'axios';
import env from '../env';

interface Message {
  text: string;
  blocks: Array<Block>;
}

interface Block {
  type: string;
  text: { type: string, text: string };
}

const SLACK_HOOK_HEADER = Object.freeze({ 'Contet-Type': 'application/json' });
const { SLACK_WEBHOOK_URL } = env;

async function sendMessage(from : string, subject: string, message: string): Promise<boolean> {
  const msg: Message = {
    text: 'Message from community website',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*From*\n${from}`,
        },
      },

      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Subject*\n${subject}`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message*\n${message}`,
        },
      },
    ],
  };
  try {
    await axios.post(SLACK_WEBHOOK_URL, msg, { headers: SLACK_HOOK_HEADER });
    return true;
  } catch (err) {
    console.error(Date.now().toString(), 'Sending message from website', err.message);
    return false;
  }
}

export default sendMessage;
