import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";
import { TextField } from "formik-material-ui";
import { useRef } from "react";
import {
  Grid,
  Card,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { object, array, string, number } from "yup";
import React from "react";
import PreviewImage from "./PreviewImage";
import { useDispatch } from "react-redux";
import InputComp from "./InputComp";

const initialValues = {
  DeckName: "",
  DeckDescription: "",
  Terms: [{ term: "", description: "", image: null }],
};

const Demo = () => {
  const refs = useRef([]);

  const focusRefs = useRef([]);

  // const addToRefs = (element) => {

  //   console.log(element.current)
  // };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log("my values", values);
          return new Promise((res) => setTimeout(res, 2500));
        }}
        validationSchema={object({
          DeckName: string()
            .required("This Field is required")
            .min(2, "DeckName needs to be atleast 2 chars")
            .max(15, "DeckName needs to less than 15 chars"),
          DeckDescription: string()
            .required("This Field is required")
            .min(2)
            .max(100),
          Terms: array(
            object({
              term: string()
                .required("TermName is required")
                .min(3, "Term must contain 3 chars at minimum")
                .max(8, "Term cannot contain more than 8 characters"),
              description: string()
                .required("Term Description is required")
                .min(5, "Term must contain 5 chars at  minimum")
                .max(100, "Term must contain 100 chars at minimum"),
            })
          )
            .min(1)
            .max(10, "too many elements"),
          // Image:
        })}
      >
        {({ values, errors, isSubmitting, setFieldValue, setFieldError }) => (
          <Form autoComplete="false">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Field
                  // fullwidth
                  name="DeckName"
                  required
                  
                  type="text"
                  component={InputComp}
                  label="Deck Name"
                ></Field>
              </Grid>
              <Grid item>
                <Field
                  // fullwidth
                  name="DeckDescription"
                  type="text"
                  label="Description"
                  component={TextField}
                ></Field>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <FieldArray name="Terms">
                    {({ push, remove }) => (
                      <React.Fragment>
                        <Grid item xs={12}>
                          <Typography variant="body1"> Terms</Typography>
                        </Grid>

                        {values.Terms.map((item, index) => (
                          <Grid
                            container
                            direction="row"
                            spacing={{ xs: 2, md: 3 }}
                            key={index}
                          >
                            <Grid item xs={12} sm="auto">
                              <Field name={`Terms[${index}].term`}>
                                {
                                  ({field,form,meta})=>(
                                    <input
                                    {...field}
                                    className="rounded-md bg-white border-2 mx-4 my-2 h-10 w-11/12  border-black"
                                     ref={(element) =>
                                       (focusRefs.current[index] = element)
                                     }
                                     label="Term Name"
                                     onBlur={() => {
                                       setFieldError(
                                         `Terms[${index}].term`,
                                         "Field is required"
                                       );
                                     }}
                                     type="text"
                                     onChange={(event) => {
                                       setFieldValue(
                                         `Terms[${index}].term`,
                                         event.target.value
                                       );
                                     }}
                                   ></input>
                                  )
                                }
                              </Field>


                              {/* <input
                               className="rounded-md bg-white border-2 mx-4 my-2 h-10 w-11/12  border-black"
                                ref={(element) =>
                                  (focusRefs.current[index] = element)
                                }
                                label="Term Name"
                                onBlur={() => {
                                  setFieldError(
                                    `Terms[${index}].term`,
                                    "Field is required"
                                  );
                                }}
                                type="text"
                                onChange={(event) => {
                                  setFieldValue(
                                    `Terms[${index}].term`,
                                    event.target.value
                                  );
                                }}
                              ></input> */}
                            </Grid>
                            <Grid item xs={12} sm="auto">
                              <Field
                                name={`Terms[${index}].description`}
                                label="Term Description"
                                required
                                type="text"
                                className='rounded-md bg-white border-2 mx-4 my-2 h-10 w-11/12  border-black'
                              ></Field>
                            </Grid>
                            <Grid item xs={12} sm="auto">
                              <input
                                hidden
                                ref={(element) =>
                                  (refs.current[index] = element)
                                }
                                type="file"
                                required
                                onChange={(event) => {
                                  setFieldValue(
                                    `Terms[${index}].image`,
                                    event.target.files[0]
                                  );
                                }}
                              ></input>
                             
                            </Grid>

                            <Grid item xs={12} sm="auto">
                              {values.Terms[index].image && (
                                <PreviewImage
                                  file={values.Terms[index].image}
                                />
                              )}
                            </Grid>

                            <Grid item xs={12} sm="auto">
                              <Button
                                disabled={isSubmitting}
                                onClick={() => {
                                  focusRefs.current[index].focus();
                                }}
                              >
                                {values.Terms[index].description &&
                                values.Terms[index].term &&
                                values.Terms[index].image
                                  ? "Edit"
                                  : ""}
                              </Button>
                            </Grid>

                            <Grid item xs={12} sm="auto">
                              <Button
                                variant="contained"
                                disabled={isSubmitting}
                                onClick={() => {
                                  refs.current[index].click();
                                }}
                              >
                                {values.Terms[index].image
                                  ? "Re-Upload"
                                  : "Upload"}
                              </Button>
                            </Grid>

                            <Grid item>
                              {values.Terms.length > 1 && (
                                <Button
                                  variant="contained"
                                  disabled={isSubmitting}
                                  onClick={() => {
                                    remove(index);
                                    // refs.current.splice(index, index + 1);
                                  }}
                                >
                                  Delete
                                </Button>
                              )}
                            </Grid>
                          </Grid>
                        ))}

                        <Grid item xs={12} sm="auto">
                          <Button
                            variant="contained"
                            disabled={isSubmitting}
                            onClick={() => {
                              push({ term: "", description: "", image: "" });
                            }}
                          >
                            Add
                          </Button>
                        </Grid>
                      </React.Fragment>
                    )}
                  </FieldArray>
                </Grid>
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size="0.9rem" />
                    ) : undefined
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
    </div>
  );
};

export default Demo;
