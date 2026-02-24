'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Load jQuery globally
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const $ = require('jquery');
    window.$ = window.jQuery = $;

    // Load Popper
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('popper.js');

    // Load Bootstrap JS
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return null;
}
