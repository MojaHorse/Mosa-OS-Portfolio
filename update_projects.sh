sed -i '' '/<\!-- SPACER for end of scroll -->/i\
        {/* COL 8: STACKED (KHOLO, 48Weather) */}\
        <div className="w-[450px] min-w-[450px] flex flex-col gap-8 shrink-0 snap-center">\
          <div \
            onClick={() => setActiveProject({\
              id: '"'"'kholo'"'"',\
              title: '"'"'KHOLO'"'"',\
              category: '"'"'2026 // AUTOMATION SYSTEM'"'"',\
              description: '"'"'Automated B2B WhatsApp Order Processing system for wholesale distributors. Extracts orders from WhatsApp, matches SKUs, and pushes to Sage 200 ERP using an AI learning loop.'"'"',\
              stack: ['"'"'TYPESCRIPT'"'"', '"'"'FASTIFY'"'"', '"'"'POSTGRES'"'"'],\
              github: '"'"'https://github.com/MojaHorse/KHOLO'"'"'\
            })}\
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-black text-neo-white group"\
            data-cursor="OPEN"\
          >\
            <div>\
              <div className="font-mono text-sm text-gray-400 mb-2 font-bold flex justify-between">\
                <span>2026 // AUTOMATION SYSTEM</span>\
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-white px-1 transition-opacity">GITHUB</span>\
              </div>\
              <h3 className="font-heading text-4xl mb-2 leading-none">KHOLO</h3>\
              <p className="font-bold text-gray-300 text-base line-clamp-2">Automated B2B WhatsApp Order Processing system for wholesale distributors.</p>\
            </div>\
            <div className="flex gap-2">\
              <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>\
              <span className="border-2 border-neo-white px-2 py-1 font-mono text-xs font-bold">POSTGRES</span>\
            </div>\
          </div>\
          <div \
            onClick={() => setActiveProject({\
              id: '"'"'48weather'"'"',\
              title: '"'"'48 WEATHER'"'"',\
              category: '"'"'2026 // WEATHER APP'"'"',\
              description: '"'"'Immersive ambient weather dashboard featuring real-time data, beautiful atmospheric backgrounds, hourly forecasting, and interactive radars. Built for both desktop and kiosk displays.'"'"',\
              stack: ['"'"'NEXT.JS'"'"', '"'"'TYPESCRIPT'"'"'],\
              github: '"'"'https://github.com/MojaHorse/48Weather'"'"'\
            })}\
            className="h-[234px] brutalist-border p-8 hover:bg-neo-yellow transition-colors cursor-crosshair flex flex-col justify-between bg-neo-white group"\
            data-cursor="OPEN"\
          >\
            <div>\
              <div className="font-mono text-sm text-gray-600 mb-2 font-bold flex justify-between">\
                <span>2026 // WEATHER APP</span>\
                <span className="opacity-0 group-hover:opacity-100 font-mono text-xs border border-neo-black px-1 transition-opacity">GITHUB</span>\
              </div>\
              <h3 className="font-heading text-4xl mb-2 leading-none">48 WEATHER</h3>\
              <p className="font-bold text-base line-clamp-2">Immersive ambient weather dashboard featuring real-time data and atmospheric backgrounds.</p>\
            </div>\
            <div className="flex gap-2">\
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">NEXT.JS</span>\
              <span className="border-2 border-neo-black px-2 py-1 font-mono text-xs font-bold">TYPESCRIPT</span>\
            </div>\
          </div>\
        </div>\
' src/components/ProjectsMosaic.tsx
