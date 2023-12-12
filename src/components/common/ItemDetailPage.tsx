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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import YouTubeVideosGallery from '../YouTubeVideosGallery';
import ItemScreenshots from './ItemScreenshots';

function stripHtmlTagsExceptParagraph(str: string) {
  return str.replace(/<(?!\/?p\b)[^>]*>/gi, '');
}

const ItemDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const endpoint = pathname.split('/')[1] as Endpoint;
  const { data } = useItem(endpoint, slug as string);

  if (!data) return null;

  const { description, title } = data;

  const source = stripHtmlTagsExceptParagraph(description);
  const content = DOMPurify.sanitize(source);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{title}</Heading>
        <Image align='center' src={data.thumbnail} alt={title} />
        <Prose>
          <Box dangerouslySetInnerHTML={{ __html: content }} />
        </Prose>
      </GridItem>
      <GridItem>
        {endpoint === 'videos' ? (
          <YouTubeVideosGallery description={description} />
        ) : (
          <ItemScreenshots description={description} />
        )}
      </GridItem>
      <Button onClick={() => navigate(-1)} width='100px'>
        Go Back
      </Button>
    </SimpleGrid>
  );
};

export default ItemDetailPage;
