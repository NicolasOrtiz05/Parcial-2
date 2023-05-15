export const getEliminarEstudiante = async (id) => {
    const url = `http://localhost:8080/estudiante/eliminar/${id}`
    const resp = await fetch(url)
    const data = await resp.json();

    const estudianteList = data.map(estudiante => ({
        id: estudiante.id,
        nombre: estudiante.nombre,
        semestre: estudiante.semestre,
        facultad: estudiante.facultad

    }));
    return estudianteList;
}
