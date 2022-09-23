const {response, request} = require('express');
const functionsaux = require('../helpers/functions')

exports.index=(req=request,res=response)=>{
    const contacts=functionsaux.readDB()
    if(!req.query.phrase){
        const sortedcontacts=functionsaux.sortList(contacts)
        return res.json(sortedcontacts)
    }else{
        const coincidencescontacts=functionsaux.sortlistbycoincidence(req.query.phrase)
        return res.json(coincidencescontacts)
    }
}

exports.search=(req=request,res=response)=>{
    const contacts=functionsaux.readDB()
    const contactid=req.params.contact_id
    const contact=contacts.find(contact=>contact.id==contactid)
    if(contact==undefined){
        return res.status(404).json({
            msg:"404 not found"
        })
    }
    return res.json(contact)
}

exports.create=(req=request,res=response)=>{
    functionsaux.savecontact(req)
    return res.json({
        msg:"Guardado con exito"
    })
}

exports.delete=(req=request,res=response)=>{
    const result=functionsaux.deletecontact(req)
    return res.status(result.status).json({
        msg:result.msg
    })
}

exports.notfound=(req=request,res=response)=>{
    return res.status(404).json({
        msg:"404 Not Found"
    })
}