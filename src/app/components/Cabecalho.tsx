import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-transparent flex justify-center items-center p-4 mb-16">
        <ul className="text-white uppercase font-bold flex gap-8">
          <li className="hover:text-rose-800">
            <Link href={{ pathname: '/sobre', query: { name: 'quem-somos' }, }}>Sobre</Link>
          </li>
          <li className="hover:text-rose-800">
            <Link href={{ pathname: '/membros', query: { name: 'jogadores' }, }}>Membros</Link>
          </li>
          <li className="hover:text-rose-800">
            <Link href={{ pathname: '/recrutamento', query: { name: 'descricao-formulario' }, }}>Recrutamento</Link>
          </li>
          <li className="hover:text-rose-800">
            <Link href={{ pathname: '/torneios', query: { name: 'campeonatos' }, }}>Torneios</Link>
          </li>
          <li className="hover:text-rose-800">
            <Link href={{ pathname: '/noticias', query: { name: 'anuncios' }, }}>Notícias</Link>
          </li>
          <li className="hover:text-rose-800">
            <Link href={{ pathname: '/contato', query: { name: 'redes-sociais' }, }}>Contato</Link>
          </li>
        </ul>
      </header>

      <main className="text-center flex flex-col justify-center items-center">
        <Image src="/assets/logo-st.png" alt="Logo Strawberry Tea" width={200} height={200} className="text-center" />
        <section className="w-full h-64">
          <h1 className="text-4xl text-rose-600 font-bold">Olá mundo</h1>
          <p className="text-rose-600 text-xl mt-4">STRAWBERRY TEA</p>
        </section>
      </main>
    </div>
  );
}