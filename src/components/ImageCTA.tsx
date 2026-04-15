import Button from "./Button";
import ScrollFade from "./ScrollFade";

export default function ImageCTA() {
  return (
    <section className="bg-[#0B0B0B] text-[#F7F5F2] py-32 md:py-40">
      <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
        <ScrollFade delay={0}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-tight gradient-text-animated">
            This is your moment.
          </h2>
        </ScrollFade>
        
        <ScrollFade delay={200}>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 leading-relaxed font-light max-w-3xl mx-auto">
            The woman you're becoming is already waiting.<br />
            Step into becoming her.
          </p>
        </ScrollFade>
        
        <div className="gold-divider mb-12"></div>
        
        <ScrollFade delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button href="/work-with-me" variant="primary">
              Begin Your Transformation
            </Button>
            <Button href="/about" variant="outline">
              Learn More
            </Button>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
