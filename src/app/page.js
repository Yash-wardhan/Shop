import Hero from './Comp/Hero'
import Filter from './Comp/Filter'
import Title from './Comp/Title'
import SectionCards from './Comp/SectionCards'

export default function Home() {
  return (
    <main className="max-w-7xl px-2 mx-auto">
      <Hero />
      <Filter />
      <Title />
      <SectionCards />
    </main>
  )
}
