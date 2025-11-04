// components/CheckoutForm.tsx
"use client";

import { 
  CheckoutFormProps, 
  FormFieldProps, 
  RadioOptionProps, 
  CheckoutFormData, 
  FormErrors 
} from '@/types/checkout';

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  name, 
  type, 
  placeholder, 
  value, 
  onChange, 
  error, 
  fullWidth = false 
}) => {
  return (
    <div className={fullWidth ? "col-span-full" : ""}>
      <label className="block text-xs font-bold text-black mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg body text-black placeholder-gray-400 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

const RadioOption: React.FC<RadioOptionProps> = ({ 
  label, 
  name, 
  value, 
  checked, 
  onChange 
}) => {
  return (
    <div className={`border rounded-lg p-4 ${
      checked ? "border-primary" : "border-gray-300"
    }`}>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
          checked ? "border-primary" : "border-gray-300"
        }`}>
          {checked && (
            <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
          )}
        </div>
        <span className="body text-black font-bold">{label}</span>
      </label>
    </div>
  );
};

const PaymentDetails: React.FC<{
  formData: CheckoutFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors;
}> = ({ formData, onInputChange, errors }) => {
  return (
    <div>
      <h2 className="h6 text-primary mb-6">Payment Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-black mb-4">
            Payment Method
          </label>
        </div>
        
        <div className="space-y-4">
          <RadioOption
            label="e-Money"
            name="paymentMethod"
            value="e-Money"
            checked={formData.paymentMethod === "e-Money"}
            onChange={onInputChange}
          />

          <RadioOption
            label="Cash on Delivery"
            name="paymentMethod"
            value="Cash on Delivery"
            checked={formData.paymentMethod === "Cash on Delivery"}
            onChange={onInputChange}
          />
        </div>
      </div>

      {formData.paymentMethod === "e-Money" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <FormField
            label="e-Money Number"
            name="eMoneyNumber"
            type="text"
            placeholder="238521993"
            value={formData.eMoneyNumber || ""}
            onChange={onInputChange}
            error={errors.eMoneyNumber}
          />

          <FormField
            label="e-Money PIN"
            name="eMoneyPIN"
            type="text"
            placeholder="6891"
            value={formData.eMoneyPIN || ""}
            onChange={onInputChange}
            error={errors.eMoneyPIN}
          />
        </div>
      )}

      {formData.paymentMethod === "Cash on Delivery" && (
        <div className="flex items-center mt-6">
          <div className="text-4xl text-gray-400 mr-6">💵</div>
          <p className="body text-black text-opacity-50">
            The 'Cash on Delivery' option enables you to pay in cash when our delivery 
            courier arrives at your residence. Just make sure your address is correct 
            so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ 
  onSubmit, 
  errors, 
  formData, 
  onInputChange 
}) => {
  return (
    <div className="bg-white rounded-lg p-8">
      <h1 className="h3 text-black mb-8">CHECKOUT</h1>

      <form onSubmit={onSubmit}>
        <div className="mb-12">
          <h2 className="h6 text-primary mb-6">Billing Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Name"
              name="name"
              type="text"
              placeholder="Alexei Ward"
              value={formData.name}
              onChange={onInputChange}
              error={errors.name}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="alexei@mail.com"
              value={formData.email}
              onChange={onInputChange}
              error={errors.email}
            />

            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+1 202-555-0136"
              value={formData.phone}
              onChange={onInputChange}
              error={errors.phone}
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="h6 text-primary mb-6">Shipping Info</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <FormField
              label="Your Address"
              name="address"
              type="text"
              placeholder="1137 Williams Avenue"
              value={formData.address}
              onChange={onInputChange}
              error={errors.address}
              fullWidth
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                label="ZIP Code"
                name="zipCode"
                type="text"
                placeholder="10001"
                value={formData.zipCode}
                onChange={onInputChange}
                error={errors.zipCode}
              />

              <FormField
                label="City"
                name="city"
                type="text"
                placeholder="New York"
                value={formData.city}
                onChange={onInputChange}
                error={errors.city}
              />

              <FormField
                label="Country"
                name="country"
                type="text"
                placeholder="United States"
                value={formData.country}
                onChange={onInputChange}
                error={errors.country}
              />
            </div>
          </div>
        </div>

        <PaymentDetails 
          formData={formData}
          onInputChange={onInputChange}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default CheckoutForm;