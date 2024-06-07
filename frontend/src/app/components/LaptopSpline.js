import Spline from '@splinetool/react-spline/next';
import styles from './Hero.module.css';

export default function Home() {
  return (
    <main className="spline-container">
        <Spline
            scene="https://prod.spline.design/Pm6r132234bWGJvZ/scene.splinecode" 
            width={400}
            height={100}
            className="spline-container"
        />
    </main>
  );
}