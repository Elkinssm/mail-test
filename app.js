App({
  data: {
    nombre: " "
  },
  onLaunch() {
    const options = my.getLaunchOptionsSync();
    // Verificar si estás en el entorno de desarrollo (IDE)
    const isIDE = my.isIDE;
    console.log(isIDE)
    // console.info('App onLaunch');
    // const options = my.getLaunchOptionsSync();
    console.log(options);
    my.alert({
      content: JSON.stringify(options.referrerInfo.extraData.data)
    });
    console.log(JSON.stringify(options));
    console.log(`Nombre del cliente`, options.referrerInfo.extraData.data.response.usuario.nombre)

  },
  onShow(options) {
    my.getSystemInfo({
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
    my.getAuthCode({
      scopes: ['User_Customer_KYC_Info'],
      success: (res) => {
        my.alert({
          content: res.authCode,
        });
      },
      fail: (res) => {
        console.log(res.authErrorScopes)
      },
    });
  },
  getAuthCode() {
    my.getAuthCode({
      scopes: 'User_Customer_KYC_Info',
      success: res => {
        const authCode = res.authCode;
        // 在服务端获取用户信息
        my.request({
          // 你的服务器地址
          url: 'https://yourserveraddress',
          data: {
            authCode,
          },
          success(res) {
            // 获取需要的用户信息
            console.log(res)
          }
        })
      },
      fail: err => {
        console.log('my.getAuthCode 调用失败', err)
      }
    });
  }


});
