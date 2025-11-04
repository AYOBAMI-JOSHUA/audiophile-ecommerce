import { Suspense } from "react";
import SuccessContent from "./SuccessContent";


export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          <p>Preparing your order details</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}