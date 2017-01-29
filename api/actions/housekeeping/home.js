export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (Math.random() < 0.33) {
        reject('Widget load fails 33% of the time. You were unlucky.');
      } else {
        resolve(getWidgets(req));
      }
    }, 1000); // simulate async load
  });
}