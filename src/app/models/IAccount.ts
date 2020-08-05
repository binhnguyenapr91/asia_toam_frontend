export interface IAccount {
  id?: number;
  username?: string;
  password?: string;
  confirm_password?: string;
  email?: string;
  role: string[];
}
