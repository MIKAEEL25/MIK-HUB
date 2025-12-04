const Image: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  return (
    <img src={url} alt={title + ' poster'} className="image" loading="lazy" />
  );
};

export default Image;
