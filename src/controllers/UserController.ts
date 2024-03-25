// user.controller.ts

import { Request, Response } from 'express';

class UserController {
    public createUser(req: Request, res: Response): void {
        // Lógica para criar um usuário
        console.log('createUser')
    }

    public getUser(req: Request, res: Response): void {
        // Lógica para obter um usuário
        console.log('getUser')
    }

    public updateUser(req: Request, res: Response): void {
        // Lógica para atualizar um usuário
        console.log('updateUser')
    }

    public deleteUser(req: Request, res: Response): void {
        // Lógica para excluir um usuário
        console.log('deleteUser')
    }
}

export default UserController;
