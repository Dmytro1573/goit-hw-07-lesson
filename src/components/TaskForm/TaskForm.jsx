import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksOps.js";

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(addTask(values));
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="text" />
          <button type="submit">Add task</button>
        </Form>
      </Formik>
    </>
  );
}
