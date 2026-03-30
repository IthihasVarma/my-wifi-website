export type SpeedTestResult = {
  pingMs: number;
  downloadMbps: number;
  uploadMbps: number;
  qualityLabel: string;
  summary: string;
  estimatedWifi: string;
};

export function bytesToMbps(bytes: number, elapsedMs: number) {
  if (elapsedMs <= 0) return 0;
  const seconds = elapsedMs / 1000;
  const megabits = (bytes * 8) / 1_000_000;
  return Number((megabits / seconds).toFixed(1));
}

export function interpretSpeed(downloadMbps: number) {
  if (downloadMbps < 10) return "Slow";
  if (downloadMbps < 50) return "Good";
  if (downloadMbps < 150) return "Very Good";
  return "Excellent";
}

export function buildSummary(downloadMbps: number, uploadMbps: number, pingMs: number) {
  const speedMessage =
    downloadMbps < 10
      ? "Your connection may struggle with HD streaming or large downloads."
      : downloadMbps < 50
        ? "Your connection should handle everyday browsing, calls, and streaming comfortably."
        : downloadMbps < 150
          ? "Your connection is strong for streaming, gaming, and multiple active devices."
          : "Your connection is excellent and should feel fast across demanding tasks.";

  const latencyMessage =
    pingMs <= 20
      ? "Latency looks strong for gaming and real-time calls."
      : pingMs <= 50
        ? "Latency is healthy for most online activities."
        : "Latency is a bit high, so interactive apps may feel less responsive.";

  const uploadMessage =
    uploadMbps < 5
      ? "Upload speed is limited for backups or large file sharing."
      : uploadMbps < 20
        ? "Upload speed is decent for calls and cloud sync."
        : "Upload speed is healthy for calls, backups, and sharing large files.";

  return `${speedMessage} ${latencyMessage} ${uploadMessage}`;
}

export function estimateWifiGeneration(downloadMbps: number, pingMs: number) {
  if (downloadMbps < 25 || pingMs > 80) {
    return "This looks more like an older or congested Wi‑Fi setup. If you are still on WiFi 4 gear, moving to WiFi 5 or WiFi 6 could improve stability and speed.";
  }

  if (downloadMbps < 150) {
    return "This is in the range many WiFi 5 or entry WiFi 6 setups deliver. If you already have WiFi 5, placement and channel tuning may help before upgrading.";
  }

  return "Your result looks healthy for a modern WiFi 6 or better setup. If the network feels stable, you are likely in good shape.";
}
