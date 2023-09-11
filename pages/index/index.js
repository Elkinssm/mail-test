Page({
  data: {
    nombre: "",
    email: "",
    apellido: "",
    DocumentNumber: "",
    DocumentType: "",
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    const options = my.getLaunchOptionsSync();
    // Verificar si estás en el entorno de desarrollo (IDE)
    const isIDE = my.isIDE;
    console.info('App onLaunch');
    // const options = my.getLaunchOptionsSync();
    console.log(options);
    my.alert({
      content: JSON.stringify(options.referrerInfo.extraData.data)
    });
    console.log(JSON.stringify(options));
    console.log(`Nombre del cliente`, options.referrerInfo.extraData.data.response.usuario.nombre)
    const { nombre, correoClaro, apellido, DocumentNumber, DocumentType } = options.referrerInfo.extraData.data.response.usuario;
    my.setStorageSync({
      key: 'usuarioDatos',
      data: {
        nombre,
        email: correoClaro,
        apellido,
        DocumentNumber,
        DocumentType
      },
      success: () => {
        console.log('Datos de usuario guardados en el almacenamiento local.');
      },
      fail: (error) => {
        console.error('Error al guardar los datos en el almacenamiento local:', error);
      }
    });
    this.setData({
      nombre,
      email: correoClaro,
      apellido,
      DocumentNumber,
      DocumentType

    })
  },

  gotoPage() {
    my.navigateTo({
      url: '/pages/user/user'
    })
  },

  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  },

  goMail() {
    console.info("Entrando a sendEmail");
    // my.sendEmail({
    //   to: "Contactopyme.co@claro.com.co",
    //   completion: res => {
    //     const { code, message } = res;
    //     if (code === "0") {
    //       console.log(message);
    //     }
    //   }
    // });
    my.call('sendEmail', {
      to: 'test1@to.com,test2@to.com',
      cc: 'test3@cc.com,test4@cc.com',
      bcc: 'test5@bcc.com,test6@bcc.com',
      body: encodeURI('test content of your email.'),
      subject: encodeURI('test subject of the email.')
    }
    ).then((values) => {
      my.alert({
        content: JSON.stringify(values)
      });
    }).catch((value) => {
      my.alert({
        title: 'faile',
        content: JSON.stringify(value)
      });
    })



  },
  goToUrl() {
    console.info("Entrando a openUrl");

    my.call('openUrl', { url: "http://e-services.telmexla.com.co/Pages/Default.aspx?ReturnUrl=%2f" }).then((values) => {
    }).catch((value) => {
    })

  }
});
