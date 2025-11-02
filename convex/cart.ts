// convex/cart.ts
import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const syncCart = mutation({
  args: {
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number()
    }))
  },
  handler: async (ctx, args) => {
    // For now, we'll just return success since we're using client-side cart
    // In a real app, you might want to store this in the database
    return { success: true, items: args.items };
  }
});