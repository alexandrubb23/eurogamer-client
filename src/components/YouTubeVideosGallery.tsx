import YouTubeVideos from './common/YouTubeVideos';

// TODO: This should be the resposability of the API
// By scraping the description we can get the videos
// And create a gallery of videos -> OneToMany relationship
function useYouTubeVideos(str: string) {
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
  const videos = useYouTubeVideos(description);

  return <YouTubeVideos videos={videos} />;
};

export default YouTubeVideosGallery;
