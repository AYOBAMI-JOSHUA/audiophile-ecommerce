import * as React from 'react';

interface OrderConfirmationEmailProps {
  customerName: string;
  orderId: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  shippingAddress: string;
}

export const OrderConfirmationEmail: React.FC<OrderConfirmationEmailProps> = ({
  customerName,
  orderId,
  items,
  total,
  shipping,
  vat,
  grandTotal,
  shippingAddress
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#D87D4A', margin: 0 }}>AUDIOPHILE</h1>
        <p style={{ color: '#666', margin: '10px 0 0 0' }}>Hi-Fi Audio Equipment</p>
      </div>

      {/* Greeting */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#000', margin: '0 0 10px 0' }}>Thank you for your order, {customerName}!</h2>
        <p style={{ color: '#666', margin: 0 }}>Your order has been confirmed and will be shipped soon.</p>
      </div>

      {/* Order ID */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <p style={{ margin: 0, color: '#666' }}>
          <strong>Order ID:</strong> {orderId}
        </p>
      </div>

      {/* Order Summary */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#000', margin: '0 0 15px 0' }}>Order Summary</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px 0', color: '#666' }}>Product</th>
              <th style={{ textAlign: 'center', padding: '10px 0', color: '#666' }}>Qty</th>
              <th style={{ textAlign: 'right', padding: '10px 0', color: '#666' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px 0' }}>{item.name}</td>
                <td style={{ textAlign: 'center', padding: '10px 0' }}>{item.quantity}</td>
                <td style={{ textAlign: 'right', padding: '10px 0' }}>${item.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span style={{ color: '#666' }}>Subtotal:</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span style={{ color: '#666' }}>Shipping:</span>
          <span>${shipping.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span style={{ color: '#666' }}>VAT:</span>
          <span>${vat.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontWeight: 'bold', fontSize: '18px' }}>
          <span>Grand Total:</span>
          <span>${grandTotal.toLocaleString()}</span>
        </div>
      </div>

      {/* Shipping Address */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#000', margin: '0 0 10px 0' }}>Shipping Address</h3>
        <p style={{ color: '#666', margin: 0 }}>{shippingAddress}</p>
      </div>

      {/* Support Info */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', marginBottom: '30px' }}>
        <h3 style={{ color: '#000', margin: '0 0 10px 0' }}>Need Help?</h3>
        <p style={{ color: '#666', margin: '0 0 10px 0' }}>
          Our support team is here to help! Contact us at support@audiophile.com
        </p>
        <a 
          href={`https://yourapp.com/orders/${orderId}`} 
          style={{
            display: 'inline-block',
            backgroundColor: '#D87D4A',
            color: 'white',
            padding: '12px 25px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          View Your Order
        </a>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', color: '#999', fontSize: '12px' }}>
        <p>© 2024 Audiophile. All rights reserved.</p>
      </div>
    </div>
  );
};