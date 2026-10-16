import type { ReactNode } from 'react'

/**
 * Tags allowed inside rich messages, for `t.rich(key, richTags)`.
 * - <b>text</b>: emphasized text
 */
export const richTags = {
  b: (chunks: ReactNode) => <strong className="text-primary-text font-semibold">{chunks}</strong>,
}
