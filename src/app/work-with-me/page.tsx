import Button from "@/components/Button";
import Section from "@/components/Section";
import ScrollFade from "@/components/ScrollFade";
import Image from "next/image";

export default function WorkWithMe() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1520531158340-44015069e78e?auto=format&fit=crop&w=1920&q=80"
            alt="Peaceful nature representing transformation journey"
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
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.05] tracking-tight text-balance gradient-text-animated animate-fade-in-scale">
            Work With Me
          </h1>
          <p className="text-xl md:text-2xl mb-16 text-[#F7F5F2] opacity-90 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up">
            You are not here for surface-level shifts.<br />
            You are here for total transformation.
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="py-2">
        <div className="gold-divider"></div>
      </div>

      {/* Main Offer */}
      <Section background="dark" narrow className="">
        <div className="max-w-6xl mx-auto space-y-2">
          <ScrollFade delay={0}>
            <div className="text-center space-y-6">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl gradient-text tracking-tight">
                1:1 Private Coaching
              </h2>
              <p className="text-xl md:text-2xl opacity-75 font-light">
                Deep transformative work for women ready to embody their next identity
              </p>
            </div>
          </ScrollFade>

          <div className="grid  gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-16">
              {/* What Is Included */}
              <ScrollFade delay={200}>
                <div className="space-y-8">
                  <h3 className="font-serif text-2xl md:text-4xl tracking-tight">
                    What Is Included
                  </h3>
                  <ul className="space-y-6 opacity-85 font-light">
                    <li className="flex items-start text-base md:text-lg">
                      <span className="text-[#C6A86B] mr-4 text-xl">✧</span>
                      <span>Weekly 1:1 coaching sessions (via Zoom)</span>
                    </li>
                    <li className="flex items-start text-base md:text-lg">
                      <span className="text-[#C6A86B] mr-4 text-xl">✧</span>
                      <span>Deep identity work and subconscious reprogramming</span>
                    </li>
                    <li className="flex items-start text-base md:text-lg">
                      <span className="text-[#C6A86B] mr-4 text-xl">✧</span>
                      <span>Ongoing support between sessions</span>
                    </li>
                    <li className="flex items-start text-base md:text-lg">
                      <span className="text-[#C6A86B] mr-4 text-xl">✧</span>
                      <span>Personalised practices and integration exercises</span>
                    </li>
                    <li className="flex items-start text-base md:text-lg">
                      <span className="text-[#C6A86B] mr-4 text-xl">✧</span>
                      <span>Ongoing energetic and mindset recalibration</span>
                    </li>
                  </ul>
                </div>
              </ScrollFade>

              {/* What Changes */}
              <ScrollFade delay={400}>
                <div className="space-y-8 pt-8">
                  <h3 className="font-serif text-2xl md:text-4xl tracking-tight">
                    What Changes For You
                  </h3>
                  <div className="space-y-8 opacity-85 font-light text-base md:text-lg leading-relaxed">
                    <p>
                      You begin operating from the identity of the woman who has already arrived.<br />
                      You start being the woman who is already there.
                    </p>
                    
                    <p>
                      You no longer question your worth, your desires, or your right to have what you want.
                    </p>
                    
                    <p>
                      You make decisions quickly. You trust yourself completely.<br />
                      You embrace clarity and confidence in every choice.
                    </p>
                    
                    <p>
                      Your reality shifts to match who you have become.<br />
                      Not through force, but through alignment.
                    </p>
                  </div>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="py-2">
        <div className="gold-divider"></div>
      </div>

      {/* Transformation Imagery Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80"
            alt="Tranquil nature landscape representing transformation journey"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#0B0B0B]/75 via-[#0B0B0B]/60 to-[#0B0B0B]/75"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center py-20">
          <ScrollFade delay={0}>
            <p className="text-2xl md:text-4xl leading-relaxed text-[#F7F5F2] font-light">
              Step into the version of yourself who already has<br className="hidden md:block" />
              everything you have been working towards.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="py-2">
        <div className="gold-divider"></div>
      </div>

      {/* Who This Is For */}
      <Section narrow className="">
        <div className="max-w-6xl mx-auto space-y-2">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center tracking-tight gradient-text mb-16">
              This Is For You If
            </h2>
          </ScrollFade>
          
          <div className="max-w-3xl mx-auto text-center space-y-8 text-base md:text-lg leading-relaxed font-light">
            <ScrollFade delay={300}>
              <p>✧ You are ready to embrace your full potential and step into the life you desire</p>
            </ScrollFade>
            <ScrollFade delay={400}>
              <p>✧ You know there is a bigger version of your life waiting and you are ready to step into it</p>
            </ScrollFade>
            <ScrollFade delay={500}>
              <p>✧ You are willing to let go of who you have been to become who you are meant to be</p>
            </ScrollFade>
            <ScrollFade delay={600}>
              <p>✧ You are ready to do deep, transformative work, not just surface-level mindset shifts</p>
            </ScrollFade>
            <ScrollFade delay={700}>
              <p>✧ You are committed to yourself and your transformation</p>
            </ScrollFade>
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="py-2">
        <div className="gold-divider"></div>
      </div>

      {/* Investment Note */}
      <Section background="dark" narrow className="">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <ScrollFade delay={0}>
            <p className="text-base md:text-lg opacity-75 leading-relaxed font-light">
              This is high-level, personalised coaching.<br />
              I work with a select number of women at a time to ensure each client receives my full attention and support.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-base md:text-lg opacity-75 leading-relaxed font-light">
              Investment details and availability will be discussed during your application call.
            </p>
          </ScrollFade>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="py-2">
        <div className="gold-divider"></div>
      </div>

      {/* Final CTA */}
      <Section narrow className="">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <ScrollFade delay={0}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight gradient-text">
              Ready to begin?
            </h2>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-xl md:text-2xl leading-relaxed font-light opacity-80">
              The first step is a conversation.<br />
              Apply below and I will be in touch.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={400}>
            <div className="pt-8">
              <Button href="mailto:contact@thealchemypath.co.uk" variant="primary">
                Apply Now
              </Button>
            </div>
          </ScrollFade>
          
          <ScrollFade delay={600}>
            <p className="text-sm opacity-50 font-light pt-4">
              Applications are reviewed within 48 hours
            </p>
          </ScrollFade>
          
          <ScrollFade delay={800}>
            <p className="text-sm opacity-50 font-light pt-6">
              Or email directly:{" "}
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

      {/* Gold Divider */}
      <div className="py-2">
        <div className="gold-divider"></div>
      </div>

      {/* Personal Images Section */}
      <Section background="dark" narrow className="">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFade delay={200}>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
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
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
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
