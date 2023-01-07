// Credit: https://www.joshwcomeau.com/react/animated-sparkles-in-react/
import { useState, useRef, useEffect, useCallback, CSSProperties } from 'react';
import { randomInInterval, rangeAsArray } from '../lib/utils';
import { Container, keyframes, styled } from '../packages/design-system';

// Should be moved out into new hook with credit: https://www.joshwcomeau.com/snippets/react-hooks/use-random-interval/
const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = useRef<number>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = randomInInterval(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};

const DEFAULT_COLOR = '#FFC700';

const generateSparkle = (color: string) => {
  return {
    id: String(randomInInterval(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: randomInInterval(10, 20),
    style: {
      top: randomInInterval(-25, 75) + '%',
      left: randomInInterval(-25, 75) + '%',
      zIndex: randomInInterval(1, 3)
    }
  };
};

const comeInOut = keyframes({
  '0%': {
    transform: 'scale(0)'
  },
  '50%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0)'
  }
});

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(180deg)'
  }
});

const SparkleWrapper = styled('span', {
  position: 'absolute',
  display: 'block',
  animation: `${comeInOut} 750ms forwards`,
  '@motion': {
    animation: 'none'
  }
});

const SparkleSvg = styled('svg', {
  display: 'block',
  animation: `${spin} 1s linear`,
  '@motion': {
    animation: 'none'
  }
});

type SparkleProps = {
  size: number;
  color: string;
  style: CSSProperties;
};

const Sparkle = ({ size, color, style }: SparkleProps) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

type SparklesProps = React.ComponentProps<typeof Container> & {
  color?: string;
};

export const Sparkles = ({
  color = DEFAULT_COLOR,
  children,
  ...props
}: SparklesProps) => {
  const [sparkles, setSparkles] = useState(() => {
    return rangeAsArray(0, 3).map(() => generateSparkle(color));
  });

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();

      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    250,
    750
  );

  return (
    <Container
      css={{
        display: 'inline-block',
        position: 'relative'
      }}
      {...props}
      as="span"
    >
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <Container
        as="strong"
        css={{
          position: 'relative',
          zIndex: '2',
          fontWeight: '$bold'
        }}
      >
        {children}
      </Container>
    </Container>
  );
};
