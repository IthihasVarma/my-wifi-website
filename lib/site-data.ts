export type ToolCard = {
  id: number;
  title: string;
  description: string;
  cta: string;
  available: boolean;
};

export type TroubleshootingItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  type: "Blog" | "Video";
  excerpt: string;
  date: string;
};

export const siteName = "CandelaField";
export const brandColor = "#0B3B2E";
export const tagline = "Mobile Companion for Network Testing";

export const mainActions = [
  {
    href: "/speedtest",
    title: "Speedtest and tools",
    description: "Run a live Wi-Fi speed test and explore our network testbed tools.",
  },
  {
    href: "/troubleshoot",
    title: "Troubleshoot / solution",
    description: "Search common Wi-Fi questions and find practical answers fast.",
  },
  {
    href: "/know-your-wifi",
    title: "Know your wifi",
    description: "Understand Wi-Fi security, generations, and when an upgrade makes sense.",
  },
];

export const toolCards: ToolCard[] = [
  {
    id: 1,
    title: "WiFi Speed Test",
    description:
      "Measure ping, download speed, and upload speed in real time right in the browser.",
    cta: "Run now",
    available: true,
  },
  {
    id: 2,
    title: "TR-398 WiFi Testbed",
    description:
      "The TR-398 test plan qualifies the performance of WiFi APs. Candela LANforge provides an automated solution. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
  {
    id: 3,
    title: "Cell Network Emulator and WiFi Testbed",
    description:
      "Combine WiFi and cellular network components in a single testbed for throughput, handover, and other tests. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
  {
    id: 4,
    title: "WiFi Station Device Testing",
    description:
      "Comprehensive WiFi station device testing for stability, roaming, and performance. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
  {
    id: 5,
    title: "Large Venue WiFi Testbed",
    description:
      "Stadium networks handle thousands of users. Candela LANforge systems can do large-scale over-the-air testing. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
  {
    id: 6,
    title: "WiFi Mesh Testing",
    description:
      "Emulate mesh node areas with isolation chambers while LANforge emulates client stations. Use graphical controls to emulate physical distance. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
  {
    id: 7,
    title: "Mass Transit WiFi Mesh",
    description:
      "Test WiFi coverage for a transportation system. LANforge emulates hundreds of roaming users in small spaces for long duration. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
  {
    id: 8,
    title: "Testing Internet Gaming",
    description:
      "Isolate and test one network variable at a time, all emulated by LANforge: RF stability, RF performance, and upstream network conditions. Contact us for pricing.",
    cta: "Contact us for pricing",
    available: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-read-a-speed-test",
    title: "How to read a Wi-Fi speed test the right way",
    type: "Blog",
    excerpt: "Learn what ping, download, and upload really mean for streaming, calls, and gaming.",
    date: "Mar 2026",
  },
  {
    slug: "wifi4-vs-wifi6",
    title: "WiFi 4 vs WiFi 5 vs WiFi 6: what should you upgrade to?",
    type: "Blog",
    excerpt: "A quick guide to older and modern router generations and when an upgrade is worth it.",
    date: "Mar 2026",
  },
  {
    slug: "youtube-router-placement",
    title: "Best router placement tips for stronger coverage",
    type: "Video",
    excerpt: "A short video breakdown of the simple placement mistakes that weaken signal at home.",
    date: "Mar 2026",
  },
  {
    slug: "busy-hour-slowdowns",
    title: "Why Wi-Fi slows down at night and during peak hours",
    type: "Blog",
    excerpt: "Understand congestion, nearby interference, and how to reduce evening slowdowns.",
    date: "Mar 2026",
  },
  {
    slug: "gaming-latency-guide",
    title: "Gaming lag? Start with latency, not just download speed",
    type: "Video",
    excerpt: "See why ping spikes can ruin online play even when your Mbps numbers look decent.",
    date: "Mar 2026",
  },
];

export const securityRows = [
  ["Open System", "❌ None", "Public Wi-Fi"],
  ["WEP", "❌ Broken", "Obsolete"],
  ["WPA 4-way", "⚠️ Medium", "Rare"],
  ["WPA2 4-way", "✅ Strong", "Very common"],
  ["WPA3 SAE", "🔐 Very strong", "Modern routers"],
  ["EAP", "🔐🔐 Enterprise-level", "Offices"],
] as const;

export const wifiGenerations = [
  {
    name: "WiFi 4",
    note: "Older generation. Fine for basic browsing, but can struggle with many devices and modern streaming.",
    upgrade: "Consider WiFi 5 or WiFi 6 if you have a busy home or fast broadband plan.",
  },
  {
    name: "WiFi 5",
    note: "Still solid for most homes and everyday streaming.",
    upgrade: "Upgrade to WiFi 6 for better efficiency, lower latency, and more devices.",
  },
  {
    name: "WiFi 6 / 6E",
    note: "Modern and efficient. Great for smart homes, gaming, and multiple active users.",
    upgrade: "Usually all good—just make sure placement and ISP speed are not the bottleneck.",
  },
  {
    name: "WiFi 7",
    note: "Top-end generation with very high throughput and advanced multi-link features.",
    upgrade: "Excellent shape if your devices support it.",
  },
];

export const troubleshootingItems: TroubleshootingItem[] = [
  {
    id: "connectivity_no_internet",
    category: "Connectivity Problems",
    question: "Why does WiFi show connected but there is no internet?",
    answer:
      "This usually means your device reached the router but the router could not reach the internet, or DNS failed to resolve websites. Restart the modem and router, check whether other devices are also offline, forget and reconnect to the network, and try switching DNS to a public provider such as 8.8.8.8 or 1.1.1.1.",
  },
  {
    id: "connectivity_only_one_device",
    category: "Connectivity Problems",
    question: "Why is only one device unable to connect to the internet?",
    answer:
      "When only one device is affected, the problem is often a stale saved network, incorrect IP settings, captive portal issue, or a device-specific software problem. Turn WiFi off and back on, forget the saved network and reconnect, renew the IP if available, and restart the device.",
  },
  {
    id: "slow_good_signal",
    category: "Slow Internet Speed",
    question: "Why is my WiFi slow even with good signal?",
    answer:
      "Strong signal does not always mean fast internet. Slowdowns with good signal are commonly caused by congestion, limited ISP bandwidth, older router hardware, background downloads, or too many active devices. Prefer the 5 GHz or 6 GHz band when available and test again closer to the router.",
  },
  {
    id: "slow_peak_hours",
    category: "Slow Internet Speed",
    question: "Why does WiFi become slower at night or during busy hours?",
    answer:
      "Speeds often drop when many nearby networks or devices are competing for airtime, or when ISP demand increases in the evening. Changing the router channel, moving critical devices to 5 GHz or 6 GHz, and limiting simultaneous streaming can help.",
  },
  {
    id: "disconnects_randomly",
    category: "Frequent Disconnections",
    question: "Why does WiFi disconnect randomly?",
    answer:
      "Random disconnections are often caused by weak coverage, interference, aggressive power-saving behavior, unstable router firmware, or overloaded routers. Move closer to the router, update router firmware, restart the router, and compare behavior on other devices.",
  },
  {
    id: "disconnects_after_sleep",
    category: "Frequent Disconnections",
    question: "Why does WiFi disconnect after the phone sleeps?",
    answer:
      "This often happens because of battery optimization, WiFi sleep settings, or a saved-network bug. Make sure WiFi stays on during sleep if the device allows it, reduce aggressive battery restrictions, reconnect to the network, and install pending system updates.",
  },
  {
    id: "weak_far_rooms",
    category: "Weak Signal",
    question: "Why is my WiFi weak in some rooms?",
    answer:
      "Walls, floors, metal objects, mirrors, and poor router placement can weaken coverage dramatically. Place the router in a central open area, raise it above furniture, avoid cabinets and corners, and use a mesh node or extender if needed.",
  },
  {
    id: "weak_even_near_router",
    category: "Weak Signal",
    question: "Why is signal weak even near the router?",
    answer:
      "Weak signal near the router can point to interference, failing router hardware, incorrect antenna position, or a device-side issue. Restart both the device and router, move the router away from TVs or microwaves, and compare with another device.",
  },
  {
    id: "auth_wrong_password",
    category: "Authentication Errors",
    question: "Why do I get an authentication error even when the password looks correct?",
    answer:
      "Authentication errors can happen when the saved password is outdated, the router security mode changed, the keyboard added a wrong character, or the saved network profile became corrupted. Forget the network and enter the password again carefully.",
  },
  {
    id: "auth_after_router_reset",
    category: "Authentication Errors",
    question: "Why did authentication errors start after router changes or reset?",
    answer:
      "After a router reset, the SSID, password, band settings, or security mode may have changed even if the network name looks familiar. Remove the saved network and reconnect as if it were a new network.",
  },
  {
    id: "router_needs_restart",
    category: "Router Problems",
    question: "Why does WiFi improve only after restarting the router?",
    answer:
      "If a restart temporarily fixes the network, the router may be overheating, overloaded, outdated, or affected by firmware bugs. Make sure it has airflow, install firmware updates, and consider replacement if the issue keeps coming back.",
  },
  {
    id: "router_old_hardware",
    category: "Router Problems",
    question: "How do I know if the router is the bottleneck?",
    answer:
      "Older routers often struggle with many devices, higher-speed broadband plans, and crowded apartment environments. If signal is decent but speeds stay low or latency spikes under load, the router may be the limiting factor.",
  },
  {
    id: "dns_sites_not_loading",
    category: "DNS Problems",
    question: "Why do some websites fail to load while WiFi seems connected?",
    answer:
      "This pattern often points to DNS failure rather than a full internet outage. Restart the router, test whether apps work while websites fail, and change DNS to a public service like 8.8.8.8 or 1.1.1.1 if the issue persists.",
  },
  {
    id: "dns_slow_first_load",
    category: "DNS Problems",
    question: "Why are websites slow to start loading but fast afterward?",
    answer:
      "When the first load is slow but later loads feel normal, DNS lookup delays are a common cause. Switching to a faster DNS provider, restarting the router, or clearing stale network settings can help.",
  },
];
