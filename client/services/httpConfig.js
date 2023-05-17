export default class Http {
  async get(url) {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url);
      if (!res.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      // Manejar el error de alguna manera, por ejemplo, mostrando un mensaje de error en la interfaz de usuario.
      return null; // Otra opción es devolver un valor por defecto o un objeto vacío en caso de error.
    }
  }
}
