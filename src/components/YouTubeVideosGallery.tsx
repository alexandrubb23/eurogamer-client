import ItemYouTubeVideos from './common/ItemYouTubeVideos';

function getYouTubeVideosFromDescription(str: string) {
  const youtubeRegex =
    /https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/gi;

  const videos = str.match(youtubeRegex);
  if (!videos) return [];

  return videos?.map(video => {
    const videoId = video.match(
      /https?:\/\/[^/]+\/(?:watch\?v=)?([a-zA-Z0-9_-]+)/
    );

    if (!videoId) return 'no video';

    return videoId[1];
  });
}

interface YouTubeVideosGalleryProps {
  description: string;
}

const YouTubeVideosGallery = ({ description }: YouTubeVideosGalleryProps) => {
  const videos = getYouTubeVideosFromDescription(description);
  return <ItemYouTubeVideos videos={videos} />;
};

export default YouTubeVideosGallery;
