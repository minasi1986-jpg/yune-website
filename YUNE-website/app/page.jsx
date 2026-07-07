export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">

      {/* 1. HERO */}
      <section className="grid md:grid-cols-2 gap-12 py-24 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{fontFamily: "Playfair Display"}}>
            Healthy skin <br/>begins with a <br/>healthy barrier.
          </h1>
          <p className="text-gray-600 mb-8 text-lg">Science-led skincare that hydrates, strengthens, repairs and visibly renews your skin.</p>
          <button className="bg-[#1F2F24] text-white px-8 py-3 rounded-full">Discover Your Skin</button>
        </div>
        <img src="/images/homepage.jpg" alt="YUNE Hero" className="rounded-2xl shadow-lg" />
      </section>

      {/* 2. 4 PILLARS */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12" style={{fontFamily: "Playfair Display"}}>Four Scientific Pillars</h2>
        <img src="/images/pillars.jpg" alt="4 Pillars" className="w-full rounded-2xl" />
      </section>

     {/* 3. FORMULATION */}
     <section className="py-20">
       <h2 className="text-4xl font-bold mb-12" style={{fontFamily: "Playfair Display"}>Our Formulation Philosophy</h2>
     </section>}
       

     {/* 4. AI ASSESSMENT */}
     <section className="py-20">
      <img src="/images/ai-assessment.jpg" alt="AI Assessment" className="w-full rounded-2xl" />
     </section>

      {/* 5. 8 WEEKS */}
      <section className="py-20">
        <img src="/images/journey.jpg" alt="8 Weeks Journey" className="w-full rounded-2xl" />
      </section>

      {/* 6. WAITLIST */}
      <section className="py-20 text-center">
        <img src="/images/join-waitlist.jpg" alt="Join Waitlist" className="w-full rounded-2xl" />
      </section>

    </div>
  )
}