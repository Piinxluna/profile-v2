'use client'

interface Props {
  html: string
}

/**
 * Inline <script> that runs while the browser parses the server HTML, i.e. before the first paint.
 * - Rendered as text/plain on the client, so React doesn't warn about rendering a <script>
 *   (e.g. when the root layout re-renders on a locale switch); it wouldn't execute there anyway
 * - suppressHydrationWarning covers the server/client `type` mismatch
 */
export default function InlineScript({ html }: Props) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
