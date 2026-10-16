import ProjectList from './_ProjectList'

export default function Projects() {
  return (
    <section className="flex w-full flex-col gap-6 sm:gap-8">
      {/* //TODO: Add a filter / search functionality */}
      <ProjectList />
    </section>
  )
}
