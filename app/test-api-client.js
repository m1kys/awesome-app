import myData from './test-data/test-data.json';

const testApiClient = {
  getItems: (url) => {
    console.log(url || 'get without url');
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(myData.items), 2000);
    });
  }
};

export default testApiClient;
