import { AboutMe } from '@/feature/home/aboutMe/AboutMe'
import { PersonalDetail } from '@/feature/home/personalDetail/PersonalDetail'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <PersonalDetail />
      <AboutMe />
    </main>
  )
}
