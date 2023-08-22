import { expect, test } from 'vitest'
import { useLimitString } from '../src/composables/limitString'

test('string that is longer than limit, should be cut to limit', () => {
  expect(useLimitString('long string', 4)).toBe('long...')
})

test('string that is shorter than limit, should be the same as original', () => {
  expect(useLimitString('long string', 100)).toBe('long string')
})