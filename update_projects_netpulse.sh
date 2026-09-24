sed -i '' '/<\!-- SPACER for end of scroll -->/i\
        {/* COL 9: STACKED (NETPULSE, MOCK-SAGE-ERP) */}\
        <div className="w-[450px] min-w-[450px] flex flex-col gap-8 shrink-0 snap-center">\
          <div \
            onClick={() => setActiveProject({\
              id: '"'"'netpulse'"'"',\
              title: '"'"'NETPULSE'"'"',\
              category: '"'"'2026 // DIAGNOSTIC TOOL'"'"',\
              description: '"'"'Cyberpunk-styled network speed test and diagnostic report scanner built with Vanilla JS and Vite. Evaluates internet connection telemetry across download, upload, latency, and jitter.'"'"',\
              stack: ['"'"'JAVASCRIPT'"'"', '"'"'VITE'"'"', '"'"'CSS'"'"'],\
              github: '"'"'https://github.com/MojaHorse/netpulse'"'"'\
            })}\
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"\
            data-cursor="OPEN"\
          >\
            <div>\
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">\
                <span>2026 // DIAGNOSTIC TOOL</span>\
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>\
              </div>\
              <h3 className="font-heading text-4xl mb-2 leading-none">NETPULSE</h3>\
              <p className="font-bold text-base line-clamp-2">Cyberpunk-styled network speed test and diagnostic report scanner.</p>\
            </div>\
            <div className="flex gap-2">\
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">JAVASCRIPT</span>\
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">VITE</span>\
            </div>\
          </div>\
          <div \
            onClick={() => setActiveProject({\
              id: '"'"'mock-sage-erp'"'"',\
              title: '"'"'MOCK SAGE ERP'"'"',\
              category: '"'"'2026 // INFRASTRUCTURE'"'"',\
              description: '"'"'Mock Sage 200 Evolution ERP connection API. Used to simulate and test B2B order integrations idempotency and payload formatting before production deployments.'"'"',\
              stack: ['"'"'TYPESCRIPT'"'"', '"'"'API'"'"'],\
              github: '"'"'https://github.com/MojaHorse/mock-sage-erp'"'"'\
            })}\
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-black text-neo-white group"\
            data-cursor="OPEN"\
          >\
            <div>\
              <div className="font-mono text-sm text-gray-400 mb-2 font-bold flex justify-between">\
                <span>2026 // INFRASTRUCTURE</span>\
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-white px-1 transition-opacity">GITHUB</span>\
              </div>\
              <h3 className="font-heading text-4xl mb-2 leading-none">MOCK SAGE ERP</h3>\
              <p className="font-bold text-gray-300 text-base line-clamp-2">Mock Sage 200 Evolution ERP connection API for B2B testing.</p>\
            </div>\
            <div className="flex gap-2">\
              <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>\
              <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">API</span>\
            </div>\
          </div>\
        </div>\
' src/components/ProjectsMosaic.tsx
