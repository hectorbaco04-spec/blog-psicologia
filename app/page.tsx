import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
  title: "Psicología Diaria",
  description: "Blog de psicología y bienestar emocional",
};

export default async function Home() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-zinc-900">Psicología Diaria</h1>
          <p className="mt-2 text-lg text-zinc-600">
            Artículos sobre psicología y bienestar emocional
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <p className="text-zinc-600">No hay artículos aún.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b pb-8 last:border-b-0"
              >
                <Link href={`/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-zinc-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-zinc-500">
                  {new Date(post.date).toLocaleDateString("es-ES")} •{" "}
                  <span className="inline-block px-2 py-1 bg-zinc-100 text-zinc-700 rounded text-xs">
                    {post.category}
                  </span>
                </p>
                <p className="mt-4 text-zinc-700 line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={`/${post.slug}`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Leer más →
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t bg-zinc-50 mt-12">
        <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-zinc-600">
          <p>
            Este contenido tiene carácter divulgativo. No constituye diagnóstico,
            tratamiento ni asesoramiento profesional.{" "}
            <Link href="/aviso-legal" className="text-blue-600 hover:underline">
              Aviso legal
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
