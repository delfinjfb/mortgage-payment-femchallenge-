import { useEffect } from 'react';

const Matomo = () => {
  useEffect(() => {
    const _paq = (window._paq = window._paq || []);

    // Only track if the current URL is a page, not a resource
    if (
      window.location.pathname.endsWith('.png') ||
      window.location.pathname.endsWith('.jpg')
    ) {
      console.warn('Matomo: Not tracking resource file as a page view');
      return;
    }

    // Track page view and enable link tracking
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    _paq.push(['disableCookies']);
    _paq.push([
      'setCustomUrl',
      'https://recipe-page-react-tailwind-delfin.vercel.app/',
    ]);

    // Set tracker URL and site ID
    const u = 'https://delfinowebsite.matomo.cloud/';
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '2']);

    // Load Matomo script
    const d = document;
    const g = d.createElement('script');
    const s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://cdn.matomo.cloud/delfinowebsite.matomo.cloud/matomo.js';
    s.parentNode.insertBefore(g, s);
  }, []);

  return null;
};

export default Matomo;
