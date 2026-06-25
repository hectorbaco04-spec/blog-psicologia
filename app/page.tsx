import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
  title: "Psicología Diaria | Bienestar y Salud Mental",
  description: "Psicología y bienestar explicados de forma clara y accesible.",
};

export default async function Home() {
  const posts = await getSortedPostsData();

  return (
    <div className="bg-[#fcf8ff] text-[#1b1b23] scroll-smooth">

      {/* NavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcf8ff]/90 backdrop-blur-md shadow-sm">
        <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center h-16">
          <div className="font-bold text-[#4648d4] text-xl">Psicología Diaria</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#articles" className="text-[#1b1b23] hover:text-[#4648d4] transition">Articles</a>
            <a href="#categories" className="text-[#1b1b23] hover:text-[#4648d4] transition">Categories</a>
          </div>
          <button className="bg-[#4648d4] text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium">
            Subscribe
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#e1e0ff] to-[#fcf8ff] text-center">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="reveal">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ffdcc5] text-[#703700] font-semibold text-sm mb-6">
              TU ESPACIO DE SALUD MENTAL
            </span>
          </div>
          <h1 className="reveal font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold mb-6">
            Psicología Diaria
          </h1>
          <p className="reveal text-xl text-[#464554] max-w-2xl mx-auto mb-10">
            Psicología y bienestar explicados de forma clara y accesible para integrar en tu vida cotidiana.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#articles" className="bg-[#4648d4] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">
              Leer artículos
            </a>
            <a href="#about" className="border-2 border-[#4648d4] text-[#4648d4] px-8 py-4 rounded-lg font-semibold hover:bg-[#4648d4]/5 transition">
              Saber más
            </a>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="reveal mb-16">
            <h2 className="headline-md mb-2">Artículos destacados</h2>
            <p className="text-[#464554]">Lo más leído esta semana</p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center py-12 text-[#464554]">No hay artículos aún.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              {posts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/${post.slug}`}>
                  <article className="group bg-white border-2 border-[#e4e1ed] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="h-48 bg-gradient-to-br from-[#c0c1ff] to-[#e1e0ff]"></div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-4">
                        <span className="bg-[#ffdcc5] text-[#703700] px-3 py-1 rounded-full text-xs font-bold uppercase">
                          {post.category}
                        </span>
                        <span className="text-[#767586] text-xs">
                          {new Date(post.date).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-3 group-hover:text-[#4648d4] transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#464554] text-sm line-clamp-3 mb-4">
                        {post.description}
                      </p>
                      <span className="text-[#4648d4] font-bold text-sm inline-flex items-center gap-2">
                        Leer más →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 bg-[#fcf8ff]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="headline-md mb-4">Explora por Temas</h2>
            <p className="text-[#464554]">Encuentra exactamente lo que necesitas para tu momento actual.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {['Ansiedad', 'Relaciones', 'Autoestima', 'Mindfulness'].map((cat) => (
              <a key={cat} href="#" className="group p-8 rounded-2xl bg-white border-2 border-[#e4e1ed] text-center hover:border-[#4648d4] hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e1e0ff] text-[#4648d4] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-3xl">
                  {cat === 'Ansiedad' && '🧠'}
                  {cat === 'Relaciones' && '🤝'}
                  {cat === 'Autoestima' && '⭐'}
                  {cat === 'Mindfulness' && '🧘'}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">{cat}</h4>
                <p className="text-sm text-[#464554]">Contenido especializado</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e9e6f3] border-t-2 border-[#e4e1ed]">
        <div className="max-w-[1120px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-bold text-[#4648d4] mb-2">Psicología Diaria</div>
            <p className="text-[#464554] text-sm">© 2024 Psicología Diaria. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/aviso-legal" className="text-[#464554] hover:text-[#4648d4]">Legal</Link>
            <a href="#" className="text-[#464554] hover:text-[#4648d4]">Privacy</a>
            <a href="#" className="text-[#464554] hover:text-[#4648d4]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
