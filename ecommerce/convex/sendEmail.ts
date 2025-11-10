import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendOrderConfirmation = mutation({
  args: {
    to: v.string(),
    customerName: v.string(),
    orderId: v.string(),
    items: v.array(v.object({
      id: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number()
    })),
    total: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
    shippingAddress: v.string()
  },
  handler: async (ctx, args) => {
    // Get environment variable from Convex
    const resendApiKey = process.env.RESEND_API_KEY;
    
    console.log("📧 Attempting to send email to:", args.to);
    
    if (!resendApiKey) {
      console.log("❌ RESEND_API_KEY not set");
      throw new Error("Email service not configured");
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #D87D4A; text-align: center;">AUDIOPHILE</h1>
        <h2>Thank you for your order, ${args.customerName}!</h2>
        <p>Your order <strong>#${args.orderId}</strong> has been confirmed.</p>
        
        <h3>Order Summary:</h3>
        ${args.items.map(item => `
          <div style="margin: 10px 0; padding: 10px; border-bottom: 1px solid #eee;">
            <strong>${item.name}</strong><br>
            Quantity: ${item.quantity} × $${item.price} = $${(item.quantity * item.price).toFixed(2)}
          </div>
        `).join('')}
        
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
          <p><strong>Subtotal: $${args.total.toFixed(2)}</strong></p>
          <p>Shipping: $${args.shipping.toFixed(2)}</p>
          <p>VAT: $${args.vat.toFixed(2)}</p>
          <p style="font-size: 18px; font-weight: bold; color: #D87D4A;">Grand Total: $${args.grandTotal.toFixed(2)}</p>
        </div>
        
        <p><strong>Shipping Address:</strong><br>${args.shippingAddress}</p>
        
        <p style="margin-top: 30px; color: #666;">
          Thank you for choosing Audiophile! We'll notify you when your order ships.
        </p>
      </div>
    `;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Audiophile <onboarding@resend.dev>",
          to: [args.to],
          subject: `Order Confirmation #${args.orderId}`,
          html: emailHtml,
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        console.error("Resend API error:", result);
        throw new Error(`Email failed: ${result.message}`);
      }

      console.log("✅ Email sent successfully!");
      return { success: true, messageId: result.id };

    } catch (error) {
      console.error("❌ Email sending failed:", error);
      throw new Error("Failed to send confirmation email");
    }
  },
});