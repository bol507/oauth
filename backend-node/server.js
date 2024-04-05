const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios')

dotenv.config({ path: `.env.local`});

const port = process.env.PORT
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const githubUrl = process.env.GITHUB_URL
const redirectUri = '/oauth/redirect'
//const refreshToken = process.env.REFRESH_TOKEN
const url = `${githubUrl}?client_id=${clientId}&client_secret=${clientSecret}&code=`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials:true, origin:true}));

app.get('/',(req,res) => res.send('Express Server'));
app.get('/oauth/redirect', async (req,res) => {
    await axios({
        method:"POST",
        url: url+ `${req.query.code}`,
        headers:{
            Accept: "application/json",
        }
    }).then((response)=>{
        res.redirect(`http://bdelgado.duckdns.org?access_token=${response.data.access_token}`);
    });
});

app.listen(port, () => 
    console.log(`listening on port ${port}`)
)