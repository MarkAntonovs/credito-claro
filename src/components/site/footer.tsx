import { Container } from "./section";

const GROUPS = [
  {
    title: "Comparar",
    links: ["Créditos online", "Pensionados", "Reportados", "Independientes"],
  },
  {
    title: "Contenido",
    links: ["Guías", "Tasas de interés", "Tasa de usura", "Historial crediticio"],
  },
  {
    title: "Transparencia",
    links: ["Metodología", "Política editorial", "Divulgación de afiliados", "Sobre nosotros"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Contacto"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-surface-foreground">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <p className="font-display text-lg tracking-tight">
              ColombiaCredito<span className="text-accent">.co</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sitio informativo independiente de comparación de opciones de crédito en Colombia.
            </p>
          </div>

          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow text-muted-foreground">{group.title}</h2>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm transition-colors hover:text-accent-soft-foreground">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            ColombiaCredito.co no es una entidad financiera, no otorga créditos y no aprueba
            solicitudes. La información publicada es orientativa y puede cambiar; las condiciones
            finales debes confirmarlas directamente con cada proveedor. Algunos enlaces son de
            afiliados.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} ColombiaCredito.co
          </p>
        </div>
      </Container>
    </footer>
  );
}
