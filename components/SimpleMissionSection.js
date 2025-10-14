'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useRef, useState } from 'react'

const maternalData = [
    { name: 'White women', value: 7.5, color: '#A7B093' },
    { name: 'Asian women', value: 13.6, color: '#8FA081' },
    { name: 'Black women', value: 27.9, color: '#C78E1D' }
]

// Custom tooltip for better data presentation
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0]
        return (
            <div style={{
                background: 'rgba(33, 39, 63, 0.95)',
                border: '2px solid #C78E1D',
                borderRadius: '12px',
                padding: '16px 20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                fontSize: '14px',
                color: '#F9E8CF',
                fontFamily: 'var(--thriveher-body)'
            }}>
                <p style={{ 
                    color: '#C78E1D', 
                    fontWeight: '700', 
                    margin: '0 0 8px 0',
                    fontSize: '15px',
                    fontFamily: 'var(--thriveher-heading)'
                }}>{label}</p>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px'
                }}>
                    <span style={{ 
                        fontWeight: '700',
                        fontSize: '18px',
                        color: '#C78E1D'
                    }}>{data.value}</span>
                    <span>deaths per 100,000 births</span>
                </div>
                {label === 'Black women' && (
                    <p style={{ 
                        fontSize: '12px', 
                        opacity: 0.8, 
                        margin: '6px 0 0 0',
                        fontStyle: 'italic'
                    }}>
                        Nearly 4× higher than White women
                    </p>
                )}
                {label === 'Asian women' && (
                    <p style={{ 
                        fontSize: '12px', 
                        opacity: 0.8, 
                        margin: '6px 0 0 0',
                        fontStyle: 'italic'
                    }}>
                        Nearly 2× higher than White women
                    </p>
                )}
            </div>
        )
    }
    return null
}

