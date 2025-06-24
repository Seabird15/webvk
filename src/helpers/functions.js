import { collection, getDocs, addDoc } from 'firebase/firestore'

/**
 * Obtiene todos los documentos de una colección de Firestore.
 * @param {object} db Instancia de Firestore.
 * @param {string} nombreColeccion Nombre de la colección.
 * @returns {Promise<Array>} Array de documentos con id y datos.
 */
export const obtenerDocumentos = async (db, nombreColeccion) => {
  try {
    const querySnapshot = await getDocs(collection(db, nombreColeccion))
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error(`Error al obtener documentos de ${nombreColeccion}:`, e)
    return []
  }
}


/**
 * Agrega una jugadora a la colección especificada.
 * @param {object} db Instancia de Firestore.
 * @param {string} nombreColeccion Nombre de la colección.
 * @param {object} jugadora Objeto con los campos: nombre, apellido, nacimiento (string), dorsal.
 * @returns {Promise<string|null>} ID del documento agregado o null si hay error.
 */
export const agregarJugadora = async (db, nombreColeccion, jugadora) => {
  try {
    const docRef = await addDoc(collection(db, nombreColeccion), {
      nombre: jugadora.nombre,
      apellido: jugadora.apellido,
      nacimiento: jugadora.nacimiento,
      dorsal: jugadora.dorsal
    })
    return docRef.id
  } catch (e) {
    console.error(`Error al agregar jugadora en ${nombreColeccion}:`, e)
    return null
  }
}