import * as nock from 'nock'
import { runWebHook } from '../../src/services/runWebHook'

describe('runWebHook', () => {
  it('performs a POST to the given URL', async () => {
    const basePath = 'https://santiagomartin.dev'
    const postPath = '/test'
    const hookUrl = `${basePath}${postPath}`

    nock(basePath)
      .post(postPath)
      .once()
      .reply(200)

    await expect(runWebHook(hookUrl)).toResolve()
  })
})
