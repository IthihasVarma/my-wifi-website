import { KnowWifiAdvisor } from "@/components/know-wifi-advisor";
import { SectionHeading } from "@/components/section-heading";

export default function KnowYourWifiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Know your wifi"
        title="Understand Wi‑Fi security, generations, and when to upgrade"
        description="Compare handshakes like WPA2 and WPA3, learn the difference between WiFi 4 through WiFi 7, and get estimate-based guidance from your speed result."
      />

      <div className="mt-8">
        <KnowWifiAdvisor />
      </div>
    </div>
  );
}
