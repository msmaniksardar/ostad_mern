import fs from "fs";

export const homePage = async (req, res)=>{
            res.json({
                Text: "This Is Home Page "
            })
    res.end();

}

export const aboutPage = async(req,res)=>{
    res.json({
        Text: "This is About Page"
    })
    res.end();

}

export const contactPage = async ( req, res)=> {
    res.json({
        Text:"This is Contact Page"
    })

    res.end();
}

export const writefileMethod = async (req,res)=>{

        fs.writeFile("../src/storage/demo.txt", "Hello world", (error)=>{
            if(error){
                console.log(`Failed To Save File ${error}`)
            }else{
                console.log('File Save Successfully')
            }
        });
}