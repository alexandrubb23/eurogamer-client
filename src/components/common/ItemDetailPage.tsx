import DOMPurify from 'dompurify';

import { Endpoint } from '@/hooks/useData';
import useItem from '@/hooks/useItem';
import getCroppedImageUrl from '@/services/get-cropped-image-url.service';
import {
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import YouTubeVideosGallery from '../YouTubeVideosGallery';
import ErrorBox from './ErrorBox';
import ItemScreenshots from './ItemScreenshots';

function stripHtmlTagsExceptParagraph(str: string) {
  return str.replace(/<(?!\/?p\b)[^>]*>/gi, '');
}

const ItemDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const endpoint = pathname.split('/')[1] as Endpoint;
  const { data, error, isLoading } = useItem(endpoint, slug as string);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorBox error={error} />;

  const { description = '', title, thumbnail = '' } = data || {};

  const source = stripHtmlTagsExceptParagraph(description);
  const content = DOMPurify.sanitize(source);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{title}</Heading>
        <Image
          align='center'
          src={getCroppedImageUrl(thumbnail)}
          alt={title}
          marginTop={4}
          marginLeft='auto'
          marginRight='auto'
        />
        <Prose>
          <Box dangerouslySetInnerHTML={{ __html: content }} />
        </Prose>
      </GridItem>
      <GridItem>
        {endpoint === 'videos' ? (
          <YouTubeVideosGallery description={description} />
        ) : (
          <ItemScreenshots />
        )}
      </GridItem>
      <GridItem>
        <Button onClick={() => navigate(-1)} width='100px'>
          Go Back
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default ItemDetailPage;
