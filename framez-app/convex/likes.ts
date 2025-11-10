import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Toggle like on a post
export const toggleLike = mutation({
  args: {
    postId: v.id("posts"),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Check if user already liked this post
    const existingLike = await ctx.db
      .query("likes")
      .withIndex("by_post_and_user", (q) => 
        q.eq("postId", args.postId).eq("userId", args.userId)
      )
      .first();

    if (existingLike) {
      // Unlike - remove the like
      await ctx.db.delete(existingLike._id);
      return { liked: false };
    } else {
      // Like - add new like
      await ctx.db.insert("likes", {
        postId: args.postId,
        userId: args.userId,
        createdAt: Date.now(),
      });
      return { liked: true };
    }
  },
});

// Get like count for a post
export const getLikeCount = query({
  args: { postId: v.id("posts") },
  handler: async (ctx, args) => {
    const likes = await ctx.db
      .query("likes")
      .withIndex("by_post", (q) => q.eq("postId", args.postId))
      .collect();

    return likes.length;
  },
});

// Check if user liked a post
export const hasUserLiked = query({
  args: {
    postId: v.id("posts"),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const like = await ctx.db
      .query("likes")
      .withIndex("by_post_and_user", (q) => 
        q.eq("postId", args.postId).eq("userId", args.userId)
      )
      .first();

    return !!like;
  },
});

// Get all likes for posts (for feed)
export const getLikesForPosts = query({
  args: { postIds: v.array(v.id("posts")) },
  handler: async (ctx, args) => {
    const likesMap: Record<string, number> = {};

    for (const postId of args.postIds) {
      const likes = await ctx.db
        .query("likes")
        .withIndex("by_post", (q) => q.eq("postId", postId))
        .collect();
      
      likesMap[postId] = likes.length;
    }

    return likesMap;
  },
});

// Get user's liked posts
export const getUserLikes = query({
  args: {
    userId: v.id("users"),
    postIds: v.array(v.id("posts")),
  },
  handler: async (ctx, args) => {
    const likedPosts = new Set<string>();

    for (const postId of args.postIds) {
      const like = await ctx.db
        .query("likes")
        .withIndex("by_post_and_user", (q) => 
          q.eq("postId", postId).eq("userId", args.userId)
        )
        .first();

      if (like) {
        likedPosts.add(postId);
      }
    }

    return Array.from(likedPosts);
  },
});