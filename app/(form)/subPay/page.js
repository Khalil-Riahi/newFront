// 'use client'; 

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// export default function PaymentVerify() {
//   const [isWorked, setIsWorked] = useState(null);
//   const [error, setError] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [subId, setSubId] = useState(null);

//   const searchParams = useSearchParams();
//   const status = searchParams.get("status");
//   const paymentId = searchParams.get("payment_ref");

//   // Get userId and subId on client side
//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     const storedSubId = searchParams.get("subId");

//     setUserId(storedUserId);
//     setSubId(storedSubId);

//     console.log('Received parameters:', {
//       status,
//       paymentId,
//       userId: storedUserId,
//       subId: storedSubId,
//     });
//   }, [searchParams, status, paymentId]);

//   // Verify payment once data is loaded
//   useEffect(() => {
//     if (!userId || !subId) return;

//     console.log('Verification useEffect triggered');

//     if (status === "failed") {
//       console.log('Immediate failure detected');
//       setIsWorked(false);
//       setError("Payment failed. Please try again.");
//       return;
//     }

//     if (status !== "success" || !paymentId) {
//       console.log('Missing required parameters:', {
//         hasStatus: !!status,
//         hasPaymentId: !!paymentId,
//         hasUserId: !!userId,
//         hasSubId: !!subId,
//       });
//       return;
//     }

//     async function verifyAndAddUserSubscription() {
//       console.log('Starting verification...');
//       try {
//         const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${userId}&subId=${subId}`;
//         console.log('Making request to:', url);

//         const response = await fetch(url, {
//           method: "GET",
//           credentials: "include",
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//         console.log('Response status:', response.status);

//         if (!response.ok) {
//           const errorText = await response.text();
//           throw new Error(errorText || "Payment verification failed");
//         }

//         const resData = await response.json();
//         console.log('Verification response:', resData);

//         if (resData.status !== "success") {
//           throw new Error(resData.message || "Payment was not successful");
//         }

//         setIsWorked(true);
//       } catch (error) {
//         console.error("Full error details:", error);
//         setError(error.message);
//         setIsWorked(false);
//       }
//     }

//     verifyAndAddUserSubscription();
//   }, [status, paymentId, userId, subId]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
//         {/* Loading */}
//         {isWorked === null && status === "success" && (
//           <div className="space-y-4">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//             <p className="text-gray-600 text-lg">Verifying your payment...</p>
//           </div>
//         )}

//         {/* Success */}
//         {isWorked === true && (
//           <div className="space-y-4">
//             <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
//             <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
//             <button
//               onClick={() => window.location.href = "/homepage"}
//               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         )}

//         {/* Failure */}
//         {isWorked === false && (
//           <div className="space-y-4">
//             <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
//             <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
//             <p className="text-gray-600">{error || "Something went wrong. Please try again."}</p>
//             <button
//               onClick={() => window.location.href = "/homepage"}
//               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//             >
//               Try Again
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function PaymentVerify() {
  const searchParams = useSearchParams();

  const [isWorked, setIsWorked] = useState(null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [subId, setSubId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const status = searchParams.get('status');
  const paymentId = searchParams.get('payment_ref');

  // Load values
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const querySubId = searchParams.get('subId');
    const queryStartDate = searchParams.get('start_date');
    const queryEndDate = searchParams.get('end_date');

    setUserId(storedUserId);
    setSubId(querySubId);
    setStartDate(queryStartDate);
    setEndDate(queryEndDate);
  }, [searchParams]);

  // Verify payment
  useEffect(() => {
    if (!userId || !subId || !startDate || !endDate) return;

    if (status === 'failed') {
      setIsWorked(false);
      setError('Payment failed. Please try again.');
      return;
    }

    if (status !== 'success' || !paymentId) return;

    async function verifyPayment() {
      try {
        const url = `http://localhost:8000/ELACO/subcription/verify/${paymentId}?idUser=${userId}&subId=${subId}&start_date=${encodeURIComponent(startDate)}&end_date=${encodeURIComponent(endDate)}`;

        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Payment verification failed');
        }

        const resData = await response.json();
        if (resData.status !== 'success') {
          throw new Error(resData.message || 'Unexpected error');
        }

        setIsWorked(true);
      } catch (err) {
        console.error('Verification error:', err);
        setIsWorked(false);
        setError(err.message);
      }
    }

    verifyPayment();
  }, [userId, subId, status, paymentId, startDate, endDate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        {isWorked === null && status === 'success' && (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" />
            <p className="text-gray-600 text-lg">Verifying your payment...</p>
          </div>
        )}

        {isWorked === true && (
          <div className="space-y-4">
            <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <button
              onClick={() => window.location.href = '/homepage'}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {isWorked === false && (
          <div className="space-y-4">
            <FaTimesCircle className="text-6xl text-red-500 mx-auto animate-shake" />
            <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-600">{error || 'Something went wrong. Please try again.'}</p>
            <button
              onClick={() => window.location.href = '/homepage'}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
