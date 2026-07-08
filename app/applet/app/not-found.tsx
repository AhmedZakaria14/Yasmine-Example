import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-slate-600 mb-8 text-center max-w-md">
        الصفحة غير موجودة
      </p>
      <Link href="/" className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors">
        العودة للرئيسية
      </Link>
    </div>
  );
}
