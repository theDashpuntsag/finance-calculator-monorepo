import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post(`/v1/sign-up`, (_req: Request, res: Response) => {
  res.status(201).json({ message: 'User registered successfully' });
});

router.post(`/v1/sign-in`, (_req: Request, res: Response) => {
  res.status(200).json({ token: 'dummy-jwt-token' });
});

router.post(`/v1/sign-out`, (_req: Request, res: Response) => {
  res.status(200).json({ message: 'User signed out successfully' });
});

router.post(`/v1/forgot-password`, (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Password reset link sent to email' });
});

export default router;
