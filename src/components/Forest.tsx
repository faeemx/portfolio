import AsciiText from './AsciiText';

const BIG_TREE = `
            ,@@@@@@@,
    ,,,.   ,@@@@@@/@@,  .oo8888o.
 ,&%%&%&&%,@@@@@/@@@@@@,8888\\88/8o
,%&\\%&&%&&%,@@@\\@@@/@@@88\\88888/88'
%&&%&%&/%&&%@@\\@@/ /@@@88888\\88888'
%&&%/ %&%%&&@@\\ V /@@' \`88\\8 \`/88'
\`&%\\ \` /%&'    |.|        \\ '|8'
    |o|        | |         | |
    |.|        | |         | |
 \\/ ._\\//_/__/  ,\\_//__\\/.  \\_//__/_
`;

export default function Forest() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute top-10 left-0 w-full text-center opacity-10">
        <span className="text-9xl font-bold tracking-widest text-[var(--accent)]">FOREST</span>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">
            <AsciiText text="[01] The Learning Forest" delay={0} />
          </h2>
          <div className="text-[var(--text-primary)] space-y-4 max-w-lg">
            <p>
              My journey began by planting small seeds of curiosity. Over time, they grew into strong branches spanning software development, hardware integration, and cloud architecture.
            </p>
            <ul className="list-none space-y-3 mt-6 text-sm">
              <li><span className="text-[var(--accent)]">{'>'}</span> <strong className="text-white">Languages:</strong> Python, JavaScript, HTML/CSS</li>
              <li><span className="text-[var(--accent)]">{'>'}</span> <strong className="text-white">Frameworks & Tools:</strong> Textual, FastAPI, Flask, Scrapy</li>
              <li><span className="text-[var(--accent)]">{'>'}</span> <strong className="text-white">Hardware & IoT:</strong> ESP32 Microcontrollers, Sensor Integration (DHT11/BMP280)</li>
              <li><span className="text-[var(--accent)]">{'>'}</span> <strong className="text-white">Infrastructure:</strong> Supabase, Firebase, MongoDB, Vercel, Render</li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1 text-[var(--accent)] flex justify-center">
          <pre className="ascii-art text-xs sm:text-sm">
            {BIG_TREE}
          </pre>
        </div>
      </div>
    </section>
  );
}