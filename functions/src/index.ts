import * as functions from 'firebase-functions'
import { runWebHook } from './services/runWebHook'

export const deployWebsiteCron = functions.pubsub
  .schedule('every 24 hours')
  .onRun(() => {
    return runWebHook(functions.config().netlify.webhook)
  })
