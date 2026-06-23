import Link from "next/link";
import { getPostData, getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  try {
    const slugs = getAllSlugs();
    return slugs.length > 0 ? slugs : [];
  } catch {
    return [];
  }
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  try {
    const post = await getPostData(params.slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Artículo no encontrado",
    };
  }
}

export default async function Post(props: { params: Params }) {
  const params = await props.params;
  let post;
  try {
    post = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-zinc-50">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-zinc-900 mt-4">{post.title}</h1>
          <p className="mt-4 text-sm text-zinc-600">
            {new Date(post.date).toLocaleDateString("es-ES")} •{" "}
            <span className="inline-block px-2 py-1 bg-zinc-100 text-zinc-700 rounded text-xs">
              {post.category}
            </span>
          </p>
          {post.description && (
            <p className="mt-4 text-lg text-zinc-600">{post.description}</p>
          )}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <article
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />
      </main>

      <footer className="border-t bg-zinc-50 mt-12">
        <div className="max-w-2xl mx-auto px-6 py-8 text-sm text-zinc-600">
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
