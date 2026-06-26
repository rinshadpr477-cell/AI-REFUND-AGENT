'use client';
import { useState } from 'react';

export default function VoicePlayer({ text, decision }) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePlayAudio = async () => {
    setLoading(true);
    setError('');

    try {
     
      const response = await fetch('http://localhost:5000/api/voice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const data = await response.json();
    
      const binaryString = atob(data.audio);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const audioBlob = new Blob([bytes], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);

      // Play audio
      const audio = new Audio(audioUrl);
      setPlaying(true);
      
      audio.onended = () => {
        setPlaying(false);
      };

      audio.play();
    } catch (err) {
      setError('Failed to play audio');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handlePlayAudio}
        disabled={loading || playing}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
          decision === 'APPROVED'
            ? 'bg-green-100 text-green-700 hover:bg-green-200'
            : 'bg-red-100 text-red-700 hover:bg-red-200'
        } disabled:opacity-50`}
      >
        {playing ? (
          <>
            <span className="animate-spin">🔊</span>
            Playing...
          </>
        ) : loading ? (
          <>
            <span className="animate-spin">⏳</span>
            Loading...
          </>
        ) : (
          <>
            <span>🔊</span>
            Play Audio
          </>
        )}
      </button>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
}