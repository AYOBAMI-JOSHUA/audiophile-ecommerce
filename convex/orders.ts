import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

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

    // Create the order first
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "confirmed",
      createdAt: Date.now()
    });

    console.log("✅ Order created with ID:", orderId);

    // Try to send email, but don't fail the order if email fails
    try {
      await ctx.runMutation(internal.sendEmail.sendOrderConfirmation, {
        to: args.customer.email,
        customerName: args.customer.name,
        orderId: orderId,
        items: args.items, // ADDED: Pass items to email
        total: args.total, // ADDED: Pass total to email
        shipping: args.shipping, // ADDED: Pass shipping to email
        vat: args.vat, // ADDED: Pass vat to email
        grandTotal: args.grandTotal, // ADDED: Pass grandTotal to email
        shippingAddress: `${args.customer.address}, ${args.customer.city}, ${args.customer.zipCode}, ${args.customer.country}` // ADDED: Pass address
      });
    } catch (emailError) {
      console.log("Email sending failed, but order was created:", emailError);
      // Continue - don't throw error
    }

    return orderId;
  }
});

export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    if (!args.orderId) return null;
    const order = await ctx.db.get(args.orderId);
    console.log("📦 Retrieved order from DB:", order); // ADDED: Debug log
    return order;
  },
});