const express = require ('express'),
    cors = require('cors'),
    Data = require ('./controllers/dataCtrl')

const app = express();
const port = 3030

app.use(cors())
app.use(express.json())

//ENDPOINTS
app.get('/api/data', Data.getData)
app.post('/api/data', Data.addData)
app.delete('/api/data/:id', Data.deleteData)
app.put('/api/data/:id', Data.editData)


app.listen(port, () => console.log(`running on port:${port}`))