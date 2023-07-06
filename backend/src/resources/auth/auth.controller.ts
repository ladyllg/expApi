import { Request, Response } from 'express';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.types';

export const signup = async (req: Request, res: Response) => {
    const { nome, email, senha } = req.body
    try {
        if (await buscaUsuarioPorEmail(email))
            return res.status(400).json({ msg: 'Email informado já está sendo usado' });
        const newUsuario = await createUsuario({ nome, email, senha, tipoUsuarioId: TiposUsuarios.CLIENT });
        res.status(201).json(newUsuario);
    } catch (e: any) {
        res.status(500).json(e.errors);
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    try {
        const usuario = await checkAuth({ email, senha });
        if (!usuario)
            return res.status(401).json({
                msg: 'Email e/ou senha incorretos'
            });
        req.session.uid = usuario.id;
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;
        res.status(200).json({
            msg: 'Usuário autenticado com sucesso'
        });
    } catch (e) {
        res.status(500).json(e);
    }
}

export const logout = (req: Request, res: Response) => { }
