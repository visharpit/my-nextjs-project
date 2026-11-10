export default function handler(req, res){
    res.status(200).json({
        success:true,
        user:[
            {id:1, name:'Mohit'},
            {id:2, name:'Arpit'},
            {id:3, name:'Shobhit'},         
        ]
    })
}