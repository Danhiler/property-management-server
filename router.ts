import * as express from 'express';
//import * as routes from './routes';
import * as Cors from 'cors'

import userRouter from './routes/usersRouter';
import contractRouter from "./routes/contractsRouter";
import propertyRouter from './routes/propertiesRouter';


const app = express();
app.use(Cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Hello World")
});

app.use('/users',userRouter);
app.use('/contracts',contractRouter);
app.use('/properties',propertyRouter);



export default app;
