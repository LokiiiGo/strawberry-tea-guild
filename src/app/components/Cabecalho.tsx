import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-transparent flex justify-center items-center p-4">
        <ul className="flex gap-8">
          <Link href={{ pathname: '/sobre', query: { name: 'quem-somos' }, }}>Sobre</Link>
          <Link href={{ pathname: '/membros', query: { name: 'jogadores' }, }}>Membros</Link>
          <Link href={{ pathname: '/recrutamento', query: { name: 'descricao-formulario' }, }}>Recrutamento</Link>
          <Link href={{ pathname: '/torneios', query: { name: 'campeonatos' }, }}>Torneios</Link>
          <Link href={{ pathname: '/noticias', query: { name: 'anuncios' }, }}>Notícias</Link>
          <Link href={{ pathname: '/contato', query: { name: 'redes-sociais' }, }}>Contato</Link>
        </ul>
      </header>
    </div>
  );
}