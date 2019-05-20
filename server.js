const express = require('express');
const app = express();
const { port, sessionConf } = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// init Passport Strategy
require('./modules/passport/google')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(cookieParser());
app.use(cors());
app.use(session(sessionConf));

app.use(passport.initialize());
app.use(passport.session());

// Init Routers
app.use('/', require('./router/index'));
app.use('/api', require('./router/api'));
app.use('/auth', require('./router/auth'));
app.use('/api', require('./api/doc'));
app.use('/api', require('./api/user'));

app.listen(port, () => {
  console.info(`NodeServer started...\nOn port http://localhost:${port}`);
});
