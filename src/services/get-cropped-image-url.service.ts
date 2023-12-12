import noImage from '@/assets/no-image-placeholder.webp';

type FormatImage = 'jpg' | 'png' | 'webp';

const getCroppedImageUrl = (
  url: string,
  width = 690,
  quality = 75,
  format: FormatImage = 'jpg',
  auto = 'webp'
) => {
  if (!url) return noImage;

  const [baseUrl, query] = url.split('?');
  const params = new URLSearchParams(query);

  params.set('width', '' + width);
  params.set('quality', '' + quality);
  params.set('format', 'jpg');
  params.set('auto', format);
  params.set('auto', auto);

  return `${baseUrl}?${params.toString()}`;
};

export default getCroppedImageUrl;
