import { NextResponse } from "next/server";
import axios from "axios";

const PAYMOB_API_KEY = process.env.PAYMOB_API_KEY;
const PAYMOB_PROFILE_ID = process.env.PAYMOB_PROFILE_ID;

async function createPaymentLink(telegramId, amount) {
  try {
    // 1. الحصول على token
    const authResponse = await axios.post(
      "https://ksa.paymob.com/api/auth/tokens",
      {
        api_key: PAYMOB_API_KEY,
      }
    );
    const authToken = authResponse.data.token;

    // 2. إنشاء رابط الدفع
    const paymentLinkResponse = await axios.post(
      "https://ksa.paymob.com/api/ecommerce/payment-links",
      {
        profile_id: PAYMOB_PROFILE_ID,
        amount_cents: Math.round(amount * 100), // تحويل المبلغ إلى هللات
        currency: "SAR",
        billing_data: {
          first_name: telegramId,
          last_name: "User",
          email: "user@example.com",
          phone_number: "+966000000000",
        },
        is_live: false,
        payment_methods: [8221], // Mada و Apple Pay
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const paymentLink = paymentLinkResponse.data.client_url;
    const token = new URL(paymentLink).searchParams.get("token");

    return { paymentLink, token };
  } catch (error) {
    console.error(
      "خطأ في إنشاء رابط الدفع:",
      error.response ? error.response.data : error.message
    );
    throw new Error("فشل في إنشاء رابط الدفع");
  }
}

export async function POST(req) {
  try {
    const { telegramId, amount } = await req.json();

    // التحقق من وجود البيانات المطلوبة
    if (!telegramId || !amount) {
      return NextResponse.json(
        { error: "البيانات المطلوبة غير مكتملة" },
        { status: 400 }
      );
    }

    // إنشاء رابط الدفع
    const { paymentLink, token } = await createPaymentLink(telegramId, amount);

    return NextResponse.json({
      success: true,
      paymentUrl: paymentLink,
      token: token,
    });
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json(
      { error: error.message || "حدث خطأ أثناء معالجة الدفع" },
      { status: 500 }
    );
  }
}
