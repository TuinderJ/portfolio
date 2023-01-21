import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => (window.location.href = 'https://tuinderj.github.io/personal-website/truck-data/'), []);
  return <div>Redirect</div>;
}
