import Button from "@/components/Button";
import Section from "@/components/Section";
import ScrollFade from "@/components/ScrollFade";
import ImageSection from "@/components/ImageSection";
import ImageCTA from "@/components/ImageCTA";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B]"></div>
        
        {/* Animated Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,107,0.12)_0%,transparent_70%)] animate-subtle-glow pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center relative z-10 py-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.05] tracking-tight text-balance gradient-text-animated animate-fade-in-scale">
            You're not asking for too much.<br />
            You're asking the wrong person.
          </h1>
          <p className="text-xl md:text-2xl mb-16 text-[#F7F5F2] opacity-80 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up">
            For women who feel there is more and refuse to settle for less.
          </p>
          <div className="animate-fade-in-up">
            <Button href="/work-with-me" variant="primary">
              Work With Me
            </Button>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Connection Section */}
      <Section narrow className="">
        <div className="max-w-2xl mx-auto space-y-16 text-center">
          <ScrollFade delay={0}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              You've tried everything.<br />
              The courses. The manifestation. The positive thinking.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              But something still feels missing.
            </p>
          </ScrollFade>
          
          <div className="gold-divider my-20"></div>
          
          <ScrollFade delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              The problem isn't your commitment.<br />
              It's not your effort.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={600}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              You're still asking <em className="italic">the old version of you</em> to create something she was never designed to hold.
            </p>
          </ScrollFade>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Authority Section with Image */}
      <Section background="dark" narrow className="">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollFade delay={0}>
            <div className="text-center">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 gradient-text tracking-tight">
                I'm Dessy Ivanova
              </h2>
              <p className="text-lg md:text-xl tracking-widest uppercase opacity-60 font-light">
                Transformative Coach
              </p>
            </div>
          </ScrollFade>
          
          <div className="grid md:grid-cols-2 gap-16 items-center pt-8">
            {/* Text Content */}
            <div className="space-y-10 text-lg md:text-xl leading-relaxed opacity-85 font-light">
              <ScrollFade delay={200}>
                <p>
                  I work with women who are done settling.<br />
                  Done playing small. Done pretending they don't want what they want.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={400}>
                <p>
                  This isn't about fixing you.<br />
                  You're not broken.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={600}>
                <p>
                  This is about identity. About stepping into the version of you who already has everything you desire and living from that place.
                </p>
              </ScrollFade>
            </div>
            
            {/* Unsplash Image - Elegant feminine portrait */}
            <ScrollFade delay={300}>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-transparent to-[#0B0B0B]/20 z-10"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                  alt="Confident woman embodying transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollFade>
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Offer Section */}
      <Section narrow className="">
        <div className="max-w-3xl mx-auto space-y-16">
          <ScrollFade delay={0}>
            <div className="text-centre">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight gradient-text">
                1:1 Private Coaching
              </h2>
            </div>
          </ScrollFade>
          
          <div className="space-y-10 text-centre">
            <ScrollFade delay={200}>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                This is deep, transformative work.<br />
                We don't just shift your mindset. We rebuild your entire internal operating system.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={400}>
              <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                You'll step into a new identity. One that doesn't question, doubt, or second-guess.<br />
                One that knows she's worthy and acts like it.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={600}>
              <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                This is for women ready to stop preparing and start being.
              </p>
            </ScrollFade>
          </div>

          <ScrollFade delay={800}>
            <div className="text-centre pt-8">
              <Button href="/work-with-me" variant="primary">
                Learn More
              </Button>
            </div>
          </ScrollFade>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Final CTA Section */}
      <Section background="dark" narrow className="">
        <div className="max-w-3xl mx-auto text-centre space-y-12">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight gradient-text">
              You already know you're meant for more.
            </h2>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-2xl md:text-3xl opacity-75 leading-relaxed font-light">
              The only question left is this:<br />
              Are you ready to step into becoming her?
            </p>
          </ScrollFade>
          
          <ScrollFade delay={400}>
            <div className="pt-8">
              <Button href="/work-with-me" variant="outline">
                Apply to Work Together
              </Button>
            </div>
          </ScrollFade>
          
          <ScrollFade delay={600}>
            <p className="text-sm opacity-50 font-light pt-8">
              Or contact directly:{" "}
              <a 
                href="mailto:contact@thealchemypath.co.uk" 
                className="text-[#C6A86B] hover:opacity-80 transition-opacity"
              >
                contact@thealchemypath.co.uk
              </a>
            </p>
          </ScrollFade>
        </div>
      </Section>

      {/* Image Section - Only on Home Page */}
      <ImageSection />
      
      {/* Image CTA - Only on Home Page */}
      <ImageCTA />
    </>
  );
}

