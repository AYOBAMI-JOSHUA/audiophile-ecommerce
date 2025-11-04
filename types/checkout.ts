export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: 'e-Money' | 'Cash on Delivery';
  eMoneyNumber?: string;
  eMoneyPIN?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  paymentMethod?: string;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
}