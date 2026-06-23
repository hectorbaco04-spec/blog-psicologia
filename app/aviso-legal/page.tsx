import Link from "next/link";

export const metadata = {
  title: "Aviso Legal",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-zinc-50">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-zinc-900 mt-4">Aviso Legal</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12 prose prose-sm max-w-none">
        <h2>Descargo de responsabilidad</h2>
        <p>
          Este contenido tiene carácter exclusivamente divulgativo e informativo.
          No constituye diagnóstico, tratamiento, asesoramiento ni prescripción de
          índole médica o psicológica.
        </p>

        <h2>Limitaciones</h2>
        <p>
          Los artículos en este blog no pretenden reemplazar la consulta con
          profesionales de la salud mental. Si experimentas dificultades emocionales,
          ansiedad, depresión u otros problemas de salud mental, te recomendamos
          consultar con un psicólogo, psiquiatra u otro profesional de la salud
          mental cualificado.
        </p>

        <h2>Información médica</h2>
        <p>
          Nada de lo contenido en este sitio debe interpretarse como consejo médico.
          Si tienes dudas sobre tu salud, consulta siempre a un profesional
          sanitario.
        </p>

        <h2>Cambios en el contenido</h2>
        <p>
          Nos reservamos el derecho de modificar cualquier contenido en cualquier
          momento sin previo aviso.
        </p>

        <h2>Enlaces externos</h2>
        <p>
          Este sitio puede contener enlaces a recursos externos. No somos
          responsables del contenido de sitios web externos.
        </p>
      </main>

      <footer className="border-t bg-zinc-50 mt-12">
        <div className="max-w-2xl mx-auto px-6 py-8 text-sm text-zinc-600">
          <p>
            Este contenido tiene carácter divulgativo. No constituye diagnóstico,
            tratamiento ni asesoramiento profesional.
          </p>
        </div>
      </footer>
    </div>
  );
}
