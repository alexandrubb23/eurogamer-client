import DOMPurify from 'dompurify';

import { Endpoint } from '@/hooks/useData';
import useItem from '@/hooks/useItem';
import {
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { useNavigate, useParams } from 'react-router-dom';
import ItemYouTubeVideos from './ItemYouTubeVideos';

interface ItemDetailPageProps {
  endpoint: Endpoint;
}

function stripHtmlTagsExceptParagraph(str: string) {
  return str.replace(/<(?!\/?p\b)[^>]*>/gi, '');
}

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

const ItemDetailPage = ({ endpoint }: ItemDetailPageProps) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data } = useItem(endpoint, slug as string);

  if (!data) return null;

  const videos = getYouTubeVideosFromDescription(data.description);

  const desc = stripHtmlTagsExceptParagraph(data.description);
  const content = DOMPurify.sanitize(desc);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data?.title}</Heading>
        <Image align='center' src={data.thumbnail} alt={data.title} />
        <Prose>
          <Box dangerouslySetInnerHTML={{ __html: content }} />
        </Prose>
      </GridItem>
      <GridItem>
        <ItemYouTubeVideos videos={videos} />
      </GridItem>
      <Button onClick={() => navigate(-1)} width='100px'>
        Go Back
      </Button>
    </SimpleGrid>
  );
};

export default ItemDetailPage;
