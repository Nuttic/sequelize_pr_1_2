const { Op } = require('sequelize');
const { User, Post, Student, Course, Order, Item, Author, Book } = require('../db/models');

async function getUsersWithRecentPosts() {
  return User.findAll({
    include: [{
      model: Post,
      as: 'posts',
      where: { publishedAt: { [Op.gt]: '2023-01-01' } },
      required: true,
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'publishedAt', 'DESC']
    ],
  });
}

async function getAllAuthorsIncludingEmpty() {
  return Author.findAll({
    include: [{
      model: Book,
      as: 'books',
      required: false,
    }],
    order: [['lastName', 'ASC']],
  });
}

async function getStudentsInAdvancedCourses() {
  return Student.findAll({
    include: [{
      model: Course,
      as: 'courses',
      where: { credits: { [Op.gt]: 3 } },
      required: true,
      through: { attributes: [] }
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Course, as: 'courses' }, 'title', 'ASC']
    ],
  });
}

async function getOrdersWithBulkItems() {
  return Order.findAll({
    include: [{
      model: Item,
      as: 'items',
      where: { quantity: { [Op.gt]: 2 } },
      required: true,
    }],
    order: [
      ['createdAt', 'DESC'],
      [{ model: Item, as: 'items' }, 'price', 'DESC']
    ],
  });
}


async function getActiveUsersWithPublishedPosts() {
  return User.findAll({
    where: { isActive: true },
    include: [{
      model: Post,
      as: 'posts',
      where: { status: 'published' },
      required: true,
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'createdAt', 'DESC']
    ],
  });
}



async function runTests() {

  console.log('\n--- 1. getUsersWithRecentPosts ---');
  const recentPosts = await getUsersWithRecentPosts();
  console.log(JSON.stringify(recentPosts, null, 2));

  console.log('\n--- 2. getAllAuthorsIncludingEmpty ---');
  const authors = await getAllAuthorsIncludingEmpty();
  console.log(JSON.stringify(authors, null, 2));

  console.log('\n--- 3. getStudentsInAdvancedCourses ---');
  const students = await getStudentsInAdvancedCourses();
  console.log(JSON.stringify(students, null, 2));

  console.log('\n--- 4. getOrdersWithBulkItems ---');
  const orders = await getOrdersWithBulkItems();
  console.log(JSON.stringify(orders, null, 2));

  console.log('\n--- 5. getActiveUsersWithPublishedPosts ---');
  const activeUsers = await getActiveUsersWithPublishedPosts();
  console.log(JSON.stringify(activeUsers, null, 2));

}

runTests();