const http = require("http");
const dayjs = require("dayjs");

const PORT = 3000;

const sunucu = http.createServer((istek, yanit) => {
  console.log(`[${new Date().toISOString()}] ${istek.method} ${istek.url}`);

  if (istek.method !== "GET") {
    yanit.writeHead(405, {
      "Content-Type": "text/plain; charset=utf-8",
      "Allow": "GET"
    });
    return yanit.end("Yalnızca GET yöntemi desteklenmektedir.");
  }

  if (istek.url === "/") {
    yanit.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
< HEAD
    yanit.end('<h1>Web Sitemize Hos Geldiniz</h1><p><a href="/hakkimda">Hakkımda sayfasına git</a></p>');
    yanit.end('<h1>Hos Geldiniz</h1><p><a href="/hakkimda">Hakkımda sayfasına git</a></p>');
> baslik
  } 
  else if (istek.url === "/hakkimda") {
    yanit.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    yanit.end('<h1>Hakkımda</h1><p>Merhaba, ben Hasan Bal - Bilgisayar Muhendisligi. Bilgisayar Mühendisliği öğrencisiyim.</p>');
  } 
  else if (istek.url === "/api/ders") {
    yanit.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    yanit.end(JSON.stringify({ kod: "BMH231", ad: "Web Programlama", gun: "Cuma" }));
  } 
  else if (istek.url === "/api/agep") {
    const hedef = dayjs("2026-11-01");
    const bugun = dayjs();
    const kalanGun = hedef.diff(bugun, "day");

    yanit.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    yanit.end(JSON.stringify({
      sonTeslimTarihi: "01.11.2026",
      kalanGun: kalanGun
    }));
  } 
  else {
    yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    yanit.end("Sayfa bulunamadı");
  }
});

sunucu.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} üzerinde çalışıyor.`);
});
