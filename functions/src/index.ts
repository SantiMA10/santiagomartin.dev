import * as functions from 'firebase-functions'
import axios from 'axios'

export const scheduledFunctionCrontab = functions.pubsub
  .schedule('every 24 hours')
  .onRun(() => {
    return axios.post(functions.config().netlify.webhook)
  })
