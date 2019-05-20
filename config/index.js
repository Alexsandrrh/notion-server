const { argv } = require('yargs');

let config = {
  port: 80,
  mongodb: 'mongodb://notion_admin:supernotion007@ds042677.mlab.com:42677/notion',
  passport: {
    google: {
      clientID: '370186089850-qo637q3ubu5rgmiu6nc2bvbpt4tu56sv.apps.googleusercontent.com',
      clientSecret: 'DJ1aRlkUXge3sD0rVCA1sLBu',
      callbackURL: '/auth/google/callback'
    }
  },
  sessionConf: {
    secret: require('uuid').v4(),
    cookie: {
      maxAge: 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
  }
};

if (argv.devserver) {
  config.port = 3000;
}

module.exports = config;
