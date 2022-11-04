function Calcular() {
  let Consumo = $('#consumo').val()
  let Eficiencia = $('#eficiencia').val();
  let HorasDia = $('#horasdia').val();
  let KWH = $('#kwh').val();

  let cdia = (((Consumo / Eficiencia) * HorasDia) * KWH) / 1000
  let cmes = cdia * 30
  $('#cdia').html(`R$${cdia.toFixed(2)} /dia.`);
  $('#cmes').html(`R$${cmes.toFixed(2)} /mês.`);
}