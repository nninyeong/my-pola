import MobileOnboarding from '@/components/onboarding/MobileOnboarding';
import DesktopOnboarding from '@/components/onboarding/DesktopOnboarding';
import { getIsSignedIn } from '@/utils/supabase/auth';
import { MOBILE_HEADER_HEIGHT } from '@/constants/layoutInfo';

export default async function Home() {
  const isSignedIn = await getIsSignedIn();

  return (
    <div className={`w-full h-[calc(100vh-${MOBILE_HEADER_HEIGHT}px)] desktop:h-full`}>
      <MobileOnboarding isSignedIn={isSignedIn} />
      <DesktopOnboarding />
    </div>
  );
}
