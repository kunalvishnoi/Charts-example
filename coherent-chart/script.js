var data = [
    [2000,1000,750,300,400,70,20],
    [1268,549,336,221,122,115],
    [1892,1282,250,32,18],
    [1832,379,254,314],
    [1171,256,120],
    [2533,340]
  ],
  // The initial date is the date displayed
  // in the first column of the first row
  initialDate = new Date(2012, 0),

  // DOM Element where the Cohort Chart will be inserted
  container = document.getElementById('main-example');

  Cornelius.draw({
    initialDate: initialDate,
    container: container,
    cohort: data,
    title: 'Cornelius Demo'
  });
