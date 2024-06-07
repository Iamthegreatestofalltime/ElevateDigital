import Link from 'next/link';
import Image from 'next/image';
import styles from './InfoAbout.module.css';

export default function InfoAbout() {
  return (
    <div className={`${styles.container} max-w-5xl mx-auto px-4`}>
      <div className="text-center mb-10">
        <h2 className={`text-3xl font-semibold mb-4 ${styles.hiwHeading}`}>How it works</h2>
        <p className="text-lg">Design as you know it is out the door. Design as you want it just arrived.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="https://assets-global.website-files.com/5837424ae11409586f837994/65de9d1cea9fe43024b32476_Frame%202341.png" alt="Image 2" width={300} height={300} className="rounded-lg" />
          </div>
          <p className="text-sm">Subscribe to a plan & request as many designs as you&apos;d like.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="https://assets-global.website-files.com/5837424ae11409586f837994/65de85206e70f69fe7d42321_Frame%202346.png" alt="Image 4" width={300} height={300} className="rounded-lg" />
          </div>
          <p className="text-sm">Receive your design within 5 business days on average.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="https://assets-global.website-files.com/5837424ae11409586f837994/65de82a7bf5974f6e26a0cc6_Frame%202349.png" alt="Image 5" width={300} height={300} className="rounded-lg" />
          </div>
          <p className="text-sm">We&apos;ll revise the designs until you&apos;re 100% satisfied.</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="#plans">
          <p className="bg-black text-white px-4 py-2 rounded-lg">See plans</p>
        </Link>
      </div>
    </div>
  );
}
