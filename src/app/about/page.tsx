import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B]"></div>
        
        {/* Animated Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,107,0.12)_0%,transparent_70%)] animate-subtle-glow pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center relative z-10 py-20">
          <div className="space-y-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight gradient-text-animated animate-fade-in-scale">
              About
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light opacity-90 text-[#F7F5F2]">
                You were not meant to shrink.<br />
                You were meant to transform.
              </p>
              
              <div className="gold-divider my-12"></div>
              
              <p className="text-lg md:text-xl leading-relaxed font-light opacity-75 max-w-2xl mx-auto text-[#F7F5F2]">
                I am Dessy Ivanova, and I help women step into the identity of who they are becoming, not who they have been.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* The Realisation - Centered Text Only */}
      <Section narrow className="">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-12 gradient-text tracking-tight">
              The Realisation
            </h2>
          </ScrollFade>
          
          <div className="space-y-10 text-lg md:text-xl leading-relaxed font-light">
            <ScrollFade delay={200}>
              <p>
                For years, I tried to become the woman I thought I needed to be.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={300}>
              <p>
                I read the books. I followed the strategies.<br />
                I worked harder than anyone I knew.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={400}>
              <p>
                But no matter what I achieved, it never felt like enough.
              </p>
            </ScrollFade>
            
            <div className="gold-divider my-16"></div>
            
            <ScrollFade delay={600}>
              <p className="text-2xl md:text-3xl font-light italic">
                Because I was trying to get somewhere whilst still being someone who didn't believe she could have it.
              </p>
            </ScrollFade>
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* What is The Alchemy Path - With Background Image */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/alcamy.jpeg"
            alt="Connection and transformation journey"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/80 via-[#0B0B0B]/75 to-[#0B0B0B]/85"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center py-20">
          <div className="space-y-12">
            <ScrollFade delay={0}>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-16 gradient-text tracking-tight">
                What is The Alchemy Path
              </h2>
            </ScrollFade>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-[#F7F5F2]">
              <ScrollFade delay={200}>
                <p>
                  The Alchemy Path is a journey of complete transformation.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={300}>
                <p>
                  It is not about fixing what is broken.<br />
                  It is about becoming someone entirely new.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={400}>
                <p>
                  Through deep identity work, we do not just shift your mindset.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={500}>
                <p>
                  We rebuild who you are at the core.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={600}>
                <p className="text-[#C6A86B] font-medium text-xl md:text-2xl">
                  This is for women ready to embrace their transformation and start living fully.
                </p>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* The Shift - Two Column Layout */}
      <Section background="dark" narrow className="">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-16 gradient-text tracking-tight text-center">
              The Shift
            </h2>
          </ScrollFade>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light">
              <ScrollFade delay={200}>
                <p>
                  The shift happened when I stopped trying to <em className="italic">become</em> her.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={300}>
                <p>
                  And started <em className="italic">being</em> her.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={400}>
                <p>
                  Not a better version of me.<br />
                  A completely different identity.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={500}>
                <p>
                  Someone who didn't question her worth.<br />
                  Someone who didn't need permission.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={600}>
                <p className="text-[#C6A86B]">
                  Someone who already knew she was enough.
                </p>
              </ScrollFade>
            </div>
            
            {/* Image - Right Side */}
            <ScrollFade delay={300}>
              <div className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/20 to-transparent z-10"></div>
                <Image 
                  src="/maam-1.jpeg"
                  alt="Dessy Ivanova - Personal transformation journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
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

      {/* My Philosophy - Centered */}
      <Section narrow className="">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-12 gradient-text tracking-tight">
              My Philosophy
            </h2>
          </ScrollFade>
          
          <div className="space-y-10 text-lg md:text-xl leading-relaxed font-light">
            <ScrollFade delay={200}>
              <p>
                You do not need another strategy.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={300}>
              <p>
                You need a new operating system.
              </p>
            </ScrollFade>
            
            <div className="gold-divider my-16"></div>
            
            <ScrollFade delay={400}>
              <p>
                One that does not rely on willpower, discipline,<br />
                or pushing through resistance.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={500}>
              <p>
                One where you wake up as the woman who already has what you want.
              </p>
            </ScrollFade>
            
            <ScrollFade delay={600}>
              <p className="text-2xl md:text-3xl font-light text-[#C6A86B]">
                And everything flows from there.
              </p>
            </ScrollFade>
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Personal Connection - Image Right, Text Left */}
      <Section background="dark" narrow className="">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-16 gradient-text tracking-tight text-center">
              This Is The Work I Do Now
            </h2>
          </ScrollFade>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light opacity-90">
              <ScrollFade delay={200}>
                <p>
                  I help women make that shift.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={300}>
                <p>
                  Not through force, but through transformation.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={400}>
                <p>
                  I work with women who are ready to step into their power.<br />
                  Ready to embrace their full potential.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={500}>
                <p>
                  Ready to claim the life they truly desire.
                </p>
              </ScrollFade>
              
              <ScrollFade delay={600}>
                <p className="text-[#C6A86B] font-medium">
                  This is alchemy. This is identity work.<br />
                  This is The Alchemy Path.
                </p>
              </ScrollFade>
            </div>
            
            {/* Coach Image */}
            <ScrollFade delay={300}>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/20 to-transparent z-10"></div>
                <Image 
                  src="/owner.jpg"
                  alt="Dessy Ivanova - The Alchemy Path"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
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

      {/* Transformational Image Section */}
      <section className="relative w-full bg-[#0B0B0B] flex items-center justify-center py-12">
        <div className="relative w-[70%] h-[40vh] md:h-[50vh] lg:h-[70vh] mx-auto">
          <Image 
            src="/transformational.jpeg"
            alt="Your transformation awaits"
            fill
            className="object-contain"
            sizes="70vw"
            priority
          />
        </div>
      </section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Final CTA Section */}
      <Section background="dark" narrow className="">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-10 leading-tight tracking-tight gradient-text-animated">
              Ready to step into your next identity?
            </h2>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 leading-relaxed font-light max-w-3xl mx-auto">
              The woman you are becoming is already waiting.
            </p>
          </ScrollFade>
          
          <div className="gold-divider mb-12"></div>
          
          <ScrollFade delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="/work-with-me" variant="primary">
                Work With Me
              </Button>
              <Button href="mailto:contact@thealchemypath.co.uk" variant="outline">
                Get In Touch
              </Button>
            </div>
          </ScrollFade>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="">
        <div className="gold-divider"></div>
      </div>

      {/* Personal Images Section */}
      <Section narrow className="">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFade delay={200}>
              <div className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/20 to-transparent z-10"></div>
                <Image 
                  src="/maam-1.jpeg"
                  alt="Dessy Ivanova - Transformative Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollFade>
            
            <ScrollFade delay={400}>
              <div className="relative aspect-4/5 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/20 to-transparent z-10"></div>
                <Image 
                  src="/maam-2.jpeg"
                  alt="Dessy Ivanova - The Alchemy Path"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollFade>
          </div>
        </div>
      </Section>
    </>
  );
}
