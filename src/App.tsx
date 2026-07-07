import { useEffect, useState } from "react";
import { 
  Sparkles, 
  BookOpen, 
  Check, 
  ChevronRight, 
  AlertTriangle,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Eye,
  Layers,
  Award
} from "lucide-react";

export default function App() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processType, setProcessType] = useState<"accept" | "decline" | null>(null);
  const [showDeclineWarning, setShowDeclineWarning] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Initialize Hotmart Sales Funnel Widget when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      if (typeof window.initHotmartFunnel === "function") {
        try {
          // @ts-ignore
          window.initHotmartFunnel();
        } catch (err) {
          console.warn("Hotmart mounting deferred:", err);
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsProcessing(true);
    setProcessType("accept");
    
    // Simulate instantaneous local order bump success state
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1800);
  };

  const handleDeclineClick = () => {
    setShowDeclineWarning(true);
  };

  const handleConfirmDecline = () => {
    setShowDeclineWarning(false);
    setIsProcessing(true);
    setProcessType("decline");

    setTimeout(() => {
      setIsProcessing(false);
      alert("A redirecionar de volta para o teu pedido original sem o upgrade ilustrado...");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#333333] font-sans antialiased flex flex-col justify-between selection:bg-[#EAE6DF] selection:text-[#333333]">
      
      {/* SUCCESS BANNER */}
      {isSuccess && (
        <div id="success-banner" className="bg-[#FAF9F5] border-b border-[#EAE6DF] py-5 text-center text-[#333333] sticky top-0 z-50 backdrop-blur-md bg-opacity-95 shadow-sm">
          <div className="max-w-xl mx-auto px-6 flex flex-col items-center">
            <CheckCircle2 className="h-8 w-8 text-[#C17A64] mb-1.5 stroke-[1.5]" />
            <h4 className="text-base font-serif italic font-semibold tracking-tight">Upgrade Adicionado com Sucesso!</h4>
            <p className="text-xs text-[#6A6458] mt-0.5 font-light">
              O "Manual de Execução Ilustrado" foi anexado ao teu pedido. O teu telemóvel receberá o acesso imediato.
            </p>
          </div>
        </div>
      )}

      {/* HEADER BAR & INTERRUPTION (Block 1) */}
      <div className="w-full pt-10 pb-4 px-4 text-center" id="block-1-interruption">
        <span className="inline-flex bg-[#F1EFEA] text-[#7A746B] px-5 py-2 rounded-full text-xs font-semibold tracking-wide items-center gap-2 border border-[#E3DFD7]">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C17A64] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C17A64]"></span>
          </span>
          Aguarda! Tens o método, mas queres ver o ponto exato para não cometeres erros?
        </span>
      </div>

      {/* MAIN CONVERSION WORKSPACE */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 lg:py-20 flex flex-col justify-center">
        
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: COPY, BENEFITS, PRICING */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Headline and Core Subhead (Block 2) */}
            <div className="space-y-5">
              <div className="flex items-center gap-1.5 font-semibold text-[10px] uppercase tracking-widest text-[#7A746B]">
                <Sparkles className="h-3.5 w-3.5 text-[#C17A64]" />
                <span>Oportunidade Exclusiva</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#333333] leading-[1.15]">
                O Atalho Visual: <span className="font-serif italic text-[#C17A64] font-normal">Não apenas leias, vê como se faz</span>.
              </h1>
              
              <p className="text-base sm:text-lg text-[#6A6458] font-light leading-relaxed max-w-xl">
                Garante a perfeição do teu trabalho com o único guia que traz imagens e ilustrações detalhadas para cada passo. Elimina o medo de errar e garante o acabamento de elite no teu <span className="font-semibold text-[#333333]">telemóvel</span>.
              </p>
            </div>

            {/* Included Stack (Block 4) */}
            <div className="grid grid-cols-1 gap-5 py-2">
              <div className="flex items-start gap-4">
                <div className="p-1 bg-[#FAF9F6] border border-[#E9E5DD] rounded-full text-[#D4AF37] mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-[#333333] block">Passo a Passo com Imagens Reais</span>
                  <span className="text-xs text-[#7A746B] font-light">Vê exatamente o resultado físico esperado ao fim de cada etapa de costura.</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-1 bg-[#FAF9F6] border border-[#E9E5DD] rounded-full text-[#D4AF37] mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-[#333333] block">Ilustrações Técnicas Detalhadas</span>
                  <span className="text-xs text-[#7A746B] font-light">Esquemas visuais ampliados que demonstram onde a agulha deve entrar no fio de trapilho.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-1 bg-[#FAF9F6] border border-[#E9E5DD] rounded-full text-[#D4AF37] mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-semibold text-[#333333] block">Guia de Acabamento Invisível</span>
                  <span className="text-xs text-[#7A746B] font-light">O segredo geométrico essencial para selar malas que justificam vendas de 150€.</span>
                </div>
              </div>
            </div>

            {/* Price Anchoring & Guarantee Box (Block 5 & 6) */}
            <div className="bg-[#FAF9F6] border border-[#EAE6DF] p-6 rounded-2xl space-y-4 shadow-[0_12px_40px_rgba(212,175,55,0.03)]">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-[#8A8478] line-through text-sm sm:text-base font-light">De €76,00</span>
                <span className="text-xl sm:text-2xl font-bold text-[#333333]">
                  por apenas <span className="font-serif italic text-[#C17A64] font-semibold text-2xl sm:text-3xl">€27,00</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-[#E8F5E9] border border-[#C8E6C9] px-2.5 py-1 rounded ml-auto">
                  Preço Exclusivo de Cliente
                </span>
              </div>
              
              <div className="flex items-start gap-2.5 text-xs text-[#C17A64] font-medium leading-relaxed pt-3 border-t border-[#EAE6DF]">
                <ShieldCheck className="w-4.5 h-4.5 shrink-0 text-[#C17A64]" />
                <span className="text-[#7A746B] font-light">
                  O risco é meu, o lucro é teu. <span className="font-semibold text-[#333333]">7 dias</span> para testar a tua nova visão com garantia total e incondicional.
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM ILLUSTRATED PDF BOOKLET MOCKUP (Block 3) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#FAF9F6] border border-[#EAE6DF] p-4 sm:p-6 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.02)] space-y-5">
              
              {/* Image from PostImg requested by the user */}
              <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl overflow-hidden border-y sm:border border-[#EAE6DF] bg-[#F5F3ED]">
                <img 
                  src="https://i.postimg.cc/dtj7VqyK/da442ed3-535a-4f95-a4aa-d9c21dc160be.png" 
                  alt="Manual de Execução Ilustrado Mockup" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover scale-[1.03] sm:scale-100 transition-transform duration-300"
                />
              </div>
              
              {/* Premium iPad/Booklet Frame Mockup */}
              <div className="border border-[#EAE6DF] rounded-2xl bg-[#F5F3ED] p-2.5 shadow-sm overflow-hidden relative">
                
                {/* PDF Reader Header Bar */}
                <div className="bg-[#FAF9F6]/95 backdrop-blur-md px-3 py-2 rounded-lg mb-2.5 flex items-center justify-between text-[10px] font-mono text-[#7A746B] border border-[#EAE6DF]">
                  <span className="flex items-center gap-1.5 text-[#333333] font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-[#C17A64]" />
                    Manual_Boutique_Ilustrado.pdf
                  </span>
                  <span>pág. 24 de 118</span>
                </div>

                {/* PDF Page Container */}
                <div className="bg-white rounded-xl p-4 space-y-4 border border-[#EAE6DF]">
                  
                  {/* Step Title inside the book */}
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C17A64] font-bold">Seção 2: O Ponto Invisível</span>
                    <h3 className="text-sm font-bold text-[#333333] mt-0.5 font-serif italic">Como Fechar a Carreira de Ponto Baixo Centrado</h3>
                  </div>

                  {/* Split Visual: Illustration (Left) vs Real Photo (Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Technical illustration representation */}
                    <div className="bg-[#FDFDFB] rounded-lg p-2.5 border border-[#F2EDE4] flex flex-col justify-between aspect-square">
                      <span className="text-[8px] font-mono uppercase tracking-wider text-[#8A8478] block mb-1 font-semibold">Ilustração 3.2</span>
                      
                      {/* Diagram representation SVG */}
                      <div className="flex-1 flex items-center justify-center relative">
                        <svg className="w-20 h-20 text-[#8A8478]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                          {/* Loop 1 */}
                          <path d="M20,60 C30,30 40,30 50,60" strokeWidth="2" strokeDasharray="3,3" />
                          {/* Loop 2 */}
                          <path d="M50,60 C60,30 70,30 80,60" strokeWidth="2" />
                          {/* Needle Representation */}
                          <line x1="10" y1="20" x2="60" y2="70" stroke="#C17A64" strokeWidth="3" />
                          <circle cx="15" cy="25" r="2.5" fill="#C17A64" />
                          {/* Entry Point Target Marker */}
                          <circle cx="50" cy="60" r="5" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                        </svg>
                        <span className="absolute bottom-1 right-1 text-[7px] font-mono text-red-600 bg-red-50 px-1 rounded border border-red-200 font-semibold">
                          Inserir Agulha Aqui
                        </span>
                      </div>
                      
                      <span className="text-[7px] font-mono text-center text-[#7A746B] block mt-1.5 leading-tight font-medium">
                        Movimento exato da agulha por trás da alça
                      </span>
                    </div>

                    {/* Real Image of the result */}
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 group">
                      <img 
                        src="/src/assets/images/luxury_bag_boutique_1783387306260.jpg" 
                        alt="Mala de trapilho na Boutique" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A1A]/85 to-transparent p-2">
                        <span className="text-[7px] font-mono uppercase tracking-wider text-white/90 block font-semibold">Foto de Produção Real</span>
                        <span className="text-[9px] font-bold text-emerald-400">Padrão Boutique Estável</span>
                      </div>
                    </div>

                  </div>

                  {/* Inline tip from manual */}
                  <div className="bg-[#FAF8F5] rounded-lg p-2.5 border border-[#EAE6DF] text-[9px] text-[#5A544A] leading-relaxed flex items-start gap-1.5">
                    <span className="text-[#C17A64] font-bold font-mono">Dica:</span>
                    <span className="font-light">Mantém a tensão do fio uniforme. A alça posterior esconde o fecho criando um relevo completamente invisível às compradoras mais exigentes.</span>
                  </div>

                </div>
              </div>

              {/* Grid Caption */}
              <p className="text-[10px] text-center text-[#7A746B] py-1 font-medium flex items-center justify-center gap-1 font-light">
                <span>O teu telemóvel exibirá desenhos técnicos nítidos e fáceis de seguir</span>
              </p>

            </div>
          </div>

        </div>

        {/* BLOCK 7 (Hotmart Integration & Main Call-to-Actions) */}
        <div className="mt-16 pt-10 border-t border-[#EAE6DF] flex flex-col items-center space-y-8">
          
          {/* HOTMART SALES FUNNEL MOUNT ELEMENT */}
          {/* Located strictly here, right under the price / guarantee column context */}
          <div className="w-full flex justify-center max-w-md mx-auto">
            <div id="hotmart-sales-funnel" className="w-full text-center"></div>
          </div>

          {/* Localized PT Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-[#7A746B] text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>Seguro via MB WAY</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 bg-[#C17A64] rounded-full"></span>Suporte 24/7</span>
          </div>

        </div>

      </main>

      {/* BLOCK 8 (Execution Script Reference & Ultra-minimal Footer) */}
      <footer className="py-12 bg-[#F3EFE7] border-t border-[#EAE6DF] text-center" id="footer-block-8">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <div className="text-[10px] text-[#8A8478] font-mono">
            &copy; {new Date().getFullYear()} Manual de Execução Ilustrado. Todos os direitos reservados. Lisboa, Portugal.
          </div>
        </div>
      </footer>

      {/* WARNING DIALOG / PERSUASION DIALOG */}
      {showDeclineWarning && (
        <div id="decline-modal" className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-6 z-50">
          <div className="bg-[#FAF9F6] rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#EAE6DF] text-center relative overflow-hidden">
            
            <div className="absolute top-0 inset-x-0 h-1 bg-[#C17A64]"></div>

            <div className="mx-auto h-12 w-12 rounded-full bg-[#FAF5F2] text-[#C17A64] flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 stroke-[1.5]" />
            </div>

            <h4 className="text-lg font-bold text-[#333333] tracking-tight font-serif italic">
              Tens a certeza que queres recusar este mimo?
            </h4>
            
            <p className="text-xs text-[#7A746B] mt-3 leading-relaxed font-light">
              Ao clicares em recusar, vais abdicar de uma poupança imediata de <span className="font-semibold text-[#333333]">€49,00</span>. O preço voltará para o valor original de €76,00 se decidires adquirir este manual mais tarde.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => setShowDeclineWarning(false)}
                className="bg-[#C17A64] hover:bg-[#B06E59] text-white text-sm font-semibold py-3 rounded-full transition-all cursor-pointer shadow-sm"
              >
                Voltar e Garantir o Desconto
              </button>
              
              <button
                onClick={handleConfirmDecline}
                className="text-[#8A8478] hover:text-red-600 text-xs font-semibold py-2.5 transition-colors cursor-pointer"
              >
                Sim, quero recusar e continuar sem o Manual Ilustrado
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

