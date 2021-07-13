const Lab= require('../models/lab');

exports.getLabs = (req, res, next) => {
  Lab.fetchAll()
    .then(([rows, fieldData]) => {
      console.log("rows",rows);
      res.render('labs/labs', {
        labs: rows,
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
  const lab = new Lab(null, title, teacher, slots, totalStudents,labCode);
  lab
    .save()
    .then(() => {
      res.redirect('/admin/labs');
    })
    .catch(err => console.log(err));
};

exports.getLab = (req, res, next) => {
  const labId = req.params.labId;
  Lab.findById(labId)
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
  Lab.findById(labId)
    .then(([rows, fieldData]) => {
      if (!rows) {
        return res.redirect('/admin/labs');
      }
      console.log("data",rows)
      res.render('labs/addLab', {
        labs: rows,
        pageTitle: 'Edit Lab',
        path: '/admin/edit-lab',
        editing: editMode
      });
    })
    .catch(err => console.log(err));
};

exports.postEditLab = (req, res, next) => {
  console.log("edit lab",req.body);
  const labId = req.body.id;
  const updatedTitle = req.body.title;
  const updatedTeacher = req.body.teacher;
  const updatedSlots = req.body.slots;
  const updatedTotalStudents = req.body.totalStudents;
  const updatedLabCode = req.body.labCode;
  const updatedLab = new Lab(
    labId,
    updatedTitle,
    updatedTeacher,
    updatedSlots,
    updatedTotalStudents,
    updatedLabCode
  );
  updatedLab.save();
  res.redirect('/admin/labs');
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.deleteById(prodId);
//   res.redirect('/admin/products');
// };