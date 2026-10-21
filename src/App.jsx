import Gallery from './components/Gallery';

export default function App() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-10 lg:px-16">
      <header className="flex items-center gap-3 border-b border-white/10 py-7">
        <span className="flex size-8 items-center justify-center rounded-lg border border-[#c6f4b0]/30 bg-[#c6f4b0]/10 text-[#c6f4b0]" aria-hidden="true">✳</span>
        <span className="text-xl font-semibold tracking-tight">STILL-by SIDDHANT<span className="text-[#c6f4b0]">.</span></span>
        <span className="ml-auto text-xs text-stone-400">A photo collection</span>
      </header>
      <section className="pb-10 pt-14 sm:pt-20">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#c6f4b0]">A little perspective</p>
        <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Ordinary moments.<br /><span className="text-stone-500">Extraordinary views.</span></h1>
        <p className="mt-6 max-w-md text-sm leading-6 text-stone-400">Explore a collection of photographs. Find your favourite perspectives and save the ones that stay with you.</p>
      </section>
      <Gallery />
    </main>
  );
}
