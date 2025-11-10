import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { to, orderId, customerName, items, total, shippingAddress } = await request.json();

    // Create transporter - use your email service
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Change based on your email provider
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    });

    // Email HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #D87D4A; color: white; padding: 20px; text-align: center; }
            .order-details { background-color: #f5f5f5; padding: 20px; margin: 20px 0; }
            .item { border-bottom: 1px solid #ddd; padding: 10px 0; }
            .total { font-size: 20px; font-weight: bold; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Order Confirmation</h1>
            </div>
            
            <p>Dear ${customerName},</p>
            <p>Thank you for your order! Your order has been confirmed.</p>
            
            <div class="order-details">
              <h2>Order #${orderId}</h2>
              
              <h3>Items:</h3>
              ${items.map((item: any) => `
                <div class="item">
                  <strong>${item.name}</strong><br>
                  Quantity: ${item.quantity}<br>
                  Price: $${item.price}
                </div>
              `).join('')}
              
              <div class="total">
                Total: $${total}
              </div>
              
              <h3>Shipping Address:</h3>
              <p>
                ${shippingAddress.address}<br>
                ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipCode}<br>
                ${shippingAddress.country}
              </p>
            </div>
            
            <p>We'll send you a shipping confirmation email as soon as your order ships.</p>
            <p>Thank you for shopping with Audiophile!</p>
          </div>
        </body>
      </html>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Audiophile" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: `Order Confirmation - Order #${orderId}`,
      html: htmlContent,
    });

    console.log('Email sent:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}