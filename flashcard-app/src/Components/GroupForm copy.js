import React, { useRef, useState } from "react";
import TermForm from "./TermForm";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import { string, array, object} from "yup";

import { Button, Input } from "@mui/material";
import { TextField } from "formik-material-ui";
import PreviewImage from "./PreviewImage";
import { BiEdit } from "react-icons/bi";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Error from "./Error";
import "./CSS/GroupForm.css";
import deckActions from "../Store/index";
import { useDispatch } from "react-redux";

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
  deckImage:null,
  Terms: [{ Term: "", definition: "", image: null }],
};

function Group_Form() {
  const fileRefs = useRef([]);
  const focusRefs = useRef([]);
  const deckRef= useRef()
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values,errors) => {
        //sending submitted data to the redux store
        console.log(values);
        console.log(typeof values.deckImage);
        dispatch(deckActions.deckDetailsAdd({ id: null }));
      }}
      validationSchema={object({
        Group: string()
          .required("This Field is required")
          .min(2, "Group Name needs to be atleast 4 characters")
          .max(15, "Group name must be of less than 15 chars"),
        Description: string(),
        deckImage: string().notRequired()
,
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
         
      })}
    >
      {({ values, errors, isSubmitting, setFieldValue }) => (
        <div>
          <Form>
            <div className=" firstform flex flex-col items-center mx-2  my-3 px-3 py-4 bg-white ">
              <div className="flex flex-row  justify-start space-y-2 mx-2 rounded-md  px-1 py-1 w-full  ">
                <div className=" w-4/12 flex flex-col space-y-0  ">
                  <label
                    htmlFor="Group"
                    className="mx-4  font-bold mt-0  mb-0 h-10 w-9/12"
                  >
                    Group Name<span className="text-red-700  font-bold">*</span>
                  </label>

                  {/* Group */}
                  <Field
                    className={` bg-white border border-gray-500 mx-4 mb-2  h-10  focus:bg-gray-100 w-11/12 mt-9 focus:outline  focus:outline-blue-500 hover:bg-blue-50 hover:border-blue-600`}
                    placeholder="  Enter Group Name"
                    id="Group"
                    name="Group"
                  ></Field>

                  <ErrorMessage
                    className="mx-4 my-2 h-5 w-9/12 text-red-600"
                    component={Error}
                    name="Group"
                  ></ErrorMessage>
                </div>

                {/* deckImage button */}
                <div className=" w-4/12 flex flex-col space-y-0 ml-6">
                          <button
                            className={`  ${
                               values.deckImage? "mt-[1%] w-32 h-28 rounded-md" 
                                : "border mt-8 mb-3  text-white border-black w-52 h-10 mr-48  hover:border-blue-600 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
                            }   `}
                            disabled={isSubmitting}
                            type="button"
                            onClick={() => {
                              deckRef.current.click();
                            }}
                          >
                            {values.deckImage ? (
                              <PreviewImage
                                className="w-20 h-20 rounded-md"
                                file={values.deckImage}
                              />
                            ) : (
                              "Upload"
                            )}
                          </button>
                        </div>
                {/* <div className="  w-4/12 flex flex-col space-y-0 ">
                  <button
                   onClick={()=>deckRef.current.click()}
                    className=" mx-3 mb-3 border text-white border-black w-52 h-10 mr-48 mt-8  hover:border-blue-600 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 "
                    placeholder="Upload"
                  >
                    Upload
                  </button>
                </div> */}
              </div>

              <div className="flex flex-col space-y-2 mx-2   px-1 py-1 w-full  ">
                <label
                  htmlFor="Description"
                  className="mx-4 my-1 w-5/6 font-bold"
                >
                  Description
                </label>
                {/* description */}
                <Field
                  className=" mx-4  my-4 w-4/6 h-20 min-h-[80%] focus:bg-gray-100"
                  as="textarea"
                  placeholder="  Enter Description"
                  id="Description"
                  name="Description"
                ></Field>
                <ErrorMessage
                  className="mx-4 my-2 h-5 w-9/12 text-red-600"
                  component={Error}
                  name="Description"
                ></ErrorMessage>

              {/* deckimage */}
                <input
                  hidden
                  ref={deckRef}
                  type="file"
                  required
                  onChange={(event) => {
                    setFieldValue(
                      `deckImage`,
                      event.target.files[0]
                    );
                  }}
                ></input>
              </div>
            </div>
            {/* second Form */}
            <div className=" firstform flex flex-col space-y-5 mx-2  my-4 px-3 py-0  bg-white w-full">
              {/* fieldarray */}
              <FieldArray name="Terms">
                {({ push, remove }) => (
                  <div className="w-full ">
                    {values.Terms.map((item, index) => (
                      <div
                        key={index}
                        className="flex  flex-row justify-start space-y-1 ml-2   items-center h-40   rounded-md  mb-10 "
                      >
                        <button className="w-10 min-w-[4%] mt-4 bg-gradient-to-r  text-white from-slate-900 via-purple-900 to-slate-900 h-10 min-h[4%] rounded-3xl">
                          {index + 1}
                        </button>

                        {/* TErm */}
                        <div className="flex flex-col  mt-0 h-32 mr-0 pr-0 w-5/5 pt-1 ">
                          <label
                            htmlFor="Description"
                            className="mx-2  w-5/6 mt-6  font-bold "
                          >
                            Term
                            <span className="text-red-700  font-bold">*</span>
                          </label>

                          <Field name={`Terms[${index}].Term`}>
                            {({ field, form, meta }) => (
                              <input
                                {...field}
                                className=" bg-white border  mt-1 ml-2   min-h-[34%] w-96 min-w-[90%] focus:bg-gray-100 focus:outline focus:outline-blue-500   max-w-[33.33%]  border-gray-500   hover:border-blue-600"
                                ref={(element) =>
                                  (focusRefs.current[index] = element)
                                }
                                placeholder="  Enter Term"
                                label="Term Name"
                                type="text"
                              ></input>
                            )}
                          </Field>
                          <ErrorMessage
                            className="mx-4 my-2 h-5 w-9/12 text-red-600"
                            component={Error}
                            name={`Terms[${index}].Term`}
                          ></ErrorMessage>
                        </div>

                        {/* Definiton */}
                        <div className="flex flex-col  h-32 mr-2 pr-0 pt-1 w-5/12  ">
                          <label
                            htmlFor="Definition"
                            className="mx-4  w-5/6 mt-6  font-bold"
                          >
                            Definition
                            <span className="text-red-700  font-bold">*</span>
                          </label>
                          <Field
                            as="textarea"
                            className="  mx-4 mt-1 h-40 min-h-[60%]   min-w-[90%]  max-w-[33.33%]  focus:bg-gray-100 "
                            placeholder="  Enter Definiton "
                            name={`Terms[${index}].definition`}
                          ></Field>
                          <ErrorMessage
                            className="mx-4 my-2 h-5 w-9/12 text-red-600"
                            component={Error}
                            name={`Terms[${index}].definition`}
                          ></ErrorMessage>
                        </div>
                        {/* upload or image */}
                        <div className="flex flex-row items-center ">
                          <button
                            className={` mr-3 ${
                              values.Terms[index].image
                                ? " mt-[20%]"
                                : " border mt-[45%]"
                            } border-black w-20 min-w-[10%] h-10    hover:border-blue-600 text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 `}
                            disabled={isSubmitting}
                            type="button"
                            onClick={() => {
                              fileRefs.current[index].click();
                            }}
                          >
                            {values.Terms[index].image ? (
                              <PreviewImage
                                className="w-20 h-20 "
                                file={values.Terms[index].image}
                              />
                            ) : (
                              "Upload"
                            )}
                          </button>
                        </div>

                        <div className="flex flex-col  h-32 pr-0 pt-1 my-80 mr-4 ">
                          {/* edit */}
                          {values.Terms[index].definition &&
                            values.Terms[index].Term &&
                            values.Terms[index].image && (
                              <button
                                className="mt-12 mb-4"
                                type="button"
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
                              className={`${
                                values.Terms[index].definition &&
                                values.Terms[index].Term &&
                                values.Terms[index].image
                                  ? ""
                                  : "mt-16"
                              }`}
                              type="button"
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
                      className="text-white mx-20 text-xl bg-gradient-to-r   from-slate-900 via-purple-900 to-slate-900 rounded-lg w-44 h-10"
                      disabled={isSubmitting}
                      onClick={() => {
                        push({ Term: "", definition: "", image: "" });
                      }}
                    >
                      + Add More...
                    </button>
                  </div>
                )}
              </FieldArray>
              <div className="flex flex-row  space-y-2 mx-2 items-center  px-1  rounded-md just"></div>

              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </div>
            <div className="flex flex-row items-center justify-center mb-96">
              <button
                type="submit"
                className="w-44 h-12 text-white text-2xl bg-indigo-400  ml-90"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Group_Form;
