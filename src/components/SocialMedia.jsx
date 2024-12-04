import React from 'react'
import { YouTube, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import '../styles/social.css'

const SocialMedia = () => {
  return (
    <div className='social'>
      <YouTube style={{ background: "#ce0832" }} />
      <LinkedIn style={{ background: "#002d41", color: "#fff" }} />
      <Twitter style={{ background: "dodgerblue", color: "#fff" }} />
      <Facebook style={{ background: "blue", color: "#fff" }} />
      <Instagram style={{ background: "#ce0832", color: "#fff" }} />
    </div>
  );
}

export default SocialMedia