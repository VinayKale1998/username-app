import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { useState, useRef } from "react";
import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Components/Error";
import * as Yup from "yup";
import PreviewImage from "../Components/PreviewImage";
import { TbCameraPlus } from "react-icons/tb";

const initialState = {
  Group: "",
  Description: "",
  deckImage: null,
  Terms: [{ Term: "", definition: "", image: null }],
};
function CreateFlashCard() {
  const fileRefs = useRef([]);
  const focusRefs = useRef([]);
  const deckRef = useRef();
  const dispatch = useDispatch();
  const terms = useSelector((state) => state.terms);
  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, { resetForm }) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve;
          }, 2000);
        });
      }}
      validationSchema={Yup.object({
        Group: Yup.string()
          .required("This Field is required")
          .min(2, "Group Name needs to be atleast 4 characters")
          .max(15, "Group name must be of less than 15 chars"),
        Description: Yup.string()
          .required()
          .max(300, "Description can be of maximimum 300 characters"),

        Terms: Yup.array(
          Yup.object({
            Term: Yup.string()
              .required("TermName is required")
              .min(4, "Term must contain 3 chars at minimum")
              .max(8, "Term cannot contain more than 8 characters"),
            definition: Yup.string()
              .required("Term Description is required")
              .min(10, "Term must contain 10 chars at  minimum")
              .max(300, "Term must contain 300 chars at max"),
          })
        )
          .min(1)
          .max(10, "too many elements"),
      })}
    >
      {({
        values,
        errors,
        isSubmitting,
        setFieldValue,
        setFieldError,
        setFieldTouched,
      }) => (
        <Form>
          <div className=" bg-purple-100 px-1 py-1 ">
            <nav className="bg-gradient-to-l from-purple-300 via-purple-400 to-purple-800 font-bold px-[0.5%] py-[1%]">
              <h1 className="ml-[0.5%]  font-sans  w-[10%]  text-xl sm:text-3xl  md:text-4xl lg:5xl  text-white   transition-all ">
                FlashKrew
              </h1>
            </nav>

            <div className="main my-2">
              {/* navigation */}
              <div className="Nav  my-1 py-1 px-1 ml-[10%]">
                <button className="text-lg sm:text-2xl  md:text-3xl     mx-1 my-1 bg-transparent font-bold text-purple-700 hover:text-black  transition-all">
                  {" "}
                  Create New
                </button>{" "}
                <button className="text-lg sm:text-2xl  md:text-3xl  mx-1 my-1 bg-transparent  font-bold text-purple-700  hover:text-black  transition-all">
                  My FlashCards
                </button>
              </div>

              {/* page header */}
              <div className="Heading my-1 py-1 px-1 mx-auto ml-[28%] sm:ml-[35%]  transition-all cursor-pointer">
                <h1 className="heading font-bold  text-lg sm:text-2xl  md:text-3xl lg:text-4xl  text-purple-900  transition-all  ">
                  Create Flash Card
                </h1>
              </div>

              {/* first form */}
              <section className="first-form bg-[white] my-1 py-1 px-1  mx-[2%]   flex flex-col sm:mx-[7%] md:mx-[8%] lg:mx-[8%]   transition-all border border-gray-300  border-separate">
                {/* GroupName and Upload combined */}
                <div className="flex items-start  mx-1 py-1 ">
                  {/* GroupName label and input */}
                  <div className="groupName min-w-[70%] flex flex-col px-[0.2%] py-[0.2%] mx-[0.2%]  my-[0.1%] sm:min-w-[60%] md:min-w-[50%] transition-all">
                    {/* grouplabel */}
                    <label className="pl-1 py-1  w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                      Group Name{" "}
                      <span className="text-red-600 font-normal ">*</span>
                    </label>

                    {/* groupInput */}
                    <Field
                      className="  bg-white px-1 py-1 x w-[99.8%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-[12px]  md:text-base lg:text-xl transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline border border-gray-700 "
                      placeholder="Enter Group Name"
                      name="Group"
                    ></Field>
                    <ErrorMessage
                      className="text-red-600 text-[10px] text-xs sm:text-sm"
                      component={Error}
                      name="Group"
                    ></ErrorMessage>
                  </div>

                  {/*group image upload*/}
                  <div
                    className={` ${values.deckImage?"max-w-[5%] ":"max-w-[30%]"} min-w-[10%]   px-[0.2%] py-[0.4%] ml-[0.4%]  overflow-hidden flex flex-col items-center justify-center`}
                  >
                    {/* dummylabel */}
                    <label
                      className={`${
                        values.deckImage ? "hidden " : ""
                      } pl-1 py-1  text-transparent w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold`}
                    >
                      <span className="text-red-600  text-transparent">*</span>
                    </label>

                    <button
                      className="  border border-gray-700  group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex space-x-1 bg-white px-2 py-1 x w-[99.8%]   transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-600 hover:text-white  items-center justify-center "
                      disabled={isSubmitting}
                      type="button"
                      onClick={() => {
                        deckRef.current.click();
                        if (values.deckImage) {
                          setFieldValue(`deckImage`, null);
                        }
                      }}
                    >
                      {values.deckImage ? (
                        <PreviewImage
                          className=" w-[100%] rounded-md border border-gray-700"
                          file={values.deckImage}
                        />
                      ) : (
                        <span className="flex ">
                          <span className="pt-[3px] text-xs md:text-base lg:text-xl mx-[1%] text-purple-700 font-extrabold group-hover:text-inherit">
                            <FiUpload></FiUpload>
                          </span>
                          <span className="text-[12px] md:text-base lg:text-lg font-bold text-purple-700 group-hover:text-inherit">
                            Upload
                          </span>
                        </span>
                      )}
                    </button>

                    <ErrorMessage
                      className="groupError hidden  text-red-600 text-xs sm:text-[14px] md:text-[16xpx]  transtion-all"
                      name="deckImage"
                      component={Error}
                    ></ErrorMessage>
                  </div>
                </div>

                {/* group description and label  */}
                <div className="groupName max-w-[95%] flex flex-col px-[0.2%] py-[0.2%] mx-1  my-1 sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] transition-all">
                  {/* description label */}
                  <label className="pl-1 py-1  w-[99.5%] text-xs md:text-base lg:text-xl transition-all  font-bold ml-1">
                    Group Description
                  </label>

                  {/*  group description input */}
                  <Field
                    as="textarea"
                    name="Description"
                    className="  border border-gray-700 bg-white  my-1 px-1 py-1 x w-[99.8%]   text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:text-base lg:text-xl transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-100   "
                    placeholder="Enter Group Description"
                  ></Field>
                  <ErrorMessage
                    className="text-red-600 text-[10px] text-xs sm:text-sm"
                    component={Error}
                    name="Description"
                  ></ErrorMessage>
                  {/* image upload hidden input */}
                  <input
                    className="mx-1 my-1 bg-white px-2 py-1 hidden"
                    type="file"
                    accept=".png,.jpeg,.jpg"
                    ref={deckRef}
                    onChange={(event) => {
                      if (event.target.files[0]) {
                        if (event.target.files[0].size > 1097152) {
                          setFieldError(
                            "deckImage",
                            "Group Image size should be less than 1 mb"
                          );
                          setFieldTouched("deckImage");
                          alert("Deck-Image size is greater than 1 mb");
                        }
                        if (event.target.files[0].size < 1097152) {
                          const reader = new FileReader();

                          reader.readAsDataURL(event.target.files[0]);
                          reader.onload = () => {
                            console.log("inside deck onload");
                            setFieldValue(`deckImage`, reader.result);
                          };
                        }
                      }
                    }}
                  ></input>
                </div>
              </section>

              {/* second formx */}
              <FieldArray name="Terms">
                {({ push, remove }) => (
                  <section className=" mt-[2%] second-formb bg-[white] border border-gray-300  my-[0.5%] py-1 px-1 mx-[2%]    flex flex-col sm:mx-[7%] md:mx-[8%] lg:mx-[8%] transition-all">
                    {/* single term input */}

                    {values.Terms.map((item, index) => (
                      <div
                        className="flex space-x-1 flex-wrap px-1 py-1 mx-1 my-1 grow space-y-1 rounded-lg  items-start"
                        key={index}
                      >
                        {/* index */}
                        <h1 className=" w-4 h-4 shrink-0 mt-[2%] bg-purple-400 px-1 py-1 rounded-full flex items-center justify-center    text-[10px] sm:text-[14px] md:text-[16xpx] lg:text-[20px]  font-bold transtion-all sm:w-6 sm:h-6 md:w-8 md:h-8  lg:w-10 lg:h-10">
                          {index + 1}
                        </h1>

                        {/*term name input*/}
                        <div className="   flex flex-col px-[0.5%]  min-w-[70%]  py-[0.5%] shrink-0 grow-[2]  sm:min-w-[20%] pr-[40%]   sm:pr-0   overflow-hidden">
                          <label className="pl-1 py-1  w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                            Term Name{" "}
                            <span className="text-red-600 font-normal ">*</span>
                          </label>

                          <Field name={`Terms[${index}].Term`}>
                            {({ field, form, meta }) => (
                              <input
                                {...field}
                                className="border border-gray-700  px-1 py-1 w-[99.5%] bg-white text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  md:text-base lg:text-xl transition-all  hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline-none"
                                ref={(element) =>
                                  (focusRefs.current[index] = element)
                                }
                                placeholder="Enter Term Name"
                                type="text"
                              ></input>
                            )}
                          </Field>
                          <ErrorMessage
                            name={`Terms[${index}].Term`}
                            component={Error}
                            className="text-red-600 text-[10px] text-xs sm:text-sm"
                          ></ErrorMessage>
                        </div>

                        {/* term description */}
                        <div className="  flex flex-col   min-w-[94%]  pl-[3%] py-[0.5%]  grow-[3]   sm:min-w-[50%] sm:pl-[0.2%] ">
                          <label className="pl-1 py-1  w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                            Term  Definition{" "}
                            <span className="text-red-600 font-normal ">*</span>
                          </label>
                          <Field
                            as="textarea"
                            name={`Terms[${index}].definition`}
                            className=" border border-gray-700 py-1 bg-white  w-[99.5%] px-1 text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:text-base lg:text-xl transition-all overflow-hidden hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline-none"
                            placeholder="Enter Term Description"
                          ></Field>
                          <ErrorMessage
                            name={`Terms[${index}].definition`}
                            component={Error}
                            className="text-red-600 text-[10px] text-xs sm:text-sm"
                          ></ErrorMessage>

                          {/* termImage input hidden  */}
                          <input
                            hidden
                            ref={(element) =>
                              (fileRefs.current[index] = element)
                            }
                            type="file"
                            accept=".png,jpg,jpeg"
                            onChange={(event) => {
                              if (event.target.files[0]) {
                                if (event.target.files[0].size > 1097152) {
                                  alert("Term Image size is greater than 1 mb");
                                }
                                if (event.target.files[0].size < 1097152) {
                                  const reader = new FileReader();

                                  reader.readAsDataURL(event.target.files[0]);
                                  reader.onload = () => {
                                    console.log("inside load");
                                    console.log(reader.result);
                                    setFieldValue(
                                      `Terms[${index}].image`,
                                      reader.result
                                    );
                                  };
                                }
                              }
                            }}
                          ></input>
                        </div>

                        {/* term image upload */}
                        <div
                          className={`  px-[2%] py-[0.5%]  grow-[2] ${
                            values.Terms[index].image ? " max-w-[10%] " : " "
                          } max-w-[30%]    sm:min-w-[15%] flex  items-center `}
                        >
                          <button
                            className=" border border-gray-700 group w-[99.5%] px-[0.1%] py-[2%] bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-[12px]  md:text-base lg:text-xl transition-all font-bold flex   hover:border-purple-700 hover:bg-purple-600 hover:text-white  justify-center"
                            disabled={isSubmitting}
                            type="button"
                            onClick={() => {
                              fileRefs.current[index].click();
                            }}
                          >
                            {values.Terms[index].image ? (
                              <PreviewImage
                                className=" rounded-md "
                                file={values.Terms[index].image}
                              />
                            ) : (
                              <span className="flex ">
                                <span className="pt-[3px] text-xs md:text-base lg:text-xl  mx-[3%] text-purple-700 group-hover:text-inherit">
                                  <FiUpload></FiUpload>
                                </span>
                                <span className="text-[12px]  md:text-base lg:text-lg font-bold text-purple-700 group-hover:text-inherit ">
                                  Upload
                                </span>
                              </span>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* addmore button */}
                    <div>
                      <button
                        className=" ml-[2%] mx-1 my-1  px-[0.4%] py-[0.4%] text-purple-800 font-bold text-[12px]  md:text-base lg:text-xl transition-all duration-250 hover:scale-110   hover:text-purple-600 "
                        type="button"
                        onClick={() => {
                          push({ Term: "", definition: "", image: null });
                        }}
                      >
                        Add More +{" "}
                      </button>
                    </div>
                  </section>
                )}
              </FieldArray>

              <div>
                <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
                <button
                  type="submit"
                  className="py-2 px-6 rounded-sm bg-purple-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ml-[40%]  text-base  sm:text-xl  md:text-2xl  transition-all text-white hover:bg-purple-700 hover:text-white  flex  "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateFlashCard;
