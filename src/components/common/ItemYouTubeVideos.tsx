import ItemGalleryContainer from './ItemGalleryContainer';

interface ItemYouTubeVideosProps {
  videos: string[];
}

const ItemYouTubeVideos = ({ videos }: ItemYouTubeVideosProps) => {
  return (
    <ItemGalleryContainer>
      {videos.map(videoId => (
        <iframe
          key={videoId}
          width='100%'
          height='315'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      ))}
    </ItemGalleryContainer>
  );
};

export default ItemYouTubeVideos;
