const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, '../database/fakedatabase.js'), 'utf-8');
const database = JSON.parse(data);

exports.readDB=()=>database;

exports.sortList=(db)=> db.sort((contact,nextcontact)=> contact.name.localeCompare(nextcontact.name));

exports.sortlistbycoincidence=(phrase)=>{
    //const db = this.readDB()
    let coincidences = database.filter(contact => contact.name.toLowerCase().match(phrase.toLocaleLowerCase()));
    return coincidences;
}

exports.savecontact=(req)=>{
    const contact={}
    contact.id=req.body.id
    contact.name=req.body.name
    contact.phone=req.body.phone
    contact.address=req.body.address
    database.push(contact)
}

exports.deletecontact=(req)=>{
    let contactid=req.params.contact_id
    const contact=database.find((contact)=>contact.id==contactid)
    if(contact!==undefined){
        const contact_index = database.indexOf(contact)
        
        database.splice(contact_index,1)
        return {
            msg:"Borrado Exitoso",
            status:204
        }
    }else{
        return {
            msg:"Contacto no encontrado",
            status:404
        }
    }
}
