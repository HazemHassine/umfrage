import { useRouter } from 'next/router';
import { useEffect } from 'react';

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const { user } = props;

    useEffect(() => {
      if (!user) {
        router.replace('/login');
      }
    }, [user]);

    if (!user) {
      return null; // or a loading spinner
    }

    return <Component {...props} />;
  };
}

export default withAuth;
