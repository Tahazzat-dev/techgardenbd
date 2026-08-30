import Link from "next/link";

type CtaBannerProps = {
  id?: string;
  title: string;
  description: string;
  cta: {
    href: string;
    label: string;
  };
};

export function CtaBanner({id, title, description, cta}: CtaBannerProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-md bg-primary p-8 text-primary-foreground md:p-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-3 max-w-2xl opacity-90">{description}</p>
        <Link
          href={cta.href}
          className="mt-6 inline-flex rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
