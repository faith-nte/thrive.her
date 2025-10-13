'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useRef, useState } from 'react'

const maternalData = [
    {
        ethnicity: 'White women',
        risk: 1.0,
        color: '#A7B093'
    },
    {
        ethnicity: 'Asian women',
        risk: 1.8,
        color: '#8FA081'
    },
    {
        ethnicity: 'Black women',
        risk: 3.7,
        color: '#C78E1D'
    }
]

// Enhanced custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return (
            <div style={{
                background: 'rgba(33, 39, 63, 0.95)',
                backdropFilter: 'blur(16px)',
                border: '2px solid #C78E1D',
                borderRadius: '16px',
                padding: '20px 24px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25), 0 10px 30px rgba(199, 142, 29, 0.15)',
                fontSize: '15px',
                fontFamily: 'inherit',
                minWidth: '220px',
                color: '#F9E8CF'
            }}>
                <p style={{ 
                    color: '#C78E1D', 
                    fontWeight: '700', 
                    margin: '0 0 12px 0',
                    fontSize: '16px',
                    letterSpacing: '0.5px'
                }}>{label}</p>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    marginBottom: '8px'
                }}>
                    <div style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: data.color,
                        borderRadius: '3px'
                    }} />
                    <span style={{ 
                        fontWeight: '600',
                        fontSize: '18px',
                        color: '#C78E1D'
                    }}>{data.risk}×</span>
                    <span style={{ 
                        fontWeight: '500',
                        opacity: 0.9
                    }}>relative risk</span>
                </div>
                {data.risk > 1 && (
                    <p style={{ 
                        fontSize: '13px', 
                        opacity: 0.8, 
                        margin: '8px 0 0 0',
                        fontStyle: 'italic',
                        color: '#F9E8CF'
                    }}>
                        {((data.risk - 1) * 100).toFixed(0)}% higher than baseline
                    </p>
                )}
                {data.risk === 1 && (
                    <p style={{ 
                        fontSize: '13px', 
                        opacity: 0.8, 
                        margin: '8px 0 0 0',
                        fontStyle: 'italic',
                        color: '#F9E8CF'
                    }}>
                        Reference baseline
                    </p>
                )}
            </div>
        )
    }
    return null
}

