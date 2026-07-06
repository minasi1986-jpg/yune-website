"use client";
import Link from "next/link";

const menu = {
  Science: [
    {name: "Barrier Science", href: "/science/barrier-science"},
    {name: "Ingredients", href: "/science/ingredients"},
    {name: "Clinical Evidence", href: "/science/clinical-evidence"},
    {name: "Research Library", href: "/science/research-library"},
    {name: "FAQ", href: "/science/faq"},
  ],
  Journal: [{name: "Expert Articles", href: "/journal/expert-articles"}],
  "AI Skin Assessment": [{name: "Detect Symptoms", href: "/assessment/detect-symptoms"}],
  "8-Weeks Journey": [{name: "Journey Overview", href: "/journey/overview"}],
  About: [{name: "Our Story", href: "/about/our-story"}],
  Contact: [{name: "Get In Touch", href: "/contact/get-in-touch"}]
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-[#F7F4F1]/80 backdrop-blur z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <Link href="/" className="text-3xl font-bold" style={{fontFamily: "Playfair Display"}}>YUNE</Link>
        <div className="hidden md:flex gap-8 text-sm">
          {Object.keys(menu).map((key) => (
            <div key={key} className="group relative">
              <button className="hover:text-[#7A8C7A]">{key}</button>
              <div className="absolute hidden group-hover:block bg-white shadow-xl p-4 rounded-lg mt-3 w-64">
                {menu[key].map((item) => (
                  <Link key={item.href} href={item.href} className="block py-1.5 hover:text-[#7A8C7A]">{item.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href="/contact/get-in-touch" className="bg-[#1F2F24] text-white px-6 py-2.5 rounded-full hover:bg-[#0F1F17]">Apply</Link>
      </div>
    </nav>
  )
}