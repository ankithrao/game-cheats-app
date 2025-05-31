import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const TypewriterText = ({ text, speed = 50, textStyle }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style={textStyle}>{displayedText}</Text>;
};

export default TypewriterText;
