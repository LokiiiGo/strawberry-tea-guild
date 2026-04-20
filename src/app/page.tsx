import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-600 flex justify-center items-center p-4">
        <ul className="text-black flex gap-8">
          <Link href={{ pathname: '/sobre', query: { name: 'sobre' }, }}>Sobre</Link>
          <Link href={{ pathname: '/membros', query: { name: 'membros' }, }}>Membros</Link>
          <Link href={{ pathname: '/recrutamento', query: { name: 'recrutamento' }, }}>Recrutamento</Link>
          <Link href={{ pathname: '/torneios', query: { name: 'torneios' }, }}>Torneios</Link>
          <Link href={{ pathname: '/noticias', query: { name: 'noticias' }, }}>Notícias</Link>
          <Link href={{ pathname: '/contato', query: { name: 'contato' }, }}>Contato</Link>
        </ul>
      </header>
    </div>
  );
}
