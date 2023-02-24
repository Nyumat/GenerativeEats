# Generative Eats - Submission for Refine Hackathon
![img](img/GenerativeEats.png)


## Description

My submission is a generative AI recipe/meal web application using refine chakra-ui, express.js, react, openAI, mongoDB, redux and more!

This app takes the problem of cooking a daily meal and flips it upside down! With GenerativeEats, you can give the web app a list of ingredients and it will generate recipes for you. 

You can also save these generated recipes to mongoDB, allowing users to come back daily and use the generated recipes as a reference.

## Participants

I worked alone on this project. My Github: [Here](https://github.com/nyumat)

## Preview

![img](img/GenerateAlt.png)
![img2](img/SavedRecipes.png)

## Getting Started



### Prerequisites

- MongoDB Cluster
- Unsplash Access Key
- OpenAI API Key

Format your env in backend/.env like so:

```
PORT=8080
OPENAI_API_KEY=
UNSPLASH_SECRET=
UNSPLASH_ACCESS=
MONGO_URI=
```


### Install Project


Clone the repository:

```
git clone https://github.com/Nyumat/GenerativeEats.git
```

```
cd refine-wi-hack
```

```
npm i && run dev
```

```
cd backend
```

```
npm i && npm run dev
```

