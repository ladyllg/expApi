import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoRouter from '../resources/produto/produto.router';
import tipoUsuarioRouter from '../resources/tipoUsuario/tipoUsuario.router'
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use('/', authRouter);
router.use('/ping', pingRouter);
router.use('/produto', produtoRouter);
router.use('/tipo-usuario', tipoUsuarioRouter)

export default router;
