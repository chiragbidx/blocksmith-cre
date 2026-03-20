"use client";

export default function LoyaltyClient() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Loyalty Program</h1>
      <p className="mt-2 text-muted-foreground">No loyalty program set up.</p>
      <div className="mt-6">
        <a
          href="#"
          className="inline-block rounded-md bg-primary px-5 py-2.5 text-white font-semibold shadow hover:bg-primary/90 transition-colors"
        >
          Set Up Loyalty
        </a>
      </div>
    </section>
  );
}