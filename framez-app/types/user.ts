import { Id } from "../convex/_generated/dataModel";

export interface User {
  _id: Id<"users">;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: number;
}

export interface AuthUser {
  _id: Id<"users">;
  email: string;
  name: string;
  avatarUrl?: string;
}