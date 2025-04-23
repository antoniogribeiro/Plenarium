self.addEventListener("install", e => {
    console.log("Service Worker instalado");
  });
  
  self.addEventListener("fetch", e => {
    // Pode ser usado para cache no futuro
  });
  