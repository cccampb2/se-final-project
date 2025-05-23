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
      url: article.url,
      imageUrl: article.imageUrl || "",
      description: article.description || "No description",
      publishedAt: article.publishedAt || "Unknown publish date",
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

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export { checkResponse, saveArticle, getItems };
