
export default function Header() {
  return (
    <header
      className="w-full flex items-center justify-between px-6 h-16 border-b-2 border-black bg-[#fff] shadow-none z-10
      cardClass"
    >
      <div className="flex items-center">
        <span className="font-extrabold text-2xl tracking-tight uppercase select-none">
          
          <img src="/images/zertpro-logo-black.png" alt="Logo" className="inline-block mr-2 h-36 w-full" />
          {/* <span className="border-2 border-black px-2 py-1 bg-[#fef9c3]">
            Deutsch
          </span> */}
        </span>
      </div>
      <div></div>
    </header>
  );
}
