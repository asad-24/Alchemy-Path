import Button from "@/components/Button";
import Section from "@/components/Section";
import ScrollFade from "@/components/ScrollFade";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80"
            alt="Empowered woman embracing transformation"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/75 via-[#0B0B0B]/60 to-[#0B0B0B]/80"></div>
        </div>
        
        {/* Animated Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,107,0.12)_0%,transparent_70%)] animate-subtle-glow pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center relative z-10 py-20">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-scale">
            <Image 
              src="/logo-bg.png" 
              alt="The Alchemy Path" 
              width={500} 
              height={500}
              className="w-[300px] h-[300px] mx-auto opacity-90"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.05] tracking-tight text-balance gradient-text-animated animate-fade-in-scale">
            You are worthy of the life<br />
            you have been dreaming of.
          </h1>
          <p className="text-xl md:text-2xl mb-16 text-[#F7F5F2] opacity-90 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up">
            For women who feel there is more and are ready to embrace their extraordinary potential.
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

      {/* Introduction to The Alchemy Path */}
      <Section background="dark" narrow className="">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 gradient-text tracking-tight">
              Welcome to The Alchemy Path
            </h2>
          </ScrollFade>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light opacity-90">
            <ScrollFade delay={200}>
              <p>
                This is not another quick-fix programme.<br />
                This is total transformation.
              </p>
              <p className="text-base md:text-lg opacity-75 mt-4">
                Through deep inner alchemy and conscious evolution, we transform from the inside out,<br />
                shedding old patterns and stepping into our highest selves.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={400}>
              <p>
                The Alchemy Path is where women come to step into their power,<br className="hidden md:block" />
                embrace their full potential, and embody the identity of who they are becoming.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={600}>
              <p className="text-[#C6A86B] text-xl md:text-2xl font-light">
                It is time to become the woman you have always known you could be.
              </p>
            </ScrollFade>
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Connection Section */}
      <Section narrow className="">
        <div className="max-w-2xl mx-auto space-y-16 text-center">
          <ScrollFade delay={0}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              You have explored many paths.<br />
              The courses. The manifestation practices. The positive thinking.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              Yet something still feels incomplete.
            </p>
          </ScrollFade>
          
          <div className="gold-divider my-20"></div>
          
          <ScrollFade delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              The challenge is not your commitment.<br />
              It is not your effort.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={600}>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
              You are calling upon <em className="italic">the old version of you</em> to create something she was never designed to hold.
            </p>
          </ScrollFade>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Inspirational Image Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
            alt="Serene nature landscape for inner peace and growth"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]/70"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 text-center py-20">
          <ScrollFade delay={0}>
            <p className="font-serif text-3xl md:text-5xl leading-relaxed text-[#F7F5F2] italic">
              "Transformation begins the moment you decide to step into who you are becoming."
            </p>
          </ScrollFade>
        </div>
      </section>

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
                I am Dessy Ivanova
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
                  I work with women who are ready to step into their power.<br />
                  Ready to embrace their authentic desires. Ready to claim the life they truly want.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={400}>
                <p>
                  This is not about fixing you.<br />
                  You are not broken.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={600}>
                <p>
                  This is about identity. About stepping into the version of you who already has everything you desire and living from that place.
                </p>
              </ScrollFade>
            </div>
            
            {/* Image - girl-with-candle */}
            <ScrollFade delay={300}>
              <div className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/20 via-transparent to-[#0B0B0B]/30 z-10"></div>
                <Image 
                  src="/owner.jpg"
                  alt="Contemplation and inner transformation"
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
            <div className="text-center">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight gradient-text">
                1:1 Private Coaching
              </h2>
            </div>
          </ScrollFade>
          
          <div className="space-y-10 text-center">
            <ScrollFade delay={200}>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                This is deep, transformative work.<br />
                We do not just shift your mindset. We rebuild your entire internal operating system.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={400}>
              <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                You will step into a new identity. One that does not question, doubt, or second-guess.<br />
                One that knows she is worthy and acts like it.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={600}>
              <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                This is for women ready to embrace their transformation and start living fully.
              </p>
            </ScrollFade>
          </div>

          <ScrollFade delay={800}>
            <div className="text-center pt-8">
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

      {/* Success & Transformation Imagery */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80"
            alt="Mountain landscape symbolizing personal transformation and success"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/80 via-[#0B0B0B]/65 to-[#0B0B0B]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center py-20">
          <ScrollFade delay={0}>
            <p className="text-2xl md:text-4xl leading-relaxed text-[#F7F5F2] font-light">
              When you embody the identity of success,<br className="hidden md:block" />
              the results naturally follow.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Final CTA Section */}
      <Section background="dark" narrow className="">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight gradient-text">
              You already know you are meant for more.
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
    </>
  );
}

