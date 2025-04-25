import MobileOnboarding from '@/components/onboarding/MobileOnboarding';
import DesktopOnboarding from '@/components/onboarding/DesktopOnboarding';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <MobileOnboarding />
      <DesktopOnboarding />
    </div>
  );
}
