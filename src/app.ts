import express, { Application } from 'express';
import userRoutes from '../src/routes/user.routes';

const app: Application = express();

// Adicione middleware para o parsing de JSON
app.use(express.json());

// Registre as rotas de usuário
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
