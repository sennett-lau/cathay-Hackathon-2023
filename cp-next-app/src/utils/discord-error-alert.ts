import axios from 'axios'
import { DISCORD_ERROR_ALERT_URL } from '../config'

export const fireDiscordErrorAlert = (content: string) => {
  try {
    axios.post(DISCORD_ERROR_ALERT_URL, {
      content,
    })
  } catch (error) {
    console.error('Error sending Discord error alert')
  }
}
