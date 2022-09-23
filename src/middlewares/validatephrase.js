exports.validate=(req,res,next)=>{
    if(req.query['phrase']!==undefined){
        if(req.query.phrase.length==0){
            res.status(400).json({})
        }else{
            return next()
        }
    }else{
        return next()
    }
}
exports.validatemethods=(req,res,next)=>{
    const methods = [];
    if(req.path !== '/contact'){
        methods.push('GET')
        methods.push('DELETE')
    }else{
        methods.push('POST')
    }
    let newSet = new Set(methods);
    if(newSet.has(req.method)){
        return next()
    }else{
        return res.status(405).json({})
    }
}