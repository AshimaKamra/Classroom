const Lab= require('../models/lab');

exports.getLabs = (req, res, next) => {
  Lab.fetchAll()
    .then(([rows, fieldData]) => {
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

// exports.getLab = (req, res, next) => {
//   const labId = req.params.labId;
//   Lab.findById(labId)
//     .then(([lab]) => {
//       res.render('lab/lab-detail', {
//         product: lab[0],
//         pageTitle: lab.title,
//         path: '/lab'
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.getIndex = (req, res, next) => {
//   Lab.fetchAll()
//     .then(([rows, fieldData]) => {
//       res.render('lab/index', {
//         prods: rows,
//         pageTitle: 'Lab',
//         path: '/'
//       });
//     })
//     .catch(err => console.log(err));
// };
