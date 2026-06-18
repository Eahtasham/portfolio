"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy, FileText, MapPin } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { SocialIcon } from "@/components/icons";
import { Band } from "@/components/ui/band";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="top">
      <Band topBorder={false} className="px-5 py-8 sm:px-7 sm:py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="size-24 shrink-0 rounded-full border border-border bg-subtle object-cover sm:size-28"
        />
        <div className="min-w-0">
          <p className="text-sm text-muted">{profile.greeting}</p>
          <h1 className="mt-0.5 text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-muted">{profile.role}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              aria-label="Copy email address"
            >
              {profile.email}
              {copied ? (
                <Check className="size-3.5 text-accent" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/90">
        {profile.bio}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Let&apos;s Connect
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-subtle"
        >
          <FileText className="size-4" />
          Résumé
        </a>
        <div className="ml-auto flex items-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-foreground"
            >
              <SocialIcon name={link.icon} className="size-4.5" />
            </a>
          ))}
        </div>
      </div>
      </Band>
    </section>
  );
}
