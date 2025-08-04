export type Inputs = {
  title: string;
  content: string;
  author?: string;
};
export type RegisterInputs = {
  email: string;
  password: string;
  name?: string;
  role?: "user" | "admin";
};
