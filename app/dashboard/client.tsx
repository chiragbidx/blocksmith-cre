"use client";

export default function Client({ greeting, firstName }: { greeting: string; firstName: string }) {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Welcome to BrewCRM</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Manage your customers, loyalty program, and promotions—all in one place.
      </p>
      <div className="mt-8 text-base">
        <span className="font-medium">{greeting}, {firstName}!</span>
        <span className="ml-2 text-muted-foreground">
          BrewCRM is your hub for building lasting customer relationships and growing your coffee shop.
        </span>
      </div>
      <div className="mt-10">
        <a
          href="/dashboard/customers"
          className="inline-block rounded-md bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-primary/90 transition-colors"
        >
          Add Your First Customer
        </a>
      </div>
    </section>
  );
}