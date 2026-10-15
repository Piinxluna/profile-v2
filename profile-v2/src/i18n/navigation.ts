import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Kept separate from routing.ts so proxy.ts doesn't pull in server-only code
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
