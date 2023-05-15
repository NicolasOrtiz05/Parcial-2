export const actualizarEstudiante = async (id, estudianteActualizado) => {
    const url = `http://localhost:8080/estudiante/actualizar/${id}`
    const resp = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(estudianteActualizado)
    });
    const respuesta = await resp.json();
    console.log(respuesta);
    return estudianteActualizado;
  }