declare namespace Express {
  export interface Request {
    user: {
      id: number;
      email: string;
      password: string;
      name: string;
      lastName: string;
      birthDate: Date;
      createdAt: string;
    };
  }
}
