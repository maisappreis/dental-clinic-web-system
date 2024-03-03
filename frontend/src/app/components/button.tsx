'use client';

import { useState } from 'react';
import Dashboard from '@/app/pages/dashboard/page';

export default function Button({ label }: { label: string }) {
  const [showPage, setShowPage] = useState(false);

  const handleButtonClick = () => {
    setShowPage(!showPage);
  };

  return (
    <div>
        <button className="button-area" onClick={handleButtonClick}>{label}
          {showPage && <Dashboard />}
          {/* <Dashboard /> */}
        </button>
    </div>
  );
};