import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import packageJson from "@/package.json"

type Dependencies = Record<string, string>

function DependencyTable({ title, deps }: { title: string; deps: Dependencies }) {
  const sorted = Object.entries(deps).sort(([a], [b]) => a.localeCompare(b))

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">{title}</h2>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Package</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Version</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(([name, version]) => (
              <tr key={name} className="border-b border-border last:border-b-0">
                <td className="px-4 py-2.5 font-mono text-foreground">{name}</td>
                <td className="px-4 py-2.5 font-mono text-muted-foreground">{version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ColophonPage() {
  const { dependencies, devDependencies, version } = packageJson

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Colophon</h1>
        <p className="text-muted-foreground mb-12">
          v{version} &mdash; Built with the following dependencies.
        </p>

        <div className="flex flex-col gap-12">
          <DependencyTable title="Dependencies" deps={dependencies as Dependencies} />
          <DependencyTable title="Dev Dependencies" deps={devDependencies as Dependencies} />
        </div>
      </div>
    </main>
  )
}
