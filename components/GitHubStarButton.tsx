'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa'; // Assuming react-icons is installed or will be installed

export default function GitHubStarButton() {
  const [stars, setStars] = useState<number | null>(null);
  const repo = 'use-lumina/Lumina'; // Your GitHub repository

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
        setStars(0); // Fallback if fetch fails
      }
    }

    fetchStars();
  }, [repo]);

  if (stars === null) {
    return null; // Or a loading spinner
  }

  return (
    <Link
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 rounded-full text-sm font-medium px-4 py-2 bg-gray-800 hover:bg-gray-700 text-primary-400 border-2 border-primary-500 transition-colors"
      aria-label="Star Lumina on GitHub"
    >
      <FaGithub className="w-4 h-4" />
      <span>Star</span>
      {stars > 0 && (
        <span className="ml-1 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-white">
          {stars}
        </span>
      )}
    </Link>
  );
}
