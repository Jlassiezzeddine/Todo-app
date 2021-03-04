export default function validateInfo(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title is required";
  }

  if (!values.body.trim()) {
    errors.body = "Content is required";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  return errors;
}
