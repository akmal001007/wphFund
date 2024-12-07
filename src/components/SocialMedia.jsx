import React from 'react'
import { IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex bg-navColor">
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube className="text-red-600" />
        </IconButton>
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="text-blue-700" />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="text-blue-500" />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="text-blue-900" />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="text-red-500" />
        </IconButton>
      </div>
    </div>
  );
}

export default SocialMedia