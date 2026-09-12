"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal animation="fadeUp">
          <SectionHeading eyebrow="Get in Touch">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-apple-text md:text-5xl">
              让我们一起打造 AI 驱动的产品。
            </h2>
          </SectionHeading>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-apple-muted">
            如果你正在寻找一位能把数据分析、AI 技术落地和产品思维结合在一起的创造者，欢迎随时联系。
          </p>

          <div className="mb-10 flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 text-lg text-apple-text transition-colors hover:text-apple-blue md:text-xl"
            >
              <Mail className="h-5 w-5 text-apple-muted group-hover:text-apple-blue" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg text-apple-text transition-colors hover:text-apple-blue md:text-xl"
            >
              <Github className="h-5 w-5 text-apple-muted group-hover:text-apple-blue" />
              GitHub / W3nbo
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
            </a>
          </div>

          <div className="flex gap-4">
            <MagneticButton
              href={`mailto:${profile.email}`}
              variant="primary"
            >
              发送邮件
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              variant="secondary"
            >
              GitHub
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-apple-subtext/10 pt-8 text-xs text-apple-muted md:flex-row">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Built with data, driven by empathy.</p>
        </footer>
      </div>
    </section>
  );
}
