import { Id } from "../convex/_generated/dataModel";

export interface Post {
  _id: Id<"posts">;
  _creationTime: number;
  userId: Id<"users">;
  caption: string;
  imageUrl?: string;
  imageStorageId?: Id<"_storage">;
  createdAt: number;
  author?: {
    _id: Id<"users">;
    name: string;
    avatarUrl?: string;
  } | null;
}