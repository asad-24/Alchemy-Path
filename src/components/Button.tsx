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
  const baseStyles = "inline-block px-10 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 text-center";
  
  const variants = {
    primary: "bg-[#C6A86B] text-[#0B0B0B] hover:bg-[#B89857] hover:shadow-lg",
    outline: "border border-[#C6A86B] text-[#0B0B0B] hover:bg-[#C6A86B] hover:text-[#F7F5F2]"
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
