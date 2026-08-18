import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./section";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-surface-foreground">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <p className="font-display text-lg tracking-tight">
              {siteConfig.siteName.replace(/\.co$/, "")}
              <span className="text-accent">.co</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sitio informativo independiente de comparación de opciones de crédito en Colombia.
            </p>
          </div>

          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow text-muted-foreground">{group.title}</h2>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm transition-colors hover:text-accent-soft-foreground"
                      >
                        {item.label}
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
            {siteConfig.siteName} no es una entidad financiera, no otorga créditos y no aprueba
            solicitudes. La información publicada es orientativa y puede cambiar; las condiciones
            finales debes confirmarlas directamente con cada proveedor. Algunos enlaces son de
            afiliados y pueden generar una comisión para {siteConfig.siteName}.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.siteName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
