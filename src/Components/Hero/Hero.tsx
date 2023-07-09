import Link from 'next/link';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero-section">
            <h1>Sheikh Tijan Ceesay</h1>
            <div className="roles">
                <Link href={'#projects'} className="role">Full-Stack Web Developer</Link>
            </div>
        </section>
    )
}  