export default function SimpleMissionSection() {
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
            style={{ 
                background: 'linear-gradient(180deg, rgba(167, 176, 147, 0.3) 0%, #F9E8CF 50%, rgba(249, 232, 207, 0.8) 100%)', 
                padding: '80px 0 80px 0',
                position: 'relative'
            }}
            role="region"
            aria-labelledby="mission-impact-heading"
        >
            {/* Soft background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(199, 142, 29, 0.06) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 80%, rgba(249, 232, 207, 0.4) 0%, transparent 60%)`,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header Section */}
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div style={{ 
                            textAlign: 'center', 
                            marginBottom: '80px',
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isVisible ? 1 : 0,
                            transition: 'all 0.8s ease-out'
                        }}>
                            <h1 
                                id="mission-impact-heading"
                                className="site-footer__newsletter-title" 
                                style={{ 
                                    color: '#21273F', 
                                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                    fontWeight: '700',
                                    marginBottom: '24px',
                                    lineHeight: '1.1',
                                    fontFamily: 'var(--thriveher-heading)',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Numbers don't lie...
                            </h1>
                            
                            <p style={{ 
                                color: '#21273F', 
                                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                                fontWeight: '500',
                                fontStyle: 'italic',
                                opacity: '0.85',
                                maxWidth: '700px',
                                margin: '0 auto 40px auto',
                                lineHeight: '1.4',
                                fontFamily: 'var(--thriveher-body)'
                            }}>
                                Minority women too often carry the burden of being unseen.
                            </p>

                            <div style={{ 
                                maxWidth: '800px', 
                                margin: '0 auto',
                                background: 'rgba(249, 232, 207, 0.7)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '16px',
                                padding: '32px',
                                border: '1px solid rgba(199, 142, 29, 0.2)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                            }}>
                                <p style={{
                                    fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                                    color: '#21273F',
                                    lineHeight: '1.6',
                                    fontWeight: '500',
                                    margin: 0,
                                    fontFamily: 'var(--thriveher-body)'
                                }}>
                                    We see it — and we want to bridge the gap in medicine, faith and culture 
                                    through doctor-led, multilingual programmes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Chart Section */}
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div style={{ 
                            background: 'rgba(249, 232, 207, 0.9)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '20px',
                            padding: 'clamp(40px, 6vw, 60px)',
                            boxShadow: '0 16px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)',
                            border: '2px solid rgba(167, 176, 147, 0.3)',
                            marginBottom: '60px'
                        }}>
                            <h2 style={{ 
                                color: '#21273F', 
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: '700',
                                marginBottom: '40px',
                                textAlign: 'center',
                                fontFamily: 'var(--thriveher-heading)'
                            }}>
                                Maternal Mortality Rates by Ethnicity in the UK
                            </h2>
                            
                            <div style={{ height: 'clamp(300px, 50vw, 450px)' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart 
                                        data={maternalData}
                                        margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
                                        barCategoryGap="25%"
                                    >
                                        <CartesianGrid 
                                            strokeDasharray="3 3" 
                                            stroke="rgba(33, 39, 63, 0.2)"
                                            horizontal={true}
                                            vertical={false}
                                        />
                                        <XAxis 
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ 
                                                fill: '#21273F', 
                                                fontSize: 13,
                                                fontWeight: 600
                                            }}
                                            angle={-15}
                                            textAnchor="end"
                                            height={60}
                                        />
                                        <YAxis 
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ 
                                                fill: '#21273F', 
                                                fontSize: 12,
                                                fontWeight: 600
                                            }}
                                            label={{ 
                                                value: 'Deaths per 100,000 births', 
                                                angle: -90, 
                                                position: 'insideLeft',
                                                style: { 
                                                    textAnchor: 'middle',
                                                    fill: '#21273F',
                                                    fontSize: '13px',
                                                    fontWeight: 700
                                                }
                                            }}
                                            domain={[0, 30]}
                                            tickCount={6}
                                        />
                                        <Tooltip 
                                            content={<CustomTooltip />}
                                            cursor={{ fill: 'rgba(199, 142, 29, 0.1)' }}
                                        />
                                        <Bar 
                                            dataKey="value" 
                                            radius={[6, 6, 0, 0]}
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
                            
                            {/* Screen reader description */}
                            <div style={{ 
                                position: 'absolute', 
                                left: '-10000px', 
                                width: '1px', 
                                height: '1px', 
                                overflow: 'hidden' 
                            }}>
                                Chart showing UK maternal mortality rates: White women 7.5, Asian women 13.6, and Black women 27.9 deaths per 100,000 births.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Context Paragraph */}
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div style={{
                            background: 'rgba(249, 232, 207, 0.8)',
                            borderRadius: '16px',
                            padding: '40px',
                            textAlign: 'center',
                            marginBottom: '50px',
                            border: '1px solid rgba(199, 142, 29, 0.2)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                        }}>
                            <p style={{
                                color: '#21273F',
                                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                                lineHeight: '1.7',
                                margin: '0',
                                fontWeight: '500',
                                fontFamily: 'var(--thriveher-body)'
                            }}>
                                Women of Black African heritage are <strong style={{ 
                                    color: '#C78E1D', 
                                    fontWeight: '700' 
                                }}>83% more likely</strong> to experience a near miss in childbirth. 
                                Missed red flags cost the NHS <strong style={{ 
                                    color: '#C78E1D', 
                                    fontWeight: '700' 
                                }}>billions</strong> each year.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sources */}
                <div className="row">
                    <div className="col-xl-12">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <p style={{
                                fontSize: '0.85rem',
                                color: '#21273F',
                                opacity: '0.7',
                                fontWeight: '400',
                                margin: '0',
                                fontStyle: 'italic',
                                fontFamily: 'var(--thriveher-body)'
                            }}>
                                <span style={{ fontWeight: '600', color: '#C78E1D' }}>Sources:</span> MBRRACE-UK, Women & Equalities Committee, CQC, The Guardian.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div style={{
                            background: 'rgba(249, 232, 207, 0.9)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '20px',
                            padding: 'clamp(40px, 6vw, 60px)',
                            textAlign: 'center',
                            border: '2px solid rgba(199, 142, 29, 0.4)',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '3px',
                                backgroundColor: '#C78E1D',
                                margin: '0 auto 24px auto',
                                borderRadius: '2px'
                            }}></div>
                            
                            <h3 style={{
                                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                                fontWeight: '700',
                                color: '#21273F',
                                marginBottom: '32px',
                                lineHeight: '1.2',
                                fontFamily: 'var(--thriveher-heading)'
                            }}>
                                Our Mission
                            </h3>
                            
                            <p style={{
                                fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)',
                                color: '#21273F',
                                lineHeight: '1.6',
                                margin: '0',
                                fontWeight: '500',
                                fontFamily: 'var(--thriveher-body)'
                            }}>
                                To bridge medicine, faith, and culture through doctor-led, multilingual programmes — 
                                empowering women and improving outcomes for every community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}