import MobileOnboarding from '@/components/onboarding/MobileOnboarding';
import DesktopOnboarding from '@/components/onboarding/DesktopOnboarding';
import { getIsSignedIn } from '@/utils/supabase/auth';
import { MOBILE_HEADER_HEIGHT } from '@/constants/layoutInfo';

export default async function Home() {
  const isSignedIn = await getIsSignedIn();

  return (
    <div
      className={`w-full desktop:h-full`}
      style={{ height: `calc(100dvh - ${MOBILE_HEADER_HEIGHT}px)` }}
    >
      <MobileOnboarding isSignedIn={isSignedIn} />
      <DesktopOnboarding />
    </div>
  );
}
