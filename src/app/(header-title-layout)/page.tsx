import MobileOnboarding from '@/components/onboarding/MobileOnboarding';
import DesktopOnboarding from '@/components/onboarding/DesktopOnboarding';
import { getIsSignedIn } from '@/utils/supabase/auth';

export default async function Home() {
  const isSignedIn = await getIsSignedIn();

  return (
    <div className='w-full h-full'>
      <MobileOnboarding isSignedIn={isSignedIn} />
      <DesktopOnboarding />
    </div>
  );
}
