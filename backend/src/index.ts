import  express from 'express'; // Importa o express 
import Cors from 'cors';
import routes from './routes';  // Importa o Routes

const app = express();

app.use(Cors());
app.use(routes);
app.get('/',(req,res)=>{
})

app.listen(3333);

// Babel,sucrase