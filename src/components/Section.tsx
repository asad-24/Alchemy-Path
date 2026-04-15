interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "light" | "dark";
  narrow?: boolean;
}

export default function Section({ 
  children, 
  className = "", 
  background = "light",
  narrow = false
}: SectionProps) {
  const bgColor = background === "dark" ? "bg-[#0B0B0B] text-[#F7F5F2]" : "bg-[#F7F5F2] text-[#0B0B0B]";
  const maxWidth = narrow ? "max-w-4xl" : "max-w-6xl";
  
  return (
    <section className={`py-24 md:py-40 lg:py-48 ${bgColor} ${className}`}>
      <div className={`${maxWidth} mx-auto px-8 md:px-16 lg:px-20`}>
        {children}
      </div>
    </section>
  );
}
