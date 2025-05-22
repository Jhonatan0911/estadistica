export function calcularDescriptivoCuantitativo(data: number[]) {
  const n = data.length;
  const media = data.reduce((sum, val) => sum + val, 0) / n;
  const varianza = data.reduce((sum, val) => sum + Math.pow(val - media, 2), 0) / (n - 1);
  const desviacionEstandar = Math.sqrt(varianza);

  return {
    tipo: 'Descriptivo Cuantitativo',
    media,
    desviacionEstandar,
    varianza,
    n
  };
}

export function calcularDescriptivoCualitativo(data: string[]) {
  const frecuencia: Record<string, number> = {};
  data.forEach(val => {
    frecuencia[val] = (frecuencia[val] || 0) + 1;
  });

  const total = data.length;
  const porcentajes = Object.entries(frecuencia).map(([categoria, count]) => ({
    categoria,
    frecuencia: count,
    porcentaje: ((count / total) * 100).toFixed(2)
  }));

  return {
    tipo: 'Descriptivo Cualitativo',
    total,
    porcentajes
  };
}

export function calcularIntervaloConfianza(media: number, desviacion: number, n: number, z = 1.96) {
  const error = z * (desviacion / Math.sqrt(n));
  return {
    tipo: 'Intervalo de confianza',
    intervalo: [media - error, media + error],
    error
  };
}

export function pruebaTStudent(media1: number, media2: number, s1: number, s2: number, n1: number, n2: number) {
  const sPooled = Math.sqrt(((n1 - 1) * s1 ** 2 + (n2 - 1) * s2 ** 2) / (n1 + n2 - 2));
  const t = (media1 - media2) / (sPooled * Math.sqrt(1 / n1 + 1 / n2));

  return {
    tipo: 'Prueba t de Student',
    t,
    sPooled,
    conclusion: Math.abs(t) > 1.96 ? 'Se rechaza H₀' : 'No se rechaza H₀'
  };
}
