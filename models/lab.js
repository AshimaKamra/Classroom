// const db = require('../util/database');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// module.exports = class Lab {
//   constructor(id, title, teacher, slots, totalStudents, labCode) {
//     this.id = id;
//     this.title = title;
//     this.teacher = teacher;
//     this.slots = slots;
//     this.totalStudents = totalStudents;
//     this.labCode = labCode
//   }

//   save() {
//     return db.execute(
//       'INSERT INTO labs (title, teacher, slots, totalStudents, labCode) VALUES (?, ?, ?, ?, ?)',
//       [this.title, this.teacher, this.slots, this.totalStudents, this.labCode]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute('SELECT * FROM labs');
//   }

//   static findByPk(id) {
//     return db.execute('SELECT * FROM labs WHERE labs.id = ?', [id]);
//   }
// };


const Lab = sequelize.define('labs', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  teacher: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slots: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalStudents: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  labCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Lab;
