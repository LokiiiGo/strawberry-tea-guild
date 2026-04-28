import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-transparent flex justify-center items-center p-4">
        <ul className="flex gap-8">
          <li><Link href={{ pathname: '/sobre', query: { name: 'quem-somos' }, }}>Sobre</Link></li>
          <li><Link href={{ pathname: '/membros', query: { name: 'jogadores' }, }}>Membros</Link></li>
          <li><Link href={{ pathname: '/recrutamento', query: { name: 'descricao-formulario' }, }}>Recrutamento</Link></li>
          <li><Link href={{ pathname: '/torneios', query: { name: 'campeonatos' }, }}>Torneios</Link></li>
          <li><Link href={{ pathname: '/noticias', query: { name: 'anuncios' }, }}>Notícias</Link></li>
          <li><Link href={{ pathname: '/contato', query: { name: 'redes-sociais' }, }}>Contato</Link></li>
        </ul>
      </header>
    </div>
  );
}