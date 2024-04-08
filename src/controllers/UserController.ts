import { Request, Response } from 'express';

import NeDB from 'nedb'
let db = new NeDB({
    filename: 'src/db/users.db',
    autoload: true
})

class UserController {
    public createUser(req: Request, res: Response): void {

        db.insert(req.body,(err,user) => {
           if(err){
                console.log("error: ", err)
                res.json({"error":err})
           }else{
                console.log('createUser')
                res.json({"user":user})
           }
        })        

    }

    public getUser(req: Request, res: Response): void {

        let params = req.params.id

        db.findOne({_id:params}).exec((err, users)=>{
            if(err){
                console.log('error: ', err)
                res.status(400).json({
                    error:err
                })
            }else{
                res.statusCode = 200;
                res.setHeader("Content-type","application/json");
                res.json({
                    users: users
                })
            }
        })
    }

    public getAllUser(req: Request, res: Response): void {

        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                console.log('error: ', err)
                res.status(400).json({
                    error:err
                })
            }else{
                res.statusCode = 200;
                res.setHeader("Content-type","application/json");
                res.json({
                    users: users
                })
            }
        })
    }

    public updateUser(req: Request, res: Response): void {
        let params = req.params.id
        
        db.update({_id:params}, req.body, err => {

            if(err){
                console.log('error: ', err)
                res.status(400).json({
                    error:err
                })
            }else{
                res.statusCode = 200;
                res.setHeader("Content-type","application/json");
                res.json({
                    users: Object.assign(req.params, req.body)
                })
            }
        })
    }

    public deleteUser(req: Request, res: Response): void {
        db.remove({_id:req.params.id},{}, err=>{
            if(err){
                res.statusCode = 401
                res.json(err)
            }else{
                res.statusCode = 201
                res.json(req.params)
            }
        })
    }
}

export default UserController;
