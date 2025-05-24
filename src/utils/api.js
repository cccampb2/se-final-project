const fakeDatabase = [];

function generateFakeId() {
  return Math.random().toString(16).substring(2, 26);
}

function saveArticle(article, userId) {
  return new Promise((resolve, reject) => {
    const savedArticle = {
      _id: generateFakeId(),
      userId,
      title: article.title,
      imageUrl: article.imageUrl || "",
      description: article.description || "No description",
      publishedDate: article.publishedDate || "Unknown publish date",
      keyword: article.keyword,
    };

    fakeDatabase.push(savedArticle);
    resolve(savedArticle);
  });
}

function getItems(userId) {
  return new Promise((resolve) => {
    const userArticles = fakeDatabase.filter(
      (article) => article.userId === userId
    );
    resolve(userArticles);
  });
}

function deleteArticle(articleId, userId) {
  return new Promise((resolve, reject) => {
    const index = fakeDatabase.findIndex(
      (item) => item._id === articleId && item.userId === userId
    );

    if (index !== -1) {
      const deleted = fakeDatabase.splice(index, 1)[0];
      resolve(deleted);
    } else {
      reject(new Error("Article not found or not authorized"));
    }
  });
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export { checkResponse, saveArticle, getItems, deleteArticle };
