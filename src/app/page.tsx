"use client";

import { useState } from "react";

type HealthStatus = "idle" | "loading" | "ok" | "error";

export default function Home() {
  const [status, setStatus] = useState<HealthStatus>("idle");

  async function checkApi() {
    setStatus("loading");

    try {
      const response = await fetch("/api/health");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: unknown = await response.json();

      if (
        typeof data !== "object" ||
        data === null ||
        !("status" in data) ||
        data.status !== "ok"
      ) {
        throw new Error("Unexpected API response");
      }

      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">LIVE CODING</p>
        <h1>Starter project is ready.</h1>
        <p className="description">
          Replace this page with the interview task. The health endpoint exists only to verify that UI and API both work.
        </p>

        <div className="actions">
          <button type="button" onClick={checkApi} disabled={status === "loading"}>
            {status === "loading" ? "Checking…" : "Check API"}
          </button>
          <span className={`status status-${status}`} aria-live="polite">
            {status === "idle" && "Not checked"}
            {status === "loading" && "Request in progress"}
            {status === "ok" && "API OK"}
            {status === "error" && "API error"}
          </span>
        </div>
      </section>
    </main>
  );
}
