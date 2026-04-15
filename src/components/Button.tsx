import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  onClick 
}: ButtonProps) {
  const baseStyles = "inline-block px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-500 text-centre transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-[#C6A86B] text-[#0B0B0B] hover:bg-[#d4b87a] hover:shadow-[0_10px_40px_rgba(198,168,107,0.4)] hover:scale-[1.03]",
    outline: "border-2 border-[#C6A86B] text-[#F7F5F2] hover:bg-[#C6A86B] hover:text-[#0B0B0B] hover:shadow-[0_10px_40px_rgba(198,168,107,0.3)] hover:scale-[1.03]"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
