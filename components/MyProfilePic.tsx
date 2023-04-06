import React from 'react';

import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-2 border-black hover:scale-105 transition dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/ryden.webp"
        width={200}
        height={200}
        alt="Ryden's profile picture"
        priority={true}
      />
    </section>
  );
}
