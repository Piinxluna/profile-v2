import { AboutMe } from '@/feature/home/aboutMe/AboutMe'
import { Experience } from '@/feature/home/experience/Experience'
import { PersonalDetail } from '@/feature/home/personalDetail/PersonalDetail'
import { Projects } from '@/feature/home/projects/Projects'
import { Skill } from '@/feature/home/skill/Skill'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-16 sm:gap-24">
      <PersonalDetail />
      <div className='container-auto py-4 flex w-full flex-col items-center justify-center gap-10 md:gap-16'>
        <AboutMe />
        <Experience />
        <Projects />
        <Skill />
      </div>
    </main>
  )
}
