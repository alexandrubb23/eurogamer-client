import useNews from '@/hooks/useNews';

const NewGrid = () => {
  const { news } = useNews();

  return (
    <ul>
      {news.map(item => (
        <li key={item.uuid}>{item.title}</li>
      ))}
    </ul>
  );
};

export default NewGrid;
