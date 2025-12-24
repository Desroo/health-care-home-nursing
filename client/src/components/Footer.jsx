export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Health Care Home Nursing. All rights reserved.
      </div>
    </footer>
  );
}
