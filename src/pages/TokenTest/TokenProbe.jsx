export default function TokenProbe() {
  return (
    <div className="p-6 space-y-4">
      <div className="bg-red-500 hover:bg-primary/90 text-white p-3 rounded">Tailwind OK</div>

      <div className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded">
        Token: bg-primary / text-primary-foreground
      </div>

      <div className="bg-background text-foreground border border-border p-3 rounded">
        Token: background/foreground/border
      </div>
    </div>
  )
}
