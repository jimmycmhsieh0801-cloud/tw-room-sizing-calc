function calcRoomSizing(ping, factor = 1.0) {
  const p = Math.max(0, Number(ping) || 0);
  const f = Math.max(1.0, Number(factor) || 1.0);
  const kw = Math.round(p * 0.58 * f * 10) / 10;
  const tons = Math.round((kw / 2.8) * 10) / 10;
  const btu = Math.round(kw * 3412);
  const dehumLiters = Math.round(p * 1.0 * (f > 1 ? 1.15 : 1.0));
  return { kw, tons, btu, dehumLiters };
}
if (typeof document !== "undefined") {
  const pingInput = document.getElementById("pingInput");
  const envSelect = document.getElementById("envSelect");
  function render() {
    const r = calcRoomSizing(pingInput.value, envSelect.value);
    document.getElementById("acKwEl").textContent = `${r.kw} kW 以上`;
    document.getElementById("acTonEl").textContent = `約 ${r.tons} 噸 (${r.btu.toLocaleString()} BTU)`;
    document.getElementById("dehumEl").textContent = `${r.dehumLiters} 公升 / 日 以上`;
  }
  [pingInput, envSelect].forEach(el => el.addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcRoomSizing };