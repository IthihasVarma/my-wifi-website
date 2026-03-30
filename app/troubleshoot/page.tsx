import { SectionHeading } from "@/components/section-heading";
import { TroubleshootingBrowser } from "@/components/troubleshooting-browser";

export default function TroubleshootPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Troubleshoot / solution"
        title="Search the Q&A list and find practical Wi‑Fi fixes"
        description="Browse the expanded database by category and open each answer for step-by-step troubleshooting help."
      />

      <div className="mt-8">
        <TroubleshootingBrowser />
      </div>
    </div>
  );
}
