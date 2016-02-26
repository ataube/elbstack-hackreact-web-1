import sendbird from 'sendbird'

export function joinChat() {

  return () => {
    setTimeout(() => {
      console.log('joinChannel', sendbird)

      sendbird.joinChannel(
        'af734.main',
        {
          successFunc: function successFunc2(data) {
            console.log(data)

            sendbird.connect({
              successFunc: function successFunc(data2) {
                console.log(data2)

                sendbird.getMessageLoadMore({
                  limit: 20,
                  successFunc: function sf3(data3) {
                    console.log(data3)
                  },
                  errorFunc: function ef3(status, error) {
                    console.log(status, error)
                  }
                })
              },
              errorFunc: function errorFunc2(status, error) {
                console.log(status, error)
              }
            })
          },
          errorFunc: function errorFunc(status, error) {
            console.log(status, error)
          }
        }
      )
    }, 2000)
  }
}
