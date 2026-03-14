import { MessageCircle, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const DemoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 border-b border-orange-500/20 backdrop-blur-sm">
      <div className="container py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500 flex-shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-foreground">
              <span className="font-semibold">Atendimento com agilidade:</span> fale agora com o Sr. Cicero.
              <span className="hidden sm:inline"> Orcamento rapido para reformas e pinturas.</span>
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 bg-orange-500 hover:bg-orange-400 text-gray-900 font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'demo_banner_criar_site'
                });
              }
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Pedir orcamento
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;