// Custom animated bar component
const AnimatedBar = (props) => {
    const { fill, x, y, width, height, payload } = props
    const [animatedHeight, setAnimatedHeight] = useState(0)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedHeight(height)
        }, payload ? payload.ethnicity === 'White women' ? 200 : payload.ethnicity === 'Asian women' ? 400 : 600 : 0)
        
        return () => clearTimeout(timer)
    }, [height, payload])
    
    const radius = 8
    const actualY = y + (height - animatedHeight)
    
    return (
        <g>
            <defs>
                <linearGradient id={`gradient-${payload?.ethnicity?.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={fill} stopOpacity="1" />
                    <stop offset="50%" stopColor={fill} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={fill} stopOpacity="0.8" />
                </linearGradient>
            </defs>
            <rect 
                x={x} 
                y={actualY} 
                width={width} 
                height={animatedHeight} 
                fill={`url(#gradient-${payload?.ethnicity?.replace(/\s+/g, '')})`}
                rx={radius}
                ry={radius}
                style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            />
        </g>
    )
}

export default function MissionImpactSection() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="mission-impact-section"
            role="region"
            aria-labelledby="mission-impact-heading"
            style={{
                background: 'linear-gradient(180deg, #F9E8CF 0%, #F4DDBB 100%)',
                padding: '120px 0 80px 0',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Subtle warm background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(199, 142, 29, 0.04) 0%, transparent 60%),
                                 radial-gradient(circle at 75% 75%, rgba(244, 221, 187, 0.3) 0%, transparent 70%)`,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                padding: '0 24px',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Header Section */}
                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: '80px',
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                    <h1 
                        id="mission-impact-heading"
                        className="site-footer__newsletter-title"
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: '700',
                            color: '#21273F',
                            marginBottom: '20px',
                            lineHeight: '1.1',
                            fontFamily: 'var(--anity-font-playfair), "Playfair Display", serif',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Numbers Don't Lie
                    </h1>
                    
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        color: '#21273F',
                        opacity: '0.9',
                        marginBottom: '40px',
                        maxWidth: '700px',
                        margin: '0 auto 40px auto',
                        lineHeight: '1.4',
                        fontStyle: 'italic',
                        fontWeight: '500'
                    }}>
                        The devastating reality of maternal health disparities
                    </p>
                    
                    <div style={{ 
                        maxWidth: '800px', 
                        margin: '0 auto',
                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '32px',
                        border: '1px solid rgba(199, 142, 29, 0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                    }}>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                            color: '#21273F',
                            lineHeight: '1.6',
                            fontWeight: '500',
                            margin: 0
                        }}>
                            Black women are 4 times more likely to die in pregnancy and childbirth than white women in the UK. These stark disparities demand immediate action.
                        </p>
                    </div>
                </div>

                {/* Chart Section */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{
                        background: 'rgba(167, 176, 147, 0.2)',
                        backdropFilter: 'blur(16px)',
                        borderRadius: '20px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 32px rgba(167, 176, 147, 0.15)',
                        padding: 'clamp(32px, 5vw, 56px)',
                        border: '2px solid rgba(167, 176, 147, 0.4)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative element */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px',
                            right: '-50px',
                            width: '150px',
                            height: '150px',
                            background: 'radial-gradient(circle, rgba(167, 176, 147, 0.15) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }} />
                        
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                            fontWeight: '700',
                            color: '#21273F',
                            marginBottom: '48px',
                            textAlign: 'center',
                            fontFamily: 'var(--anity-font-playfair), "Playfair Display", serif',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            Maternal Mortality Risk by Ethnicity
                        </h2>
                        
                        <div 
                            style={{ 
                                height: 'clamp(300px, 50vw, 400px)', 
                                width: '100%',
                                minHeight: '300px'
                            }} 
                            role="img" 
                            aria-label="Bar chart showing maternal death risk by ethnicity"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={maternalData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 60
                                    }}
                                    barCategoryGap="20%"
                                >
                                    <CartesianGrid 
                                        strokeDasharray="3 3" 
                                        stroke="rgba(44, 62, 52, 0.3)" 
                                        horizontal={true}
                                        vertical={false}
                                    />
                                    <XAxis 
                                        dataKey="ethnicity"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ 
                                            fill: '#2C3E34', 
                                            fontSize: 13,
                                            fontWeight: 600,
                                            fontFamily: 'inherit'
                                        }}
                                        interval={0}
                                        angle={-15}
                                        textAnchor="end"
                                        height={60}
                                    />
                                    <YAxis 
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ 
                                            fill: '#2C3E34', 
                                            fontSize: 12,
                                            fontWeight: 600,
                                            fontFamily: 'inherit'
                                        }}
                                        label={{ 
                                            value: 'Relative Risk', 
                                            angle: -90, 
                                            position: 'insideLeft',
                                            style: { 
                                                textAnchor: 'middle',
                                                fill: '#2C3E34',
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                fontFamily: 'inherit'
                                            }
                                        }}
                                        domain={[0, 4]}
                                        tickCount={5}
                                    />
                                    <Tooltip 
                                        content={<CustomTooltip />}
                                        cursor={{ fill: 'rgba(199, 142, 29, 0.1)' }}
                                    />
                                    <Bar 
                                        dataKey="risk"
                                        shape={<AnimatedBar />}
                                        stroke="rgba(33, 39, 63, 0.1)"
                                        strokeWidth={1}
                                    >
                                        {maternalData.map((entry, index) => (
                                            <Bar key={`bar-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        
                        {/* Chart description for screen readers */}
                        <div style={{ 
                            position: 'absolute', 
                            left: '-10000px', 
                            width: '1px', 
                            height: '1px', 
                            overflow: 'hidden' 
                        }}>
                            Chart showing maternal death risk by ethnicity: White women have 1 times baseline risk, 
                            Asian women have 1.8 times higher risk, and Black women have 3.7 times higher risk.
                        </div>
                    </div>
                </div>

                {/* Impact Statistics */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'clamp(24px, 4vw, 48px)',
                    marginBottom: '80px'
                }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(16px)',
                        borderRadius: '20px',
                        padding: 'clamp(32px, 5vw, 40px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                        border: '1px solid rgba(199, 142, 29, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div style={{
                                flexShrink: '0',
                                width: '48px',
                                height: '48px',
                                backgroundColor: 'rgba(199, 142, 29, 0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '16px'
                            }}>
                                <svg style={{ width: '24px', height: '24px', color: '#21273F' }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '700',
                                    color: '#21273F',
                                    marginBottom: '16px',
                                    fontFamily: 'var(--anity-font-playfair), "Playfair Display", serif'
                                }}>
                                    Critical Health Disparities
                                </h3>
                                <p style={{
                                    color: '#2C3E34',
                                    lineHeight: '1.7',
                                    fontSize: '1rem',
                                    margin: '0',
                                    fontWeight: '500'
                                }}>
                                    <strong style={{ color: '#C78E1D', fontWeight: '800', fontSize: '1.1em' }}>Black women</strong> are 3.7x more likely to die in childbirth than white women. <strong style={{ color: '#C78E1D', fontWeight: '800', fontSize: '1.1em' }}>Asian women</strong> face 1.8x higher risk. These disparities persist across socioeconomic levels.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(16px)',
                        borderRadius: '20px',
                        padding: 'clamp(32px, 5vw, 40px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                        border: '1px solid rgba(199, 142, 29, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div style={{
                                flexShrink: '0',
                                width: '48px',
                                height: '48px',
                                backgroundColor: 'rgba(199, 142, 29, 0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '16px'
                            }}>
                                <svg style={{ width: '24px', height: '24px', color: '#21273F' }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '700',
                                    color: '#21273F',
                                    marginBottom: '16px',
                                                                        fontFamily: 'var(--anity-font-playfair), "Playfair Display", serif'
                                }}>
                                    Economic Impact
                                </h3>
                                <p style={{
                                    color: '#21273F',
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem',
                                    margin: '0'
                                }}>
                                    Poor maternal health outcomes cost the NHS <strong style={{ color: '#C78E1D' }}>£1.2 billion annually</strong>. Prevention programs show <strong style={{ color: '#C78E1D' }}>5:1 return on investment</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sources */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#2C3E34',
                        opacity: '0.7',
                        fontWeight: '500',
                        margin: '0',
                        fontStyle: 'italic',
                        background: 'rgba(249, 232, 207, 0.3)',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        border: '1px solid rgba(199, 142, 29, 0.2)'
                    }}>
                        Sources: NHS, MBRRACE-UK, Office for National Statistics
                    </p>
                </div>

                {/* Subtle section separator */}
                <div style={{
                    height: '60px',
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.03), transparent)',
                    margin: '40px 0'
                }} />

                {/* Mission Statement */}
                <div style={{
                    background: '#21273F',
                    borderRadius: '24px',
                    padding: 'clamp(48px, 8vw, 80px)',
                    textAlign: 'center',
                    border: '3px solid #C78E1D',
                    boxShadow: '0 25px 80px rgba(0,0,0,0.25), inset 0 1px 0 rgba(199, 142, 29, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative background elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(199, 142, 29, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-80px',
                        right: '-80px',
                        width: '160px',
                        height: '160px',
                        background: 'radial-gradient(circle, rgba(249, 232, 207, 0.05) 0%, transparent 70%)',
                        borderRadius: '50%'
                    }} />
                    
                    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                        <div style={{ marginBottom: '32px' }}>
                            <div style={{
                                width: '64px',
                                height: '4px',
                                backgroundColor: '#C78E1D',
                                margin: '0 auto 24px auto',
                                borderRadius: '2px'
                            }}></div>
                            <h2 style={{
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                fontWeight: '700',
                                color: '#C78E1D',
                                marginBottom: '32px',
                                lineHeight: '1.2',
                                fontFamily: 'var(--anity-font-playfair), "Playfair Display", serif',
                                position: 'relative',
                                zIndex: 2,
                                letterSpacing: '-0.01em'
                            }}>
                                Our Mission
                            </h2>
                        </div>
                        <p style={{
                            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                            color: '#F9E8CF',
                            lineHeight: '1.6',
                            opacity: '0.9',
                            marginBottom: '32px'
                        }}>
                            To reduce maternal health disparities by empowering communities with knowledge, supporting healthcare professionals with training, and partnering with organizations to create lasting change.
                        </p>
                        <div style={{ marginTop: '32px' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#C78E1D'
                            }}>
                                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span style={{
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    letterSpacing: '0.05rem',
                                    textTransform: 'uppercase'
                                }}>
                                    Empowering Women Through Healthcare
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mission-impact-section {
                    background-color: #F9E8CF;
                    position: relative;
                }
                
                /* Custom scrollbar for chart container on webkit browsers */
                .mission-impact-section ::-webkit-scrollbar {
                    height: 6px;
                }
                
                .mission-impact-section ::-webkit-scrollbar-track {
                    background: rgba(199, 142, 29, 0.1);
                    border-radius: 3px;
                }
                
                .mission-impact-section ::-webkit-scrollbar-thumb {
                    background: #C78E1D;
                    border-radius: 3px;
                }
                
                .mission-impact-section ::-webkit-scrollbar-thumb:hover {
                    background: #B8801A;
                }
                
                /* Ensure text is readable and accessible */
                @media (prefers-reduced-motion: reduce) {
                    .mission-impact-section * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
                
                /* Enhanced focus styles for accessibility */
                .mission-impact-section button:focus,
                .mission-impact-section a:focus {
                    outline: 2px solid #C78E1D;
                    outline-offset: 2px;
                }
                
                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .mission-impact-section h2,
                    .mission-impact-section h3,
                    .mission-impact-section h4,
                    .mission-impact-section p {
                        color: #000000 !important;
                    }
                    
                    .mission-impact-section div[style*="background: white"] {
                        border: 2px solid #000000 !important;
                    }
                }
                
                /* Mobile responsiveness */
                @media (max-width: 768px) {
                    .mission-impact-section {
                        padding: 60px 0 !important;
                    }
                    
                    .container {
                        padding: 0 16px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .mission-impact-section {
                        padding: 40px 0 !important;
                    }
                }
                
                /* Smooth hover effects */
                .mission-impact-section div[style*="background: rgba(255, 255, 255, 0.9)"]:hover {
                    transform: translateY(-2px);
                    transition: transform 0.2s ease;
                    box-shadow: 0 12px 40px rgba(33, 39, 63, 0.12) !important;
                }
                
                /* Print styles */
                @media print {
                    .mission-impact-section {
                        background: white !important;
                        color: black !important;
                    }
                    
                    .mission-impact-section h2,
                    .mission-impact-section h3,
                    .mission-impact-section h4,
                    .mission-impact-section p {
                        color: black !important;
                    }
                }
            `}</style>
        </section>
    )
}
