module.exports = {
  servers: {
    one: {
       'host': '52.27.186.20',
       'username': 'ubuntu',
       'pem': 'Maura.pem',
       'password': 'password',
    }
  },

  meteor: {
    name: 'maura',
    path: '.',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },
    env: {
    "PORT": 80,
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://maurarigney.com',
      //MONGO_URL: 'mongodb://nickmflorin:N1cholas!@34.209.87.174/meteor',
    },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
      // imagePort: 80, // (default: 80, some images EXPOSE different ports)
    },
    deployCheckWaitTime: 60,
    enableUploadProgressBar: false
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
