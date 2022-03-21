const api = {
    apiKey: process.env.REACT_MEDIA_KEY,
    baseUrl: `http://api.mediastack.com/v1/news`
  };
  
  export const getStaticProps = async () => {
  
    const res = await fetch(`${api.baseUrl}?access_key=${api.apiKey}&countries=us`);
    const data = await res.json();
  
    return {
      props: {
        articles: data
      },
    };
  };
  