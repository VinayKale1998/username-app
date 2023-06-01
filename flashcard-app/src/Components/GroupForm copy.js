import React, { useRef } from "react";
import TermForm from "./TermForm";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import { string, array, object } from "yup";
import InputComp from "./InputComp";
import TextComp from "./TextComp";
import { Button, Input } from "@mui/material";
import { TextField } from "formik-material-ui";
import PreviewImage from "./PreviewImage";
import { BiEdit } from "react-icons/bi";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#0033ff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const initialState = {
  Group: "",
  Description: "",
  Terms: [{ Term: "", definition: "", image: null }],
};

function Group_Form() {
  const fileRefs = useRef([]);
  const focusRefs = useRef([]);

  return (
    <Formik
      initialValues={initialState}
      onSubmit={async (values) => {
        console.log("my values", values);
        return new Promise((res) => setTimeout(res, 2500));
      }}
      validationSchema={object({
        Group: string()
          .required("This Field is required")
          .min(2, "DeckName needs to be atleast 2 chars")
          .max(15, "DeckName needs to less than 15 chars"),
        Description: string()
          .required("This Field is required")
          .min(2)
          .max(100),
        Terms: array(
          object({
            Term: string()
              .required("TermName is required")
              .min(3, "Term must contain 3 chars at minimum")
              .max(8, "Term cannot contain more than 8 characters"),
            definition: string()
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
      {({ values, errors, isSubmitting, setFieldValue }) => (
        <Form>
          <div className=" firstform flex flex-col items-center mx-2 rounded-xl my-3 px-3 py-4 bg-white">
            <div className="flex flex-row items-center justify-start space-y-2 mx-2 rounded-md  px-1 py-4 w-full  ">
              <div className=" w-4/12">
                <label htmlFor="Group" className="mx-4 my-2 h-10 w-9/12">
                  Create Group
                </label>
                <br></br>

                {/* Group */}
                <Field
                  className="rounded-md bg-white border border-gray-500 mx-4 my-2 h-10 w-11/12  hover:bg-blue-50 hover:border-blue-600"
                  placeholder="Group"
                  id="Group"
                  name="Group"
                ></Field>
              </div>
              {/* button */}
              <div className=" w-5/12 pt-3">
                <button
                  className="rounded-md mx-3 my-4 border border-black w-52 h-10 mr-48  hover:border-blue-600 bg-blue-500 "
                  variant="contained"
                  placeholder="Upload"
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mx-2 rounded-md  px-1 py-1 w-full  ">
              <label htmlFor="Description" className="mx-4 my-1 w-4/6">
                Add Description
              </label>
              <Field
                className="rounded-md bg-white border-5 mx-4 my-4 w-4/6 h-28  border-gray-500 border focus:border focus:border-blue-600 hover:bg-blue-50 hover:border hover:border-blue-600"
                as="textarea"
                placeholder="Description"
                id="Description"
                name="Description"
              ></Field>

              <input
                hidden
                className="rounded-md  bg-white mx-4 my-4"
                type="file"
              ></input>
            </div>
          </div>
          ;{/* second Form */}
          <div className=" firstform flex flex-col space-y-5 mx-2  rounded-xl my-5 px-3 py-4  bg-white">
            {/* fieldarray */}
            <FieldArray name="Terms">
              {({ push, remove }) => (
                <div className="w-full">
                  {values.Terms.map((item, index) => (
                    <div className="flex flex-row justify-start space-y-2 mx-2 py-15 items-center h-32 px-1  rounded-md ">
                      <button className="w-9 bg-blue-500 h-9 rounded-3xl"> 
                      {index+1}
                      </button>
                      {/* TErm */}
                      <Field name={`Terms[${index}].Term`}>
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            className="rounded-md bg-white border mx-4 my-2 h-10 w-4/12 min-w-[33.33%]  max-w-[33.33%]  border-gray-500   hover:border-blue-600"
                            ref={(element) =>
                              (focusRefs.current[index] = element)
                            }
                            placeholder="Enter Term"
                            label="Term Name"
                            type="text"
                          ></input>
                        )}
                      </Field>

                      {/* Definiton */}
                      <Field
                        className="  rounded-md bg-white border border-gray-500  mx-4 my-3 h-10 w-10/12 min-w-[40.33%] max-w-[40.33%]   hover:border-blue-600  "
                        placeholder="Enter Definiton "
                        name={`Terms[${index}].definition`}
                      ></Field>

                      {/* upload or image */}
                      <button
                        className={`rounded-md mx-3 my-5 ${
                          values.Terms[index].image ? "" : "border"
                        } border-black w-14 min-w-[10%] h-10   hover:border-blue-600 bg-blue-500`}
                        disabled={isSubmitting}
                        onClick={() => {
                          fileRefs.current[index].click();
                        }}
                      >
                        {values.Terms[index].image ? (
                          <PreviewImage
                            className="w-full h-16 rounded-md"
                            file={values.Terms[index].image}
                          />
                        ) : (
                          "Upload"
                        )}
                      </button>

                      <div className="flex flex-col space-y-2">
                        {/* edit */}
                        {values.Terms[index].definition &&
                          values.Terms[index].Term &&
                          values.Terms[index].image && (
                            <button
                              variant="contained"
                              disabled={isSubmitting}
                              onClick={() => {
                                focusRefs.current[index].focus();
                              }}
                            >
                              <BiEdit size={30} color="#0033ff"></BiEdit>
                            </button>
                          )}

                        {/* delete */}
                        {values.Terms.length > 1 && (
                          <button
                            // className="rounded-md mx-3 my-4 border-2 border-black w-2/12 h-10 mr-48"
                            variant="contained"
                            disabled={isSubmitting}
                            onClick={() => {
                              remove(index);
                              // refs.current.splice(index, index + 1);
                            }}
                          >
                            <ThemeProvider theme={theme}>
                              <DeleteIcon color="primary"></DeleteIcon>
                            </ThemeProvider>
                          </button>
                        )}
                      </div>

                      {/* fileinput */}
                      <input
                        hidden
                        ref={(element) => (fileRefs.current[index] = element)}
                        type="file"
                        required
                        onChange={(event) => {
                          setFieldValue(
                            `Terms[${index}].image`,
                            event.target.files[0]
                          );
                        }}
                      ></input>
                      {/* image */}
                    </div>
                  ))}
                  <button
                    disabled={isSubmitting}
                    onClick={() => {
                      push({ Term: "", definition: "", image: "" });
                    }}
                  >
                    + Add More
                  </button>
                </div>
              )}
            </FieldArray>
            <div className="flex flex-row  space-y-2 mx-2 items-center  px-1  rounded-md just"></div>
            <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
          </div>
          ;
        </Form>
      )}
    </Formik>
  );
}

export default Group_Form;
