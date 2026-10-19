const {User, Post} = require('../db/models')


const init = async() => {
    const user = await User.create({ name: 'Валентина', email: 'val@gmail.com'});

    const post1 = await user.createPost({
    title: 'Пост Валентины №1',
    content: 'йцукенгшдлолропавыавиатпьртимсчямимтписмчс',
    publishedAt: new Date()
    });

    const post2 = await user.createPost({
    title: 'Пост Валентины №2',
    content: '1234567890',
    publishedAt: new Date()
    });

    const post3 = await user.createPost({
    title: 'Пост Валентины №3',
    content: 'aserhjkhjgfdsafsdghfjg',
    publishedAt: new Date()
    });

    const users = await User.findAll({
        include: [{
        model: Post,
        as: 'Posts',
      }],
    });

    return {
    createUser: user,
    createPosts: [post1, post2, post3],
    loading: users
    }
}


init().then(data => console.log(data)).catch(console.error())
