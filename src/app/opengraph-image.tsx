import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Mando | ~/dev';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0a0a0b',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)',
          color: '#e4e4e7',
          padding: '60px 70px',
          fontFamily: 'monospace',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}
      >
        {/* Terminal Window Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            paddingBottom: '24px',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#eab308' }} />
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            <span style={{ marginLeft: '16px', fontSize: '20px', color: '#71717a' }}>mando@portfolio:~$</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            <span style={{ fontSize: '18px', color: '#22c55e', fontWeight: 600 }}>ONLINE [DISCORD: Mando]</span>
          </div>
        </div>

        {/* Content Body */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Left Column: Headline and Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '620px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '18px',
                color: '#22c55e',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
              }}
            >
              <span>λ</span>
              <span>Developer · Hardware Hacker · Builder</span>
            </div>

            <h1
              style={{
                fontSize: '84px',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.05,
                margin: '0 0 20px 0',
                letterSpacing: '-2px',
              }}
            >
              Mando
            </h1>

            <p
              style={{
                fontSize: '22px',
                color: '#a1a1aa',
                lineHeight: 1.5,
                margin: '0 0 32px 0',
              }}
            >
              18-year-old developer building real-time TUIs, ESP32 hardware, and web experiments with live Discord presence.
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Python', 'Next.js', 'ESP32', 'Textual TUIs', 'IoT Sensors', 'Hardware'].map((tag) => (
                <div
                  key={tag}
                  style={{
                    padding: '6px 14px',
                    fontSize: '15px',
                    borderRadius: '8px',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    color: '#22c55e',
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: ASCII Box Preview */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: '28px 32px',
              minWidth: '380px',
            }}
          >
            <div
              style={{
                fontSize: '15px',
                color: '#71717a',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '12px',
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>cat system.yml</span>
              <span style={{ color: '#22c55e' }}>● sys.ok</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: '#71717a', width: '90px' }}>stack:</span>
                <span style={{ color: '#ffffff' }}>Python · Next.js · ESP32</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: '#71717a', width: '90px' }}>focus:</span>
                <span style={{ color: '#22c55e' }}>TUIs &amp; IoT Hardware</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: '#71717a', width: '90px' }}>uptime:</span>
                <span style={{ color: '#ffffff' }}>18 years</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: '#71717a', width: '90px' }}>discord:</span>
                <span style={{ color: '#a855f7' }}>@faeemaxn (Mando)</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: '#71717a', width: '90px' }}>github:</span>
                <span style={{ color: '#06b6d4' }}>github.com/faeemx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
            marginTop: 'auto',
            fontSize: '15px',
            color: '#71717a',
          }}
        >
          <span>interactive ascii world · live discord presence</span>
          <span style={{ color: '#22c55e' }}>faeemx.github.io/portfolio ↗</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
