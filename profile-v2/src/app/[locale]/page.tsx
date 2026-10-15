import { AboutMe } from '@/feature/home/AboutMe'
import { PersonalDetail } from '@/feature/home/PersonalDetail'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <PersonalDetail />
      <AboutMe />
    </main>
  )
}
