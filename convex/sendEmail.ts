import { mutation } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

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
    console.log("📧 Attempting to send email to:", args.to);

    // SMTP configuration from environment variables
    // Required env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || (smtpUser ? `"Audiophile" <${smtpUser}>` : undefined);

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.log("❌ SMTP configuration missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS");
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
      // Create transporter using SMTP
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: smtpFrom,
        to: args.to,
        subject: `Order Confirmation #${args.orderId}`,
        html: emailHtml,
      });

      console.log("✅ Email sent successfully! MessageId:", info.messageId);
      return { success: true, messageId: info.messageId };

    } catch (error) {
      console.error("❌ Email sending failed:", error);
      throw new Error("Failed to send confirmation email");
    }
  },
});