import {
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import * as Yup from "yup";
import { Formik } from "formik";
import todoService from "../../service/TodoService"
import type { Todo } from "../../model/Todo";
type TodoTakerProps = {
    addTodo: (todo: Todo) => void;
} 

function TodoTaker({ addTodo }: TodoTakerProps) {
  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required"),

    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),

    status: Yup.boolean(),
  });
// Initial values for the form
  const initialValues: Todo = {
    title: "",
    description: "",
    status: false,
    createdOn: new Date(),
  };

  const handleCreateTodo = (values: Todo) => {
    addTodo(values);
    todoService.postTodo(values);
    
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Todo Taker
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleCreateTodo(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              error={
                touched.title &&
                Boolean(errors.title)
              }
              helperText={
                touched.title && errors.title
              }
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              error={
                touched.description &&
                Boolean(errors.description)
              }
              helperText={
                touched.description &&
                errors.description
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="status"
                  checked={values.status}
                  onChange={handleChange}
                />
              }
              label="Completed"
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 2 }}
            >
              Add Todo
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default TodoTaker;