const Lab= require('../models/lab');

exports.getLabs = (req, res, next) => {
    Lab.findAll()
    .then(labs => {
      res.render('labs/labs', {
        labs: labs,
        pageTitle: 'All Labs',
        path: '/admin/labs'
      });
    })
    .catch(err => console.log(err));
};

exports.getAddLab = (req, res, next) => {
  res.render('labs/addLab', {
    pageTitle: 'Add Lab',
    path: '/admin/add-lab',
    editing: false
  });
};

exports.postAddLab = (req, res, next) => {
  console.log("entering", req);
  const title = req.body.title;
  const teacher = req.body.teacher;
  const slots = req.body.slots;
  const totalStudents = req.body.totalStudents;
  const labCode = req.body.labCode;
  Lab.create({
    title: title,
    teacher: teacher,
    slots: slots,
    totalStudents: totalStudents,
    labCode:labCode
  })
    .then(result => {
      // console.log(result);
      res.redirect('/admin/labs');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getLab = (req, res, next) => {
  const labId = req.params.labId;
  Lab.findByPk(labId)
    .then(([lab]) => {
      res.render('lab/lab-detail', {
        lab: lab[0],
        pageTitle: lab.title,
        path: '/lab'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Lab.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('lab/index', {
        prods: rows,
        pageTitle: 'Lab',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getEditLab = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const labId = req.params.labId;  
  Lab.findByPk(labId)
    .then(lab => {
      if (!lab) {
        return res.redirect('/');
      }
      res.render('labs/addLab', {
        pageTitle: 'Edit Lab',
        path: '/admin/edit-lab',
        editing: editMode,
        labs: lab
      });
    })
    .catch(err => console.log(err));
};

exports.postEditLab = (req, res, next) => {
  console.log("edit lab",req.body);
  const labId = req.body.labId;
  const updatedTitle = req.body.title;
  const updatedTeacher = req.body.teacher;
  const updatedSlots = req.body.slots;
  const updatedTotalStudents = req.body.totalStudents;
  const updatedLabCode = req.body.labCode;
  Lab.findByPk(labId)
  .then(lab => {
    console.log("updated Title",lab)
    lab.title = updatedTitle;
    lab.teacher = updatedTeacher;
    lab.slots = updatedSlots;
    lab.totalStudents = updatedTotalStudents;
    lab.labCode = updatedLabCode;
    return lab.save();
  })
  .then(result => {
    console.log('UPDATED LAB!');
    res.redirect('/admin/labs');
  })
  .catch(err => console.log(err));
};

exports.postDeleteLab = (req, res, next) => {
  const labId = req.params.labId;
  Lab.findByPk(labId)
    .then(lab => {
      return lab.destroy();
    })
    .then(result => {
      console.log('DESTROYED LAB');
      res.redirect('/admin/labs');
    })
    .catch(err => console.log(err));
};