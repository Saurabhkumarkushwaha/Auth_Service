const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');
// const UserService = require('./services/user-service');
const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on port: ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

        //const service = new UserService();
        // const newToken = service.createToken({email: 'saurabh@admin.com', id: 1});
        // console.log("new token is:",newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdXJhYmhAYWRtaW4uY29tIiwiaWQiOjEsImlhdCI6MTc0Nzg4Njk0NCwiZXhwIjoxNzQ3ODg2OTc0fQ.6jqrzS6fSrSkU2JkxVLTsXXsjpCvxr1wkuAoR6gDEa0';
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer();