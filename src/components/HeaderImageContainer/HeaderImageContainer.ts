import './HeaderImageContainer.css';
import parrotImage from '../../assets/parrot.png';
import worldMapImage from '../../assets/worldmap.png'

export function HeaderImageContainer(): HTMLDivElement {
  const container = document.createElement('div') as HTMLDivElement;

  container.className = 'image-container';

  //create the two images
  const imageElement1 = document.createElement('img') as HTMLImageElement;
  const imageElement2 = document.createElement('img') as HTMLImageElement;


  imageElement1.alt = 'Image 1';
	imageElement1.src = parrotImage;
	imageElement1.height = 200;
	imageElement1.width = 200;
	imageElement1.classList.add('image-overlay');

	imageElement2.alt = 'Image 2';
	imageElement2.src = worldMapImage;
	imageElement2.classList.add('image-overlay');
	imageElement2.classList.add('second-image');

	container.appendChild(imageElement1);
	container.appendChild(imageElement2);

  return container; // Return the created button
}