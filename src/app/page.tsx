import { Search } from '@/components/Search/Search'

export default function Home() {
  return (
    <main className="text-center mx-auto max-w-3xl p-5">
      <header>
        <h2 className="text-2xl text-yellow-400">Spaceship</h2>
        <h2 className="text-3xl mt-5 mb-2">Calcular distancia em MGLT</h2>
        <p className="text-sm mb-5">Realize o calculo de quantas paradas todas Espaçosnaves precisam fazer para determinada distancia em MGLT</p>
      </header>

      <Search />

      <footer className="mt-5 text-sm">Criado por Andre Barbosa</footer>
    </main>
  )
}
