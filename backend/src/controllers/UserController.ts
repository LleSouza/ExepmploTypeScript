import {Request, Response} from 'express';
import EmailService from '../services/EmailService';
// Criando controle de usuários em formato objeto
const users = [
    { name:'Leandro', email: 'leandro.teste@hotmail.com'},
];
// Exportando o default
export default {
    // cria a lista de usuários para ser disparada
    async index(req: Request,res: Response) { 
        return res.json(users); // retorna a lista criada 
    },
    // Dispara o services email para o destinatario
    async create(req:Request,res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
           to: {
               name: 'Leandro Souza',
               email: 'leandro.teste@hotmail.com'
            },
          message:{
              subject: 'Bem vindo ao sistema!!!', 
              body: 'Seja bem vindo!!!'
            }
        });
        return res.send();
    }
};
   