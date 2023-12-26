import { Search } from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-center mx-auto max-w-lg p-5">
      <header>
        <h2 className="text-2xl text-yellow-400">SpaceShip</h2>
        <h2 className="text-3xl mt-5 mb-2">Faça o calculo de quantas parada.</h2>
        <p className="text-sm mb-5">Realize o calculo de quantas paradas todas Espaçosnaves precisam fazer para determinado MGLT</p>
      </header>

      <Search />

      <footer className="mt-5 text-sm">Criado por dedé</footer>
    </main>
  )
}
