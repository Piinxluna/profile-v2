import AboutMe from '@/feature/home/aboutMe/AboutMe'
import Experience from '@/feature/home/experience/Experience'
import PersonalDetail from '@/feature/home/personalDetail/PersonalDetail'
import Projects from '@/feature/home/projects/Projects'
import Skill from '@/feature/home/skill/Skill'

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 sm:gap-24">
      <PersonalDetail />
      <div className="container-auto flex w-full flex-col items-center justify-center gap-10 py-4 md:gap-16">
        <AboutMe />
        <Experience />
        <Projects />
        <Skill />
      </div>
    </div>
  )
}
