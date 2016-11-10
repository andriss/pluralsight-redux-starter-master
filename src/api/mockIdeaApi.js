import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const ideas = [
  {
    link: 'cory-house',
    text: 'Cory'
  },
  {
    link: 'scott-allen',
    text: 'Scott'
  },
  {
    link: 'dan-wahlin',
    text: 'Dan'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class IdeaApi {
  static getAllIdeas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], ideas));
      }, delay);
    });
  }

  static saveAuthor(author) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.id) {
          const existingAuthorIndex = ideas.findIndex(a => a.id == author.id);
          ideas.splice(existingAuthorIndex, 1, author);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          author.id = generateId(author);
          ideas.push(author);
        }

        resolve(Object.assign({}, author));
      }, delay);
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = ideas.findIndex(author => {
          author.authorId == authorId;
        });
        ideas.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default IdeaApi;
