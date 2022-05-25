// Essa interface e responsavel por encaminhar o nome e email
interface IMailTo{
name: string;
email: string;
}

// Essa interface é responsavel por encaminhar todo conteudo da mensagem
interface ImailMessage{
subject: string;
body: string;
attachment?: string; // Pode ter conteudo ou não por isso ponto de interrogação(um campo de observação)
}

//Data Transfer Object (DDD) "Transferencia data de OBjetos"
interface ImessageDTO{
    to: IMailTo;
   message: ImailMessage;
}

//interface IMailTo{

//}

//interface ImailMessage{

//}

//interface ImessageDTO{
    
//}

//interface IEmailService {
    //sendMail(request:ImessageDTO):void;

//}
 
class EmailService {
    sendMail({to,message}: ImessageDTO){
    console.log(`Email enviado para ${to.email}: ${message.subject}`); 
    }
}
export default EmailService;