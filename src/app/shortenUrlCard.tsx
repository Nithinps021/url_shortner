'use client'
import { Button, IconButton, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
const ShortenUrlCard: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortenedUrl, setShortenedUrl] = useState<string>('');

  const handleShortenUrl = async () => {
    // const shortened = await shortenUrl(originalUrl);
    // setShortenedUrl(shortened);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto mt-10">

      <div className="mb-10">
        <Input
          id="originalUrl"
          label="Enter the original URL"
          className='shadow-lg rounded-lg'
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)} crossOrigin={undefined} />
      </div>
      <div className="mb-10 flex space-x-2">
        <input
          type="text"
          placeholder='Short URL'
          className="w-full border rounded-lg p-2 bg-gray-100 shadow-xl"
          value={shortenedUrl}
          readOnly
        />
        <IconButton className='bg-gray-100 shadow-xl' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-gray-800">
            <path  stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
          </svg>
          <i className="fas fa-heart" />
        </IconButton>
      </div>
      <Button className="0" fullWidth variant='gradient'>
        Shorten URL
      </Button>
    </div>
  );
};

export default ShortenUrlCard;
