import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PageSeo } from "@/components/v2/seo/PageSeo";
import { Badge } from "@/components/v2/ui/badge";
import { Button } from "@/components/v2/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/v2/ui/card";
import { Input } from "@/components/v2/ui/input";
import { Label } from "@/components/v2/ui/label";
import { Separator } from "@/components/v2/ui/separator";

const colorTokens = [
  { name: "background", className: "bg-background", fg: "text-foreground" },
  { name: "foreground", className: "bg-foreground", fg: "text-background" },
  { name: "primary", className: "bg-primary", fg: "text-primary-foreground" },
  {
    name: "secondary",
    className: "bg-secondary",
    fg: "text-secondary-foreground",
  },
  { name: "muted", className: "bg-muted", fg: "text-muted-foreground" },
  { name: "accent", className: "bg-accent", fg: "text-accent-foreground" },
  {
    name: "destructive",
    className: "bg-destructive",
    fg: "text-destructive-foreground",
  },
  { name: "border", className: "bg-border", fg: "text-foreground" },
  { name: "brand-bg", className: "bg-brand-bg", fg: "text-brand-ink" },
  { name: "brand-surface", className: "bg-brand-surface", fg: "text-brand-ink" },
  { name: "brand-muted (text)", className: "bg-card", fg: "text-brand-muted" },
];

export default function DesignSystemPage() {
  return (
    <>
      <PageSeo
        title="Design system"
        description="Tailwind CSS and shadcn/ui tokens and components for this site."
      />

      <div className="min-h-screen bg-background font-sans text-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
                Design system
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Tailwind + shadcn/ui
              </h1>
              <p className="mt-2 max-w-2xl font-body text-muted-foreground">
                Semantic tokens live in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                  src/styles/globals.css
                </code>
                . Primitives are in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                  src/components/v2/ui
                </code>
                .
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/" className="gap-2 normal-case">
                <ArrowLeft className="size-4" aria-hidden />
                Back home
              </Link>
            </Button>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Color</h2>
            <p className="font-body text-sm text-muted-foreground">
              HSL variables power shadcn components; brand hex aliases map the
              existing palette.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {colorTokens.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/40 p-3"
                >
                  <div
                    className={`size-12 shrink-0 rounded-md border border-border ${c.className}`}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{c.name}</p>
                    <p
                      className={`truncate font-body text-xs ${c.fg} opacity-90`}
                    >
                      Sample
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-10" />

          <section className="space-y-6">
            <h2 className="text-xl font-semibold tracking-tight">Typography</h2>
            <div className="space-y-3 rounded-xl border border-border bg-card/30 p-6">
              <p className="font-display text-4xl font-semibold tracking-tight">
                Display — DM Sans
              </p>
              <p className="font-body text-lg text-muted-foreground">
                Body copy uses Questrial for long-form readability.
              </p>
              <p className="text-sm text-muted-foreground">
                Muted helper text for labels and captions.
              </p>
            </div>
          </section>

          <Separator className="my-10" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Buttons</h2>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <Separator className="my-10" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Badges</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </section>

          <Separator className="my-10" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Form</h2>
            <Card className="max-w-md border-border bg-card/40">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                  Labels and inputs use the same radius and ring as buttons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ds-name">Name</Label>
                  <Input id="ds-name" placeholder="Ada Lovelace" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ds-email">Email</Label>
                  <Input
                    id="ds-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button type="button">Submit</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
