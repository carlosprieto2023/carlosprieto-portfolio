import '../styles/bubble.css';

export default function Bubble() {
  const bubbles = Array(20)
    .fill(0)
    .map((_, index) => {
      const size = Math.random() * 20 + 10;
      const angle = Math.random() * 360;
      const startRadius = 200 + Math.random() * 50; // start just outside 400px
      const travelDistance = 100 + Math.random() * 100; // how far to move outward

      // Start position
      const startX = startRadius * Math.cos((angle * Math.PI) / 180);
      const startY = startRadius * Math.sin((angle * Math.PI) / 180);

      // End offset (move further outward in same direction)
      const offsetX = startX + travelDistance * Math.cos((angle * Math.PI) / 180);
      const offsetY = startY + travelDistance * Math.sin((angle * Math.PI) / 180);

      return (
        <div
          key={index}
          className="bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `calc(50% + ${startX}px)`,
            top: `calc(50% + ${startY}px)`,
            transform: 'translate(-50%, -50%)',
            '--offset-x': `${offsetX - startX}px`,
            '--offset-y': `${offsetY - startY}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      );
    });

  return <div className="bubble-container">{bubbles}</div>;
}