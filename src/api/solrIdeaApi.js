class IdeaApi {

  static getAllIdeas() {
    return fetch('http://localhost:8983/solr/items/select?indent=on&q=would pay&rows=100&wt=json')
    .then((response) => response.json())
    .then((responseJson) => {
        // console.log(responseJson);
        return responseJson.response.docs; 
    });
  }
}

export default IdeaApi;