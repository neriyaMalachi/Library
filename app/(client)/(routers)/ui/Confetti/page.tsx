'use client'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
const page = () => {
    const [isConfettiVisible, setConfettiVisible] = useState(false);
    const { width, height } = useWindowSize();
    useEffect(() => {
        // Trigger confetti for 5 seconds
        setConfettiVisible(true);
        const timer = setTimeout(() => setConfettiVisible(false), 50000);
    
        return () => clearTimeout(timer);
      }, []);
  return (
    <div>
        {isConfettiVisible && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300} // Adjust the number of confetti pieces
        />
      )}
    </div>
  )
}

export default page