const steps = [
  {
    title: "Choisissez votre article",
    body: "Sélectionnez un téléphone ou une moto parmi les offres et vérifiez l'acompte et le montant quotidien.",
  },
  {
    title: "Payez l'acompte",
    body: "Versez le petit acompte unique pour réserver votre article et démarrer votre plan.",
  },
  {
    title: "Payez chaque jour",
    body: "Remboursez un petit montant fixe chaque jour sur la durée choisie de 12 à 18 mois.",
  },
  {
    title: "Devenez propriétaire",
    body: "Une fois votre plan terminé, l'article est 100 % à vous, sans rien de plus à payer.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="font-medium text-primary">Comment ça marche</p>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Quatre étapes simples pour en devenir propriétaire
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
