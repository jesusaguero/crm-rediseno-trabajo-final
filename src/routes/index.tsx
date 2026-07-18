import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BM&L · Prototipo Senda" },
      { name: "description", content: "Prototipo frontend del rediseño UX 'Senda' para el CRM interno BM&L." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/prototype/login.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif", background: "#F5F6F4" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#16293F" }}>BM&amp;L · Prototipo</h1>
        <p>
          Redirigiendo al prototipo…{" "}
          <a href="/prototype/login.html" style={{ color: "#2AA79B", fontWeight: 600 }}>
            Abrir manualmente
          </a>
        </p>
      </div>
    </div>
  );
}
