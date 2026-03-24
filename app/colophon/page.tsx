import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import packageJson from "@/package.json"

type Dependencies = Record<string, string>

function InfoTable({
  title,
  rows,
  headers,
}: {
  title: string
  rows: [string, string][]
  headers?: [string, string]
}) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">{title}</h2>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          {headers && (
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">{headers[0]}</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">{headers[1]}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-border last:border-b-0">
                <td className="px-4 py-2.5 font-medium text-muted-foreground w-1/2">{label}</td>
                <td className="px-4 py-2.5 font-mono text-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const techStack: [string, string][] = [
  ["Framework", "Next.js 16 (App Router)"],
  ["UI Library", "React 19"],
  ["Language", "TypeScript"],
  ["Styling", "Tailwind CSS v4"],
  ["Components", "shadcn/ui (Radix UI)"],
  ["Animations", "Framer Motion"],
  ["Runtime / Package Manager", "Bun"],
  ["Deployment", "Vercel"],
  ["Analytics", "Vercel Analytics"],
  ["Bootstrapped with", "v0"],
  ["Maintained with", "Claude Code"],
]

export default function ColophonPage() {
  const { dependencies, devDependencies, version } = packageJson

  const depRows = Object.entries(dependencies).sort(([a], [b]) => a.localeCompare(b)) as [string, string][]
  const devDepRows = Object.entries(devDependencies).sort(([a], [b]) => a.localeCompare(b)) as [string, string][]

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
          v{version} &mdash; How this site is built.
        </p>

        <div className="flex flex-col gap-12">
          <InfoTable title="Tech Stack" rows={techStack} />
          <InfoTable title="Dependencies" rows={depRows} headers={["Package", "Version"]} />
          <InfoTable title="Dev Dependencies" rows={devDepRows} headers={["Package", "Version"]} />
        </div>
      </div>
    </main>
  )
}
