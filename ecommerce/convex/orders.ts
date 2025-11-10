import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createOrder = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      zipCode: v.string(),
      city: v.string(),
      country: v.string()
    }),
    paymentMethod: v.string(),
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number()
    })),
    total: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number()
  },
  handler: async (ctx, args) => {
    // Debug: Log the incoming values
    console.log("💰 Order totals received:", {
      total: args.total,
      shipping: args.shipping,
      vat: args.vat,
      grandTotal: args.grandTotal,
      itemsCount: args.items.length
    });

    // Create the order
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "confirmed",
      createdAt: Date.now()
    });

    console.log("✅ Order created with ID:", orderId);
    
    // Email functionality removed for now - add it back later
    console.log("📧 Email would be sent to:", args.customer.email);

    return orderId;
  }
});

export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    if (!args.orderId) return null;
    const order = await ctx.db.get(args.orderId);
    console.log("📦 Retrieved order from DB:", order);
    return order;
  },
});