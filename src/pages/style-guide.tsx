import Link from "next/link";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import GsapButton from "@/components/v2/buttons/GsapButton";
import ArrowButton from "@/components/v2/buttons/ArrowButton";
import { PageSeo } from "@/components/v2/seo/PageSeo";
import { Badge } from "@/components/v2/ui/badge";
import { Button } from "@/components/v2/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/v2/ui/card";
import { Input } from "@/components/v2/ui/input";
import { Label } from "@/components/v2/ui/label";
import { Separator } from "@/components/v2/ui/separator";

const tokenSwatches: { className: string; label: string }[] = [
  { className: "bg-site-page", label: "site-page (page background)" },
  { className: "bg-site-surface", label: "site-surface (cards)" },
  { className: "bg-site-canvas", label: "site-canvas (loader / alt)" },
  { className: "bg-site-ink", label: "site-ink (primary text on dark)" },
  { className: "bg-muted-foreground", label: "muted-foreground (secondary text)" },
];

export default function StyleGuide() {
  return (
    <>
      <PageSeo
        title="Style guide"
        description="Design tokens, typography, and components used on softcruder.github.io."
      />
      <Navbar isSticky={true} isTransparent={false} />
      <main className="z-[-1] bg-site-page pb-16 pt-[100px] text-site-ink">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <header className="mb-12 border-b border-border pb-8">
            <p className="font-body text-xs uppercase tracking-widest text-site-ink-muted">
              Reference
            </p>
            <h1 className="big-title mt-2 block font-display font-medium">
              Style guide
            </h1>
            <p className="mt-4 max-w-2xl font-body text-site-ink-muted">
              Global standards: tokens in{" "}
              <code className="rounded bg-site-surface px-1.5 py-0.5 text-sm text-site-ink">
                src/styles/globals.css
              </code>
              , Tailwind v4 + shadcn under{" "}
              <code className="rounded bg-site-surface px-1.5 py-0.5 text-sm text-site-ink">
                src/components/v2/ui
              </code>
              . Token preview:{" "}
              <Link
                href="/design-system"
                className="text-site-ink underline underline-offset-4"
              >
                Design system
              </Link>
              .
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Site palette (Tailwind)
            </h2>
            <p className="font-body text-sm text-site-ink-muted">
              Prefer <code className="text-site-ink">site-*</code> and shadcn
              semantic colors over arbitrary{" "}
              <code className="text-site-ink">[var(--…)]</code> in class names.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {tokenSwatches.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-site-surface/50 p-3"
                >
                  <div
                    className={`size-12 shrink-0 rounded-md border border-border ${s.className}`}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="truncate font-mono text-xs text-site-ink">
                      {s.className}
                    </p>
                    <p className="truncate font-body text-xs text-site-ink-muted">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-12 bg-border" />

          <section className="space-y-6">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Typography
            </h2>
            <div className="space-y-4 rounded-xl border border-border bg-site-surface/40 p-6">
              <p className="font-display text-4xl font-semibold tracking-tight">
                Display: DM Sans (big-title, headings)
              </p>
              <p className="big-title block font-medium">Sample .big-title</p>
              <p className="font-body text-lg text-site-ink-muted">
                Body: Questrial for paragraphs, forms, and UI copy.
              </p>
              <p className="font-body text-sm uppercase tracking-wide text-site-ink-muted">
                Label style: uppercase, tracked
              </p>
            </div>
          </section>

          <Separator className="my-12 bg-border" />

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Primary actions (site)
            </h2>
            <p className="font-body text-sm text-site-ink-muted">
              Outlined GSAP hover button and SVG arrow link (hero, projects,
              about).
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <GsapButton text="Sample" href="/" target="_self" />
              <ArrowButton
                text="Arrow right"
                href="/about"
                direction="right"
                target="_self"
              />
              <ArrowButton
                text="Arrow left"
                href="/"
                direction="left"
                target="_self"
              />
            </div>
          </section>

          <Separator className="my-12 bg-border" />

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              shadcn / UI primitives
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button type="button">Default</Button>
              <Button type="button" variant="secondary">
                Secondary
              </Button>
              <Button type="button" variant="outline">
                Outline
              </Button>
              <Button type="button" variant="ghost">
                Ghost
              </Button>
              <Button type="button" variant="destructive">
                Destructive
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </section>

          <Separator className="my-12 bg-border" />

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Form pattern
            </h2>
            <Card className="max-w-md border-border bg-site-surface/40">
              <CardHeader>
                <CardTitle className="font-display">Example</CardTitle>
                <CardDescription className="font-body text-site-ink-muted">
                  Contact form uses the same borders and focus rings as these
                  inputs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sg-name">Name</Label>
                  <Input id="sg-name" placeholder="Ada Lovelace" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sg-email">Email</Label>
                  <Input
                    id="sg-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
