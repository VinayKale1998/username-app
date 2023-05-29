import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import { Grid, Card, Button, CircularProgress } from "@mui/material";
import { object,string, number, boolean } from "yup";

const initialValues = {
  DeckName: "",
  DeckDescription: "",
  Terms: [],
};

const Demo = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log("my values", values);
        return new Promise((res) => setTimeout(res, 2500));
      }}
      validationSchema={object({
        DeckName: string().required('This Field is required').min(2,'DeckName needs to be atleast 2 chars').max(15,'DeckName needs to less than 15 chars'),
        DeckDescription: string().required('This Field is required').min(2).max(100),
       
      })}
    >
      {({ values, errors, isSubmitting }) => (
        <Form autoComplete="false">
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Field
                fullwidth
                name="DeckName"
                required
                type="text"
                component={TextField}
                label="Deck Name"
              ></Field>
            </Grid>
            <Grid item>
              <Field
                required
                fullwidth
                name="DeckDescription"
                type="text"
                label="Description"
                component={TextField}
              ></Field>
            </Grid>

            <Grid item>
              <Field
                required
                fullwidth
                name="Terms"
                component={TextField}
                label="Terms"
              ></Field>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? <CircularProgress size="0.9rem" /> : undefined
                }
              >
                Submit
              </Button>
            </Grid>

            <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Demo;
