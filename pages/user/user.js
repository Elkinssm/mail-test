Page({
  data: {
    nombre: "",
    email: "",
    apellido: "",
    DocumentNumber: "",
    DocumentType: "",
  },
  onLoad() {
    my.getStorage({
      key: 'usuarioDatos',
      success: (res) => {
        console.log(res.data)
        const { nombre, email, apellido, DocumentNumber, DocumentType } = res.data;
        console.log('Datos del usuario recuperados:', nombre, email, apellido, DocumentNumber, DocumentType);
        this.setData({
          nombre,
          email,
          apellido,
          DocumentNumber,
          DocumentType
        })
      },
      fail: (error) => {
        console.error('Error al recuperar los datos del almacenamiento local:', error);
      }
    });

  },




});
