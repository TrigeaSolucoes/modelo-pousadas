// Barra de reserva: datas e hóspedes viram a mensagem do WhatsApp.
const form = document.querySelector(".reserva");
if (form) {
  const hoje = new Date().toISOString().slice(0, 10);
  form.chegada.min = hoje;
  form.chegada.addEventListener("change", () => { form.saida.min = form.chegada.value; });
  const br = (v) => v.split("-").reverse().join("/");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const url = new URL(form.dataset.whatsapp);
    url.searchParams.set("text", `Olá! Tem quarto de ${br(form.chegada.value)} a ${br(form.saida.value)} para ${form.hospedes.value}?`);
    window.open(url.toString(), "_blank", "noopener");
  });
}
