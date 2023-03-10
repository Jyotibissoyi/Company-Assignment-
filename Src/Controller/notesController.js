const Model= require("../Model/notesModel");



const createNote= async (req, res)=>{
    try {
        const bodyData= req.body;

        if(Object.keys(bodyData).length==0){
            return res.status(400).send({message:"Please provide body data"})
        }
        if(!bodyData.title){
            return res.status(400).send({message: "Title is mandatory"})
        }
        if(!bodyData.content){
            return res.status(400).send({message: "Title is mandatory"})
        }


        const storeData= await Model.create(bodyData);

        return res.status(200).send({message:"Successfull", Data: storeData})

        
    } catch (err) {
        return res.status(500).send({Message: err.Message})
    }
}


const fetchNote= async (req, res)=>{
    try {
        const Data= req.params.id

        
        const fetchData= await Model.findOne({Data:Data, isDelete:false}).select({_id:1,title:1,content:1,createdAt:1});

        return res.status(201).send({message:"Successfull", Data: fetchData})

        
    } catch (err) {
        return res.status(500).send({Message: err.Message})
    }
}

const updateNote= async (req, res)=>{
    try {
        const paramsData= req.params.id
        const bodyData= req.body
        const {title,content}=bodyData

        //const fetchData= await Model.findOne(Data);

        const storeData = await Model.updateOne({ _id: paramsData },
            { $set: { title:title,content:content } },
            { new: true });  

        return res.status(201).send({message:"Successfull", Data:storeData})

        
    } catch (err) {
        return res.status(500).send({Message: err.Message})
    }
}

const deleteNote= async (req, res)=>{
    try {
        const paramsData= req.params.id

        //const fetchData= await Model.findOne(Data);

        const storeData = await Model.findByIdAndUpdate({ _id: paramsData },
            { $set: { isDelete:true } },
            { new: true });  
        
        return res.status(201).send({message:"Successfull", Data:storeData})
        // let reviewdelete = await Model.findOneAndUpdate({ _id: paramsData, isDelete: false }, { isDelete: true, deletedAt: timeStamps })
        
        // await findbook.save() //save review data
        
       // res.status(200).send({ msg: "Review Deleted" })

        
    } catch (err) {
        return res.status(500).send({Message: err.Message})
    }
}


module.exports={createNote,fetchNote, updateNote, deleteNote}