import Spline from '@splinetool/react-spline/next';
import styles from './SubscribeThree.module.css'; // Assuming you use CSS Modules

export default function SubscribeThree() {
  return (
    <main className={styles.splineContainer}>
      <div className={styles.desktopSpline}>
        <Spline
          scene="https://prod.spline.design/2YGq5XHCUCGMMmh8/scene.splinecode" 
          width={660}
          height={350}
        />
      </div>
      <div className={styles.mobileSpline}>
        <Spline
          scene="https://prod.spline.design/KPYOSa5OzeErXB6t/scene.splinecode" 
          width={291}
          height={263}
        />
      </div>
    </main>
  );
}