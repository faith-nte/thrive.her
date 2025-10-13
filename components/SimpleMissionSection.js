'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
    { name: 'White women', value: 1.0 },
    { name: 'Asian women', value: 1.8 },
    { name: 'Black women', value: 3.7 }
]

export default function SimpleMissionSection() {
    return (
        <section style={{ 
            backgroundColor: '#F9E8CF', 
            padding: '80px 0' 
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ 
                                color: '#21273F', 
                                fontSize: '2.5rem', 
                                marginBottom: '20px' 
                            }}>
                                Our Mission & Impact
                            </h2>
                            <p style={{ 
                                color: '#666', 
                                fontSize: '1.2rem',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Addressing maternal health disparities worldwide
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div style={{ 
                            height: '400px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            padding: '30px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ 
                                color: '#21273F', 
                                marginBottom: '30px',
                                textAlign: 'center'
                            }}>
                                Maternal Health Risk by Ethnicity
                            </h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#C78E1D" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}