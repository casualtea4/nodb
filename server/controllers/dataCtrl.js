let data= [
    {
        date: 11/22/2019,
        event: 'breakfast',
        completed: false
    },
    {
        date: 11/22/2019,
        even: 'lunch',
        completed: false
    }
]
let id=0

module.exports={
    getData:(req,res)=>{
        res.status(200).send(data)
    },
    addData:(req,res)=>{
        const addedData ={
            id: id++,
            date:11/22/2019,
            event: 'dinner',
            completed: true,
        }
        data.push(addedData);
        res.status(200).send(data)
    },
    deleteData:(req,res) => {
        const{id}=req.params;
        const index = data.findIndex(e => e.id === +id);
        data.splice(index,1);
        res.status(200).send(data);
    },
    editData:(req,res) =>{
        
    }

}

// module.exports = {
//     updateData: (req.res) => {
//         let {id} = req.params
//         let index = data.findIndex(e => +id===e.id)
//         if(index ===-1) res.status(404).send('not found')
//         data[index].completed = !data[index].completed
//         res.status(200).send(data)

//     }
// }








// const axios = require('axios')
// const data = require('../../data')

// const getData=(req,res) => {
//     const event = data.find(val=>val.id===parseInt(req.params.id))
//     if(!event){
//         return res.status(500).send('notfound')
//     }
//     res.status(200).send(event)
// }

// module.exports = getData