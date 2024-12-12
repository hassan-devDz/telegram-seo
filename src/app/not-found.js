import Link from "next/link";

export const metadata = {
  title: "الصفحة غير موجودة",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">
          عذراً، الصفحة التي تبحث عنها غير موجودة
        </h2>
        <p className="text-gray-500 mb-8">ربما تم حذفها أو تغيير عنوانها</p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
