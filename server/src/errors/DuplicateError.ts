
const handleDuplicateError =(error:any)=>{

    const match =error.message.match(/"([^"]*)"/);
    const extractedMessage  = match  && match[1];


    const errorSources = [
        {
            path:'',
            message:`${extractedMessage} is already exists.`
        }
    ]

    const statusCode =400;
    return {
        statusCode,
        message:"Invalid ID",
        errorSources
    }
}