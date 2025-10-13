import Link from "next/link"

export default function PrivacyPolicy() {
    // Rendered as a server component (no client-only Layout import) so Next can hydrate reliably
    return (
        <main style={{ padding: '48px 24px', maxWidth: '980px', margin: '0 auto' }}>
            <header style={{ marginBottom: '24px' }}>
                <h1 style={{ fontSize: '2rem', margin: 0, color: '#21273F' }}>Privacy Policy for Thrive.Her</h1>
                <p style={{ color: '#555', marginTop: '8px' }}><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            </header>

            <article style={{ background: 'rgba(255,255,255,0.96)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(199,142,29,0.12)' }}>
                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Thrive.Her ("we", "our", "us") is committed to protecting your privacy and ensuring you have a positive
                        experience on our website. This policy outlines how we collect, use, and protect your personal information in
                        accordance with UK GDPR and NHS Digital Service guidelines.
                    </p>
                </section>

                <section>
                    <h3>2. Information We Collect</h3>
                    <h4>2.1 Information you give us</h4>
                    <ul>
                        <li>Contact information (name, email address, phone number)</li>
                        <li>Donation information and payment details</li>
                        <li>Volunteer registration information</li>
                        <li>Newsletter subscription preferences</li>
                        <li>Any information you provide when contacting us</li>
                    </ul>

                    <h4>2.2 Information we collect automatically</h4>
                    <ul>
                        <li>Website usage data through cookies and similar technologies</li>
                        <li>IP address and browser information</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referral source information</li>
                    </ul>
                </section>

                <section>
                    <h3>3. How We Use Cookies</h3>
                    <p>
                        We use cookies to improve your experience on our website. You can control which cookies you accept through our
                        cookie consent banner that appears when you first visit our site. You can also manage preferences using the
                        "Cookie settings" link in the footer.
                    </p>
                </section>

                <section>
                    <h3>Contact</h3>
                    <p>If you have questions about this policy please contact us at <a href="mailto:privacy@thriveher.org">privacy@thriveher.org</a>.</p>
                    <p>For data protection concerns you may also contact the ICO: <Link href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</Link></p>
                </section>
            </article>
        </main>
    )
}