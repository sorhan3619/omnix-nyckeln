// Select the key image element
const key = document.querySelector('.hero__key');

// Sensitivity
const rotationStrength = 15; // degrees
const movementStrength = 30; // px

// Listen for mouse movement anywhere on the document
document.addEventListener('mousemove', (e) => {
  const rect = key.getBoundingClientRect();

  // Get center of the key
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Distance from cursor to center
  const offsetX = e.clientX - centerX;
  const offsetY = e.clientY - centerY;

  // Normalize to range (-1 to 1)
  const normX = offsetX / (window.innerWidth / 2);
  const normY = offsetY / (window.innerHeight / 2);

  // Calculate rotation and translation
  const rotateX = normY * rotationStrength * -1;
  const rotateY = normX * rotationStrength;
  const translateX = normX * movementStrength;
  const translateY = normY * movementStrength;

  // Apply smooth 3D transform
  key.style.transform = `
    perspective(800px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translate(${translateX}px, ${translateY}px)
    rotate(-4deg)
  `;
  key.style.transition = 'transform 0.15s ease-out';
});

// When the mouse leaves the window — reset smoothly
document.addEventListener('mouseleave', () => {
  key.style.transition = 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
  key.style.transform = `
    perspective(800px)
    rotateX(0deg)
    rotateY(0deg)
    translate(0, 0)
    rotate(-4deg)
  `;
});
