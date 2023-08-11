import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { useState, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
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

  const [image, setImage] = React.useState(false);

  const url = {
    image: `data:image/png;base64,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`,
  };

  const imageHandler = () => {
    setImage(true);
  };

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
                <div className="flex items-start  mx-1 py-1 transition-all h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] overflow-hidden">
                  {/* GroupName label and input */}
                  <div className="groupName  min-w-[70%] flex flex-col px-[0.2%] py-[0.2%] mx-[0.2%]  my-[0.1%] sm:min-w-[60%] md:min-w-[50%] transition-all">
                    {/* grouplabel */}
                    <label className="pl-1 py-1  w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                      Group Name{" "}
                      <span className="text-red-600 font-normal ">*</span>
                    </label>

                    {/* groupInput */}
                    <Field
                      className=" hover:scale-[101%] bg-white px-1 py-1 x w-[99.8%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-[12px]  md:text-base lg:text-xl transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline border border-gray-700 "
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
                    className={`${
                      values.deckImage
                        ? "max-w-[16%] sm:max-w-[12%] lg:max-w-[10%]"
                        : "max-w-[30%]"
                    }   min-w-[10%]   px-[0.2%]  ml-[0.4%]  flex flex-col items-center justify-center self-center overflow-hidden`}
                  >
                    <label
                      className={` ${
                        values.deckImage ? " hidden " : ""
                      } text-transparent pl-1 py-1  text-xs md:text-base lg:text-xl transition-all  font-bold`}
                    >
                      <span className=" text-transparentfont-normal ">*</span>
                    </label>

                    <button
                      className={` ${
                        values.deckImage
                          ? "px-0  hover:bg-transparent   py-0 "
                          : " w-[99.8%]"
                      } border border-gray-700  group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex space-x-1 bg-white px-2 py-1 x   transition-all outline-none hover:border-2 hover:border-purple-700  hover:scale-110   items-center self-stretch `}
                      disabled={isSubmitting}
                      type="button"
                      onClick={() => {
                        deckRef.current.click();
                        if (values.deckImage) {
                          setFieldValue(`deckImage`, null);
                        }
                      }}
                    >
                      {values.deckImage && (
                        <PreviewImage
                          className="  bg-red-900 rounded-md border  object:cover object:center"
                          file={values.deckImage}
                        />
                      )}

                      <span className="flex ">
                        <span className="pt-[3px] text-xs md:text-base lg:text-xl mx-[1%] text-purple-700 font-extrabold group-hover:text-inherit">
                          <FiUpload></FiUpload>
                        </span>
                        <span className="text-[12px] md:text-base lg:text-lg font-bold text-purple-700 group-hover:text-inherit">
                          Upload
                        </span>
                      </span>
                    </button>
                    {/* <h1
                      className="text-red-600 text-[10px] text-xs sm:text-sm"
                     
                    ></h1> */}
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
                    className="  hover:scale-[101%] border border-gray-700 bg-white  my-1 px-1 py-1 x w-[99.8%]   text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:text-base lg:text-xl transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-100   "
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
                        className="flex   flex-wrap  py-1 mx-1 my-1 grow space-y-1 rounded-lg  items-start bg-purple-100"
                        key={index}
                      >
                        {/* index */}
                        <h1 className=" w-4 h-4 shrink-0 mt-[2%] bg-purple-500 px-1 py-1 rounded-full flex items-center justify-center    text-[10px] sm:text-[14px] md:text-[16xpx] lg:text-[20px]  font-bold transtion-all sm:w-6 sm:h-6 md:w-8 md:h-8  lg:w-10 lg:h-10">
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
                                className=" focus:bg-purple-100  border border-gray-700  px-1 py-1 w-[99.5%] bg-white text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  md:text-base lg:text-xl transition-all  hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline-none"
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
                        <div className="  flex flex-col   min-w-[84%]  pl-[3%] py-[0.5%]  grow-[3]   sm:min-w-[50%]   sm:pl-[1%]  ">
                          <label className="pl-1 py-1  w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                            Term Definition{" "}
                            <span className="text-red-600 font-normal ">*</span>
                          </label>
                          <Field
                            as="textarea"
                            name={`Terms[${index}].definition`}
                            className=" border border-gray-700 py-1 bg-white   w-[99.5%] px-1 text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:text-base lg:text-xl transition-all overflow-hidden hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline-none"
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
                          className={` hidden   px-[1%] py-[0.5%]   grow-[2] ${
                            values.Terms[index].image
                              ? "min-w-[20%] max-w-[22%] sm:max-w-[12%] lg:max-w-[10%]  flex flex-row "
                              : "max-w-[25%] flex flex-col"
                          }      sm:max-w-[12%] lg:max-w-[15%]   px-[0.2%]  ml-[0%]     items-center self-center  bg-red-400
                         `}
                        >
                          {/* // add and edit button */}

                          {/* */}
                          <div>
                            {/* edit */}
                            {values.Terms[index].definition &&
                              values.Terms[index].Term &&
                              values.Terms[index].image && (
                                <button
                                  className=" "
                                  type="button"
                                  disabled={isSubmitting}
                                  onClick={() => {
                                    focusRefs.current[index].focus();
                                  }}
                                >
                                  <span className="  text-lg md:text-2xl lg:text-4xl  mx-[1%] text-purple-700 font-extrabold">
                                    <BiEdit color="#0033ff"></BiEdit>
                                  </span>
                                </button>
                              )}

                            {/* delete */}
                            {values.Terms.length > 1 && (
                              <button
                                className={`${
                                  values.Terms[index].definition &&
                                  values.Terms[index].Term &&
                                  values.Terms[index].image
                                    ? "visible"
                                    : "hidden"
                                }`}
                                type="button"
                                disabled={isSubmitting}
                                onClick={() => {
                                  remove(index);
                                  // refs.current.splice(index, index + 1);
                                }}
                              >
                                <span className=" text-sm md:text-lg lg:text-4xl  text-purple-00 font-extrabold bg-purple-400">
                                  <MdDelete></MdDelete>
                                </span>
                              </button>
                            )}
                          </div>
                          <label
                            className={` ${
                              values.Terms[index].image ||
                              values.Terms.length > 0
                                ? " hidden "
                                : ``
                            }  text-transparent pl-1 py-1  text-xs md:text-base lg:text-xl transition-all  font-bold`}
                          >
                            <span className=" text-transparent font-normal ">
                              *
                            </span>
                          </label>

                          <button
                            className={` ${
                              values.Terms[index].image
                                ? "px-0  hover:bg-transparent hover:border-white   py-0  min-w-[80%]"
                                : " w-[99.8%]"
                            }   border border-gray-900  group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex space-x-1 bg-white px-2 py-1 x   transition-all outline-none hover:border-2 hover:border-purple-700  hover:text-white  items-center  justify-center self-stretch `}
                            disabled={isSubmitting}
                            type="button"
                            onClick={() => {
                              fileRefs.current[index].click();
                              if (values.Terms[index].image) {
                                setFieldValue(`Terms[${index}].image`, null);
                              }
                            }}
                          >
                            {values.Terms[index].image ? (
                              <PreviewImage
                                className=" bg-red-900 rounded-md border w-full   object:center  "
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

                        {/* dummy div for upload wrapper */}

                        <div className=" ml-6 sm:ml-8 lg:ml-1  sm:min-w-[30%] sm:max-w-[35%]  md:min-w-[25%]  md:max-w-[30%] lg:min-w-[15%] lg:max-w-[25%] max-w-[60%] transition-all flex items-center self-center">
                          <div className="flex flex-col items-center justify-around  self-stretch">
                            {/* edit button */}
                            <button
                              className="   my-1 mx-1 sm:text-xl md:text-xl lg:text-2xl xl:text-3xl  transition-all text-xl text-purple-700   hover:scale-125   self-start"
                              type="button"
                              onClick={() => {
                                focusRefs.current[index].focus();
                              }}
                            >
                              <BiEdit></BiEdit>
                            </button>

                            {/* delete button */}
                            {values.Terms.length > 1 && (
                              <button
                                className=" my-1 mx-1 sm:text-xl md:text-xl lg:text-2xl xl:text-3xl transition-all text-xl text-purple-700  self-end  hover:scale-125 "
                                type="button"
                                onClick={() => {
                                  remove(index);
                                  // refs.current.splice(index, index + 1);
                                }}
                              >
                                <MdDelete></MdDelete>
                              </button>
                            )}
                          </div>

                          <button
                            className="px-[2%] py-[2%] mx-1 my-1 bg-white   flex justify-center items-center self-center border border-gray-900   hover:scale-[108%] transition-all "
                            onClick={() => {
                              fileRefs.current[index].click();
                              if (values.Terms[index].image) {
                                setFieldValue(`Terms[${index}].image`, null);
                              }
                            }}
                            type="button"
                          >
                            {values.Terms[index].image && (
                              // <PreviewImage
                              //   file={url.image}
                              //   className="  w-full object-cover object-center h-14 sm:h-16 md:h-20 lg:h-24 transition-all"
                              // ></PreviewImage>

                              <PreviewImage
                                className="  w-full object-cover object-center h-14 sm:h-16 md:h-20 lg:h-24 transition-all "
                                file={values.Terms[index].image}
                              />
                            )}
                            {!values.Terms[index].image && (
                              <span className=" flex  flex-row items-center ">
                                <span className=" px-1  sm:text-sm md:text-md lg:text-lg xl:text-xl text-sm  text-purple-700 ">
                                  <FiUpload></FiUpload>
                                </span>
                                <span className=" pr-1 sm:text-sm md:text-md lg:text-lg xl:text-xl text-sm  text-purple-700 font-semibold ">
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
