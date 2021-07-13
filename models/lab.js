const db = require('../util/database');

module.exports = class Lab {
  constructor(id, title, teacher, slots, totalStudents, labCode) {
    this.id = id;
    this.title = title;
    this.teacher = teacher;
    this.slots = slots;
    this.totalStudents = totalStudents;
    this.labCode = labCode
  }

  save() {

    return db.execute(
      'INSERT INTO labs (title, teacher, slots, totalStudents, labCode) VALUES (?, ?, ?, ?, ?)',
      [this.title, this.teacher, this.slots, this.totalStudents, this.labCode]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM labs');
  }

  static findById(id) {
    return db.execute('SELECT * FROM labs WHERE products.id = ?', [id]);
  }
};
